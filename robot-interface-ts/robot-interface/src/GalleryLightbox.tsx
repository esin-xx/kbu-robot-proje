import type { Dispatch, SetStateAction } from 'react';
import { styles } from './styles';
import { GALLERY_IMAGES } from './data';
import type { Lang, Strings } from './types';

interface GalleryLightboxProps {
  galleryIndex: number | null;
  setGalleryIndex: Dispatch<SetStateAction<number | null>>;
  lang: Lang;
  strings: Strings;
}

// KBÜ Hakkında ekranındaki galeriye tıklanınca açılan büyük görsel penceresi.
// galleryIndex null ise hiçbir şey göstermiyoruz (kapalı durum).
export default function GalleryLightbox({ galleryIndex, setGalleryIndex, lang, strings }: GalleryLightboxProps) {
  if (galleryIndex === null) return null;

  const img = GALLERY_IMAGES[galleryIndex];

  return (
    <div style={styles.lightboxOverlay} onClick={() => setGalleryIndex(null)}>
      <div style={styles.lightboxBox} onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt="" style={styles.lightboxImg} />
        <p style={styles.lightboxCaption}>{lang === 'tr' ? img.captionTr : img.captionEn}</p>
        <div style={styles.lightboxNav}>
          <button
            style={styles.lightboxBtn}
            onClick={() => setGalleryIndex((galleryIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)}
          >
            ←
          </button>
          <button style={styles.lightboxBtn} onClick={() => setGalleryIndex(null)}>
            {strings.close}
          </button>
          <button style={styles.lightboxBtn} onClick={() => setGalleryIndex((galleryIndex + 1) % GALLERY_IMAGES.length)}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}
