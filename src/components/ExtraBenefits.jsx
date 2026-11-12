const benefits = [
  ['01', 'Consultation first', 'Every visit starts with your goals, lifestyle and a clear recommendation.'],
  ['02', 'Specialist-led care', 'Dedicated professionals across hair, skin, nails and tattoo artistry.'],
  ['03', 'Premium, hygienic', 'Trusted products, sanitised tools and carefully prepared stations.'],
  ['04', 'Easy aftercare', 'Simple guidance that helps your result look better for longer.'],
]

const studioValues = [
  { symbol: '01', title: 'Your look, not a template', copy: 'We use references as a starting point, then adapt every detail to your features, routine and comfort.' },
  { symbol: '02', title: 'Clarity before commitment', copy: 'You receive a clear service recommendation, expected outcome and price before we begin.' },
  { symbol: '03', title: 'Results that live well', copy: 'We balance the in-studio finish with realistic upkeep so your look works beautifully every day.' },
]

export default function ExtraBenefits({ onBookClick }) {
  return (
    <>
      <section className="Experience" id="experience" aria-labelledby="experience-title">
        <div className="section-shell experience-layout">
          <div className="experience-art" aria-hidden="true"><div className="experience-card"><span>4</span><small>crafts, one studio</small></div><div className="experience-lines"></div><p>Fusion<br /><em>feels different.</em></p></div>
          <div className="experience-copy">
            <p className="eyebrow"><span></span> The Fusion standard</p><h2 id="experience-title">Luxury is how<br /><em>you’re cared for.</em></h2>
            <p className="experience-lead">Great beauty service is equal parts craft and care. Our studio brings both into every appointment.</p>
            <div className="benefit-list">
              {benefits.map(([number, title, copy]) => <div className="benefit-row" key={title}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>
      <section className="Reviews" id="reviews" aria-labelledby="reviews-title">
        <div className="section-shell">
          <header className="reviews-heading"><p className="eyebrow dark"><span></span> Our approach</p><h2 id="reviews-title">More considered.<br /><em>More completely you.</em></h2></header>
          <div className="review-grid">
            {studioValues.map((value, index) => <article className={index === 1 ? 'offset' : ''} key={value.title}><div className="value-number">{value.symbol}</div><h3>{value.title}</h3><p>{value.copy}</p><span className="value-mark" aria-hidden="true">✦</span></article>)}
          </div>
          <div className="reviews-cta"><span>Ready for your own before & after?</span><button type="button" onClick={onBookClick}>Start with a consultation →</button></div>
        </div>
      </section>
    </>
  )
}
