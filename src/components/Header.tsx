import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="gradient-bg text-white shadow-lg sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo */}
          <div className="navbar-brand">
            <h1 className="h3 mb-0 fw-bold text-white">10XMA</h1>
            <p className="small text-light mb-0">Creative Production & Media</p>
          </div>

          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navigation.map((item) => (
                <li key={item.name} className="nav-item">
                  <a
                    className="nav-link text-white"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-white bg-opacity-10">
          <div className="container py-3">
            <ul className="navbar-nav">
              {navigation.map((item) => (
                <li key={item.name} className="nav-item">
                  <a
                    className="nav-link text-white"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
