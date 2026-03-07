import './About.css'

const stats = [
  { value: '4', label: 'Premium Courts' },
  { value: '7', label: 'Days a Week' },
  { value: '06–22', label: 'Operating Hours' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Left column */}
          <div className="about__left">
            <span className="section-label">Our Story</span>

            <h2 className="section-heading about__heading">
              A home for<br />
              <em>padel lovers</em><br />
              in South Jakarta
            </h2>

            <hr className="divider" />

            <p className="about__text">
              Nestled in the quiet streets of Gandaria Selatan, Poncol Padel House
              was born from a passion for the world's fastest-growing racket sport.
              We believe padel is more than a game — it's a lifestyle that brings
              people together.
            </p>

            <p className="about__text">
              Our courts are designed to deliver an exceptional playing experience,
              whether you're picking up a racket for the first time or competing
              at a serious level. Come play, connect, and be part of Jakarta's
              growing padel community.
            </p>

            <a href="#contact" className="about__link">
              Find Us
              <span className="about__link-arrow">→</span>
            </a>
          </div>

          {/* Right column */}
          <div className="about__right">
            {/* Decorative court illustration */}
            <div className="about__visual">
              <div className="about__court-art">
                <div className="court-frame">
                  <div className="court-inner">
                    <div className="court-net" />
                    <div className="court-line court-line--center" />
                    <div className="court-line court-line--service-left" />
                    <div className="court-line court-line--service-right" />
                  </div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="about__stats">
                {stats.map(stat => (
                  <div key={stat.label} className="about__stat">
                    <span className="about__stat-value">{stat.value}</span>
                    <span className="about__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
