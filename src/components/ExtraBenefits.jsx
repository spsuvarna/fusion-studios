import React from 'react'
import './ExtraBenefits.css'

export default function ExtraBenefits() {
  return (
    <section className="ExtraBenefits">
      <div className="container">
        <h2 className="section-title">EXTRA BENEFITS</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <i className="fas fa-bolt benefit-icon"></i>
            <h3>Complimentary Hair Analysis</h3>
            <p>We analyze your hair type, scalp condition, and provide personalized treatment recommendations before booking.</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-bell benefit-icon"></i>
            <h3>Monsoon Hair Care Tips</h3>
            <p>Receive exclusive tips on managing hair during humid weather to prevent frizz and damage.</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-shield-alt benefit-icon"></i>
            <h3>Membership Benefits Available</h3>
            <p>Enjoy special discounts and priority booking for our premium members.</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-box benefit-icon"></i>
            <h3>Premium Products & Expert Stylists</h3>
            <p>Experience high-quality salon products and expert stylists trained in monsoon care techniques.</p>
          </div>
        </div>
      </div>
    </section>
  )
}