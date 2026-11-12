import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Offers from './components/Offers'
import Gallery from './components/Gallery'
import ExtraBenefits from './components/ExtraBenefits'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import './components/App.css'

export default function App() {
  const [booking, setBooking] = useState({ open: false, service: '' })
  const openBooking = (service = '') => setBooking({ open: true, service })
  const closeBooking = () => setBooking((current) => ({ ...current, open: false }))

  return (
    <div className="App">
      <Header onBookClick={() => openBooking()} />
      <main>
        <Hero onBookClick={() => openBooking()} />
        <Offers onBookClick={openBooking} />
        <Gallery />
        <ExtraBenefits onBookClick={() => openBooking()} />
      </main>
      <Footer onBookClick={() => openBooking()} />
      {booking.open && <BookingModal initialService={booking.service} onClose={closeBooking} />}
    </div>
  )
}
