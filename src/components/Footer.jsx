import React from 'react'
import './Footer.css'

export default function Footer({ onBookClick }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>© 2026 Fusion Studios. All rights reserved.</p>
          <div className="contact-info">
            <span>📞 +91 98337 69666</span>
            <span>📍 Marol, Mumbai 10 minutes walking distance from Metro Station</span>
          </div>
        </div>
      </div>
    </footer>
  )
}