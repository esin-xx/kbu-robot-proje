import { useState } from 'react';
import { styles } from '../styles';
import { getPersonnelContext } from '../data';
import type { Strings, Lang } from '../types';

// "Soru sor" ekranı — soruyu backend'e (server.js) gönderir, backend de Gemini API'ye sorup
// cevabı geri döndürür. Backend ayrı bir terminalde `npm start` ile çalışıyor olmalı.
// Adres artık kodun içine yazılı değil, .env dosyasından (VITE_API_BASE_URL) okunuyor —
// örn. gerçek sunucuya geçtiğimizde tek bir yerden (kod değil, .env) değiştirilebilsin diye.
const BACKEND_URL = `${import.meta.env.VITE_API_BASE_URL}/api/ask`;

// Tarayıcının kendi yerleşik sesli okuma özelliği — ekstra kütüphane/API anahtarı gerekmiyor.
function speak(text: string) {
  if (!('speechSynthesis' in window)) return; // tarayıcı desteklemiyorsa sessizce geç
  window.speechSynthesis.cancel(); // önceki okuma sürüyorsa durdur
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'tr-TR';
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
}

// Tarayıcının kendi yerleşik konuşma tanıma özelliği (Chrome'da mevcut, Safari/Firefox'ta kısıtlı olabilir).
const SpeechRecognitionAPI = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

interface AskScreenProps {
  strings: Strings;
  lang: Lang;
}

export default function AskScreen({ strings, lang }: AskScreenProps) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [listening, setListening] = useState(false);

  const handleSend = async (text: string = question) => {
    if (!text.trim() || loading) return;
    setLoading(true);
    setError(false);
    setAnswer('');

    try {
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text, context: getPersonnelContext(), lang }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Bilinmeyen hata');
      setAnswer(data.answer);
      speak(data.answer);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const startListening = () => {
    if (!SpeechRecognitionAPI) {
      alert(strings.askNotSupported);
      return;
    }
    const recognition = new SpeechRecognitionAPI();
    recognition.lang = 'tr-TR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
      handleSend(transcript);
    };

    recognition.start();
  };

  return (
    <div style={styles.askWrap}>
      <h1 style={styles.greetTitle}>{strings.greetTitle}</h1>
      <p style={styles.greetSub}>{strings.greetSub}</p>

      <div style={styles.askInputRow}>
        <input
          style={{ ...styles.searchInput, flex: 1 }}
          placeholder={listening ? strings.askListening : strings.askPlaceholder}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
          autoFocus
        />
        <button
          style={{ ...styles.micBtn, ...(listening ? styles.micBtnActive : {}) }}
          onClick={startListening}
          aria-label="Sesli soru sor"
        >
          🎤
        </button>
        <button style={styles.cta} onClick={() => handleSend()} disabled={loading}>
          {loading ? strings.askSending : strings.askSend}
        </button>
      </div>

      {error && <p style={styles.pinErrorText}>{strings.askError}</p>}

      {answer && (
        <div style={styles.askAnswerCard}>
          <p style={styles.askAnswerText}>{answer}</p>
          <button style={styles.askReplayBtn} onClick={() => speak(answer)}>
            🔊 {strings.askReplay}
          </button>
        </div>
      )}
    </div>
  );
}
