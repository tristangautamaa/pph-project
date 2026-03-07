import './WhyPadel.css'

const reasons = [
  {
    icon: '⚡',
    title: 'Fast & Exciting',
    description:
      'Padel is one of the most dynamic racket sports in the world. Points are fast, rallies are long, and the action never stops.',
  },
  {
    icon: '👥',
    title: 'Social by Nature',
    description:
      'Always played in doubles, padel is the perfect sport for friends, families, and colleagues to enjoy together.',
  },
  {
    icon: '📈',
    title: 'Easy to Learn',
    description:
      'The underarm serve and enclosed glass walls mean beginners progress rapidly. You\'ll be playing real rallies from your very first session.',
  },
  {
    icon: '🏆',
    title: 'Great Workout',
    description:
      'A one-hour padel session burns significant calories while being gentle on joints — ideal for all ages and fitness levels.',
  },
  {
    icon: '🌍',
    title: 'Fastest Growing Sport',
    description:
      'With over 25 million players globally and growing rapidly in Southeast Asia, padel is the sport of the moment.',
  },
  {
    icon: '🎯',
    title: 'Strategic Depth',
    description:
      'The glass walls add a unique tactical dimension — angles, rebounds, and positioning create endless strategic possibilities.',
  },
]

export default function WhyPadel() {
  return (
    <section className="why-padel" id="why-padel">
      {/* Background accent */}
      <div className="why-padel__bg-accent" />

      <div className="container">
        <div className="why-padel__header">
          <span className="section-label section-label--light">The Sport</span>
          <h2 className="section-heading why-padel__heading">
            Why the world<br />is falling in love<br />with <em>padel</em>
          </h2>
        </div>

        <div className="why-padel__grid">
          {reasons.map((reason) => (
            <div key={reason.title} className="why-card">
              <div className="why-card__icon">{reason.icon}</div>
              <h3 className="why-card__title">{reason.title}</h3>
              <p className="why-card__text">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote className="why-padel__quote">
          <p>
            "Padel is the sport that brings people together — easy enough for anyone to play,
            deep enough to keep you coming back for years."
          </p>
          <cite>— The Poncol Padel Community</cite>
        </blockquote>
      </div>
    </section>
  )
}
