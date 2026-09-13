import { styles } from '../styles';
import { DUYURULAR, TODAYS_MENU_BY_DATE } from '../data';
import type { SetMode, Strings, WeatherData } from '../types';

// Open-Meteo'nun weathercode'unu (WMO standardı) basit bir emoji ile eşliyoruz.
function weatherIcon(code: number): string {
  if (code === 0) return '☀️';
  if (code === 1 || code === 2) return '🌤️';
  if (code === 3) return '☁️';
  if (code === 45 || code === 48) return '🌫️';
  if (code >= 51 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 77) return '❄️';
  if (code >= 80 && code <= 82) return '🌦️';
  if (code >= 95) return '⛈️';
  return '🌡️';
}

interface IdleScreenProps {
  setMode: SetMode;
  timeStr: string;
  dateStr: string;
  todayKey: string;
  weather: WeatherData | null;
  duyuruIndex: number;
  strings: Strings;
}

// Robot boştayken gösterilen ekran: karşılama başlığı, saat, tarih, hava durumu,
// günün menüsü kartı, duyuru kartı. Ekranın herhangi bir yerine dokununca doğrudan
// ana menüye geçilir (ayrı bir karşılama ekranı artık yok).
export default function IdleScreen({ setMode, timeStr, dateStr, todayKey, weather, duyuruIndex, strings }: IdleScreenProps) {
  const todaysMenu = TODAYS_MENU_BY_DATE[todayKey];

  return (
    <div style={styles.idleWrap} onClick={() => setMode('menu')}>
      <img src="/logo-kbu.png" alt="" style={styles.idleWatermark} />

      <h1 style={styles.idleGreetTitle}>{strings.idleWelcomeTitle}</h1>

      <div style={styles.idleColumns}>
        <div style={styles.idleClockCol}>
          <span style={styles.idleClock}>{timeStr}</span>
          <p style={styles.idleDate}>{dateStr}</p>
          {weather && (
            <p style={styles.weatherLine}>
              {weatherIcon(weather.weathercode)} Karabük · {Math.round(weather.temperature)}°C
            </p>
          )}
        </div>

        <div style={styles.idleInfoCol}>
          {todaysMenu && (
            <div style={styles.todaysMenuCard}>
              <span style={styles.todaysMenuCardLabel}>🍽️ {strings.todaysMenuLabel}</span>
              <span style={styles.todaysMenuCardItems}>{todaysMenu.join(', ')}</span>
            </div>
          )}

          <div style={styles.announcementCard}>
            <span style={styles.announcementCardLabel}>📢 {strings.announcementsLabel}</span>
            <p style={styles.announcement}>{DUYURULAR[duyuruIndex]}</p>
          </div>

          <div style={styles.dotRow}>
            {DUYURULAR.map((_, i) => (
              <span key={i} style={{ ...styles.dot, ...(i === duyuruIndex ? styles.dotActive : {}) }} />
            ))}
          </div>
        </div>
      </div>

      <p style={styles.tapHint}>{strings.tapHint}</p>
    </div>
  );
}
