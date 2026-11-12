import { useEffect, useState } from 'react'
import work02 from '../assets/gallery/work-02.jpg'
import work03 from '../assets/gallery/work-03.jpg'
import work04 from '../assets/gallery/work-04.jpg'
import work05 from '../assets/gallery/work-05.webp'

const work = [
  { src: work03, category: 'Hair', title: 'Colour in progress', alt: 'Fusion Studios stylist applying professional hair colour' },
  { src: work04, category: 'Studio', title: 'The studio floor', alt: 'Bright styling stations inside Fusion Studios' },
  { src: work02, category: 'Hair', title: 'Precision grooming', alt: 'A haircut service in progress at Fusion Studios' },
  { src: work05, category: 'Studio', title: 'A busy studio day', alt: 'Clients and stylists inside Fusion Studios' },
]

const filters = ['All', 'Hair', 'Studio']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [activeImage, setActiveImage] = useState(null)
  const visibleWork = filter === 'All' ? work : work.filter((item) => item.category === filter)

  useEffect(() => {
    if (!activeImage) return undefined
    const close = (event) => event.key === 'Escape' && setActiveImage(null)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', close)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', close)
    }
  }, [activeImage])

  return (
    <section className="Gallery" id="work" aria-labelledby="work-title">
      <div className="section-shell">
        <header className="gallery-heading">
          <div><p className="eyebrow"><span></span> Inside Fusion Studios</p><h2 id="work-title">Our work.<br /><em>Our space.</em></h2></div>
          <div className="gallery-intro"><p>Real photos from the studio’s public business gallery. Select a category, then tap any image for a closer look.</p><a href="https://magicpin.in/Mumbai/Jb-Nagar/Beauty/Fusion-Studios/store/64547/photos" target="_blank" rel="noreferrer">View public gallery ↗</a></div>
        </header>
        <div className="gallery-filters" role="group" aria-label="Filter gallery">
          {filters.map((item) => <button className={filter === item ? 'active' : ''} type="button" onClick={() => setFilter(item)} key={item}>{item}</button>)}
        </div>
        <div className="gallery-grid">
          {visibleWork.map((item) => (
            <button className="gallery-item" type="button" key={item.src} onClick={() => setActiveImage(item)} aria-label={`Open ${item.title}`}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span><small>{item.category}</small><strong>{item.title}</strong><i aria-hidden="true">↗</i></span>
            </button>
          ))}
        </div>
      </div>
      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.title} onMouseDown={(event) => event.target === event.currentTarget && setActiveImage(null)}>
          <button type="button" onClick={() => setActiveImage(null)} aria-label="Close image">×</button>
          <figure><img src={activeImage.src} alt={activeImage.alt} /><figcaption><small>{activeImage.category}</small><strong>{activeImage.title}</strong></figcaption></figure>
        </div>
      )}
    </section>
  )
}
