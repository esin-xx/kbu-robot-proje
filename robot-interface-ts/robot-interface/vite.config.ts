import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Bu, `npm create vite` ile gelen varsayılan vite.config.ts'in yerine geçiyor.
// Tek fark: `defineConfig`'i 'vite' yerine 'vitest/config'den alıyoruz — bu, aynı dosyada
// hem normal Vite ayarlarını hem test ayarlarını (aşağıdaki "test" bölümü) tutabilmemizi sağlıyor.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // testler tarayıcı yokken, sahte bir DOM üzerinde çalışıyor
    globals: true, // describe/it/expect gibi fonksiyonları her dosyada import etmene gerek kalmıyor
    setupFiles: './src/setupTests.ts',
  },
});
