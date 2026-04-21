import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section style={{
      padding: '5rem 2rem',
      maxWidth: '800px',
      margin: '0 auto',
      background: 'var(--bg)',
      color: 'var(--text)',
    }}>
      <h1 style={{ color: 'var(--primary-blue)', marginBottom: '2rem' }}>Sobre Hoshiumi</h1>

      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', opacity: 0.9 }}>
        Hoshiumi es una marca de arte independiente enfocada en ilustración original, prints de alta calidad y stickers coleccionables.
        Cada pieza está creada con amor, inspirada en el océano, las estrellas y la cultura pop japonesa.
      </p>

      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', opacity: 0.9 }}>
        Todos los productos son impresos en materiales premium, diseñados para durar y llenar tu espacio de color y personalidad.
      </p>

      <p style={{ lineHeight: 1.8, marginBottom: '2.5rem', opacity: 0.9 }}>
        ¿Tienes alguna pregunta? Escríbenos a{' '}
        <a href="mailto:contacto@hoshiumi.art" style={{ color: 'var(--primary-blue)' }}>
          contacto@hoshiumi.art
        </a>
      </p>

      <Link
        to="/gallery"
        style={{
          padding: '0.9rem 2rem',
          background: 'var(--primary-blue)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 500,
        }}
      >
        Ver colección
      </Link>
    </section>
  )
}
