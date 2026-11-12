import heroImage from '../assets/fusion-salon-hero.jpg'

export default function Hero({ onBookClick }) {
  return (
    <section className="Hero" id="top" aria-labelledby="hero-title">
      <img className="hero-photo" src={heroImage} alt="A client enjoying a professional styling session at Fusion Studios" fetchPriority="high" />
      <div className="hero-shade" aria-hidden="true"></div>
      <div className="hero-rail" aria-hidden="true"><span>Beauty</span><i></i><span>Confidence</span><i></i><span>Craft</span></div>
      <div className="hero-content">
        <p className="eyebrow"><span></span> Pre-monsoon edit · Marol</p>
        <h1 id="hero-title">Your best look,<br /><em>beautifully</em> made.</h1>
        <p className="hero-intro">Hair, skin, nails and tattoo artistry—thoughtfully brought together by specialists who listen first.</p>
        <div className="hero-actions">
          <button className="button button-gold" type="button" onClick={onBookClick}>Book your experience <span>→</span></button>
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
