/// <reference types="vite/client" />

// Vite, .env dosyasındaki değişkenleri otomatik olarak import.meta.env üzerinden erişilebilir yapıyor.
// Bu dosya, "VITE_API_BASE_URL" gibi kendi eklediğimiz değişkenlerin de TypeScript tarafından
// tanınmasını sağlıyor — yoksa "import.meta.env.VITE_API_BASE_URL" için "bu ne, bilmiyorum" hatası alırız.
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
