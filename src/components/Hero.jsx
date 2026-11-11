import React, { useState } from 'react'
import './Hero.css'

export default function Hero({ onBookClick }) {
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
    <section className="Hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow"></div>
        <div className="hero-dots"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-left">
          <span className="pre-badge">
            <i className="fas fa-umbrella"></i> PRE-MONSOON OFFER
          </span>
          <h1 className="hero-title">
            PRE-MONSOON
            <em>Makeover</em>
            <span>FESTIVAL</span>
          </h1>
          <p className="hero-tagline">LOOK FRESH. FEEL CONFIDENT. MONSOON READY!</p>
          <p className="hero-urgency">LIMITED PERIOD OFFER — Book before stocks run out</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onBookClick}>
              <i className="fas fa-calendar-check"></i> Book Your Appointment
            </button>
            <a href="#offers" className="btn btn-ghost">
              View Packages <i className="fas fa-arrow-down"></i>
            </a>
          </div>

          <div className="hero-stats">
            <div><strong>40%</strong><span>Off on Body Polish</span></div>
            <div><strong>25%</strong><span>Off Facial (Members)</span></div>
            <div><strong>Free</strong><span>Membership</span></div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-badge">
            <span className="badge-top">PRE-MONSOON</span>
            <span className="badge-mid">OFFER</span>
            <span className="badge-bottom">Limited Period</span>
          </div>
          <div className="hero-image">
            <div className="hero-image-inner">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}