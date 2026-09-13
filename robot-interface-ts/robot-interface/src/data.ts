import type { MapPoint, Professor, StaffMember, Faculty, ExamRow, CalendarOption, LangOption, GalleryImageItem } from './types';

// Bu dosya, arayüzün kullandığı tüm sabit veriyi ve örnek (mock) veriyi tutar.
// Gerçek veri kaynakları (öğrenci işleri sistemi, ROS telemetrisi vs.) bağlandığında
// bu dosyadaki dizileri değiştirmen yeterli olacak — ekran bileşenlerine dokunmana gerek kalmaz.

export const DUYURULAR: string[] = [
  "Mühendislik Fakültesi staj başvuruları 15 Ağustos'ta sona eriyor.",
  'Kütüphane yaz döneminde 09:00–18:00 arası açık.',
  'Bahar dönemi ders kayıt yenileme işlemleri başladı.',
];

// Gerçek Nav2 haritası bağlanana kadar örnek nokta koordinatları (SVG viewBox 520x300 üzerinde)
export const MAP_POINTS: MapPoint[] = [
  { id: 'lib', label: 'Kütüphane', x: 90, y: 60 },
  { id: 'cafe', label: 'Kantin', x: 420, y: 60 },
  { id: 'amfi', label: 'Amfi', x: 90, y: 240 },
  { id: 'dept', label: 'Ofis', x: 420, y: 240 },
  { id: 'robot', label: 'Buradasınız', x: 260, y: 150, isRobot: true },
];

