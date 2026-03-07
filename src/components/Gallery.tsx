import './Gallery.css'

// Placeholder gallery items — replace src with real photos
const items = [
  { id: 1, label: 'Court View', aspect: 'landscape' },
  { id: 2, label: 'Night Play', aspect: 'portrait' },
  { id: 3, label: 'The Lounge', aspect: 'portrait' },
  { id: 4, label: 'Match Day', aspect: 'landscape' },
  { id: 5, label: 'Facilities', aspect: 'square' },
  { id: 6, label: 'Community', aspect: 'square' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__header container">
        <span className="section-label">Gallery</span>
        <div className="gallery__header-row">
          <h2 className="section-heading gallery__heading">
            Experience Poncol<br />
            <em>in pictures</em>
          </h2>
          <p className="gallery__note">
            More photos coming soon.<br />Follow us on Instagram for updates.
          </p>
        </div>
      </div>

      <div className="gallery__grid container">
        {items.map(item => (
          <div key={item.id} className={`gallery__item gallery__item--${item.aspect}`}>
            <div className="gallery__placeholder">
              <span className="gallery__placeholder-icon">◻</span>
              <span className="gallery__placeholder-label">{item.label}</span>
            </div>
            <div className="gallery__overlay">
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery__cta container">
        <p>
          Follow us for the latest updates and behind-the-scenes content
        </p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gallery__ig-btn"
        >
          <span className="gallery__ig-icon">◎</span>
          @poncolpadelhouse
        </a>
      </div>
    </section>
  )
}
