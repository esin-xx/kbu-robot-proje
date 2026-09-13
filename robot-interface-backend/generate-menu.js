// Aylık yemek listesi PDF'ini indirip okunabilir metne çevirir.
// Ayda bir kez çalıştırıp çıkan "menu-raw.txt" dosyasından, data.js'teki
// TODAYS_MENU_BY_DATE objesine kopyala-yapıştır yaparak güncelleyebilirsin.
//
// Kurulum (bu script'i backend klasöründe çalıştıracağız):
//   npm install pdf-parse
// Çalıştırma:
//   node generate-menu.js

import { PDFParse } from 'pdf-parse';
import fs from 'fs';

// Bu adres sabit — üniversite her ay içeriği bunun üzerine güncelliyor.
const FOOD_MENU_URL = 'https://sks.karabuk.edu.tr/yuklenen/dosyalar/126111201782731.pdf';

const MONTHS = {
  OCAK: '01', ŞUBAT: '02', MART: '03', NİSAN: '04', MAYIS: '05', HAZİRAN: '06',
  TEMMUZ: '07', AĞUSTOS: '08', EYLÜL: '09', EKİM: '10', KASIM: '11', ARALIK: '12',
};

async function main() {
  console.log('PDF indiriliyor...');
  const res = await fetch(FOOD_MENU_URL);
  if (!res.ok) {
    console.error(`PDF indirilemedi (HTTP ${res.status}). URL hâlâ doğru mu kontrol et.`);
    return;
  }
  const buffer = Buffer.from(await res.arrayBuffer());

  const parser = new PDFParse({ data: buffer });

  try {
    // 1) Düz metin — asıl güvenilir kaynağımız bu.
    const textResult = await parser.getText();
    fs.writeFileSync('menu-raw.txt', textResult.text);
    console.log('✓ Ham metin menu-raw.txt dosyasına kaydedildi.');

    // 2) Tablo tespiti — kütüphane bunu da destekliyor, tabloyu satır/sütun
    // olarak yakalayabilirse çok daha düzenli bir çıktı verir. Deneysel —
    // çalışmazsa (boş/garip çıkarsa) menu-raw.txt'ye güven.
    try {
      const tableResult = await parser.getTable();
      fs.writeFileSync('menu-table.json', JSON.stringify(tableResult, null, 2));
      console.log('✓ Tablo verisi (varsa) menu-table.json dosyasına kaydedildi — buna da bir bak.');
    } catch (tableErr) {
      console.log('Not: Tablo tespiti bu PDF için çalışmadı, sorun değil — menu-raw.txt yeterli.');
    }

    const titleMatch = textResult.text.match(/AYLIK YEMEK LİSTESİ (\S+) (\d{4})/i);
    if (titleMatch) {
      const monthName = titleMatch[1].toUpperCase();
      const year = titleMatch[2];
      const monthNum = MONTHS[monthName];
      if (monthNum) {
        console.log(`✓ Tespit edilen dönem: ${monthName} ${year} (data.js'te '${year}-${monthNum}-GG' formatında kullanacaksın)`);
      }
    } else {
      console.log('Not: Ay/yıl başlığı otomatik tespit edilemedi, menu-raw.txt içine bakıp elle kontrol et.');
    }

    console.log('\nŞimdi menu-raw.txt (ve varsa menu-table.json) dosyasını aç, günleri ve');
    console.log('yemekleri oradan data.js\'teki TODAYS_MENU_BY_DATE objesine kopyala-yapıştırla ekle.');
  } finally {
    await parser.destroy();
  }
}

main().catch((err) => {
  console.error('Hata:', err.message);
});
