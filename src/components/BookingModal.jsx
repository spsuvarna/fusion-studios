import React, { useState } from 'react'
import './BookingModal.css'

export default function BookingModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    date: '',
    service: ''
  })

  const handleWhatsApp = () => {
    if (!formData.name || !formData.mobile || !formData.service) {
      alert('Please fill in Name, Mobile Number, and Service to book via WhatsApp.')
      return
    }

    const message = `Hello Fusion Studios! I would like to book an appointment.%0A%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0AEmail: ${formData.email || 'N/A'}%0APreferred Date: ${formData.date || 'N/A'}%0AService: ${formData.service}%0A%0APlease contact me to confirm my booking.`

    const whatsappUrl = `https://wa.me/919833769666?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="+91 98337 69666"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
              >
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
            <button
              type="button"
              className="btn btn-primary btn-full"
              onClick={handleWhatsApp}
            >
              <i className="fab fa-whatsapp"></i> Book via WhatsApp
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