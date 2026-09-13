import type { Dispatch, SetStateAction } from 'react';
import { styles } from '../styles';
import { FOOD_MENU_URL, CALENDAR_OPTIONS } from '../data';
import type { Strings, GeneralTab, SetMode } from '../types';

interface GeneralScreenProps {
  strings: Strings;
  generalTab: GeneralTab;
  setGeneralTab: Dispatch<SetStateAction<GeneralTab>>;
  setMode: SetMode;
  setSelectedCalendarId: Dispatch<SetStateAction<string>>;
}

// "Genel Bilgiler" ekranı — 2 sekme: yemek listesi (PDF gömülü) ve akademik takvim türleri listesi.
// Bir takvim türü seçilince App.tsx mode'u 'calendarView' yapıyor, o zaman CalendarViewScreen gösteriliyor.
export function GeneralScreen({ strings, generalTab, setGeneralTab, setMode, setSelectedCalendarId }: GeneralScreenProps) {
  return (
    <div style={styles.findWrap}>
      <div style={styles.tabRow}>
        {(['menu', 'calendar'] as GeneralTab[]).map((tab) => (
          <button
            key={tab}
            style={{ ...styles.tabBtn, ...(generalTab === tab ? styles.tabBtnActive : {}) }}
            onClick={() => setGeneralTab(tab)}
          >
            {tab === 'menu' ? strings.tabMenu : strings.tabCalendar}
          </button>
        ))}
      </div>

      {generalTab === 'menu' && (
        <div style={styles.linkOutBox}>
          <iframe src={`${FOOD_MENU_URL}#toolbar=0&navpanes=0&view=FitH`} title="Yemek Listesi" style={styles.pdfFrame} />
        </div>
      )}

      {generalTab === 'calendar' && (
        <div style={styles.calendarList}>
          {CALENDAR_OPTIONS.map((c) => (
            <button
              key={c.id}
              style={styles.profRow}
              onClick={() => {
                setSelectedCalendarId(c.id);
                setMode('calendarView');
              }}
            >
              <span style={styles.profName}>{c.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface CalendarViewScreenProps {
  selectedCalendarId: string;
}

// Seçilen akademik takvim PDF'ini tam ekran gösteren ayrı ekran.
export function CalendarViewScreen({ selectedCalendarId }: CalendarViewScreenProps) {
  const calendar = CALENDAR_OPTIONS.find((c) => c.id === selectedCalendarId);

  return (
    <div style={styles.linkOutBox}>
      <p style={styles.aboutSectionTitle}>{calendar?.label}</p>
      <iframe
        src={`${calendar?.url}#toolbar=0&navpanes=0&view=FitH`}
        title="Akademik Takvim"
        style={styles.pdfFrame}
      />
    </div>
  );
}
