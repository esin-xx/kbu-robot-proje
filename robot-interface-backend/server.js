import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

// Robotun "kişiliği" ve bildiği temel bilgiler — resmi, kurumsal üslup kararımıza uygun.
// Gerçek bölüm/hoca listesi burada sabit yazılı değil — her istekte frontend'den (data.js'teki
// PROFESSORS/DEPARTMENTS'tan üretilen özet metin) geliyor ve aşağıya ekleniyor. Böylece tek
// doğru kaynak (data.js) frontend'i de AI'yı da besliyor, ikisini ayrı ayrı güncel tutmaya gerek kalmıyor.
const SYSTEM_PROMPT = `Sen Karabük Üniversitesi Mühendislik ve Doğa Bilimleri Fakültesi'nde görev yapan bir yönlendirme robotusun.
Resmi ve net bir üslup kullan, cevapların kısa ve anlaşılır olsun.
Sadece kampüs, fakülte ve üniversite hizmetleriyle ilgili sorulara yardımcı ol; alakasız bir soru gelirse
kibarca bu konuda yardımcı olamayacağını belirt.

Arayüzde kütüphane, kantin, amfi ve bölüm ofislerinin işaretli olduğu bir kampüs haritası bulunuyor.
Yemek listesi ve akademik takvim, üniversitenin resmi sayfalarından güncel olarak gösteriliyor.

Bölüm ve akademisyen sorularında SADECE aşağıda sana verilen listeye bak — listede olmayan bir
bölümü veya kişiyi "var" deme, listede yoksa nazikçe olmadığını söyle. Bu liste, arayüzün kendi
gerçek verisi, senin genel bilgin değil; öncelik her zaman bu listede.

Elinde olmayan, anlık değişebilecek bir bilgiyi (örn. bir hocanın şu an nerede olduğu) uydurma —
bunun yerine kullanıcıyı arayüzdeki ilgili ekrana (örn. "Fakülte Hakkında" ekranı) yönlendir.`;

// Gemini'nin ücretsiz katmanında kullanılabilen, güncel ve hafif bir model
// (gemini-2.5-flash Google tarafından kademeli olarak kapatılıyor, yeni hesaplarda artık açılmıyor)
const GEMINI_MODEL = 'gemini-3.5-flash-lite';

// Operatör paneli PIN doğrulaması — PIN artık burada, sunucu tarafında tutuluyor,
// kodun frontend tarafında (tarayıcıda çalışan kısımda) hiç görünmüyor.
app.post('/api/operator-auth', (req, res) => {
  const { pin } = req.body;

  if (pin === process.env.OPERATOR_PIN) {
    res.json({ valid: true });
  } else {
    res.status(401).json({ valid: false });
  }
});

// Arayüzün desteklediği 3 dil — arayüzde hangi dil seçiliyse (TR/EN/AR), o dilin tam adını
// modele söylüyoruz ki cevabı hangi dilde vereceğini tahmine bırakmayalım.
const LANG_NAMES = { tr: 'Türkçe', en: 'İngilizce (English)', ar: 'Arapça (العربية)' };

app.post('/api/ask', async (req, res) => {
  const { question, context, lang } = req.body;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Soru (question) alanı gerekli.' });
  }

  // Frontend'den gelen gerçek bölüm/hoca listesini ve o anki arayüz dilini sistem
  // talimatının sonuna ekliyoruz — context/lang yoksa (eski bir istekse) sadece
  // temel SYSTEM_PROMPT ile devam eder.
  const langInstruction = LANG_NAMES[lang]
    ? `\n\nCevabını ${LANG_NAMES[lang]} dilinde ver — kullanıcının arayüzü şu an bu dilde ayarlı.`
    : '';
  const contextBlock = context ? `\n\nGüncel bölüm ve akademisyen listesi:\n${context}` : '';
  const fullSystemPrompt = `${SYSTEM_PROMPT}${langInstruction}${contextBlock}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: fullSystemPrompt }] },
          contents: [{ role: 'user', parts: [{ text: question }] }],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API hatası:', data);
      return res.status(500).json({ error: 'Yapay zeka servisinden cevap alınamadı.' });
    }

    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'Cevap alınamadı.';
    res.json({ answer });
  } catch (err) {
    console.error('Sunucu hatası:', err);
    res.status(500).json({ error: 'Sunucu hatası.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend çalışıyor: http://localhost:${PORT}`);
});