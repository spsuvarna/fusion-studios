import React from 'react'
import './Offers.css'

export default function Offers({ onBookClick }) {
  const packages = [
    {
      name: 'Haircut + Shave + Hair Color + Spa',
      price: '₹999',
      duration: '15 min',
      badge: '15 min'
    },
    {
      name: 'Haircut + Shave + Basic Cleanup + D-Tan Free',
      price: '₹1499',
      duration: '30 min',
      badge: '30 min'
    },
    {
      name: 'Haircut + Shave + Anti-Dandruff Treatment',
      price: '₹1199',
      duration: '30 min',
      badge: '30 min'
    },
    {
      name: 'Haircut + Shave + Hair Color + Pedicure',
      price: '₹1499',
      duration: '45 min',
      badge: '45 min'
    },
    {
      name: 'Haircut + Luxury Hair Spa',
      price: '₹1999',
      duration: '60 min',
      badge: '60 min'
    },
    {
      name: 'Full Hands + Full Legs + Underarms Waxing',
      price: '₹1199',
      duration: '45 min',
      badge: '45 min'
    }
  ]

  return (
    <section className="Offers" id="offers">
      <div className="container">
        <h2 className="section-title">LIMITED PERIOD OFFERS</h2>
        <div className="offers-grid">
          {packages.map((offer, index) => (
            <div key={index} className="offer-card">
              <div className="offer-badge">
                <span className="offer-badge-duration">{offer.badge}</span>
              </div>
              <div className="offer-name">{offer.name}</div>
              <div className="offer-price">{offer.price}</div>
              <div className="offer-details">
                {offer.duration}
              </div>
              <button
                className="btn btn-small"
                onClick={() => onBookClick()}
                aria-label="Book this package"
              >
                <i className="fas fa-plus-circle"></i> Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}