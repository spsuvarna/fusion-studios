import { useEffect, useState } from 'react'

const navItems = [['Home', 'top'], ['Services', 'services'], ['Why us', 'experience'], ['Studio', 'reviews'], ['Contact', 'contact']]

export default function Header({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    const closeOnEscape = (event) => event.key === 'Escape' && setIsOpen(false)
    const closeOnDesktop = () => window.innerWidth > 980 && setIsOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('resize', closeOnDesktop)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('resize', closeOnDesktop)
    }
  }, [isOpen])

  const goTo = (event, id) => {
    event.preventDefault()
    const navigate = (behavior = 'smooth') => {
      const target = document.getElementById(id)
      if (!target) return
      target.scrollIntoView({ behavior, block: 'start' })
    }

    const isMobileNavigation = window.matchMedia('(max-width: 980px)').matches
    if (isMobileNavigation) {
      setIsOpen(false)
      document.body.classList.remove('menu-open')
      window.setTimeout(() => navigate('instant'), 280)
    } else {
      navigate()
    }
  }

  return (
    <header className={`Header ${scrolled ? 'is-scrolled' : ''} ${isOpen ? 'menu-is-open' : ''}`}>
      <div className="nav-shell">
        <a className="brand" href="#top" onClick={(event) => goTo(event, 'top')} aria-label="Fusion Studios home">
          <span className="brand-mark" aria-hidden="true">F</span>
          <span className="brand-copy"><strong>Fusion <em>Studios</em></strong><small>Salon · Skin · Nail · Tattoo</small></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={(event) => goTo(event, id)}>{label}</a>)}
        </nav>
        <button className="nav-cta" type="button" onClick={onBookClick}><span aria-hidden="true">▦</span> Book an appointment</button>
        <button className="nav-toggle" type="button" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-navigation"><span></span><span></span></button>
      </div>
      <div id="mobile-navigation" className={`mobile-menu ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, id], index) => <a key={id} href={`#${id}`} onClick={(event) => goTo(event, id)}><span>0{index + 1}</span>{label}</a>)}
          <button type="button" onClick={() => { setIsOpen(false); onBookClick() }}>Book your visit</button>
        </nav>
      </div>
    </header>
  )
}
