import React from 'react'
import './Header.css'

export default function Header({ onBookClick }) {
  return (
    <header className="Header">
      <div className="container nav-inner">
        <a href="#top" className="logo">
          <span className="logo-star">★</span>
          <span className="logo-text">FUSION<span>STUDIOS</span></span>
          <span className="logo-sub">SALON · COSMETOLOGY · TATTOO · NAIL</span>
        </a>

        <nav className="nav-links">
          <a href="#offers">Offers</a>
          <a href="#benefits">Benefits</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="nav-cta" onClick={onBookClick}>
          <i className="fas fa-calendar-check"></i> Book Appointment
        </button>

        <button className="nav-toggle" aria-label="Toggle menu">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  )
}