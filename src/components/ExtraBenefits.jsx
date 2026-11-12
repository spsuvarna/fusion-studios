const benefits = [
  ['01', 'Consultation first', 'Every visit starts with your goals, lifestyle and a clear recommendation.'],
  ['02', 'Specialist-led care', 'Dedicated professionals across hair, skin, nails and tattoo artistry.'],
  ['03', 'Premium, hygienic', 'Trusted products, sanitised tools and carefully prepared stations.'],
  ['04', 'Easy aftercare', 'Simple guidance that helps your result look better for longer.'],
]

const clientReviews = [
  { name: 'Himanshu V.', rating: '★★★★☆', score: '4 out of 5 stars', quote: '“Great haircuts, fantastic services, love the atmosphere.”', source: 'Public customer review' },
  { name: 'Roshan M.', rating: '★★★★★', score: '5 out of 5 stars', quote: '5-star outlet rating', source: 'Verified public listing' },
  { name: 'Priyanka P.', rating: '★★★★★', score: '5 out of 5 stars', quote: '5-star outlet rating', source: 'Verified public listing' },
]

const journey = [
  { number: '01', title: 'Explore', copy: 'Browse the seasonal rituals and choose the service that fits your goal.' },
  { number: '02', title: 'Share', copy: 'Send your service, preferred day and time through the quick booking form.' },
  { number: '03', title: 'Confirm', copy: 'Our team checks availability and confirms your appointment on WhatsApp.' },
  { number: '04', title: 'Arrive', copy: 'Begin with a personal consultation, then relax while our specialist takes over.' },
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
      <section className="Journey" aria-labelledby="journey-title">
        <div className="section-shell">
          <header className="journey-heading">
            <div><p className="eyebrow dark"><span></span> Simple from start to finish</p><h2 id="journey-title">Your visit,<br /><em>in four easy steps.</em></h2></div>
            <p>Discover a service, share your preference and receive a direct confirmation. No account, no advance payment and no complicated checkout.</p>
          </header>
          <ol className="journey-grid">
            {journey.map((step) => <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}
          </ol>
          <button className="button button-gold journey-button" type="button" onClick={onBookClick}>Start your booking <span>→</span></button>
        </div>
      </section>
      <section className="Reviews" id="reviews" aria-labelledby="reviews-title">
        <div className="section-shell">
          <header className="reviews-heading"><p className="eyebrow dark"><span></span> What our clients say</p><h2 id="reviews-title">Trusted locally.<br /><em>Rated beautifully.</em></h2><p className="reviews-summary"><strong>4.9</strong> from public customer ratings for the JB Nagar studio.</p></header>
          <div className="review-grid">
            {clientReviews.map((review, index) => <article className={index === 1 ? 'offset' : ''} key={review.name}><div className="review-stars" aria-label={review.score}>{review.rating}</div><blockquote>{review.quote}</blockquote><footer><span>{review.name.charAt(0)}</span><div><strong>{review.name}</strong><small>{review.source}</small></div></footer></article>)}
          </div>
          <div className="reviews-links"><a href="https://www.google.com/maps/search/?api=1&query=19.1073983%2C72.8673575" target="_blank" rel="noreferrer">Open Google reviews ↗</a><a href="https://magicpin.in/Mumbai/Jb-Nagar/Beauty/Fusion-Studios/store/64547" target="_blank" rel="noreferrer">View verified listing ↗</a></div>
          <div className="reviews-cta"><span>Ready to plan your visit?</span><button type="button" onClick={onBookClick}>Book an appointment →</button></div>
        </div>
      </section>
    </>
  )
}
