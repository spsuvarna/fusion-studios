const services = [
  { number: '01', category: 'Hair studio', name: 'The Signature Reset', description: 'Precision cut, finish and a restorative spa ritual tailored to your hair.', price: '₹999', duration: '60–75 min', featured: true },
  { number: '02', category: 'Skin atelier', name: 'Monsoon Glow Facial', description: 'A clarifying, hydration-first facial designed for humid Mumbai days.', price: '₹1,499', duration: '60 min' },
  { number: '03', category: 'Nail bar', name: 'Hands & Feet Edit', description: 'Detailed manicure and pedicure finished with your choice of colour.', price: '₹1,999', duration: '90 min' },
  { number: '04', category: 'Hair transformation', name: 'Colour + Keratin', description: 'Dimensional global colour paired with a smooth, polished keratin finish.', price: '₹3,499', duration: '3–4 hrs' },
  { number: '05', category: 'Hair therapy', name: 'Cysteine Hair Botox', description: 'Deep repair for softness, shine and easier everyday styling.', price: '₹3,999', duration: '3 hrs' },
  { number: '06', category: 'Body ritual', name: 'Polish & Rejuvenate', description: 'A gentle full-body polish followed by a nourishing finish.', price: '₹1,499', duration: '75 min' },
]

export default function Offers({ onBookClick }) {
  return (
    <section className="Services" id="services" aria-labelledby="services-title">
      <div className="section-shell">
        <header className="section-heading">
          <div><p className="eyebrow dark"><span></span> Curated for the season</p><h2 id="services-title">Small rituals.<br /><em>Remarkable results.</em></h2></div>
          <p>Considered services, transparent pricing and no rushed appointments. Choose a ritual below or let our experts guide you.</p>
        </header>
        <div className="service-grid">
          {services.map((service) => (
            <article className={`service-card ${service.featured ? 'featured' : ''}`} key={service.name}>
              <div className="service-top"><span>{service.number}</span><small>{service.category}</small></div>
              <div className="service-symbol" aria-hidden="true">✦</div>
              <h3>{service.name}</h3><p>{service.description}</p>
              <div className="service-meta"><span>From <strong>{service.price}</strong></span><span>{service.duration}</span></div>
              <button type="button" onClick={() => onBookClick(`${service.name} — ${service.price}`)}>Reserve this ritual <span>→</span></button>
            </article>
          ))}
        </div>
        <p className="offer-note">Limited-period package pricing. Final quote may vary by hair length and consultation.</p>
      </div>
    </section>
  )
}
