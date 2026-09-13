import { styles } from '../styles';
import { MAP_POINTS } from '../data';
import type { Strings } from '../types';

interface MapScreenProps {
  strings: Strings;
}

// "Neredeyim?" ekranı — kullanıcının/robotun kampüs/bina içindeki anlık konumunu gösterir
// (gereksinim dokümanındaki "Neredeyim?" maddesi). Şu an SVG üzerinde sabit bir kat planı ve
// mock koordinatlar var; gerçek Nav2 bağlanınca robot konumu (kırmızı, nabız animasyonlu nokta)
// canlı verilerle güncellenecek — o zaman burada sadece MAP_POINTS'teki mock veriyi gerçek
// konum akışıyla değiştirmek yeterli olacak, ekranın geri kalanına dokunmaya gerek kalmayacak.
export default function MapScreen({ strings }: MapScreenProps) {
  const robotPoint = MAP_POINTS.find((p) => p.isRobot);
  const otherPoints = MAP_POINTS.filter((p) => !p.isRobot);

  return (
    <div style={styles.mapWrap}>
      <svg viewBox="0 0 520 300" style={styles.mapSvg}>
        <rect x="10" y="10" width="500" height="280" rx="12" fill="#FFFFFF" stroke="rgba(0,0,0,0.1)" />
        <rect x="30" y="130" width="460" height="40" fill="#F2F1ED" />

        {otherPoints.map((point) => (
          <g key={point.id}>
            <circle cx={point.x} cy={point.y} r={6} fill="#20211E" />
            <text x={point.x} y={point.y - 14} textAnchor="middle" style={styles.mapLabel}>
              {point.label}
            </text>
          </g>
        ))}

        {robotPoint && (
          <g>
            <circle
              className="location-pulse-ring"
              cx={robotPoint.x}
              cy={robotPoint.y}
              r={8}
              fill="none"
              stroke="#C8102E"
              strokeWidth={2}
            />
            <circle cx={robotPoint.x} cy={robotPoint.y} r={8} fill="#C8102E" />
            <text x={robotPoint.x} y={robotPoint.y - 18} textAnchor="middle" style={styles.mapRobotLabel}>
              {robotPoint.label}
            </text>
          </g>
        )}
      </svg>
      <p style={styles.mapHint}>{strings.mapHint}</p>
    </div>
  );
}
