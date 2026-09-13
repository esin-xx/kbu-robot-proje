import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { styles } from '../styles';
import { ABOUT_VIDEO_URL, GALLERY_IMAGES, FACULTIES_LISANS, FACULTIES_ONLISANS } from '../data';
import type { Strings, Lang, AboutTab, DegreeLevel } from '../types';

interface AboutScreenProps {
  strings: Strings;
  lang: Lang;
  setGalleryIndex: Dispatch<SetStateAction<number | null>>;
}

// "KBÜ Hakkında" ekranı — 3 sekme: tanıtım videosu, fotoğraf galerisi, fakülteler listesi.
// Fakülteler listesi buraya taşındı çünkü üniversite geneline ait bir bilgi —
// "Fakülte Hakkında" ekranı artık sadece bizim fakültemize özel şeyleri (personel, sınav programı) gösteriyor.
export default function AboutScreen({ strings, lang, setGalleryIndex }: AboutScreenProps) {
  const [aboutTab, setAboutTab] = useState<AboutTab>('video');
  const [degreeLevel, setDegreeLevel] = useState<DegreeLevel>('lisans');

  return (
    <div style={styles.aboutWrap}>
      <div style={styles.tabRow}>
        {(['video', 'gallery', 'faculties'] as AboutTab[]).map((tab) => (
          <button
            key={tab}
            style={{ ...styles.tabBtn, ...(aboutTab === tab ? styles.tabBtnActive : {}) }}
            onClick={() => setAboutTab(tab)}
          >
            {tab === 'video' ? strings.videoCaption : tab === 'gallery' ? strings.galleryCaption : strings.tabFaculties}
          </button>
        ))}
      </div>

      {aboutTab === 'video' && (
        <div style={styles.aboutVideoFrame}>
          <iframe
            src={ABOUT_VIDEO_URL}
            title="Karabük Üniversitesi Tanıtım Videosu"
            style={styles.aboutVideoIframe}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {aboutTab === 'gallery' && (
        <div style={styles.galleryRow}>
          {GALLERY_IMAGES.map((img, i) => (
            <button key={img.id} style={styles.galleryThumb} onClick={() => setGalleryIndex(i)}>
              <img
                src={img.src}
                alt={lang === 'tr' ? img.captionTr : img.captionEn}
                style={styles.galleryThumbImg}
                onError={(e) => {
                  const imgEl = e.currentTarget;
                  imgEl.style.display = 'none';
                  const fallback = imgEl.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <span style={styles.galleryThumbFallback}>🖼️</span>
            </button>
          ))}
        </div>
      )}

      {aboutTab === 'faculties' && (
        <div style={styles.facultyListSection}>
          <div style={styles.tabRow}>
            {(['lisans', 'onlisans'] as DegreeLevel[]).map((lvl) => (
              <button
                key={lvl}
                style={{ ...styles.tabBtn, ...(degreeLevel === lvl ? styles.tabBtnActive : {}) }}
                onClick={() => setDegreeLevel(lvl)}
              >
                {lvl === 'lisans' ? strings.degreeLisans : strings.degreeOnlisans}
              </button>
            ))}
          </div>
          <div style={styles.facultyListFill}>
            {(degreeLevel === 'lisans' ? FACULTIES_LISANS : FACULTIES_ONLISANS).map((f) => (
              <div key={f.id} style={styles.facultyRow}>
                <span style={styles.profName}>{f.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
