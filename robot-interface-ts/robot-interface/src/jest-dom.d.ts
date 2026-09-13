// Bu dosya, @testing-library/jest-dom'un eklediği "toBeInTheDocument()" gibi test
// eşleştiricilerinin (matcher) tiplerini TypeScript'e tanıtır — yoksa derleme (tsc)
// bunları "böyle bir şey yok" diye reddeder, testler çalışsa bile.
// Not: jest-dom'un varsayılan tip dosyası Jest'e göre yazılmış; biz Vitest kullandığımız
// için özellikle "/vitest" ucundaki tip dosyasını referans vermemiz gerekiyor.
/// <reference types="@testing-library/jest-dom/vitest" />
