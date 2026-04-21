import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const subscribe = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!validateEmail(email)) {
      setError('Introduce un correo válido')
      return
    }
    setSuccess('¡Suscripción exitosa!')
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="brand">
          <h3>HOSHUMI</h3>
          <p>Arte hecho con amor</p>
        </div>

        <div className="newsletter">
          <h4>Suscríbete al newsletter</h4>
          <form onSubmit={subscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">Suscribirme</button>
          </form>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
        </div>

        <div className="social">
          <a href="https://instagram.com/hoshiumi.art" target="_blank" rel="noopener" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="X">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://pinterest.com/" target="_blank" rel="noopener" aria-label="Pinterest">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="https://behance.net/" target="_blank" rel="noopener" aria-label="Behance">
            <i className="fab fa-behance"></i>
          </a>
          <a href="mailto:contacto@hoshiumi.art" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Hoshiumi ·{' '}
        <NavLink to="/privacy">Privacy</NavLink> ·{' '}
        <NavLink to="/terms">Terms</NavLink> ·{' '}
        <NavLink to="/cookies">Cookies</NavLink>
      </div>
    </footer>
  )
}
