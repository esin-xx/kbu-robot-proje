import type { Dispatch, SetStateAction } from 'react';
import { styles } from './styles';
import { LANGS } from './data';
import type { Lang } from './types';

interface TopBarProps {
  batteryLevel: number;
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
  langMenuOpen: boolean;
  setLangMenuOpen: Dispatch<SetStateAction<boolean>>;
  timeStr: string;
}

// Her ekranda sabit görünen üst bar: logo + fakülte adı, pil göstergesi, dil seçici, saat.
export default function TopBar({ batteryLevel, lang, setLang, langMenuOpen, setLangMenuOpen, timeStr }: TopBarProps) {
  return (
    <div style={styles.topBar}>
      <div style={styles.brand}>
        <img src="/logo-kbu.png" alt="Karabük Üniversitesi logosu" style={styles.logo} />
        <span style={styles.eyebrow}>KARABÜK ÜNİVERSİTESİ · MÜHENDİSLİK VE DOĞA BİLİMLERİ FAKÜLTESİ</span>
      </div>
      <div style={styles.statusGroup}>
        <div style={styles.batteryWrap} title={`Pil: %${batteryLevel}`}>
          <div style={styles.batteryBody}>
            <div style={{ ...styles.batteryFill, width: `${batteryLevel}%` }} />
          </div>
          <div style={styles.batteryTip} />
        </div>

        <div style={styles.langWrap}>
          <button style={styles.langToggle} onClick={() => setLangMenuOpen((open) => !open)}>
            🌐 {LANGS.find((l) => l.code === lang)?.label}
          </button>
          {langMenuOpen && (
            <div style={styles.langDropdown}>
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  style={{ ...styles.langOption, ...(lang === l.code ? styles.langOptionActive : {}) }}
                  onClick={() => {
                    setLang(l.code);
                    setLangMenuOpen(false);
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <span style={styles.clock}>{timeStr}</span>
      </div>
    </div>
  );
}
