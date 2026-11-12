import { useEffect, useRef, useState } from 'react'

const services = ['Consultation / help me choose', 'The Signature Reset — ₹999', 'Monsoon Glow Facial — ₹1,499', 'Hands & Feet Edit — ₹1,999', 'Colour + Keratin — ₹3,499', 'Cysteine Hair Botox — ₹3,999', 'Polish & Rejuvenate — ₹1,499']

export default function BookingModal({ initialService = '', onClose }) {
  const [formData, setFormData] = useState({ name: '', mobile: '', date: '', time: '', service: initialService })
  const [errors, setErrors] = useState({})
  const nameRef = useRef(null)
  const minDate = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' })

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    nameRef.current?.focus()
    const escape = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', escape)
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', escape) }
  }, [onClose])

  const update = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^\+?[0-9\s-]{10,15}$/.test(formData.mobile.trim())) nextErrors.mobile = 'Enter a valid mobile number.'
    if (!formData.service) nextErrors.service = 'Please choose a service.'
    if (formData.date && formData.date < minDate) nextErrors.date = 'Please choose a future date.'
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return }

    const lines = ['Hello Fusion Studios! I would like to request an appointment.', '', `Name: ${formData.name}`, `Mobile: ${formData.mobile}`, `Service: ${formData.service}`, `Preferred date: ${formData.date || 'Flexible'}`, `Preferred time: ${formData.time || 'Flexible'}`, '', 'Please confirm availability. Thank you!']
    window.open(`https://wa.me/919833769666?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close booking form">×</button>
        <div className="modal-aside"><div><span>Fusion Studios</span><p>Beauty begins the moment you feel understood.</p></div><small>Marol · Mumbai</small></div>
        <div className="modal-content">
          <p className="eyebrow dark"><span></span> Your visit</p><h2 id="booking-title">Reserve your<br /><em>studio time.</em></h2><p className="modal-lead">Share your preference and our team will confirm the appointment on WhatsApp.</p>
          <form onSubmit={submit} noValidate>
            <label>Full name<input ref={nameRef} name="name" value={formData.name} onChange={update} placeholder="Your name" aria-invalid={!!errors.name} />{errors.name && <small className="error">{errors.name}</small>}</label>
            <label>Mobile number<input name="mobile" type="tel" value={formData.mobile} onChange={update} placeholder="+91 98765 43210" aria-invalid={!!errors.mobile} />{errors.mobile && <small className="error">{errors.mobile}</small>}</label>
            <label className="full">Service<select name="service" value={formData.service} onChange={update} aria-invalid={!!errors.service}><option value="">Choose a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select>{errors.service && <small className="error">{errors.service}</small>}</label>
            <label>Preferred date<input name="date" type="date" min={minDate} value={formData.date} onChange={update} aria-invalid={!!errors.date} />{errors.date && <small className="error">{errors.date}</small>}</label>
            <label>Preferred time<select name="time" value={formData.time} onChange={update}><option value="">Flexible</option><option>10 AM – 1 PM</option><option>1 PM – 5 PM</option><option>5 PM – 9 PM</option></select></label>
            <button className="button button-gold full" type="submit">Continue on WhatsApp <span>→</span></button>
          </form>
          <p className="modal-note">No payment required · We’ll confirm availability first</p>
        </div>
      </section>
    </div>
  )
}
