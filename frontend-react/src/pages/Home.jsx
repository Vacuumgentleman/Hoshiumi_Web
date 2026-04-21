import { Link } from 'react-router-dom'
import brandName from '@assets/images/brand-name.png'
import './Home.css'

export default function Home() {
  return (
    <section className="hero">
      <img src={brandName} alt="Hoshiumi" className="hero-logo" />
      <p>Arte inspirado en el océano, las estrellas y la imaginación.</p>
      <Link to="/gallery" className="btn">
        Explorar colección
      </Link>
    </section>
  )
}
