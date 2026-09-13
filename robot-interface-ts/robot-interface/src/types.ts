// Bu dosya, birden fazla bileşenin/dosyanın ortak kullandığı "tip" tanımlarını tutar.
// Bir veri şeklini burada bir kere tanımlarsın, her yerde aynı kurallar geçerli olur —
// örneğin bir Professor'a olmayan bir alan eklemeye çalışırsan, kod çalışmadan önce
// (yazarken) hata alırsın.

// Uygulamanın gösterebileceği tüm ekranlar. Yeni bir ekran eklediğinde buraya da
// eklemen gerekir — TypeScript, unuttuğun her yeri sana hatırlatır.
export type Mode =
  | 'idle'
  | 'menu'
  | 'find'
  | 'ask'
  | 'map'
  | 'about'
  | 'general'
  | 'calendarView'
  | 'operatorAuth'
  | 'operator';

export type Lang = 'tr' | 'en' | 'ar';
export type FacultyTab = 'staff' | 'exam';
export type DegreeLevel = 'lisans' | 'onlisans';
export type GeneralTab = 'menu' | 'calendar';
export type AboutTab = 'video' | 'gallery' | 'faculties';

export interface Faculty {
  id: number;
  name: string;
}

// id'ler bölüm bazlı string (örn. "makine-3") — bir bölümü düzeltirken diğerlerinin
// numaralarını kaydırmak gerekmesin diye. phone/email/group çoğu kişide var ama hepsinde
// değil (üniversitenin kendi sitesinde de eksik olduğu yerler var), o yüzden opsiyonel (?).
export interface Professor {
  id: string;
  name: string;
  department: string;
  group?: string;
  phone?: string;
  email?: string;
}

export interface StaffMember {
  id: number;
  name: string;
  role: string;
  phone: string;
}

export interface CalendarOption {
  id: string;
  label: string;
  url: string;
}

export interface MapPoint {
  id: string;
  label: string;
  x: number;
  y: number;
  isRobot?: boolean;
}

export interface GalleryImageItem {
  id: number;
  src: string;
  captionTr: string;
  captionEn: string;
}

export interface ExamRow {
  id: number;
  course: string;
  date: string;
  time: string;
  room: string;
}

export interface LangOption {
  code: Lang;
  label: string;
}

// Open-Meteo'nun "current_weather" cevabının şekli
export interface WeatherData {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
}

// Ekranlar arası geçiş için kullanılan ortak fonksiyon tipi — App.tsx'teki setMode budur
export type SetMode = (mode: Mode) => void;

// STRINGS sözlüğünde onlarca farklı anahtar var — hepsini tek tek yazmak yerine,
// "hangi anahtar olursa olsun değeri string olmalı" diyoruz. Bu, en pratik çözüm;
// istersen ileride her anahtarı ayrı ayrı da tanımlayabiliriz (daha katı ama daha uzun).
export interface Strings {
  [key: string]: string;
}
