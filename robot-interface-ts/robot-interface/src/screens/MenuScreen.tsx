import { styles } from '../styles';
import type { SetMode, Strings } from '../types';

interface MenuScreenProps {
  setMode: SetMode;
  strings: Strings;
}

// Ana menü — 5 kartlık ızgara. Yeni bir ekran eklemek istersen buraya bir menuItems
// satırı ve App.tsx'e karşılık gelen bir mode dalı eklemen yeterli.
export default function MenuScreen({ setMode, strings }: MenuScreenProps) {
  const menuItems = [
    { id: 'find', title: strings.menuFind, subtitle: strings.menuFindSub },
    { id: 'ask', title: strings.menuAsk, subtitle: strings.menuAskSub },
    { id: 'map', title: strings.menuMap, subtitle: strings.menuMapSub },
    { id: 'about', title: strings.menuAbout, subtitle: strings.menuAboutSub },
    { id: 'general', title: strings.menuGeneral, subtitle: strings.menuGeneralSub },
  ];

  return (
    <div style={styles.menuWrap}>
      {menuItems.map((item) => (
        <button
          key={item.id}
          style={styles.menuCard}
          onClick={() => {
            if (item.id === 'find') setMode('find');
            else if (item.id === 'ask') setMode('ask');
            else if (item.id === 'map') setMode('map');
            else if (item.id === 'about') setMode('about');
            else if (item.id === 'general') setMode('general');
            else alert(`${item.title} ekranı bir sonraki adımda eklenecek.`);
          }}
        >
          <span style={styles.menuCardTitle}>{item.title}</span>
          <span style={styles.menuCardSub}>{item.subtitle}</span>
        </button>
      ))}
    </div>
  );
}
