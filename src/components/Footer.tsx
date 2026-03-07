import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Logo & tagline */}
        <div className="footer__brand">
          <img src="/logo.png" alt="Poncol Padel House" className="footer__logo" />
          <p className="footer__tagline">
            Where the game meets elegance.<br />
            Jakarta Selatan's premier padel destination.
          </p>
        </div>

        {/* Quick links */}
        <nav className="footer__nav">
          <span className="footer__nav-title">Navigation</span>
          <ul className="footer__nav-list">
            {['About', 'Courts', 'Why Padel', 'Gallery', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="footer__nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact quick */}
        <div className="footer__contact">
          <span className="footer__nav-title">Contact</span>
          <address className="footer__address">
            Jl. Poncol No.9A, RT.1/RW.7<br />
            Gandaria Sel., Kec. Cilandak<br />
            Jakarta Selatan 12420
          </address>
          <div className="footer__contact-links">
            <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer" className="footer__contact-link">
              WhatsApp
            </a>
            <a href="mailto:hello@poncolpadel.com" className="footer__contact-link">
              Email Us
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__contact-link">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">
          © {year} Poncol Padel House. All rights reserved.
        </p>
        <div className="footer__palette">
          {['#8D2B00', '#B55119', '#BE6731', '#76704C', '#545E45', '#1F2D16'].map(c => (
            <span key={c} className="footer__swatch" style={{ background: c }} title={c} />
          ))}
        </div>
      </div>
    </footer>
  )
}
