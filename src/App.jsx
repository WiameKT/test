import { useCallback, useState } from 'react';
import { artworks } from './data/artworks.js';
import { ArtworkSection } from './components/ArtworkSection.jsx';

const contactInfo = [
  { label: 'Instagram', value: '@[your handle]' },
  { label: 'Email', value: '[professional address]' },
  { label: 'Location', value: 'France' },
  { label: 'Signature', value: 'WI' }
];

export default function App() {
  const [activeArtwork, setActiveArtwork] = useState(artworks[0]?.id ?? null);

  const handleEnterViewport = useCallback((artworkId) => {
    setActiveArtwork((current) => (current === artworkId ? current : artworkId));
  }, []);

  return (
    <div className="portfolio">
      <header className="cover" id="top">
        <div className="cover__veil" aria-hidden="true" />
        <div className="cover__inner">
          <p className="cover__badge">Draft Portfolio</p>
          <p className="cover__subtitle">Collection</p>
          <h1>The First Daughters</h1>
          <p className="cover__tagline">
            A series of illustrations exploring the beauty, the wound, and the
            transcendence of the sacred feminine.
          </p>
          <p className="cover__meta">WIKA (WI) · June → November 2025</p>
          <nav className="cover__nav" aria-label="Portfolio sections">
            <a href="#preface">Preface</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="preface" id="preface" aria-labelledby="preface-title">
          <div className="section-heading">
            <h2 id="preface-title">Introduction · Préface</h2>
            <p className="section-heading__note">A manifesto for the sacred feminine, in French and English.</p>
          </div>
          <div className="preface__content">
            <div className="preface__column" lang="fr" aria-label="Texte en français">
              <p>
                Les « Premières Filles » sont des visages qui portent la mémoire du
                monde. Chacune est un écho du sacré et du brisé — princesse, sorcière,
                ange déchu ou oracle silencieux. À travers elles, je cherche la grâce
                cachée dans la fragilité, la force qui se lève de la fracture.
              </p>
              <p>
                Mon regard se tisse de mysticisme, de douleur, d'élégance et de
                renaissance. Dans chaque portrait, je recueille les cicatrices comme
                une écriture sacrée, prête à s'illuminer.
              </p>
            </div>
            <div className="preface__column" lang="en" aria-label="English translation">
              <h3>English translation</h3>
              <p>
                The “First Daughters” are faces that carry the memory of the world. Each
                one is an echo of the sacred and the broken — princess, witch, fallen
                angel, or silent oracle. Through them, I seek to understand the hidden
                grace within fragility, the strength that rises from the fracture.
              </p>
              <p>
                My vision is woven from mysticism, pain, elegance, and rebirth. Every
                portrait gathers scars as a sacred language, poised to shimmer again.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery" id="gallery" aria-labelledby="gallery-title">
          <div className="section-heading">
            <h2 id="gallery-title">Main Gallery · Série principale</h2>
            <p className="section-heading__note">
              Scroll through each guardian individually. Titles crown the work, and the
              lore and circumstances unfurl beneath while a dedicated soundscape plays.
            </p>
          </div>
          <div className="gallery__stack" role="list">
            {artworks.map((artwork) => (
              <ArtworkSection
                key={artwork.id}
                artwork={artwork}
                onEnterViewport={handleEnterViewport}
                isActive={activeArtwork === artwork.id}
              />
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <h2 id="about-title">About the Artist · À propos</h2>
          </div>
          <div className="about__content">
            <p>
              WIKA is a visual artist whose universe blends mythology, surrealism, and
              introspection. Inspired by ancient symbols, textiles, and the poetry of
              gesture, she creates feminine portraits infused with mystery and inner
              strength. Each drawing — whether in graphite, ink, or watercolor — explores
              scars as a sacred language.
            </p>
            <p>
              WI is the signature that seals each piece: a vow to witness the beauty,
              the wound, and the transcendence that dwell together in every figure.
            </p>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="section-heading">
            <h2 id="contact-title">Contact & Digital Portfolio</h2>
            <p className="section-heading__note">Connect for commissions, exhibitions, or archival requests.</p>
          </div>
          <dl className="contact__list">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact__item">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="footer">
        <p>Copyright © 2025 WIKA – All rights reserved.</p>
        <a href="#top" className="footer__back">Back to top</a>
      </footer>
    </div>
  );
}