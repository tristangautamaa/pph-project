import './Courts.css'

const courts = [
  {
    number: '01',
    name: 'The Main Court',
    description:
      'Our flagship court featuring panoramic viewing, professional-grade glass walls, and premium artificial turf. Perfect for tournaments and competitive play.',
    features: ['Glass walls', 'LED lighting', 'Premium turf', 'Scoreboard'],
  },
  {
    number: '02',
    name: 'The Garden Court',
    description:
      'Set against a lush green backdrop, this court offers a refreshing outdoor-inspired atmosphere while maintaining full weatherproof protection.',
    features: ['Semi-outdoor feel', 'Natural lighting', 'Green wall backdrop', 'Spectator area'],
  },
  {
    number: '03',
    name: 'The Practice Court',
    description:
      'Designed for training sessions and skill development, complete with ball machine capability and optimized for coaching environments.',
    features: ['Ball machine ready', 'Video analysis points', 'Coaching space', 'Reduced glare glass'],
  },
  {
    number: '04',
    name: 'The Social Court',
    description:
      'Our most popular court for casual games and social sessions. Easy access to the lounge area makes it perfect for friendly matches.',
    features: ['Lounge access', 'Casual-friendly setup', 'Social seating', 'Quick-change rooms'],
  },
]

export default function Courts() {
  return (
    <section className="courts" id="courts">
      <div className="courts__header container">
        <span className="section-label">Our Courts</span>
        <h2 className="section-heading courts__heading">
          Four courts, <em>one standard</em> — excellence
        </h2>
        <p className="courts__intro">
          Every court at Poncol Padel House is maintained to the highest standards,
          ensuring a premium experience regardless of which court you play on.
        </p>
      </div>

      <div className="courts__grid container">
        {courts.map((court) => (
          <article key={court.number} className="court-card">
            <div className="court-card__number">{court.number}</div>
            <div className="court-card__body">
              <h3 className="court-card__name">{court.name}</h3>
              <p className="court-card__desc">{court.description}</p>
              <ul className="court-card__features">
                {court.features.map(f => (
                  <li key={f} className="court-card__feature">
                    <span className="court-card__feature-dot" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* Amenities strip */}
      <div className="courts__amenities">
        <div className="container">
          <div className="amenities-strip">
            {['Changing Rooms', 'Pro Shop', 'Lounge & Café', 'Equipment Rental', 'Coaching Available', 'Parking'].map(a => (
              <div key={a} className="amenity-item">
                <span className="amenity-dot">◆</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
