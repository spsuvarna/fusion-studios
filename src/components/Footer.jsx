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
        <div className="footer-column"><small>Visit us</small><h3>10 A1, Mahavir Nagar</h3><p>Bhawani Nagar Road, near SevenHills Hospital, Andheri East, Mumbai 400059</p><a className="footer-action" href="https://www.google.com/maps/dir/?api=1&destination=19.1073983%2C72.8673575" target="_blank" rel="noreferrer">Get directions ↗</a></div>
        <div className="footer-column"><small>Opening hours</small><h3>Open daily</h3><p>Monday–Sunday<br /><strong>9:00 AM–10:00 PM</strong></p><p className="footer-fineprint">Please call for holiday-hour changes.</p></div>
        <div className="footer-column"><small>Contact</small><h3><a href="tel:+919833769666">+91 98337 69666</a></h3><a href="https://wa.me/919833769666" target="_blank" rel="noreferrer">WhatsApp us ↗</a><a href="mailto:fusionstudio65@gmail.com">fusionstudio65@gmail.com</a></div>
      </div>
      <div className="section-shell footer-bottom"><span>© {year} Fusion Studios. All rights reserved.</span><span>Crafted for confidence.</span></div>
    </footer>
  )
}
