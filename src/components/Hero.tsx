import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background layers */}
      <div className="hero__bg">
        <div className="hero__bg-pattern" />
        <div className="hero__bg-overlay" />
      </div>

      {/* Decorative side text */}
      <span className="hero__side-text hero__side-text--left">Jakarta Selatan</span>
      <span className="hero__side-text hero__side-text--right">Est. 2024</span>

      {/* Main content */}
      <div className="hero__content container">
        <div className="hero__logo-wrap fade-up">
          <img src="/logo.png" alt="Poncol Padel House" className="hero__logo" />
        </div>

        <div className="hero__divider fade-up fade-up-delay-1">
          <span className="hero__divider-line" />
          <span className="hero__divider-icon">◆</span>
          <span className="hero__divider-line" />
        </div>

        <p className="hero__tagline fade-up fade-up-delay-2">
          Where the game meets <em>elegance</em>
        </p>

        <p className="hero__sub fade-up fade-up-delay-3">
          Premium padel courts in the heart of Cilandak, South Jakarta
        </p>

        <div className="hero__actions fade-up fade-up-delay-4">
          <a href="#contact" className="btn btn--primary">Book a Court</a>
          <a href="#about" className="btn btn--ghost">Discover More</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
