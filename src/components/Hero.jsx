import heroImage from '../assets/fusion-salon-hero.jpg'

export default function Hero({ onBookClick }) {
  return (
    <section className="Hero" id="top" aria-labelledby="hero-title">
      <img className="hero-photo" src={heroImage} alt="A client enjoying a professional styling session at Fusion Studios" fetchPriority="high" />
      <div className="hero-shade" aria-hidden="true"></div>
      <div className="hero-rail" aria-hidden="true"><span>Beauty</span><i></i><span>Confidence</span><i></i><span>Craft</span></div>
      <div className="hero-content">
        <p className="eyebrow"><span></span> Hair · Skin · Nails · Tattoo</p>
        <h1 id="hero-title">Look your best.<br /><em>Feel your best.</em></h1>
        <p className="hero-intro">Hair, skin, nail and tattoo services in Marol, Mumbai—delivered by specialists who listen first.</p>
        <div className="hero-details" aria-label="Location and opening hours">
          <span><i aria-hidden="true">⌖</i> Andheri East, Mumbai</span>
          <span><i aria-hidden="true">◷</i> Open daily · 9:00 AM–10:00 PM</span>
        </div>
        <div className="hero-actions">
          <button className="button button-gold" type="button" onClick={onBookClick}>Book an appointment <span>→</span></button>
          <a className="text-link" href="#services">Explore services <span>↓</span></a>
        </div>
        <div className="hero-proof" aria-label="Studio highlights">
          <div><strong>1:1</strong><span>Consultation</span></div><div><strong>100%</strong><span>Personalised care</span></div><div><strong>4</strong><span>Beauty disciplines</span></div>
        </div>
      </div>
      <div className="hero-note"><span className="hero-note-icon" aria-hidden="true">✦</span><div><small>Now featuring</small><strong>Pre-monsoon rituals</strong></div></div>
      <a className="scroll-cue" href="#services" aria-label="Scroll to services"><span></span>Scroll</a>
    </section>
  )
}
