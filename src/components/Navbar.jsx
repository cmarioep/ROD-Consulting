import { useState, useEffect } from 'react'
import Circuit from './Circuit'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMenuOpen(false)

  return (
    <>
      <nav id="navbar" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none' }}>
        <Circuit />
        <a href="#" className="nav-logo">
          <img src="/imagotio-nav.webp" alt="ROD Consulting" />
        </a>
        <ul className="nav-links">
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact" className="nav-cta">Cotizar proyecto</a></li>
        </ul>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#about" onClick={closeMobile}>Nosotros</a>
        <a href="#services" onClick={closeMobile}>Servicios</a>
        <a href="#projects" onClick={closeMobile}>Proyectos</a>
        <a href="#contact" onClick={closeMobile}>Cotizar proyecto</a>
      </nav>
    </>
  )
}
