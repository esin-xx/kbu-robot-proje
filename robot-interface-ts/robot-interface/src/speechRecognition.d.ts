// Web Speech API (SpeechRecognition), tarayıcılarda hâlâ "deneysel" sayıldığı için
// TypeScript'in standart kütüphanesinde tanımlı değil. Burada, bizim kullandığımız
// kadarıyla (tamamı değil) basit bir tip tanımı yapıyoruz — resmi bir paket (örn.
// @types/dom-speech-recognition) kurmak da bir alternatif ama şimdilik buna gerek yok.
interface SpeechRecognitionResultLike {
  transcript: string;
}

interface SpeechRecognitionEventLike {
  results: SpeechRecognitionResultLike[][];
}

interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  start: () => void;
}

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  }
}

export {};
