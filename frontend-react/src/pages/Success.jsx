import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <section style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'var(--bg)',
      color: 'var(--text)',
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎉</div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>¡Pedido confirmado!</h2>
      <p style={{ opacity: 0.8, maxWidth: '480px', lineHeight: 1.6, marginBottom: '2rem' }}>
        Gracias por tu compra. Recibirás un correo con los detalles de tu pedido pronto.
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
        Seguir explorando
      </Link>
    </section>
  )
}
