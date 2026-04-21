import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'
import logo from '@assets/images/hoshiumi-logo.png'
import './Navbar.css'

export default function Navbar() {
  const { totalItems, openCart } = useCart()
  const { dark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() { setMenuOpen(false) }
  function handleCartClick() { closeMenu(); openCart() }

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Hoshiumi Logo" />
      </NavLink>

      <button
        className={`burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(m => !m)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`links ${menuOpen ? 'links--open' : ''}`}>
        <div className="switch">
          <label>
            <input
              type="checkbox"
              checked={dark}
              onChange={toggleTheme}
            />
            <div className="sun-moon">
              <div className="dots"></div>
            </div>
            <div className="background">
              <div className="stars1"></div>
              <div className="stars2"></div>
            </div>
          </label>
        </div>

        <NavLink to="/gallery" onClick={closeMenu}>Galería</NavLink>
        <NavLink to="/about" onClick={closeMenu}>Sobre</NavLink>

        <button className="cart-button" onClick={handleCartClick}>
          🛒
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </button>
      </div>
    </nav>
  )
}
