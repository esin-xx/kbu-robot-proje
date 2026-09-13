import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { styles } from './styles';
import type { Mode, SetMode, Lang, Strings } from './types';

// PIN doğrulaması artık burada değil, backend'de yapılıyor (server.js → /api/operator-auth) —
// kodun içinde saklı bir şifre tutmak yerine, doğrulama isteği sunucuya gönderiliyor.
const AUTH_URL = `${import.meta.env.VITE_API_BASE_URL}/api/operator-auth`;

interface OperatorAccessProps {
  mode: Mode;
  setMode: SetMode;
  preOperatorMode: Mode;
  setPreOperatorMode: Dispatch<SetStateAction<Mode>>;
  pinInput: string;
  setPinInput: Dispatch<SetStateAction<string>>;
  pinError: boolean;
  setPinError: Dispatch<SetStateAction<boolean>>;
  batteryLevel: number;
  lang: Lang;
  strings: Strings;
}

// Gizli operatör erişim noktası: köşedeki dişli ikonu + PIN ekranı + operatör paneli.
// Bu üçü tek bir bileşende çünkü hep birlikte çalışıyorlar ve state'leri (pin, mod) paylaşıyorlar.
export default function OperatorAccess({
  mode,
  setMode,
  preOperatorMode,
  setPreOperatorMode,
  pinInput,
  setPinInput,
  pinError,
  setPinError,
  batteryLevel,
  lang,
  strings,
}: OperatorAccessProps) {
  const [checking, setChecking] = useState(false);

  const openAuth = () => {
    setPreOperatorMode(mode);
    setPinInput('');
    setPinError(false);
    setMode('operatorAuth');
  };

  const trySubmit = async () => {
    if (checking) return;
    setChecking(true);
    setPinError(false);
    try {
      const res = await fetch(AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: pinInput }),
      });
      const data = await res.json();
      if (res.ok && data.valid) {
        setMode('operator');
      } else {
        setPinError(true);
      }
    } catch (err) {
      setPinError(true);
    } finally {
      setChecking(false);
    }
  };

  return (
    <>
      <button style={styles.gearBtn} aria-label="Operatör erişimi" onClick={openAuth}>
        ⚙
      </button>

      {mode === 'operatorAuth' && (
        <div style={styles.lightboxOverlay} onClick={() => setMode(preOperatorMode)}>
          <div style={styles.operatorAuthBox} onClick={(e) => e.stopPropagation()}>
            <p style={styles.aboutSectionTitle}>{strings.operatorPinPrompt}</p>
            <input
              type="password"
              inputMode="numeric"
              maxLength={4}
              style={styles.searchInput}
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') trySubmit();
              }}
              autoFocus
            />
            {pinError && <p style={styles.pinErrorText}>{strings.operatorWrongPin}</p>}
            <button style={styles.cta} onClick={trySubmit} disabled={checking}>
              {checking ? strings.askSending : strings.operatorLogin}
            </button>
          </div>
        </div>
      )}

      {mode === 'operator' && (
        <div style={styles.lightboxOverlay}>
          <div style={styles.operatorBox}>
            <h2 style={styles.profDetailName}>{strings.operatorTitle}</h2>
            <p style={styles.aboutSectionTitle}>{strings.operatorSystemStatus}</p>
            <div style={styles.profList}>
              <div style={styles.facultyRow}>
                <span style={styles.profDept}>{strings.operatorBattery}</span>
                <span style={styles.profName}>%{batteryLevel}</span>
              </div>
              <div style={styles.facultyRow}>
                <span style={styles.profDept}>{strings.operatorActiveScreen}</span>
                <span style={styles.profName}>{preOperatorMode}</span>
              </div>
              <div style={styles.facultyRow}>
                <span style={styles.profDept}>{strings.operatorLang}</span>
                <span style={styles.profName}>{lang.toUpperCase()}</span>
              </div>
            </div>
            <div style={styles.lightboxNav}>
              <button style={styles.lightboxBtn} onClick={() => alert('Demo: gerçek sistemde yeniden başlatma komutu gönderilecek.')}>
                {strings.operatorRestart}
              </button>
              <button style={styles.lightboxBtn} onClick={() => alert('Demo: önbellek temizleme komutu gönderilecek.')}>
                {strings.operatorClearCache}
              </button>
            </div>
            <button style={styles.cta} onClick={() => setMode('idle')}>
              {strings.operatorExit}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
