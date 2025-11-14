import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export function ArtworkSection({ artwork, onEnterViewport, isActive }) {
  const sectionRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onEnterViewport(artwork.id);
          }
        });
      },
      {
        root: null,
        threshold: [0.35, 0.5, 0.75, 0.9]
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [artwork.id, onEnterViewport]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isActive) {
      const playAudio = () => {
        const promise = audio.play();
        if (promise !== undefined) {
          promise.catch(() => {
            // Autoplay restrictions can block playback until user interaction.
          });
        }
      };

      audio.loop = true;
      audio.volume = 0.5;
      playAudio();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isActive]);

  return (
    <section
      className={`artwork-section${isActive ? ' artwork-section--active' : ''}`}
      ref={sectionRef}
      aria-labelledby={`${artwork.id}-title`}
      role="listitem"
    >
      <div className="artwork-section__media">
        <p className="artwork-section__date-technique">{artwork.dateTechnique}</p>
        <h3 id={`${artwork.id}-title`} className="artwork-section__title">
          {artwork.title.fr}
          <span>{artwork.title.en}</span>
        </h3>
        <figure>
          <img src={artwork.image} alt={artwork.imageAlt} loading="lazy" />
          <figcaption className="sr-only">{artwork.title.en}</figcaption>
        </figure>
      </div>
      <div className="artwork-section__narrative">
        <article>
          <h4>1 · Lore of the OC</h4>
          {artwork.lore.map((paragraph, index) => (
            <p key={`lore-${index}`}>{paragraph}</p>
          ))}
        </article>
        <article>
          <h4>2 · What Led to This Piece</h4>
          {artwork.circumstances.map((paragraph, index) => (
            <p key={`circumstances-${index}`}>{paragraph}</p>
          ))}
        </article>
        <p className="artwork-section__availability">{artwork.status}</p>
      </div>
      <audio
        ref={audioRef}
        src={artwork.audio}
        preload="none"
        aria-label={`Soundscape for ${artwork.title.en}`}
      />
    </section>
  );
}

ArtworkSection.propTypes = {
  artwork: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.shape({
      fr: PropTypes.string.isRequired,
      en: PropTypes.string.isRequired
    }).isRequired,
    dateTechnique: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    lore: PropTypes.arrayOf(PropTypes.string).isRequired,
    circumstances: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired
  }).isRequired,
  onEnterViewport: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};