// Kaynak: muh.karabuk.edu.tr (Mühendislik ve Doğa Bilimleri Fakültesi, her bölümün kendi
// Akademik Personel sayfası). İsim ve unvan gerçek — telefon/e-posta bu sayfalarda yayınlanmadığı
// için yok (her akademisyenin kendi profil sayfasına gitmek gerekir, çok sayıda kişi için şimdilik yapmadık).
// "department" alanı bölüm seçildiğinde filtrelemek için; "group" alanı (varsa) o bölümün kendi
// içindeki alt başlık (örn. "Mekanik Sistemler", "Enerji" gibi) — hepsinde yok.
// id'ler artık bölüm bazlı string (örn. "makine-3") — bir bölümü düzeltirken diğerlerinin
// numaralarını kaydırmak gerekmiyor.
// NOT: Mekatronik, Bilgisayar, Elektrik-Elektronik, Makine, Endüstri, İnşaat, Çevre, Kimya
// bölümleri sayfaya doğrudan bakılarak doğrulandı (tam ve güncel). Sadece Yazılım Mühendisliği
// hâlâ arama motoru özetinden — o bölümün sayfası bir türlü doğrudan açılamadı, eksik olabilir.
export const PROFESSORS: Professor[] = [
  // Mekatronik Mühendisliği — doğrudan sayfadan doğrulandı (20 kişi, 3 alt grup)
  { id: 'mekatronik-1', name: 'Prof. Dr. Mustafa YAŞAR', department: 'Mekatronik Mühendisliği', group: 'Mekanik Sistemler', phone: '0 (370) 418 7375' },
  { id: 'mekatronik-2', name: 'Prof. Dr. İbrahim ÇAYIROĞLU', department: 'Mekatronik Mühendisliği', group: 'Mekanik Sistemler', phone: '0 (370) 418 7440', email: 'icayiroglu@karabuk.edu.tr' },
  { id: 'mekatronik-3', name: 'Doç. Dr. Hatice EVLEN', department: 'Mekatronik Mühendisliği', group: 'Mekanik Sistemler' },
  { id: 'mekatronik-4', name: 'Doç. Dr. Ramazan ÖZMEN', department: 'Mekatronik Mühendisliği', group: 'Mekanik Sistemler', phone: '0 (370) 418 7454', email: 'ramazanozmen@karabuk.edu.tr' },
  { id: 'mekatronik-5', name: 'Dr. Öğr. Üyesi Metin ZEYVELİ', department: 'Mekatronik Mühendisliği', group: 'Mekanik Sistemler', phone: '0 (370) 418 7034' },
  { id: 'mekatronik-6', name: 'Dr. Öğr. Üyesi Yusuf AYAN', department: 'Mekatronik Mühendisliği', group: 'Mekanik Sistemler', email: 'yusufayan@karabuk.edu.tr' },
  { id: 'mekatronik-7', name: 'Dr. Öğr. Üyesi Talha SUNAR', department: 'Mekatronik Mühendisliği', group: 'Mekanik Sistemler', phone: '0 (370) 418 7052', email: 'talhasunar@karabuk.edu.tr' },
  { id: 'mekatronik-8', name: 'Dr. Öğr. Üyesi Ali KAFALI', department: 'Mekatronik Mühendisliği', group: 'Mekanik Sistemler', phone: '0 (370) 418 7430', email: 'alikafali@karabuk.edu.tr' },
  { id: 'mekatronik-9', name: 'Araştırma Görevlisi Ömer KARTALTEPE', department: 'Mekatronik Mühendisliği', group: 'Mekanik Sistemler', phone: '0 (370) 418 9603', email: 'omerkartaltepe@karabuk.edu.tr' },
  { id: 'mekatronik-10', name: 'Prof. Dr. Ahmet DEMİR', department: 'Mekatronik Mühendisliği', group: 'Elektronik Sistemler', phone: '0 (370) 418 7439', email: 'ademir@karabuk.edu.tr' },
  { id: 'mekatronik-11', name: 'Dr. Öğr. Üyesi Aytül BOZKURT', department: 'Mekatronik Mühendisliği', group: 'Elektronik Sistemler', email: 'aytulbozkurt@karabuk.edu.tr' },
  { id: 'mekatronik-12', name: 'Dr. Öğr. Üyesi Kenan IŞIK', department: 'Mekatronik Mühendisliği', group: 'Elektronik Sistemler', phone: '0 (370) 418 7434', email: 'kenanisik@karabuk.edu.tr' },
  { id: 'mekatronik-13', name: 'Araştırma Görevlisi Semih PAK', department: 'Mekatronik Mühendisliği', group: 'Elektronik Sistemler', phone: '0 (370) 418 9611', email: 'semihpak@karabuk.edu.tr' },
  { id: 'mekatronik-14', name: 'Prof. Dr. Gökhan GÖKOĞLU', department: 'Mekatronik Mühendisliği', group: 'Kontrol ve Otomasyon', phone: '0 (370) 418 7455', email: 'ggokoglu@karabuk.edu.tr' },
  { id: 'mekatronik-15', name: 'Prof. Dr. İsmail Hakkı TAYYAR', department: 'Mekatronik Mühendisliği', group: 'Kontrol ve Otomasyon', phone: '0 (370) 418 7454', email: 'ismailtayyar@karabuk.edu.tr' },
  { id: 'mekatronik-16', name: 'Prof. Dr. Raif BAYIR', department: 'Mekatronik Mühendisliği', group: 'Kontrol ve Otomasyon', phone: '0 (370) 418 7444', email: 'rbayir@karabuk.edu.tr' },
  { id: 'mekatronik-17', name: 'Prof. Dr. Can Bülent FİDAN', department: 'Mekatronik Mühendisliği', group: 'Kontrol ve Otomasyon', phone: '0 (370) 418 7022', email: 'cbfidan@karabuk.edu.tr' },
  { id: 'mekatronik-18', name: 'Dr. Öğr. Üyesi Hilmi AYGÜN', department: 'Mekatronik Mühendisliği', group: 'Kontrol ve Otomasyon', phone: '0 (370) 418 7449', email: 'hilmiaygun@karabuk.edu.tr' },
  { id: 'mekatronik-19', name: 'Araştırma Görevlisi Mehmet İzzeddin GÜLER', department: 'Mekatronik Mühendisliği', group: 'Kontrol ve Otomasyon', phone: '0 (370) 418 9603', email: 'izzeddinguler@karabuk.edu.tr' },
  { id: 'mekatronik-20', name: 'Araştırma Görevlisi Mustafa Feyzi TEMEL', department: 'Mekatronik Mühendisliği', group: 'Kontrol ve Otomasyon', phone: '0 (370) 418 9605', email: 'feyzitemel@karabuk.edu.tr' },

  // Elektrik-Elektronik Mühendisliği — doğrudan sayfadan doğrulandı (30 kişi, 8 alt grup)
  { id: 'eem-1', name: 'Prof. Dr. Serhat Orkun TAN', department: 'Elektrik-Elektronik Mühendisliği', group: 'Devreler ve Sistemler', phone: '0 (370) 418 7194' },
  { id: 'eem-2', name: 'Doç. Dr. Ozan GÜLBUDAK', department: 'Elektrik-Elektronik Mühendisliği', group: 'Devreler ve Sistemler', phone: '0 (370) 418 7242', email: 'ozangulbudak@karabuk.edu.tr' },
  { id: 'eem-3', name: 'Dr. Öğr. Üyesi Abdullah Talha SÖZER', department: 'Elektrik-Elektronik Mühendisliği', group: 'Devreler ve Sistemler', phone: '0 (370) 418 7233', email: 'talhasozer@karabuk.edu.tr' },
  { id: 'eem-4', name: 'Araştırma Görevlisi İbrahim Ethem YILMAZ', department: 'Elektrik-Elektronik Mühendisliği', group: 'Devreler ve Sistemler', phone: '0 (370) 418 9619', email: 'ibrahimethemyilmaz@karabuk.edu.tr' },
  { id: 'eem-5', name: 'Prof. Dr. Selim ÖNCÜ', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektrik Makineleri', phone: '0 (370) 418 7270', email: 'soncu@karabuk.edu.tr' },
  { id: 'eem-6', name: 'Dr. Öğr. Üyesi Mehmet ŞİMŞİR', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektrik Makineleri', phone: '0 (370) 418 7229', email: 'msimsir@karabuk.edu.tr' },
  { id: 'eem-7', name: 'Dr. Öğr. Üyesi Ali AKAY', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektrik Makineleri', phone: '0 (370) 418 7207', email: 'aliakay@karabuk.edu.tr' },
  { id: 'eem-8', name: 'Araştırma Görevlisi Tahsin HAKTANIR', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektrik Makineleri', email: 'tahsinhaktanir@karabuk.edu.tr' },
  { id: 'eem-9', name: 'Prof. Dr. Zıyodulla YUSUPOV', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektrik Tesisleri', phone: '0 (370) 418 7238', email: 'ziyadullayusupov@karabuk.edu.tr' },
  { id: 'eem-10', name: 'Dr. Öğr. Üyesi Ersagun Kürşat YAYLACI', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektrik Tesisleri', phone: '0 (370) 418 7223', email: 'ekyaylaci@karabuk.edu.tr' },
  { id: 'eem-11', name: 'Dr. Öğr. Üyesi Selçuk Alparslan AVCI', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektrik Tesisleri', phone: '0 (370) 418 7244', email: 'selcukavci@karabuk.edu.tr' },
  { id: 'eem-12', name: 'Dr. Öğr. Üyesi Mustafa YILMAZ', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektrik Tesisleri', phone: '0 (370) 418 7232', email: 'mustafayilmaz@karabuk.edu.tr' },
  { id: 'eem-13', name: 'Araştırma Görevlisi Aslı KURT', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektrik Tesisleri' },
  { id: 'eem-14', name: 'Prof. Dr. Necmi Serkan TEZEL', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektromanyetik Dalgalar ve Mikrodalga Tekniği', phone: '0 (370) 418 4125', email: 'nstezel@karabuk.edu.tr' },
  { id: 'eem-15', name: 'Prof. Dr. Lokman KUZU', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektromanyetik Dalgalar ve Mikrodalga Tekniği', email: 'lokmankuzu@karabuk.edu.tr' },
  { id: 'eem-16', name: 'Prof. Dr. Ahmet Hayrettin YÜZER', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektromanyetik Dalgalar ve Mikrodalga Tekniği', phone: '0 (370) 418 7228', email: 'hayrettinyuzer@karabuk.edu.tr' },
  { id: 'eem-17', name: 'Doç. Dr. Mustafa GÖKDAĞ', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektronik', phone: '0 (370) 418 7255', email: 'mgokdag@karabuk.edu.tr' },
  { id: 'eem-18', name: 'Dr. Öğr. Üyesi Ediz ERDEM', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektronik', phone: '0 (370) 418 7217', email: 'edizerdem@karabuk.edu.tr' },
  { id: 'eem-19', name: 'Dr. Öğr. Üyesi Yunus Emre KARASU', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektronik', phone: '0 (370) 418 7258', email: 'yekarasu@karabuk.edu.tr' },
  { id: 'eem-20', name: 'Araştırma Görevlisi Cemil ZEYVELİ', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektronik', phone: '0 (370) 418 9619', email: 'cemilzeyveli@karabuk.edu.tr' },
  { id: 'eem-21', name: 'Araştırma Görevlisi Leyla ZORLU', department: 'Elektrik-Elektronik Mühendisliği', group: 'Elektronik', phone: '0 (370) 418 9612', email: 'leylazorlu@karabuk.edu.tr' },
  { id: 'eem-22', name: 'Prof. Dr. Mustafa Burak TÜRKÖZ', department: 'Elektrik-Elektronik Mühendisliği', group: 'Fotonik ve Optoelektronik', phone: '0 (370) 418 7230', email: 'mbturkoz@karabuk.edu.tr' },
  { id: 'eem-23', name: 'Doç. Dr. Satiye KORKMAZ', department: 'Elektrik-Elektronik Mühendisliği', group: 'Fotonik ve Optoelektronik', phone: '0 (370) 418 7213', email: 'satiyekorkmaz@karabuk.edu.tr' },
  { id: 'eem-24', name: 'Araştırma Görevlisi Ekrem DEMİR', department: 'Elektrik-Elektronik Mühendisliği', group: 'Fotonik ve Optoelektronik', phone: '0 (370) 418 9619', email: 'edemir@karabuk.edu.tr' },
  { id: 'eem-25', name: 'Doç. Dr. Hüseyin ALTINKAYA', department: 'Elektrik-Elektronik Mühendisliği', group: 'Kontrol ve Kumanda Sistemleri', phone: '0 (370) 418 7184', email: 'haltinkaya@karabuk.edu.tr' },
  { id: 'eem-26', name: 'Dr. Öğr. Üyesi Doğan URGUN', department: 'Elektrik-Elektronik Mühendisliği', group: 'Kontrol ve Kumanda Sistemleri', phone: '0 (370) 418 7258', email: 'durgun@karabuk.edu.tr' },
  { id: 'eem-27', name: 'Araştırma Görevlisi Ali ART', department: 'Elektrik-Elektronik Mühendisliği', group: 'Kontrol ve Kumanda Sistemleri', phone: '0 (370) 418 9619', email: 'aliart@karabuk.edu.tr' },
  { id: 'eem-28', name: 'Dr. Öğr. Üyesi Tarık ALMOHAMAD', department: 'Elektrik-Elektronik Mühendisliği', group: 'Telekomünikasyon', email: 'tarikalmohamad@karabuk.edu.tr' },
  { id: 'eem-29', name: 'Dr. Öğr. Üyesi Iman ELAWADY', department: 'Elektrik-Elektronik Mühendisliği', group: 'Telekomünikasyon', phone: '0 (370) 418 7233' },
  { id: 'eem-30', name: 'Araştırma Görevlisi Betül KARAOĞLAN', department: 'Elektrik-Elektronik Mühendisliği', group: 'Telekomünikasyon', phone: '0 (370) 418 9612', email: 'betulkaraoglan@karabuk.edu.tr' },

  // Makine Mühendisliği — doğrudan sayfadan doğrulandı (74 kişi, 6 alt grup)
  { id: 'makine-1', name: 'Prof. Dr. Hasan GÖKKAYA', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7395', email: 'hgokkaya@karabuk.edu.tr' },
  { id: 'makine-2', name: 'Prof. Dr. Bilge DEMİR', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7350', email: 'bdemir@karabuk.edu.tr' },
  { id: 'makine-3', name: 'Prof. Dr. Cevdet GÖLOĞLU', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', email: 'cevdetgologlu@karabuk.edu.tr' },
  { id: 'makine-4', name: 'Prof. Dr. Halil DEMİR', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7477', email: 'hdemir@karabuk.edu.tr' },
  { id: 'makine-5', name: 'Prof. Dr. Mustafa GÜNAY', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7400', email: 'mgunay@karabuk.edu.tr' },
  { id: 'makine-6', name: 'Prof. Dr. Okan ÜNAL', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7319', email: 'okanunal@karabuk.edu.tr' },
  { id: 'makine-7', name: 'Doç. Dr. Ahmet Fatih YILMAZ', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7372', email: 'ahmetfatihyilmaz@karabuk.edu.tr' },
  { id: 'makine-8', name: 'Doç. Dr. Engin ÇEVİK', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 4122', email: 'engincevik@karabuk.edu.tr' },
  { id: 'makine-9', name: 'Doç. Dr. Harun ÇUĞ', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7048', email: 'hcug@karabuk.edu.tr' },
  { id: 'makine-10', name: 'Doç. Dr. Musa YILDIRIM', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7349', email: 'musayildirim@karabuk.edu.tr' },
  { id: 'makine-11', name: 'Doç. Dr. Safa POLAT', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', email: 'safapolat@karabuk.edu.tr' },
  { id: 'makine-12', name: 'Dr. Öğr. Üyesi Abdullah UĞUR', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7317', email: 'augur@karabuk.edu.tr' },
  { id: 'makine-13', name: 'Dr. Öğr. Üyesi Ahmet Emrah ERDOĞDU', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7392', email: 'aemraherdogdu@karabuk.edu.tr' },
  { id: 'makine-14', name: 'Dr. Öğr. Üyesi Ahmet Serdar GÜLDİBİ', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', email: 'aserdarguldibi@karabuk.edu.tr' },
  { id: 'makine-15', name: 'Dr. Öğr. Üyesi Mehmet Tayyip ÖZDEMİR', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 9617', email: 'tayyipozdemir@karabuk.edu.tr' },
  { id: 'makine-16', name: 'Dr. Öğr. Üyesi Mehmet BAKIRCI', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7310', email: 'mehmetbakirci@karabuk.edu.tr' },
  { id: 'makine-17', name: 'Dr. Öğr. Üyesi Murat AYDIN', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7480', email: 'murataydin@karabuk.edu.tr' },
  { id: 'makine-18', name: 'Dr. Öğr. Üyesi Özden İŞBİLİR', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7316', email: 'ozdenisbilir@karabuk.edu.tr' },
  { id: 'makine-19', name: 'Dr. Öğr. Üyesi Samet NOHUTÇU', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', email: 'sametnohutcu@karabuk.edu.tr' },
  { id: 'makine-20', name: 'Dr. Öğr. Üyesi Sezer PIÇAK', department: 'Makine Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7025', email: 'sezerpicak@karabuk.edu.tr' },
  { id: 'makine-21', name: 'Prof. Dr. Cüneyt UYSAL', department: 'Makine Mühendisliği', group: 'Termodinamik', phone: '0 (370) 418 6243', email: 'cuneytuysal@karabuk.edu.tr' },
  { id: 'makine-22', name: 'Prof. Dr. Alper ERGÜN', department: 'Makine Mühendisliği', group: 'Termodinamik', phone: '0 (370) 418 7141', email: 'alperergun@karabuk.edu.tr' },
  { id: 'makine-23', name: 'Prof. Dr. Muhammet KAYFECİ', department: 'Makine Mühendisliği', group: 'Termodinamik', phone: '0 (370) 418 4172', email: 'mkayfeci@karabuk.edu.tr' },
  { id: 'makine-24', name: 'Dr. Öğr. Üyesi Özgür İNANÇ', department: 'Makine Mühendisliği', group: 'Termodinamik', email: 'ozgurinanc@karabuk.edu.tr' },
  { id: 'makine-25', name: 'Dr. Öğr. Üyesi Abdullah DAĞDEVİREN', department: 'Makine Mühendisliği', group: 'Termodinamik', email: 'abdullahdagdeviren@karabuk.edu.tr' },
  { id: 'makine-26', name: 'Araştırma Görevlisi Bahaddin TOPAK', department: 'Makine Mühendisliği', group: 'Termodinamik', phone: '0 (370) 418 9613', email: 'bahaddintopak@karabuk.edu.tr' },
  { id: 'makine-27', name: 'Prof. Dr. Engin GEDİK', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7369', email: 'egedik@karabuk.edu.tr' },
  { id: 'makine-28', name: 'Prof. Dr. Bahadır ACAR', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7201', email: 'bacar@karabuk.edu.tr' },
  { id: 'makine-29', name: 'Prof. Dr. Emrah DENİZ', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7396', email: 'edeniz@karabuk.edu.tr' },
  { id: 'makine-30', name: 'Prof. Dr. İlhan CEYLAN', department: 'Makine Mühendisliği', group: 'Enerji', email: 'ilhanceylan@karabuk.edu.tr' },
  { id: 'makine-31', name: 'Prof. Dr. Mehmet ÖZALP', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7393', email: 'mozalp@karabuk.edu.tr' },
  { id: 'makine-32', name: 'Prof. Dr. Sezayi YILMAZ', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7451', email: 'syilmaz@karabuk.edu.tr' },
  { id: 'makine-33', name: 'Prof. Dr. Ziyaddin RECEBLİ', department: 'Makine Mühendisliği', group: 'Enerji', email: 'zrecebli@karabuk.edu.tr' },
  { id: 'makine-34', name: 'Prof. Dr. Metin KAYA', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 6200', email: 'mkaya@karabuk.edu.tr' },
  { id: 'makine-35', name: 'Doç. Dr. Ali CAN', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7382', email: 'alican@karabuk.edu.tr' },
  { id: 'makine-36', name: 'Doç. Dr. Erhan KAYABAŞI', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7444', email: 'erhankayabasi@karabuk.edu.tr' },
  { id: 'makine-37', name: 'Doç. Dr. Selçuk SELİMLİ', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7025', email: 'selcukselimli@karabuk.edu.tr' },
  { id: 'makine-38', name: 'Dr. Öğr. Üyesi Ahmet CANAN', department: 'Makine Mühendisliği', group: 'Enerji', email: 'ahmetcanan@karabuk.edu.tr' },
  { id: 'makine-39', name: 'Dr. Öğr. Üyesi Enes KILINÇ', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7017', email: 'eneskilinc@karabuk.edu.tr' },
  { id: 'makine-40', name: 'Dr. Öğr. Üyesi Gürşah GÜRÜF', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7342', email: 'gursahguruf@karabuk.edu.tr' },
  { id: 'makine-41', name: 'Dr. Öğr. Üyesi Mehmet Volkan AKSAY', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 6200', email: 'volkanaksay@karabuk.edu.tr' },
  { id: 'makine-42', name: 'Dr. Öğr. Üyesi Mutlucan BAYAT', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7303', email: 'mutlucanbayat@karabuk.edu.tr' },
  { id: 'makine-43', name: 'Dr. Öğr. Üyesi Şafak ATAŞ', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 4131', email: 'satas@karabuk.edu.tr' },
  { id: 'makine-44', name: 'Araştırma Görevlisi Efe KARAAVCI', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 9609', email: 'efekaraavci@karabuk.edu.tr' },
  { id: 'makine-45', name: 'Araştırma Görevlisi Mesut YILMAZ', department: 'Makine Mühendisliği', group: 'Enerji', email: 'mesut.yilmaz@karabuk.edu.tr' },
  { id: 'makine-46', name: 'Araştırma Görevlisi Mücahid CAN', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 9611', email: 'mucahidcan@karabuk.edu.tr' },
  { id: 'makine-47', name: 'Araştırma Görevlisi Recep SÜTOĞLU', department: 'Makine Mühendisliği', group: 'Enerji', email: 'recepsutoglu@karabuk.edu.tr' },
  { id: 'makine-48', name: 'Araştırma Görevlisi Süheyl Bilal SUNGUR', department: 'Makine Mühendisliği', group: 'Enerji', phone: '0 (370) 418 9617', email: 'suheylsungur@karabuk.edu.tr' },
  { id: 'makine-49', name: 'Doç. Dr. Recep DEMİRSÖZ', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 4098', email: 'recepdemirsoz@karabuk.edu.tr' },
  { id: 'makine-50', name: 'Prof. Dr. Khangardash ASGAROV', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7320', email: 'hangardasaskerov@karabuk.edu.tr' },
  { id: 'makine-51', name: 'Doç. Dr. Gökhan SUR', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7365', email: 'gokhansur@karabuk.edu.tr' },
  { id: 'makine-52', name: 'Doç. Dr. Abdurrahim TEMİZ', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 4135', email: 'abdurrahimtemiz@karabuk.edu.tr' },
  { id: 'makine-53', name: 'Doç. Dr. Fatih Huzeyfe ÖZTÜRK', department: 'Makine Mühendisliği', group: 'Mekanik', email: 'fhozturk@karabuk.edu.tr' },
  { id: 'makine-54', name: 'Doç. Dr. Özkan ÖZ', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 6200', email: 'ooz@karabuk.edu.tr' },
  { id: 'makine-55', name: 'Dr. Öğr. Üyesi Khaled M.N. CHAHROUR', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7316', email: 'khaledchahrour@karabuk.edu.tr' },
  { id: 'makine-56', name: 'Dr. Öğr. Üyesi Muhammed Salih GÜL', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7333', email: 'msalihgul@karabuk.edu.tr' },
  { id: 'makine-57', name: 'Dr. Öğr. Üyesi Mustafa MUŞTU', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7438', email: 'mustafamustu@karabuk.edu.tr' },
  { id: 'makine-58', name: 'Dr. Öğr. Üyesi Sena KABAVE KILINÇARSLAN', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7386', email: 'senakilincarslan@karabuk.edu.tr' },
  { id: 'makine-59', name: 'Dr. Öğr. Üyesi Tuğçe YILDIZ', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7465', email: 'tugcekoden@karabuk.edu.tr' },
  { id: 'makine-60', name: 'Dr. Öğr. Üyesi Turan DAŞ', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 9617', email: 'turandas@karabuk.edu.tr' },
  { id: 'makine-61', name: 'Araştırma Görevlisi Bilgehan KONDUL UĞUR', department: 'Makine Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 9620', email: 'bilgehankondul@karabuk.edu.tr' },
  { id: 'makine-62', name: 'Prof. Dr. İsmail ESEN', department: 'Makine Mühendisliği', group: 'Makine Teorisi ve Dinamiği', phone: '0 (370) 418 7380', email: 'iesen@karabuk.edu.tr' },
  { id: 'makine-63', name: 'Doç. Dr. Fatih PEHLİVAN', department: 'Makine Mühendisliği', group: 'Makine Teorisi ve Dinamiği', phone: '0 (370) 418 4119', email: 'fatihpehlivan@karabuk.edu.tr' },
  { id: 'makine-64', name: 'Doç. Dr. Kerim Gökhan AKTAŞ', department: 'Makine Mühendisliği', group: 'Makine Teorisi ve Dinamiği', phone: '0 (370) 418 7111', email: 'kerimgokhanaktas@karabuk.edu.tr' },
  { id: 'makine-65', name: 'Doç. Dr. Mehmet Emin AKAY', department: 'Makine Mühendisliği', group: 'Makine Teorisi ve Dinamiği', phone: '0 (370) 418 7355', email: 'eminakay@karabuk.edu.tr' },
  { id: 'makine-66', name: 'Dr. Öğr. Üyesi Engin YILDIRIM', department: 'Makine Mühendisliği', group: 'Makine Teorisi ve Dinamiği', phone: '0 (370) 418 7303', email: 'enginyildirim@karabuk.edu.tr' },
  { id: 'makine-67', name: 'Prof. Dr. Mustafa Bahattin ÇELİK', department: 'Makine Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 7115', email: 'mcelik@karabuk.edu.tr' },
  { id: 'makine-68', name: 'Prof. Dr. Mehmet ÇELİK', department: 'Makine Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 4093', email: 'mehcelik@karabuk.edu.tr' },
  { id: 'makine-69', name: 'Prof. Dr. Fatih HAYAT', department: 'Makine Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 7037', email: 'fhayat@karabuk.edu.tr' },
  { id: 'makine-70', name: 'Prof. Dr. Selami SAĞIROĞLU', department: 'Makine Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 7363', email: 'ssagiroglu@karabuk.edu.tr' },
  { id: 'makine-71', name: 'Prof. Dr. Yaşar YETİŞKEN', department: 'Makine Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 7332', email: 'yyetisken@karabuk.edu.tr' },
  { id: 'makine-72', name: 'Prof. Dr. Samet USLU', department: 'Makine Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 7116', email: 'sametuslu@karabuk.edu.tr' },
  { id: 'makine-73', name: 'Araştırma Görevlisi Dr. Seyit Ali KARA', department: 'Makine Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 9617', email: 'seyitkara@karabuk.edu.tr' },
  { id: 'makine-74', name: 'Araştırma Görevlisi Dr. Yakup DAŞDEMİRLİ', department: 'Makine Mühendisliği', group: 'Otomotiv', email: 'yakupdasdemirli@karabuk.edu.tr' },

  // Endüstri Mühendisliği — doğrudan sayfadan doğrulandı (12 kişi, alt grup yok)
  { id: 'endustri-1', name: 'Dr. Öğr. Üyesi Ahmet Ziyaeddin BULUM', department: 'Endüstri Mühendisliği', phone: '0 (370) 418 7306', email: 'ahmetbulum@karabuk.edu.tr' },
  { id: 'endustri-2', name: 'Dr. Öğr. Üyesi Selçuk ÖZCAN', department: 'Endüstri Mühendisliği', phone: '0 (370) 418 7321', email: 'selcukozcan@karabuk.edu.tr' },
  { id: 'endustri-3', name: 'Dr. Öğr. Üyesi Tuğrul BAYRAKTAR', department: 'Endüstri Mühendisliği', phone: '0 (370) 418 7339', email: 'tugrulbayraktar@karabuk.edu.tr' },
  { id: 'endustri-4', name: 'Prof. Dr. İbrahim Ethem GÜLER', department: 'Endüstri Mühendisliği', phone: '0 (370) 418 7376', email: 'ibrahimguler@karabuk.edu.tr' },
  { id: 'endustri-5', name: 'Prof. Dr. Muharrem DÜĞENCİ', department: 'Endüstri Mühendisliği', phone: '0 (370) 418 7323', email: 'mdugenci@karabuk.edu.tr' },
  { id: 'endustri-6', name: 'Doç. Dr. Çağrı SEL', department: 'Endüstri Mühendisliği', phone: '0 (370) 418 7341', email: 'cagrisel@karabuk.edu.tr' },
  { id: 'endustri-7', name: 'Dr. Öğr. Üyesi Erkan Sami KÖKTEN', department: 'Endüstri Mühendisliği', phone: '0 (370) 418 7340', email: 'erkansamikokten@karabuk.edu.tr' },
  { id: 'endustri-8', name: 'Dr. Öğr. Üyesi Md Amırul ISLAM', department: 'Endüstri Mühendisliği', phone: '0 (370) 418 7309' },
  { id: 'endustri-9', name: 'Dr. Öğr. Üyesi Muharrem ÜNVER', department: 'Endüstri Mühendisliği', phone: '0 (370) 418 7370', email: 'muharremunver@karabuk.edu.tr' },
  { id: 'endustri-10', name: 'Dr. Öğr. Üyesi Rukiye TEKİN ÜNVER', department: 'Endüstri Mühendisliği', email: 'rukiyetekin@karabuk.edu.tr' },
  { id: 'endustri-11', name: 'Araştırma Görevlisi Muammer DOLMACI', department: 'Endüstri Mühendisliği', phone: '0 (370) 418 9615', email: 'muammerdolmaci@karabuk.edu.tr' },
  { id: 'endustri-12', name: 'Araştırma Görevlisi Muhammed Zahid KOÇ', department: 'Endüstri Mühendisliği', phone: '0 (370) 418 9615', email: 'mzkoc@karabuk.edu.tr' },

  // İnşaat Mühendisliği — doğrudan sayfadan doğrulandı (18 kişi, 7 alt grup)
  { id: 'insaat-1', name: 'Prof. Dr. İnan KESKİN', department: 'İnşaat Mühendisliği', group: 'Geoteknik', phone: '0 (370) 418 9602', email: 'inankeskin@karabuk.edu.tr' },
  { id: 'insaat-2', name: 'Prof. Dr. Fatih GÖKTEPE', department: 'İnşaat Mühendisliği', group: 'Geoteknik', phone: '0 (370) 418 7036', email: 'fatihgoktepe@karabuk.edu.tr' },
  { id: 'insaat-3', name: 'Dr. Öğr. Üyesi Selman KAHRAMAN', department: 'İnşaat Mühendisliği', group: 'Geoteknik', phone: '0 (370) 418 7052', email: 'selmankahraman@karabuk.edu.tr' },
  { id: 'insaat-4', name: 'Prof. Dr. Tülay EKEMEN KESKİN', department: 'İnşaat Mühendisliği', group: 'Hidrolik', phone: '0 (370) 418 7055', email: 'tulayekemen@karabuk.edu.tr' },
  { id: 'insaat-5', name: 'Doç. Dr. Ertuğrul ESMERAY', department: 'İnşaat Mühendisliği', group: 'Hidrolik', phone: '0 (370) 418 7241', email: 'eesmeray@karabuk.edu.tr' },
  { id: 'insaat-6', name: 'Dr. Öğr. Üyesi Fatih SAKA', department: 'İnşaat Mühendisliği', group: 'Hidrolik', phone: '0 (370) 418 7394', email: 'sakafatih@karabuk.edu.tr' },
  { id: 'insaat-7', name: 'Dr. Öğr. Üyesi Mehmet Fethi ERTENLİ', department: 'İnşaat Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7030', email: 'm.fethiertenli@karabuk.edu.tr' },
  { id: 'insaat-8', name: 'Araştırma Görevlisi Yusuf BAHÇACI', department: 'İnşaat Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 9609', email: 'yusufbahcaci@karabuk.edu.tr' },
  { id: 'insaat-9', name: 'Doç. Dr. Halil İbrahim YUMRUTAŞ', department: 'İnşaat Mühendisliği', group: 'Ulaştırma', phone: '0 (370) 418 7038', email: 'iyumrutas@karabuk.edu.tr' },
  { id: 'insaat-10', name: 'Dr. Öğr. Üyesi Özlem BATTAL ŞAL', department: 'İnşaat Mühendisliği', group: 'Ulaştırma', phone: '0 (370) 418 7043', email: 'ozlembattal@karabuk.edu.tr' },
  { id: 'insaat-11', name: 'Prof. Dr. Şenol GÜRSOY', department: 'İnşaat Mühendisliği', group: 'Yapı', phone: '0 (370) 418 7397', email: 'sgursoy@karabuk.edu.tr' },
  { id: 'insaat-12', name: 'Dr. Öğr. Üyesi Zehra Şule GARİP', department: 'İnşaat Mühendisliği', group: 'Yapı', phone: '0 (370) 418 7476', email: 'zsulegarip@karabuk.edu.tr' },
  { id: 'insaat-13', name: 'Dr. Öğr. Üyesi Mehmet Haşim KISA', department: 'İnşaat Mühendisliği', group: 'Yapı', phone: '0 (370) 418 7023', email: 'mhasimkisa@karabuk.edu.tr' },
  { id: 'insaat-14', name: 'Araştırma Görevlisi İsmail TOZLU', department: 'İnşaat Mühendisliği', group: 'Yapı', phone: '0 (370) 418 9604', email: 'ismailtozlu@karabuk.edu.tr' },
  { id: 'insaat-15', name: 'Öğr. Gör. Muhammed TORUN', department: 'İnşaat Mühendisliği', group: 'Yapı İşletmesi', phone: '0 (370) 418 7394', email: 'muhammedtorun@karabuk.edu.tr' },
  { id: 'insaat-16', name: 'Prof. Dr. İlker TEKİN', department: 'İnşaat Mühendisliği', group: 'Yapı Malzemeleri', phone: '0 (370) 418 7064', email: 'ilkertekin@karabuk.edu.tr' },
  { id: 'insaat-17', name: 'Dr. Öğr. Üyesi Mahfuz PEKGÖZ', department: 'İnşaat Mühendisliği', group: 'Yapı Malzemeleri', phone: '0 (370) 418 7052', email: 'mahfuzpekgoz@karabuk.edu.tr' },
  { id: 'insaat-18', name: 'Araştırma Görevlisi İbrahim TORLAK', department: 'İnşaat Mühendisliği', group: 'Yapı Malzemeleri', phone: '0 (370) 418 9609', email: 'ibrahimtorlak@karabuk.edu.tr' },

  // Çevre Mühendisliği — doğrudan sayfadan doğrulandı (11 kişi, alt grup yok)
  { id: 'cevre-1', name: 'Prof. Dr. Hamiyet ŞAHİN KOL', department: 'Çevre Mühendisliği', phone: '0 (370) 418 7078', email: 'hsahinkol@karabuk.edu.tr' },
  { id: 'cevre-2', name: 'Doç. Dr. Rahman ÇALHAN', department: 'Çevre Mühendisliği', phone: '0 (370) 418 7474', email: 'rahmancalhan@karabuk.edu.tr' },
  { id: 'cevre-3', name: 'Dr. Öğr. Üyesi Mehmet Kazım YETİK', department: 'Çevre Mühendisliği', phone: '0 (370) 418 7032', email: 'kazimyetik@karabuk.edu.tr' },
  { id: 'cevre-4', name: 'Prof. Dr. İlhan PEKGÖZLÜ', department: 'Çevre Mühendisliği', phone: '0 (370) 418 4159', email: 'ilhanpekgozlu@karabuk.edu.tr' },
  { id: 'cevre-5', name: 'Prof. Dr. Kubilay TEKİN', department: 'Çevre Mühendisliği', phone: '0 (370) 418 4141', email: 'ktekin@karabuk.edu.tr' },
  { id: 'cevre-6', name: 'Prof. Dr. Mehmet Kuddusi AKALIN', department: 'Çevre Mühendisliği', phone: '0 (370) 418 7053', email: 'mehmetakalin@karabuk.edu.tr' },
  { id: 'cevre-7', name: 'Prof. Dr. Sakine UGURLU KARAAĞAÇ', department: 'Çevre Mühendisliği', phone: '0 (370) 418 7047', email: 'sakineugurlu@karabuk.edu.tr' },
  { id: 'cevre-8', name: 'Doç. Dr. Ayhan KOCAMAN', department: 'Çevre Mühendisliği', phone: '0 (370) 418 7143', email: 'ayhankocaman@karabuk.edu.tr' },
  { id: 'cevre-9', name: 'Doç. Dr. Meral TOPCU SULAK', department: 'Çevre Mühendisliği', email: 'mtopcu@karabuk.edu.tr' },
  { id: 'cevre-10', name: 'Doç. Dr. Songül KASKUN ERGANİ', department: 'Çevre Mühendisliği', phone: '0 (370) 418 7063', email: 'songulkaskun@karabuk.edu.tr' },
  { id: 'cevre-11', name: 'Dr. Öğr. Üyesi Enes ÖZKÖK', department: 'Çevre Mühendisliği', phone: '0 (370) 418 7061', email: 'enesozkok@karabuk.edu.tr' },

  // Kimya Mühendisliği — doğrudan sayfadan doğrulandı (13 kişi, alt grup yok)
  { id: 'kimya-1', name: 'Prof. Dr. Şaban UYSAL', department: 'Kimya', phone: '0 (370) 418 7249', email: 'sabanuysal@karabuk.edu.tr' },
  { id: 'kimya-2', name: 'Doç. Dr. Hamza ŞİMŞİR', department: 'Kimya', phone: '0 (370) 418 7253', email: 'hamzasimsir@karabuk.edu.tr' },
  { id: 'kimya-3', name: 'Doç. Dr. Turgut SÖNMEZ', department: 'Kimya', phone: '0 (370) 418 7288', email: 'turgutsonmez@karabuk.edu.tr' },
  { id: 'kimya-4', name: 'Prof. Dr. Selhan KARAGÖZ', department: 'Kimya', phone: '0 (370) 418 7275', email: 'skaragoz@karabuk.edu.tr' },
  { id: 'kimya-5', name: 'Prof. Dr. Hakan TAHTACI', department: 'Kimya', phone: '0 (370) 418 7284', email: 'hakantahtaci@karabuk.edu.tr' },
  { id: 'kimya-6', name: 'Prof. Dr. Yasin KANBUR', department: 'Kimya', phone: '0 (370) 418 7260', email: 'yasinkanbur@karabuk.edu.tr' },
  { id: 'kimya-7', name: 'Doç. Dr. Yasemin TÜMER', department: 'Kimya', phone: '0 (370) 418 7248', email: 'yasemintumer@karabuk.edu.tr' },
  { id: 'kimya-8', name: 'Doç. Dr. Figen ARSLAN BİÇER', department: 'Kimya', phone: '0 (370) 418 7277', email: 'farslan@karabuk.edu.tr' },
  { id: 'kimya-9', name: 'Doç. Dr. İsmail YILMAZ', department: 'Kimya', phone: '0 (370) 418 7271', email: 'ismailyilmaz@karabuk.edu.tr' },
  { id: 'kimya-10', name: 'Doç. Dr. İrem OKMAN KOÇOĞLU', department: 'Kimya', phone: '0 (370) 418 7246', email: 'iremokman@karabuk.edu.tr' },
  { id: 'kimya-11', name: 'Doç. Dr. Sedef ŞİŞMANOĞLU', department: 'Kimya', phone: '0 (370) 418 7272', email: 'sedefsismanoglu@karabuk.edu.tr' },
  { id: 'kimya-12', name: 'Dr. Öğr. Üyesi Semiha YILDIRIM SARIKAYA', department: 'Kimya', phone: '0 (370) 418 7278', email: 'semihayildirim@karabuk.edu.tr' },
  { id: 'kimya-13', name: 'Araştırma Görevlisi Zeynep KARA', department: 'Kimya', phone: '0 (370) 418 9615', email: 'zeynepkara@karabuk.edu.tr' },

  // Biyomedikal Mühendisliği — doğrudan sayfadan doğrulandı (17 kişi, alt grup yok).
  // Not: Tıp Mühendisliği'nin "Akademik Personel" linki de aynı sayfaya çıkıyor —
  // yani bu iki bölüm aynı kadroyu paylaşıyor, aynı kişileri "department" alanı farklı
  // olacak şekilde iki kez tuttuk.
  { id: 'biyomedikal-1', name: 'Prof. Dr. Mehmet Akif ERDEN', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 4208', email: 'makiferden@karabuk.edu.tr' },
  { id: 'biyomedikal-2', name: 'Dr. Öğr. Üyesi Abdullah Bilal AYGÜN', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 7479', email: 'abilalaygun@karabuk.edu.tr' },
  { id: 'biyomedikal-3', name: 'Dr. Öğr. Üyesi Anday DURU', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 7278', email: 'andayduru@karabuk.edu.tr' },
  { id: 'biyomedikal-4', name: 'Prof. Dr. Erkan KOÇ', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 7142', email: 'ekoc@karabuk.edu.tr' },
  { id: 'biyomedikal-5', name: 'Prof. Dr. Habibe TECİMER', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 7024', email: 'habibeuslu@karabuk.edu.tr' },
  { id: 'biyomedikal-6', name: 'Prof. Dr. Tamila ANUTGAN', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 7054', email: 'tamilaanutgan@karabuk.edu.tr' },
  { id: 'biyomedikal-7', name: 'Doç. Dr. Ahmet Reşit KAVSAOĞLU', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 7046', email: 'kavsaoglu@karabuk.edu.tr' },
  { id: 'biyomedikal-8', name: 'Doç. Dr. Daver ALİ', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 4129', email: 'daverali@karabuk.edu.tr' },
  { id: 'biyomedikal-9', name: 'Doç. Dr. Hacı Mehmet KAYILI', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 9601', email: 'h.mehmetkayili@karabuk.edu.tr' },
  { id: 'biyomedikal-10', name: 'Doç. Dr. Mutlu TEKİR', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 7429', email: 'mutlutekir@karabuk.edu.tr' },
  { id: 'biyomedikal-11', name: 'Doç. Dr. Nurettin ELTUĞRAL', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 7028', email: 'nurettineltugral@karabuk.edu.tr' },
  { id: 'biyomedikal-12', name: 'Doç. Dr. Yasin AKGÜL', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 7425' },
  { id: 'biyomedikal-13', name: 'Dr. Öğr. Üyesi Dılmurod JURAEV', department: 'Biyomedikal Mühendisliği', email: 'dilmurodjuraev@karabuk.edu.tr' },
  { id: 'biyomedikal-14', name: 'Dr. Öğr. Üyesi Elif ÇALIK', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 7085', email: 'elifcalik@karabuk.edu.tr' },
  { id: 'biyomedikal-15', name: 'Öğr. Gör. Betül KARABUDAK', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 9600', email: 'betulkarabudak@karabuk.edu.tr' },
  { id: 'biyomedikal-16', name: 'Araştırma Görevlisi Halil İbrahim ŞAHİN', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 9608', email: 'halilis@karabuk.edu.tr' },
  { id: 'biyomedikal-17', name: 'Araştırma Görevlisi Sena AKSOY', department: 'Biyomedikal Mühendisliği', phone: '0 (370) 418 9600', email: 'senaaksoy@karabuk.edu.tr' },

  { id: 'tip-1', name: 'Prof. Dr. Mehmet Akif ERDEN', department: 'Tıp Mühendisliği', phone: '0 (370) 418 4208', email: 'makiferden@karabuk.edu.tr' },
  { id: 'tip-2', name: 'Dr. Öğr. Üyesi Abdullah Bilal AYGÜN', department: 'Tıp Mühendisliği', phone: '0 (370) 418 7479', email: 'abilalaygun@karabuk.edu.tr' },
  { id: 'tip-3', name: 'Dr. Öğr. Üyesi Anday DURU', department: 'Tıp Mühendisliği', phone: '0 (370) 418 7278', email: 'andayduru@karabuk.edu.tr' },
  { id: 'tip-4', name: 'Prof. Dr. Erkan KOÇ', department: 'Tıp Mühendisliği', phone: '0 (370) 418 7142', email: 'ekoc@karabuk.edu.tr' },
  { id: 'tip-5', name: 'Prof. Dr. Habibe TECİMER', department: 'Tıp Mühendisliği', phone: '0 (370) 418 7024', email: 'habibeuslu@karabuk.edu.tr' },
  { id: 'tip-6', name: 'Prof. Dr. Tamila ANUTGAN', department: 'Tıp Mühendisliği', phone: '0 (370) 418 7054', email: 'tamilaanutgan@karabuk.edu.tr' },
  { id: 'tip-7', name: 'Doç. Dr. Ahmet Reşit KAVSAOĞLU', department: 'Tıp Mühendisliği', phone: '0 (370) 418 7046', email: 'kavsaoglu@karabuk.edu.tr' },
  { id: 'tip-8', name: 'Doç. Dr. Daver ALİ', department: 'Tıp Mühendisliği', phone: '0 (370) 418 4129', email: 'daverali@karabuk.edu.tr' },
  { id: 'tip-9', name: 'Doç. Dr. Hacı Mehmet KAYILI', department: 'Tıp Mühendisliği', phone: '0 (370) 418 9601', email: 'h.mehmetkayili@karabuk.edu.tr' },
  { id: 'tip-10', name: 'Doç. Dr. Mutlu TEKİR', department: 'Tıp Mühendisliği', phone: '0 (370) 418 7429', email: 'mutlutekir@karabuk.edu.tr' },
  { id: 'tip-11', name: 'Doç. Dr. Nurettin ELTUĞRAL', department: 'Tıp Mühendisliği', phone: '0 (370) 418 7028', email: 'nurettineltugral@karabuk.edu.tr' },
  { id: 'tip-12', name: 'Doç. Dr. Yasin AKGÜL', department: 'Tıp Mühendisliği', phone: '0 (370) 418 7425' },
  { id: 'tip-13', name: 'Dr. Öğr. Üyesi Dılmurod JURAEV', department: 'Tıp Mühendisliği', email: 'dilmurodjuraev@karabuk.edu.tr' },
  { id: 'tip-14', name: 'Dr. Öğr. Üyesi Elif ÇALIK', department: 'Tıp Mühendisliği', phone: '0 (370) 418 7085', email: 'elifcalik@karabuk.edu.tr' },
  { id: 'tip-15', name: 'Öğr. Gör. Betül KARABUDAK', department: 'Tıp Mühendisliği', phone: '0 (370) 418 9600', email: 'betulkarabudak@karabuk.edu.tr' },
  { id: 'tip-16', name: 'Araştırma Görevlisi Halil İbrahim ŞAHİN', department: 'Tıp Mühendisliği', phone: '0 (370) 418 9608', email: 'halilis@karabuk.edu.tr' },
  { id: 'tip-17', name: 'Araştırma Görevlisi Sena AKSOY', department: 'Tıp Mühendisliği', phone: '0 (370) 418 9600', email: 'senaaksoy@karabuk.edu.tr' },

  // Otomotiv Mühendisliği — doğrudan sayfadan doğrulandı (8 kişi, alt grup yok).
  // Not: Makine Mühendisliği'nin "Otomotiv" alt grubuyla birebir aynı kadro.
  { id: 'otomotiv-1', name: 'Prof. Dr. Mustafa Bahattin ÇELİK', department: 'Otomotiv Mühendisliği', phone: '0 (370) 418 7115', email: 'mcelik@karabuk.edu.tr' },
  { id: 'otomotiv-2', name: 'Prof. Dr. Fatih HAYAT', department: 'Otomotiv Mühendisliği', phone: '0 (370) 418 7037', email: 'fhayat@karabuk.edu.tr' },
  { id: 'otomotiv-3', name: 'Prof. Dr. Mehmet ÇELİK', department: 'Otomotiv Mühendisliği', phone: '0 (370) 418 4093', email: 'mehcelik@karabuk.edu.tr' },
  { id: 'otomotiv-4', name: 'Prof. Dr. Selami SAĞIROĞLU', department: 'Otomotiv Mühendisliği', phone: '0 (370) 418 7363', email: 'ssagiroglu@karabuk.edu.tr' },
  { id: 'otomotiv-5', name: 'Prof. Dr. Yaşar YETİŞKEN', department: 'Otomotiv Mühendisliği', phone: '0 (370) 418 7332', email: 'yyetisken@karabuk.edu.tr' },
  { id: 'otomotiv-6', name: 'Prof. Dr. Samet USLU', department: 'Otomotiv Mühendisliği', phone: '0 (370) 418 7116', email: 'sametuslu@karabuk.edu.tr' },
  { id: 'otomotiv-7', name: 'Araştırma Görevlisi Dr. Seyit Ali KARA', department: 'Otomotiv Mühendisliği', phone: '0 (370) 418 9617', email: 'seyitkara@karabuk.edu.tr' },
  { id: 'otomotiv-8', name: 'Araştırma Görevlisi Dr. Yakup DAŞDEMİRLİ', department: 'Otomotiv Mühendisliği', email: 'yakupdasdemirli@karabuk.edu.tr' },

  // Metalurji ve Malzeme Mühendisliği — doğrudan sayfadan doğrulandı (19 kişi, 2 alt grup)
  { id: 'metalurji-1', name: 'Prof. Dr. Yavuz SUN', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 7466' },
  { id: 'metalurji-2', name: 'Prof. Dr. Ali GÜNGÖR', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 7428', email: 'agungor@karabuk.edu.tr' },
  { id: 'metalurji-3', name: 'Prof. Dr. Dursun ÖZYÜREK', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', email: 'dozyurek@karabuk.edu.tr' },
  { id: 'metalurji-4', name: 'Prof. Dr. Fatma MEYDANERİ TEZEL', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 7243', email: 'fatmameydaneri@karabuk.edu.tr' },
  { id: 'metalurji-5', name: 'Prof. Dr. Hayrettin AHLATCI', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 7120', email: 'hahlatci@karabuk.edu.tr' },
  { id: 'metalurji-6', name: 'Prof. Dr. Hayriye ERTEK EMRE', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 4195', email: 'hayriyeertek@karabuk.edu.tr' },
  { id: 'metalurji-7', name: 'Prof. Dr. Mehmet ÜNAL', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 4133', email: 'munal@karabuk.edu.tr' },
  { id: 'metalurji-8', name: 'Prof. Dr. Melik ÇETİN', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 4083', email: 'mcetin@karabuk.edu.tr' },
  { id: 'metalurji-9', name: 'Prof. Dr. Muhammet Emre TURAN', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 7435', email: 'memreturan@karabuk.edu.tr' },
  { id: 'metalurji-10', name: 'Prof. Dr. Nizamettin KAHRAMAN', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 7040', email: 'nkahraman@karabuk.edu.tr' },
  { id: 'metalurji-11', name: 'Prof. Dr. Ramazan KAÇAR', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 9625', email: 'rkacar@karabuk.edu.tr' },
  { id: 'metalurji-12', name: 'Prof. Dr. Süleyman GÜNDÜZ', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 7019', email: 'sgunduz@karabuk.edu.tr' },
  { id: 'metalurji-13', name: 'Prof. Dr. Tansel TUNÇAY', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', email: 'tanseltuncay@karabuk.edu.tr' },
  { id: 'metalurji-14', name: 'Doç. Dr. İsmail Hakkı KARA', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 4084', email: 'ihakkikara@karabuk.edu.tr' },
  { id: 'metalurji-15', name: 'Dr. Öğr. Üyesi Betül ERCAN', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 7118', email: 'betulusta@karabuk.edu.tr' },
  { id: 'metalurji-16', name: 'Dr. Öğr. Üyesi Demet TAŞTEMÜR', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', email: 'demettastemur@karabuk.edu.tr' },
  { id: 'metalurji-17', name: 'Dr. Öğr. Üyesi Güldane ATEŞOĞLU', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi', phone: '0 (370) 418 7465', email: 'guldaneertugrul@karabuk.edu.tr' },
  { id: 'metalurji-18', name: 'Araştırma Görevlisi Atakan Oğuz OCAK', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Malzeme Bilimi' },
  { id: 'metalurji-19', name: 'Dr. Öğr. Üyesi Süleyman YAŞIN', department: 'Metalurji ve Malzeme Mühendisliği', group: 'Üretim Metalurjisi', phone: '0 (370) 418 7422' },

  // Fizik — doğrudan sayfadan doğrulandı (7 kişi, alt grup yok)
  { id: 'fizik-1', name: 'Prof. Dr. Necla ÇAKMAK', department: 'Fizik', phone: '0 (370) 418 7183', email: 'neclac@karabuk.edu.tr' },
  { id: 'fizik-2', name: 'Doç. Dr. Ahmet Mustafa ERER', department: 'Fizik', phone: '0 (370) 418 7182', email: 'merer@karabuk.edu.tr' },
  { id: 'fizik-3', name: 'Dr. Öğr. Üyesi Ulvi KANBUR', department: 'Fizik', phone: '0 (370) 418 7185', email: 'ulvikanbur@karabuk.edu.tr' },
  { id: 'fizik-4', name: 'Prof. Dr. Hüseyin TECİMER', department: 'Fizik', phone: '0 (370) 418 9367', email: 'huseyintecimer@karabuk.edu.tr' },
  { id: 'fizik-5', name: 'Prof. Dr. Mustafa ANUTGAN', department: 'Fizik', phone: '0 (370) 418 4168', email: 'mustafaanutgan@karabuk.edu.tr' },
  { id: 'fizik-6', name: 'Doç. Dr. Hüseyin YILDIRIM', department: 'Fizik', phone: '0 (370) 418 7211', email: 'huseyinyildirim@karabuk.edu.tr' },
  { id: 'fizik-7', name: 'Doç. Dr. Mustafa Barış TERCAN', department: 'Fizik', phone: '0 (370) 418 7354', email: 'mtercan@karabuk.edu.tr' },

  // Matematik — doğrudan sayfadan doğrulandı (7 kişi, 4 alt grup)
  { id: 'matematik-1', name: 'Prof. Dr. Murat DÜZ', department: 'Matematik', group: 'Uygulamalı Matematik', phone: '0 (370) 418 4170' },
  { id: 'matematik-2', name: 'Prof. Dr. Şerif AMİROV', department: 'Matematik', group: 'Uygulamalı Matematik', phone: '0 (370) 418 4160' },
  { id: 'matematik-3', name: 'Prof. Dr. Ayşe NALLI', department: 'Matematik', group: 'Cebir ve Sayılar Teorisi', phone: '0 (370) 418 4173' },
  { id: 'matematik-4', name: 'Doç. Dr. Ahmet EMİN', department: 'Matematik', group: 'Cebir ve Sayılar Teorisi', phone: '0 (370) 418 7035' },
  { id: 'matematik-5', name: 'Doç. Dr. Gümrah UYSAL', department: 'Matematik', group: 'Analiz ve Fonksiyonlar Teorisi', phone: '0 (370) 418 9196' },
  { id: 'matematik-6', name: 'Araştırma Görevlisi Merve Nur BARAN', department: 'Matematik', group: 'Analiz ve Fonksiyonlar Teorisi', phone: '0 (370) 418 9615' },
  { id: 'matematik-7', name: 'Doç. Dr. Çiğdem İNCİ KUZU', department: 'Matematik', group: 'Geometri', phone: '0 (370) 418 7044' },

  // Raylı Sistemler Mühendisliği — doğrudan sayfadan doğrulandı; kadrosu Makine
  // Mühendisliği ile birebir aynı (aynı 74 kişi, aynı 6 alt grup) — üniversite sitesi de
  // bu iki bölümün akademik personel sayfasını aynı şekilde gösteriyor.
  { id: 'raylisistemler-1', name: 'Prof. Dr. Hasan GÖKKAYA', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7395', email: 'hgokkaya@karabuk.edu.tr' },
  { id: 'raylisistemler-2', name: 'Prof. Dr. Bilge DEMİR', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7350', email: 'bdemir@karabuk.edu.tr' },
  { id: 'raylisistemler-3', name: 'Prof. Dr. Cevdet GÖLOĞLU', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', email: 'cevdetgologlu@karabuk.edu.tr' },
  { id: 'raylisistemler-4', name: 'Prof. Dr. Halil DEMİR', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7477', email: 'hdemir@karabuk.edu.tr' },
  { id: 'raylisistemler-5', name: 'Prof. Dr. Mustafa GÜNAY', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7400', email: 'mgunay@karabuk.edu.tr' },
  { id: 'raylisistemler-6', name: 'Prof. Dr. Okan ÜNAL', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7319', email: 'okanunal@karabuk.edu.tr' },
  { id: 'raylisistemler-7', name: 'Doç. Dr. Ahmet Fatih YILMAZ', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7372', email: 'ahmetfatihyilmaz@karabuk.edu.tr' },
  { id: 'raylisistemler-8', name: 'Doç. Dr. Engin ÇEVİK', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 4122', email: 'engincevik@karabuk.edu.tr' },
  { id: 'raylisistemler-9', name: 'Doç. Dr. Harun ÇUĞ', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7048', email: 'hcug@karabuk.edu.tr' },
  { id: 'raylisistemler-10', name: 'Doç. Dr. Musa YILDIRIM', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7349', email: 'musayildirim@karabuk.edu.tr' },
  { id: 'raylisistemler-11', name: 'Doç. Dr. Safa POLAT', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', email: 'safapolat@karabuk.edu.tr' },
  { id: 'raylisistemler-12', name: 'Dr. Öğr. Üyesi Abdullah UĞUR', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7317', email: 'augur@karabuk.edu.tr' },
  { id: 'raylisistemler-13', name: 'Dr. Öğr. Üyesi Ahmet Emrah ERDOĞDU', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7392', email: 'aemraherdogdu@karabuk.edu.tr' },
  { id: 'raylisistemler-14', name: 'Dr. Öğr. Üyesi Ahmet Serdar GÜLDİBİ', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', email: 'aserdarguldibi@karabuk.edu.tr' },
  { id: 'raylisistemler-15', name: 'Dr. Öğr. Üyesi Mehmet Tayyip ÖZDEMİR', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 9617', email: 'tayyipozdemir@karabuk.edu.tr' },
  { id: 'raylisistemler-16', name: 'Dr. Öğr. Üyesi Mehmet BAKIRCI', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7310', email: 'mehmetbakirci@karabuk.edu.tr' },
  { id: 'raylisistemler-17', name: 'Dr. Öğr. Üyesi Murat AYDIN', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7480', email: 'murataydin@karabuk.edu.tr' },
  { id: 'raylisistemler-18', name: 'Dr. Öğr. Üyesi Özden İŞBİLİR', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7316', email: 'ozdenisbilir@karabuk.edu.tr' },
  { id: 'raylisistemler-19', name: 'Dr. Öğr. Üyesi Samet NOHUTÇU', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', email: 'sametnohutcu@karabuk.edu.tr' },
  { id: 'raylisistemler-20', name: 'Dr. Öğr. Üyesi Sezer PIÇAK', department: 'Raylı Sistemler Mühendisliği', group: 'Konstrüksiyon ve İmalat', phone: '0 (370) 418 7025', email: 'sezerpicak@karabuk.edu.tr' },
  { id: 'raylisistemler-21', name: 'Prof. Dr. Cüneyt UYSAL', department: 'Raylı Sistemler Mühendisliği', group: 'Termodinamik', phone: '0 (370) 418 6243', email: 'cuneytuysal@karabuk.edu.tr' },
  { id: 'raylisistemler-22', name: 'Prof. Dr. Alper ERGÜN', department: 'Raylı Sistemler Mühendisliği', group: 'Termodinamik', phone: '0 (370) 418 7141', email: 'alperergun@karabuk.edu.tr' },
  { id: 'raylisistemler-23', name: 'Prof. Dr. Muhammet KAYFECİ', department: 'Raylı Sistemler Mühendisliği', group: 'Termodinamik', phone: '0 (370) 418 4172', email: 'mkayfeci@karabuk.edu.tr' },
  { id: 'raylisistemler-24', name: 'Dr. Öğr. Üyesi Özgür İNANÇ', department: 'Raylı Sistemler Mühendisliği', group: 'Termodinamik', email: 'ozgurinanc@karabuk.edu.tr' },
  { id: 'raylisistemler-25', name: 'Dr. Öğr. Üyesi Abdullah DAĞDEVİREN', department: 'Raylı Sistemler Mühendisliği', group: 'Termodinamik', email: 'abdullahdagdeviren@karabuk.edu.tr' },
  { id: 'raylisistemler-26', name: 'Araştırma Görevlisi Bahaddin TOPAK', department: 'Raylı Sistemler Mühendisliği', group: 'Termodinamik', phone: '0 (370) 418 9613', email: 'bahaddintopak@karabuk.edu.tr' },
  { id: 'raylisistemler-27', name: 'Prof. Dr. Engin GEDİK', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7369', email: 'egedik@karabuk.edu.tr' },
  { id: 'raylisistemler-28', name: 'Prof. Dr. Bahadır ACAR', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7201', email: 'bacar@karabuk.edu.tr' },
  { id: 'raylisistemler-29', name: 'Prof. Dr. Emrah DENİZ', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7396', email: 'edeniz@karabuk.edu.tr' },
  { id: 'raylisistemler-30', name: 'Prof. Dr. İlhan CEYLAN', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', email: 'ilhanceylan@karabuk.edu.tr' },
  { id: 'raylisistemler-31', name: 'Prof. Dr. Mehmet ÖZALP', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7393', email: 'mozalp@karabuk.edu.tr' },
  { id: 'raylisistemler-32', name: 'Prof. Dr. Sezayi YILMAZ', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7451', email: 'syilmaz@karabuk.edu.tr' },
  { id: 'raylisistemler-33', name: 'Prof. Dr. Ziyaddin RECEBLİ', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', email: 'zrecebli@karabuk.edu.tr' },
  { id: 'raylisistemler-34', name: 'Prof. Dr. Metin KAYA', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 6200', email: 'mkaya@karabuk.edu.tr' },
  { id: 'raylisistemler-35', name: 'Doç. Dr. Ali CAN', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7382', email: 'alican@karabuk.edu.tr' },
  { id: 'raylisistemler-36', name: 'Doç. Dr. Erhan KAYABAŞI', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7444', email: 'erhankayabasi@karabuk.edu.tr' },
  { id: 'raylisistemler-37', name: 'Doç. Dr. Selçuk SELİMLİ', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7025', email: 'selcukselimli@karabuk.edu.tr' },
  { id: 'raylisistemler-38', name: 'Dr. Öğr. Üyesi Ahmet CANAN', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', email: 'ahmetcanan@karabuk.edu.tr' },
  { id: 'raylisistemler-39', name: 'Dr. Öğr. Üyesi Enes KILINÇ', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7017', email: 'eneskilinc@karabuk.edu.tr' },
  { id: 'raylisistemler-40', name: 'Dr. Öğr. Üyesi Gürşah GÜRÜF', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7342', email: 'gursahguruf@karabuk.edu.tr' },
  { id: 'raylisistemler-41', name: 'Dr. Öğr. Üyesi Mehmet Volkan AKSAY', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 6200', email: 'volkanaksay@karabuk.edu.tr' },
  { id: 'raylisistemler-42', name: 'Dr. Öğr. Üyesi Mutlucan BAYAT', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 7303', email: 'mutlucanbayat@karabuk.edu.tr' },
  { id: 'raylisistemler-43', name: 'Dr. Öğr. Üyesi Şafak ATAŞ', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 4131', email: 'satas@karabuk.edu.tr' },
  { id: 'raylisistemler-44', name: 'Araştırma Görevlisi Efe KARAAVCI', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 9609', email: 'efekaraavci@karabuk.edu.tr' },
  { id: 'raylisistemler-45', name: 'Araştırma Görevlisi Mesut YILMAZ', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', email: 'mesut.yilmaz@karabuk.edu.tr' },
  { id: 'raylisistemler-46', name: 'Araştırma Görevlisi Mücahid CAN', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 9611', email: 'mucahidcan@karabuk.edu.tr' },
  { id: 'raylisistemler-47', name: 'Araştırma Görevlisi Recep SÜTOĞLU', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', email: 'recepsutoglu@karabuk.edu.tr' },
  { id: 'raylisistemler-48', name: 'Araştırma Görevlisi Süheyl Bilal SUNGUR', department: 'Raylı Sistemler Mühendisliği', group: 'Enerji', phone: '0 (370) 418 9617', email: 'suheylsungur@karabuk.edu.tr' },
  { id: 'raylisistemler-49', name: 'Doç. Dr. Recep DEMİRSÖZ', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 4098', email: 'recepdemirsoz@karabuk.edu.tr' },
  { id: 'raylisistemler-50', name: 'Prof. Dr. Khangardash ASGAROV', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7320', email: 'hangardasaskerov@karabuk.edu.tr' },
  { id: 'raylisistemler-51', name: 'Doç. Dr. Gökhan SUR', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7365', email: 'gokhansur@karabuk.edu.tr' },
  { id: 'raylisistemler-52', name: 'Doç. Dr. Abdurrahim TEMİZ', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 4135', email: 'abdurrahimtemiz@karabuk.edu.tr' },
  { id: 'raylisistemler-53', name: 'Doç. Dr. Fatih Huzeyfe ÖZTÜRK', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', email: 'fhozturk@karabuk.edu.tr' },
  { id: 'raylisistemler-54', name: 'Doç. Dr. Özkan ÖZ', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 6200', email: 'ooz@karabuk.edu.tr' },
  { id: 'raylisistemler-55', name: 'Dr. Öğr. Üyesi Khaled M.N. CHAHROUR', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7316', email: 'khaledchahrour@karabuk.edu.tr' },
  { id: 'raylisistemler-56', name: 'Dr. Öğr. Üyesi Muhammed Salih GÜL', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7333', email: 'msalihgul@karabuk.edu.tr' },
  { id: 'raylisistemler-57', name: 'Dr. Öğr. Üyesi Mustafa MUŞTU', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7438', email: 'mustafamustu@karabuk.edu.tr' },
  { id: 'raylisistemler-58', name: 'Dr. Öğr. Üyesi Sena KABAVE KILINÇARSLAN', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7386', email: 'senakilincarslan@karabuk.edu.tr' },
  { id: 'raylisistemler-59', name: 'Dr. Öğr. Üyesi Tuğçe YILDIZ', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 7465', email: 'tugcekoden@karabuk.edu.tr' },
  { id: 'raylisistemler-60', name: 'Dr. Öğr. Üyesi Turan DAŞ', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 9617', email: 'turandas@karabuk.edu.tr' },
  { id: 'raylisistemler-61', name: 'Araştırma Görevlisi Bilgehan KONDUL UĞUR', department: 'Raylı Sistemler Mühendisliği', group: 'Mekanik', phone: '0 (370) 418 9620', email: 'bilgehankondul@karabuk.edu.tr' },
  { id: 'raylisistemler-62', name: 'Prof. Dr. İsmail ESEN', department: 'Raylı Sistemler Mühendisliği', group: 'Makine Teorisi ve Dinamiği', phone: '0 (370) 418 7380', email: 'iesen@karabuk.edu.tr' },
  { id: 'raylisistemler-63', name: 'Doç. Dr. Fatih PEHLİVAN', department: 'Raylı Sistemler Mühendisliği', group: 'Makine Teorisi ve Dinamiği', phone: '0 (370) 418 4119', email: 'fatihpehlivan@karabuk.edu.tr' },
  { id: 'raylisistemler-64', name: 'Doç. Dr. Kerim Gökhan AKTAŞ', department: 'Raylı Sistemler Mühendisliği', group: 'Makine Teorisi ve Dinamiği', phone: '0 (370) 418 7111', email: 'kerimgokhanaktas@karabuk.edu.tr' },
  { id: 'raylisistemler-65', name: 'Doç. Dr. Mehmet Emin AKAY', department: 'Raylı Sistemler Mühendisliği', group: 'Makine Teorisi ve Dinamiği', phone: '0 (370) 418 7355', email: 'eminakay@karabuk.edu.tr' },
  { id: 'raylisistemler-66', name: 'Dr. Öğr. Üyesi Engin YILDIRIM', department: 'Raylı Sistemler Mühendisliği', group: 'Makine Teorisi ve Dinamiği', phone: '0 (370) 418 7303', email: 'enginyildirim@karabuk.edu.tr' },
  { id: 'raylisistemler-67', name: 'Prof. Dr. Mustafa Bahattin ÇELİK', department: 'Raylı Sistemler Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 7115', email: 'mcelik@karabuk.edu.tr' },
  { id: 'raylisistemler-68', name: 'Prof. Dr. Mehmet ÇELİK', department: 'Raylı Sistemler Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 4093', email: 'mehcelik@karabuk.edu.tr' },
  { id: 'raylisistemler-69', name: 'Prof. Dr. Fatih HAYAT', department: 'Raylı Sistemler Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 7037', email: 'fhayat@karabuk.edu.tr' },
  { id: 'raylisistemler-70', name: 'Prof. Dr. Selami SAĞIROĞLU', department: 'Raylı Sistemler Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 7363', email: 'ssagiroglu@karabuk.edu.tr' },
  { id: 'raylisistemler-71', name: 'Prof. Dr. Yaşar YETİŞKEN', department: 'Raylı Sistemler Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 7332', email: 'yyetisken@karabuk.edu.tr' },
  { id: 'raylisistemler-72', name: 'Prof. Dr. Samet USLU', department: 'Raylı Sistemler Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 7116', email: 'sametuslu@karabuk.edu.tr' },
  { id: 'raylisistemler-73', name: 'Araştırma Görevlisi Dr. Seyit Ali KARA', department: 'Raylı Sistemler Mühendisliği', group: 'Otomotiv', phone: '0 (370) 418 9617', email: 'seyitkara@karabuk.edu.tr' },
  { id: 'raylisistemler-74', name: 'Araştırma Görevlisi Dr. Yakup DAŞDEMİRLİ', department: 'Raylı Sistemler Mühendisliği', group: 'Otomotiv', email: 'yakupdasdemirli@karabuk.edu.tr' },
];

// Sadece bölüm listesi için (sırayı ve hangi bölümlerin göründüğünü kontrol eder) —
// PROFESSORS'tan otomatik türetmek yerine burada açıkça tutuyoruz ki sıralama bizim elimizde kalsın.
export const DEPARTMENTS: string[] = [
  'Mekatronik Mühendisliği',
  'Biyomedikal Mühendisliği',
  'Çevre Mühendisliği',
  'Elektrik-Elektronik Mühendisliği',
  'Endüstri Mühendisliği',
  'İnşaat Mühendisliği',
  'Makine Mühendisliği',
  'Otomotiv Mühendisliği',
  'Raylı Sistemler Mühendisliği',
  'Metalurji ve Malzeme Mühendisliği',
  'Tıp Mühendisliği',
  'Fizik',
  'Kimya',
  'Matematik',
];

// "Soru Sor" ekranındaki yapay zekaya, her soruyla birlikte gönderilen özet metin —
// AI bu sayede kendi genel bilgisinden değil, arayüzdeki gerçek bölüm/hoca listesinden
// cevap veriyor (örn. "Tıp Mühendisliği var mı" gibi sorularda uydurma yapmıyor).
// data.js tek kaynak olduğu için, buradaki liste değiştikçe AI'nın bildiği de otomatik güncelleniyor.
export function getPersonnelContext(): string {
  return DEPARTMENTS.map((dept) => {
    const names = PROFESSORS.filter((p) => p.department === dept).map((p) => p.name);
    return `${dept}: ${names.join(', ')}`;
  }).join('\n');
}

// Kaynak: muh.karabuk.edu.tr (Mühendislik ve Doğa Bilimleri Fakültesi, İdari Personel sayfası) —
// tüm liste çok uzun (30+ kişi, temizlik/teknik personel dahil), kiosk için en çok işe yarayacak
// birkaç iletişim noktasını seçtik.
export const STAFF: StaffMember[] = [
  { id: 1, name: 'İrfan ÖZ', role: 'Fakülte Sekreteri', phone: '0 (370) 418 6284' },
  { id: 2, name: 'Rıdvan KARA', role: 'Mekatronik Mühendisliği Bölüm Sekreteri', phone: '0 (370) 418 7441' },
  { id: 3, name: 'Ayşegül ŞİMŞEK', role: 'Öğrenci İşleri', phone: '0 (370) 418 7066' },
  { id: 4, name: 'Büşra ÇELİK', role: 'Dekan Sekreteri', phone: '0 (370) 418 7085' },
];

// Lisans birimleri — Karabük Üniversitesi Bologna Bilgi Paketi sisteminden (Akademik Birimler → Lisans)
export const FACULTIES_LISANS: Faculty[] = [
  { id: 1, name: 'Bilgisayar ve Bilişim Bilimleri Fakültesi' },
  { id: 2, name: 'Diş Hekimliği Fakültesi' },
  { id: 3, name: 'Edebiyat Fakültesi' },
  { id: 4, name: 'Fen Fakültesi' },
  { id: 5, name: 'Hasan Doğan Beden Eğitimi ve Spor Yüksekokulu' },
  { id: 6, name: 'Hasan Doğan Spor Bilimleri Fakültesi' },
  { id: 7, name: 'İktisadi ve İdari Bilimler Fakültesi' },
  { id: 8, name: 'İlahiyat Fakültesi' },
  { id: 9, name: 'İnsan ve Toplum Bilimleri Fakültesi' },
  { id: 10, name: 'İslami İlimler Fakültesi' },
  { id: 11, name: 'İşletme Fakültesi' },
  { id: 12, name: 'Mühendislik Fakültesi' },
  { id: 13, name: 'Mühendislik ve Doğa Bilimleri Fakültesi' },
  { id: 14, name: 'Orman Fakültesi' },
  { id: 15, name: 'Rektörlük' },
  { id: 16, name: 'Safranbolu Başak Cengiz Mimarlık Fakültesi' },
  { id: 17, name: 'Safranbolu Fethi Toker Güzel Sanatlar ve Tasarım Fakültesi' },
  { id: 18, name: 'Safranbolu Turizm Fakültesi' },
  { id: 19, name: 'Safranbolu Türker İnanoğlu İletişim Fakültesi' },
  { id: 20, name: 'Sağlık Bilimleri Fakültesi' },
  { id: 21, name: 'Teknoloji Fakültesi' },
  { id: 22, name: 'Tıp Fakültesi' },
];

// Ön Lisans birimleri — aynı sistemden (Akademik Birimler → Ön Lisans)
export const FACULTIES_ONLISANS: Faculty[] = [
  { id: 1, name: 'Adalet Meslek Yüksekokulu' },
  { id: 2, name: 'Bilişim Teknolojileri Meslek Yüksekokulu' },
  { id: 3, name: 'Eflani Meslek Yüksekokulu' },
  { id: 4, name: 'Eskipazar Meslek Yüksekokulu' },
  { id: 5, name: 'Safranbolu Şefik Yılmaz Dizdar Meslek Yüksekokulu' },
  { id: 6, name: 'Sağlık Hizmetleri Meslek Yüksekokulu' },
  { id: 7, name: 'Türkiye Odalar ve Borsalar Birliği Teknik Bilimler Meslek Yüksekokulu' },
  { id: 8, name: 'Yenice Meslek Yüksekokulu' },
];

// Sınav programı — şimdilik örnek (demo) veri.
// Gerçek sınav programı, yemek listesi/akademik takvim gibi sabit bir URL'de durmuyor —
// üniversite her dönem yeni bir duyuru linkiyle (genelde tek bir Excel dosyası, tüm bölümler
// bir arada) yayınlıyor, öğrenciler "ders kodu" sütunundan kendi dersini buluyor. Aktif bir
// sınav dönemi olmadığında güncel bir dosya da yok. Sınav dönemi başlayınca gerçek veriyle
// (ya da o dönemki duyuru linkine yönlendirmeyle) değiştirilmesi gerekiyor.
export const EXAM_SCHEDULE: ExamRow[] = [
  { id: 1, course: 'Devre Analizi', date: '12.08.2026', time: '10:00', room: 'B-204' },
  { id: 2, course: 'Robotik Sistemler', date: '14.08.2026', time: '13:00', room: 'A-118' },
  { id: 3, course: 'Sinyaller ve Sistemler', date: '16.08.2026', time: '09:30', room: 'B-311' },
];

// Bu PDF'in adresi sabit — içeriği (o ayın listesi) üniversite tarafından her ay üzerine güncelleniyor,
// yani biz bu bağlantıyı bir kere kurduktan sonra bakım gerektirmiyor.
// KBÜ Hakkında ekranındaki tanıtım videosu (YouTube, gömülebilir formatta)
// autoplay=1: sayfa açılır açılmaz başlasın | mute=1: tarayıcılar sessiz olmayan otomatik oynatmaya izin vermiyor
// rel=0: video bitince alakasız önerilen videolar çıkmasın | modestbranding=1: YouTube logosu daha sade
// iv_load_policy=3: video üstündeki bilgi kutucukları/açıklamalar kapalı | fs=1: tam ekran ikonu kalsın (istersen 0 yapıp kaldırabiliriz)
// Not: YouTube'un kendi kuralları gereği küçük bir "YouTube" ibaresi tamamen kaldırılamıyor — bu bir platform kısıtı, kodla ilgisi yok.
export const ABOUT_VIDEO_URL: string = 'https://www.youtube.com/embed/-a_a2T-RFcM?autoplay=1&mute=1&rel=0&modestbranding=1&iv_load_policy=3&fs=1';

export const FOOD_MENU_URL: string = 'https://sks.karabuk.edu.tr/yuklenen/dosyalar/126111201782731.pdf';

// Akademik takvim türleri — her biri ayrı bir PDF, seçim yapınca ilgili PDF gösteriliyor
export const CALENDAR_OPTIONS: CalendarOption[] = [
  { id: 'undergrad', label: 'Önlisans-Lisans', url: 'https://akademiktakvim.karabuk.edu.tr/yuklenen/dosyalar/12614072026122150.pdf' },
  { id: 'grad', label: 'Lisansüstü', url: 'https://akademiktakvim.karabuk.edu.tr/yuklenen/dosyalar/12614072026144347.pdf' },
  { id: 'dentistry', label: 'Diş Hekimliği', url: 'https://akademiktakvim.karabuk.edu.tr/yuklenen/dosyalar/12614072026145425.pdf' },
  { id: 'prep', label: 'Yabancı Diller Hazırlık', url: 'https://akademiktakvim.karabuk.edu.tr/yuklenen/dosyalar/12614072026145559.pdf' },
  { id: 'summer', label: 'Yaz Okulu', url: 'https://akademiktakvim.karabuk.edu.tr/yuklenen/dosyalar/12614072026145724.pdf' },
];

// Desteklenen diller — yeni bir dil eklemek için buraya bir satır + strings.js'e bir bölüm eklemen yeterli
export const LANGS: LangOption[] = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
];

// Bugünün menüsü — bekleme ekranında gösterilir. Tarih anahtarı 'YYYY-MM-DD' formatında.
// ÖNEMLİ: Bu veri otomatik çekilmiyor, üniversitenin PDF'inden elle kopyalanıyor.
// Neden otomatik olmadığını App.jsx'teki not'ta ve sohbette anlattım — özetle: PDF'ten
// tablo verisi çıkarmak tarayıcı tarafında güvenilir şekilde yapılamıyor.
// Her ayın başında bu objeyi PDF'e bakarak güncellemen gerekiyor.
export const TODAYS_MENU_BY_DATE: Record<string, string[]> = {
  '2026-08-03': ['Ezogelin Çorba', 'Tavuk Döner', 'Pirinç Pilavı', 'Ayran'],
  '2026-08-04': ['Şehriye Çorbası', 'Etli Nohut', 'Bulgur Pilavı', 'Cacık'],
  '2026-08-05': ['Kremalı Mantar Çorba', 'Taze Fasulye', 'Pirinç Pilavı', 'Güllaç'],
  '2026-08-06': ['Ayran Aşı Çorba', 'Misket Köfte', 'Fesleğenli Makarna', 'Salata'],
  '2026-08-07': ['Saray Çorba', 'Karışık Kızartma', 'Özbek Pilavı', 'Yoğurt'],
  '2026-08-10': ['Mercimek Çorba', 'Bezelye / Tavuk Adana', 'Bulgur Pilavı', 'Vişne Kompostosu'],
  '2026-08-11': ['Yayla Çorba', 'Fırın Köfte', 'Spagetti', 'Supangle'],
  '2026-08-12': ['Yüksük Çorba', 'Körili Tavuk Sote', 'Sebzeli Pirinç Pilavı', 'Ayran'],
  '2026-08-13': ['Ezogelin Çorba', 'Patlıcan Musakka', 'Şehriyeli Pirinç Pilavı', 'Yoğurt'],
  '2026-08-14': ['Ayran Aşı Çorba', 'Et Sote', 'Bulgur Pilavı', 'Mevsim Salata'],
  '2026-08-17': ['Toyga Çorba', 'Kuru Köfte / Patates Kızartması', 'Bulgur Pilavı', 'Çoban Salata'],
  '2026-08-18': ['Keşkek Çorbası', 'Yoğurtlu Mantı', 'Kabak Kalye', 'Karpuz'],
  '2026-08-19': ['Saray Çorba', 'Etli Kuru Fasulye', 'Pirinç Pilavı', 'Cacık'],
  '2026-08-20': ['Ayran Aşı Çorbası', 'Fırın Patates', 'Erişte', 'Mevsim Salata'],
  '2026-08-21': ['Şehriye Çorba', 'Nohutlu Pilavüstü Tiftik Tavuk', 'Çiğ Köfte - Turşu', 'Komposto'],
  '2026-08-24': ['Mercimek Çorba', 'Nohut', 'Pirinç Pilavı', 'Salata'],
  '2026-08-25': ['Keşkek Çorba', 'Mantar Soslu Fleminyon', 'Bulgur Pilavı', 'Ayran'],
  '2026-08-26': ['Tutmaç Çorba', 'İslim Köfte', 'Şehriyeli Pirinç Pilavı', 'Karpuz'],
  '2026-08-27': ['Düğün Çorba', 'Mevsim Türlü', 'Erişte', 'İrmik Helvası'],
  '2026-08-28': ['Minestrone Çorba', 'Şehriyeli Güveç', 'Kabak Kızartma', 'Yoğurt'],
  '2026-08-31': ['Ayran Aşı Çorba', 'Püreli Rosto Köfte', 'Soslu Spagetti', 'Meyve'],
  '2026-09-01': ['Mercimek Çorba', 'Etli Kuru Fasulye', 'Şehriyeli Pirinç Pilavı', 'Cacık'],
  '2026-09-02': ['Şehriye Çorba', 'Taze Fasulye', 'Makarna', 'Peynir Tatlısı'],
  '2026-09-03': ['Minestrone Çorba', 'Püreli Tavuk Fajita', 'Bulgur Pilavı', 'Ayran'],
  '2026-09-04': ['Ezogelin Çorba', 'Karışık Kızartma', 'Mengen Pilavı', 'Yoğurt'],
  '2026-09-07': ['Mercimek Çorba', 'Yoğurtlu Tavuk İskender', 'Pirinç Pilavı', 'Salata'],
  '2026-09-08': ['Kremalı Mantar Çorba', 'Biber Dolma', 'Spagetti', 'Yoğurt'],
  '2026-09-09': ['Yüksük Çorba', 'Çiftlik Köfte', 'Bulgur Pilavı', 'Supangle'],
  '2026-09-10': ['Ezogelin Çorba', 'Nohut', 'Pirinç Pilavı', 'Cacık'],
  '2026-09-11': ['Domates Çorbası', 'Şehriyeli Güveç', 'Kabak Kızartma / Yoğurt', 'Çoban Salata'],
  '2026-09-14': ['Toyga Çorba', 'Tavuk Burger', 'Elma Dilim Pat.Stick Ketçapmayonez', 'Meyve Suyu'],
  '2026-09-15': ['Minestrone Çorbası', 'Ankara Tava', 'Z.Y. Barbunya', 'Cacık'],
  '2026-09-16': ['Saray Çorba', 'Patlıcan Musakka', 'Pirinç Pilavı', 'Yoğurt'],
  '2026-09-17': ['Tutmaç Çorba', 'Fırın Köfte', 'Peynirli Milföy Börek', 'Meyve (Kavun)'],
  '2026-09-18': ['Şehriye Çorba', 'Nohutlu Pilavüstü Tiftik Tavuk', 'Çiğ Köfte - Turşu', 'Ayran'],
  '2026-09-21': ['Ezogelin Çorba', 'Bezelye / Tavuk Adana', 'Pirinç Pilavı', 'Cacık'],
  '2026-09-22': ['Mercimek Çorba', 'İzmir Köfte', 'Spagetti', 'Meyve'],
  '2026-09-23': ['Düğün Çorba', 'Mevsim Türlü', 'Erişte', 'Baklava'],
  '2026-09-24': ['Keşkek Çorba', 'Domates Soslu Piliç Şinitzel', 'Pirinç Pilavı', 'Ayran'],
  '2026-09-25': ['Yayla Çorba', 'Et Döner', 'Bulgur Pilavı', 'Salata'],
  '2026-09-28': ['Kremalı Mantar Çorba', 'Et (Köfte) Burger', 'Elma Dilim Pat.Stick Ketçapmayonez', 'Ayran'],
  '2026-09-29': ['Mercimek Çorba', 'Etli Nohut', 'Bulgur Pilavı', 'Cacık'],
  '2026-09-30': ['Şehriye Çorba', 'Patates Oturtma', 'Pirinç Pilavı', 'Salata'],
};

// Galeri görselleri — dosyaları public/gallery klasörüne koyunca otomatik görünür
export const GALLERY_IMAGES: GalleryImageItem[] = [
  { id: 1, src: '/gallery/muhendislik.jpg', captionTr: 'Mühendislik ve Doğa Bilimleri Fakültesi', captionEn: 'Faculty of Engineering and Natural Sciences' },
  { id: 2, src: '/gallery/muhendislik-2.jpg', captionTr: 'Mühendislik ve Doğa Bilimleri Fakültesi', captionEn: 'Faculty of Engineering and Natural Sciences' },
  { id: 3, src: '/gallery/kbu.jpg', captionTr: 'Karabük Üniversitesi', captionEn: 'Karabük University' },
];
