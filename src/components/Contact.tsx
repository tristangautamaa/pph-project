import './Contact.css'

const hours = [
  { day: 'Monday – Friday', time: '06:00 – 22:00' },
  { day: 'Saturday', time: '06:00 – 22:00' },
  { day: 'Sunday & Holidays', time: '07:00 – 21:00' },
]

const contactItems = [
  {
    label: 'Address',
    value: 'Jl. Poncol No.9A, RT.1/RW.7,\nGandaria Sel., Kec. Cilandak,\nJakarta Selatan 12420',
    link: 'https://maps.google.com/?q=Jl.+Poncol+No.9A+Gandaria+Selatan+Cilandak+Jakarta+Selatan',
    linkLabel: 'Get Directions →',
  },
  {
    label: 'WhatsApp',
    value: '+62 xxx-xxxx-xxxx',
    link: 'https://wa.me/62',
    linkLabel: 'Chat with us →',
  },
  {
    label: 'Email',
    value: 'hello@poncolpadel.com',
    link: 'mailto:hello@poncolpadel.com',
    linkLabel: 'Send email →',
  },
  {
    label: 'Instagram',
    value: '@poncolpadelhouse',
    link: 'https://instagram.com',
    linkLabel: 'Follow us →',
  },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      {/* Top accent bar */}
      <div className="contact__accent-bar" />

      <div className="container">
        <div className="contact__grid">
          {/* Left */}
          <div className="contact__left">
            <span className="section-label section-label--light">Find Us</span>
            <h2 className="section-heading contact__heading">
              Come play.<br />
              We're <em>ready</em> for you.
            </h2>

            <p className="contact__text">
              Located in the heart of Cilandak, Poncol Padel House is easily
              accessible from all parts of South Jakarta. Whether you're booking
              a court or just dropping by, we'd love to see you here.
            </p>

            {/* Contact details */}
            <div className="contact__items">
              {contactItems.map(item => (
                <div key={item.label} className="contact__item">
                  <span className="contact__item-label">{item.label}</span>
                  <span className="contact__item-value">{item.value}</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__item-link"
                  >
                    {item.linkLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="contact__right">
            {/* Hours card */}
            <div className="contact__hours-card">
              <h3 className="contact__hours-title">Opening Hours</h3>
              <div className="contact__hours-list">
                {hours.map(h => (
                  <div key={h.day} className="contact__hour-row">
                    <span className="contact__hour-day">{h.day}</span>
                    <span className="contact__hour-time">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="contact__map">
              <iframe
                title="Poncol Padel House Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1!2d106.7961!3d-6.2786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnNDIuOSJTIDEwNsKwNDcnNDYuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact__map-overlay">
                <a
                  href="https://maps.google.com/?q=Jl.+Poncol+No.9A+Gandaria+Selatan+Cilandak+Jakarta+Selatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__map-btn"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
