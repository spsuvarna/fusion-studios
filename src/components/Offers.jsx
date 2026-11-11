import React from 'react'
import './Offers.css'

export default function Offers({ onBookClick }) {
  const packages = [
    {
      name: 'Haircut + Shave + Hair Color + Spa',
      price: '₹999',
      duration: '15 minutes',
      includes: ['Haircut', 'Shave', 'Hair Color', 'Spa Treatment']
    },
    {
      name: 'Haircut + Shave + Basic Cleanup + D-Tan Free',
      price: '₹1499',
      duration: '30 minutes',
      includes: ['Haircut', 'Shave', 'Basic Cleanup', 'D-Tan Removal']
    },
    {
      name: 'Haircut + Shave + Anti-Dandruff Treatment',
      price: '₹1199',
      duration: '30 minutes',
      includes: ['Haircut', 'Shave', 'Anti-Dandruff Treatment']
    },
    {
      name: 'Haircut + Shave + Hair Color + Pedicure',
      price: '₹1499',
      duration: '45 minutes',
      includes: ['Haircut', 'Shave', 'Hair Color', 'Pedicure']
    },
    {
      name: 'Haircut + Luxury Hair Spa',
      price: '₹1999',
      duration: '60 minutes',
      includes: ['Haircut', 'Luxury Hair Spa']
    },
    {
      name: 'Full Hands + Full Legs + Underarms Waxing',
      price: '₹1199',
      duration: '45 minutes',
      includes: ['Full Hands', 'Full Legs', 'Underarms Waxing']
    },
    {
      name: 'Global Colour Highlights + Keratin',
      price: '₹3499*',
      duration: '90 minutes',
      includes: ['Global Colour Highlights', 'Keratin Treatment']
    },
    {
      name: 'Cysteine Hair Botox',
      price: '₹3999*',
      duration: '120 minutes',
      includes: ['Cysteine Hair Botox', 'NanoPlastia']
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
                <span className="offer-badge-duration">
                  {index < 4 ? '15 min' : index < 6 ? '60 min' : '90 min'}
                </span>
              </div>
              <div className="offer-name">{offer.name}</div>
              <div className="offer-price">{offer.price}</div>
              <div className="offer-details">
                {offer.duration}
              </div>
              <div className="offer-includes">
                {offer.includes.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
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