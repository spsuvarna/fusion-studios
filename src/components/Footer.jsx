export default function Footer({ onBookClick }) {
  const year = new Date().getFullYear()
  return (
    <footer className="Footer" id="contact">
      <div className="footer-marquee" aria-hidden="true"><span>Hair artistry</span><i>✦</i><span>Skin rituals</span><i>✦</i><span>Nail design</span><i>✦</i><span>Tattoo craft</span></div>
      <div className="section-shell footer-grid">
        <div className="footer-intro">
          <a className="brand footer-brand" href="#top"><span className="brand-mark">F</span><span className="brand-copy"><strong>Fusion <em>Studios</em></strong><small>Salon · Skin · Nail · Tattoo</small></span></a>
          <h2>Let’s make your next<br /><em>look the one.</em></h2>
          <button className="button button-gold" type="button" onClick={onBookClick}>Book an appointment <span>→</span></button>
        </div>
        <div className="footer-column"><small>Visit us</small><p>Marol, Andheri East<br />Mumbai, Maharashtra</p><a href="https://maps.google.com/?q=Marol+Mumbai" target="_blank" rel="noreferrer">Open in Maps ↗</a></div>
        <div className="footer-column"><small>Say hello</small><a href="tel:+919833769666">+91 98337 69666</a><a href="https://wa.me/919833769666" target="_blank" rel="noreferrer">WhatsApp us ↗</a><p>Appointments confirmed<br />directly by our team</p></div>
        <div className="footer-column"><small>Explore</small><a href="#services">Services</a><a href="#experience">Why Fusion</a><a href="#reviews">Our approach</a><a href="#top">Back to top ↑</a></div>
      </div>
      <div className="section-shell footer-bottom"><span>© {year} Fusion Studios. All rights reserved.</span><span>Crafted for confidence.</span></div>
    </footer>
  )
}
