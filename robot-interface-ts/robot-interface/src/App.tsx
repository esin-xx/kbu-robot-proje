import { useState, useEffect } from 'react';
import { styles } from './styles';
import { STRINGS } from './strings';
import { DUYURULAR } from './data';
import type { Mode, Lang, FacultyTab, GeneralTab, Professor, WeatherData } from './types';
import TopBar from './TopBar';
import GalleryLightbox from './GalleryLightbox';
import OperatorAccess from './OperatorAccess';
import IdleScreen from './screens/IdleScreen';
import MenuScreen from './screens/MenuScreen';
import AskScreen from './screens/AskScreen';
import FacultyScreen from './screens/FacultyScreen';
import MapScreen from './screens/MapScreen';
import AboutScreen from './screens/AboutScreen';
import { GeneralScreen, CalendarViewScreen } from './screens/GeneralScreen';

// Kampüs robotu kiosk arayüzü — bu dosya artık sadece "durumu tutan ve hangi ekranın
// gösterileceğine karar veren" merkez. Her ekranın kendi görünümü kendi dosyasında
// (screens/ klasörü) — bir ekranı değiştirmek istediğinde sadece o dosyaya dokunursun.
export default function App() {
  const [mode, setMode] = useState<Mode>('idle');
  const [lang, setLang] = useState<Lang>('tr');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const batteryLevel = 82; // mock — gerçek robot telemetrisi bağlanınca bir state'e dönüştürülecek
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [duyuruIndex, setDuyuruIndex] = useState(0);
  const [facultyTab, setFacultyTab] = useState<FacultyTab>('staff');
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [selectedProf, setSelectedProf] = useState<Professor | null>(null);
  const [generalTab, setGeneralTab] = useState<GeneralTab>('menu');
  const [selectedCalendarId, setSelectedCalendarId] = useState('undergrad');
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [preOperatorMode, setPreOperatorMode] = useState<Mode>('idle');
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null); // null = kapalı, sayı = açık slayt
  const strings = STRINGS[lang];

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setDuyuruIndex((i) => (i + 1) % DUYURULAR.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    // Karabük koordinatları — anahtar (API key) gerektirmeyen ücretsiz bir hava durumu servisi
    fetch('https://api.open-meteo.com/v1/forecast?latitude=41.2061&longitude=32.6204&current_weather=true')
      .then((r) => r.json())
      .then((data) => setWeather(data.current_weather))
      .catch(() => setWeather(null));
  }, []);

  const locale = lang === 'tr' ? 'tr-TR' : lang === 'ar' ? 'ar' : 'en-US';
  const isRTL = lang === 'ar';
  const timeStr = time.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateStr = time.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' });
  const todayKey = `${time.getFullYear()}-${String(time.getMonth() + 1).padStart(2, '0')}-${String(time.getDate()).padStart(2, '0')}`;

  const showBack = (['menu', 'find', 'ask', 'map', 'about', 'general', 'calendarView'] as Mode[]).includes(mode);

  const handleBack = () => {
    if (mode === 'calendarView') {
      setMode('general');
    } else if (mode === 'find' && selectedDept) {
      setSelectedDept(null);
      setSelectedProf(null);
    } else if (mode === 'map' || mode === 'about' || mode === 'general' || mode === 'ask' || mode === 'find') {
      setMode('menu');
    } else {
      setMode('idle');
    }
  };

  return (
    <div style={styles.root} dir={isRTL ? 'rtl' : 'ltr'}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&family=Cairo:wght@400;500;700&display=swap');
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseMic {
          0% { box-shadow: 0 0 0 0 rgba(200,16,46,0.4); }
          70% { box-shadow: 0 0 0 10px rgba(200,16,46,0); }
          100% { box-shadow: 0 0 0 0 rgba(200,16,46,0); }
        }
        @keyframes locationPulse {
          0% { r: 8; opacity: 0.6; }
          100% { r: 22; opacity: 0; }
        }
        .location-pulse-ring {
          animation: locationPulse 1.8s ease-out infinite;
        }
      `}</style>

      <TopBar
        batteryLevel={batteryLevel}
        lang={lang}
        setLang={setLang}
        langMenuOpen={langMenuOpen}
        setLangMenuOpen={setLangMenuOpen}
        timeStr={timeStr}
      />

      <div style={{ ...styles.stage, justifyContent: mode === 'idle' || mode === 'about' || mode === 'menu' ? 'center' : 'flex-start' }}>
        {mode === 'idle' && (
          <IdleScreen
            setMode={setMode}
            timeStr={timeStr}
            dateStr={dateStr}
            todayKey={todayKey}
            weather={weather}
            duyuruIndex={duyuruIndex}
            strings={strings}
          />
        )}

        {mode === 'menu' && <MenuScreen setMode={setMode} strings={strings} />}

        {mode === 'find' && (
          <FacultyScreen
            strings={strings}
            facultyTab={facultyTab}
            setFacultyTab={setFacultyTab}
            selectedDept={selectedDept}
            setSelectedDept={setSelectedDept}
            selectedProf={selectedProf}
            setSelectedProf={setSelectedProf}
          />
        )}

        {mode === 'ask' && <AskScreen strings={strings} lang={lang} />}

        {mode === 'map' && <MapScreen strings={strings} />}

        {mode === 'about' && <AboutScreen strings={strings} lang={lang} setGalleryIndex={setGalleryIndex} />}

        {mode === 'general' && (
          <GeneralScreen
            strings={strings}
            generalTab={generalTab}
            setGeneralTab={setGeneralTab}
            setMode={setMode}
            setSelectedCalendarId={setSelectedCalendarId}
          />
        )}

        {mode === 'calendarView' && <CalendarViewScreen selectedCalendarId={selectedCalendarId} />}
      </div>

      <GalleryLightbox galleryIndex={galleryIndex} setGalleryIndex={setGalleryIndex} lang={lang} strings={strings} />

      {showBack && (
        <button style={styles.backLink} onClick={handleBack}>
          {strings.back}
        </button>
      )}

      <OperatorAccess
        mode={mode}
        setMode={setMode}
        preOperatorMode={preOperatorMode}
        setPreOperatorMode={setPreOperatorMode}
        pinInput={pinInput}
        setPinInput={setPinInput}
        pinError={pinError}
        setPinError={setPinError}
        batteryLevel={batteryLevel}
        lang={lang}
        strings={strings}
      />
    </div>
  );
}
