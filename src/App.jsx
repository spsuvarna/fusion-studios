import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Offers from './components/Offers'
import ExtraBenefits from './components/ExtraBenefits'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import './components/App.css'

export default function App() {
  const [isBookingOpen, setBookingOpen] = useState(false)

  return (
    <div className="App">
      <Header onBookClick={() => setBookingOpen(true)} />
      <main>
        <Hero onBookClick={() => setBookingOpen(true)} />
        <Offers onBookClick={() => setBookingOpen(true)} />
        <ExtraBenefits />
      </main>
      <Footer />
      {isBookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </div>
  )
}