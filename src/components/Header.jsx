import React, { useState } from 'react'
import './Header.css'

export default function Header({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="Header">
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={(e) => e.preventDefault()}>
          <span className="logo-star">★</span>
          <span className="logo-text">FUSION<span>STUDIOS</span></span>
          <span className="logo-sub">SALON · COSMETOLOGY · TATTOO · NAIL</span>
        </a>

        <nav className="nav-links">
          <a href="#top" onClick={(e) => handleNavClick(e, 'top')}>Home</a>
          <a href="#offers" onClick={(e) => handleNavClick(e, 'offers')}>Offers</a>
          <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')}>Benefits</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </nav>

        <button className="nav-cta" onClick={onBookClick}>
          <i className="fas fa-calendar-check"></i> Book Appointment
        </button>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}>
          <a href="#top" onClick={(e) => handleNavClick(e, 'top')}>Home</a>
          <a href="#offers" onClick={(e) => handleNavClick(e, 'offers')}>Offers</a>
          <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')}>Benefits</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </div>
      )}
    </header>
  )
}