# KBÜ Mühendislik ve Doğa Bilimleri Fakültesi — Kampüs Robotu Arayüzü

Karabük Üniversitesi'nde geliştirilen bir yönlendirme robotu için tasarlanan dokunmatik ekran
arayüzü. Bu depo hem arayüzü (frontend) hem de yapay zeka destekli soru-cevap servisini
(backend) bir arada tutuyor.

## Klasör yapısı

```
kbu-robot-projesi/
  robot-interface/          → Arayüz (React + TypeScript + Vite)
  robot-interface-backend/  → Backend (Node.js + Express, Gemini API)
```

## Özellikler

- **Bekleme ekranı** — saat, tarih, hava durumu, günün menüsü, duyurular
- **Ana Menü**
- **Fakülte Hakkında** — bölüm bölüm gezinilebilen personel listesi (13 gerçek bölüm), sınav programı
- **Soru Sor** — sesli/yazılı soru sorulabilen, arayüzdeki gerçek verilerle konuşan yapay zeka asistanı (Türkçe/İngilizce/Arapça)
- **Kampüs Haritası** ("Neredeyim?")
- **KBÜ Hakkında** — tanıtım videosu, fotoğraf galerisi, üniversitenin tüm fakülteleri
- **Genel Bilgiler** — yemek listesi ve akademik takvim (üniversitenin resmi sayfalarından canlı)
- **Operatör Paneli** — PIN korumalı, gizli yönetici erişimi

## Kurulum

### 1. Arayüz (`robot-interface`)

```
cd robot-interface
npm install
```

`.env.example` dosyasını `.env` olarak kopyala, içeriği:

```
VITE_API_BASE_URL=http://localhost:3001
```

Çalıştır:

```
npm run dev
```

### 2. Backend (`robot-interface-backend`)

```
cd robot-interface-backend
npm install
```

`.env.example` dosyasını `.env` olarak kopyala, içine **kendi** Gemini API anahtarını yaz:

```
GEMINI_API_KEY=kendi-api-anahtarin
PORT=3001
OPERATOR_PIN=1234
```

Gemini API anahtarını buradan ücretsiz alabilirsin: https://aistudio.google.com/apikey

Çalıştır:

```
npm start
```

### 3. İkisini birlikte çalıştırma

**İki ayrı terminal** açık olmalı — biri arayüz (`npm run dev`), biri backend (`npm start`).
İkisi de aynı anda çalışmıyorsa sadece "Soru Sor" ekranı hata verir; arayüzün geri kalanı
backend olmadan da sorunsuz çalışır.

## Testler

Arayüzde birkaç otomatik test var:

```
cd robot-interface
npm test
```

## Aylık yemek listesi güncelleme (opsiyonel yardımcı script)

```
cd robot-interface-backend
npm run menu
```

Bu, üniversitenin güncel yemek listesi PDF'ini indirip okunabilir metne çevirir
(`menu-raw.txt`) — oradan `robot-interface/src/data.ts` içindeki `TODAYS_MENU_BY_DATE`
objesine elle kopyala-yapıştır yapman gerekiyor, tam otomatik değil.

## Notlar

- Yemek listesi ve akademik takvim, üniversitenin resmi sayfalarından canlı olarak gösteriliyor.
- Personel verisi (bölümler, akademisyenler) üniversitenin kendi web sitesinden alınmış gerçek veridir; iletişim bilgisi (telefon/e-posta) bazı kişilerde eksik olabilir.
- Sınav Programı sekmesindeki tablo şu an demo veri — üniversite her dönem yeni bir duyuru linkiyle yayınladığı için sabit bir kaynağa bağlanamıyor.
- Operatör paneli PIN doğrulaması backend'de yapılıyor, kodun içinde şifre saklanmıyor.
