import React from 'react'
import './BookingModal.css'

export default function BookingModal({ onClose }) {
  return (
    <div className="BookingModal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="BookingModal" onClick={(e) => e.stopPropagation()}>
        <button className="BookingModal-close" onClick={onClose} aria-label="Close">
          <i className="fas fa-times"></i>
        </button>

        <div className="BookingModal-header">
          <span className="BookingModal-badge">
            <i className="fas fa-umbrella"></i> PRE-MONSOON OFFER
          </span>
          <h2>Book Your Appointment Today!</h2>
        </div>

        <div className="BookingModal-body">
          <p className="BookingModal-claimer">
            Because Every Season Deserves Your Best Look.
          </p>

          <form className="BookingModal-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" placeholder="+91 98337 69666" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label>Preferred Date</label>
                <input type="date" required />
              </div>
            </div>
            <div className="form-group">
              <label>Service</label>
              <select required>
                <option value="" disabled>
                  Select a service
                </option>
                <option>Pre-Monsoon Festival Package — ₹999</option>
                <option>Basic Manicure + Pedicure — ₹999</option>
                <option>Advance Manicure + Pedicure — ₹1999</option>
                <option>Body Polishing + B. Rejuvenate — ₹1499</option>
                <option>Advance Facial — ₹1499</option>
                <option>Premium Hair Transformation — ₹3999</option>
                <option>Cysteine Hair Botox — ₹3999</option>
                <option>Global Colour + Keratin — ₹3499</option>
              </select>
            </div>
            <button className="btn btn-primary btn-full" type="submit">
              <i className="fas fa-calendar-check"></i> Confirm Appointment
            </button>
          </form>

          <div className="BookingModal-contact">
            <span>📞 <strong>+91 98337 69666</strong></span>
            <span>📍 Marol, Mumbai 10 minutes walking distance from Metro Station</span>
          </div>
        </div>
      </div>
    </div>
  )
}