import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Checkout.css'

export default function Checkout() {
  const { items, totalPrice, closeCart } = useCart()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)

  const shipping = totalPrice > 50 ? 0 : 5
  const finalTotal = totalPrice + shipping

  function submitOrder() {
    if (!name || !email || !address) {
      alert('Por favor completa todos los campos')
      return
    }
    setLoading(true)
    setTimeout(() => {
      closeCart()
      navigate('/success')
    }, 2000)
  }

  if (items.length === 0) {
    return <div className="checkout"><p className="empty">Tu carrito está vacío.</p></div>
  }

  return (
    <section className="checkout">
      <h2>Checkout</h2>

      <div className="checkout-layout">
        <div className="form">
          <h3>Información de envío</h3>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre completo" />
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo electrónico" />
          <textarea value={address} onChange={e => setAddress(e.target.value)} placeholder="Dirección completa"></textarea>

          <h3>Método de pago</h3>
          <div className="fake-payment">
            <p>💳 Tarjeta de crédito / débito</p>
            <p className="note">(Simulación de pago segura)</p>
          </div>

          <button onClick={submitOrder} disabled={loading}>
            {loading ? 'Procesando pago...' : `Pagar ${finalTotal} €`}
          </button>
        </div>

        <div className="summary">
          <h3>Resumen del pedido</h3>
          {items.map(item => (
            <div key={item.product.id} className="summary-item">
              <span>{item.product.name} x {item.quantity}</span>
              <span>{item.product.price * item.quantity} €</span>
            </div>
          ))}
          <div className="divider"></div>
          <div className="row"><span>Subtotal</span><span>{totalPrice} €</span></div>
          <div className="row"><span>Envío</span><span>{shipping === 0 ? 'Gratis' : `${shipping} €`}</span></div>
          <div className="total"><span>Total</span><span>{finalTotal} €</span></div>
        </div>
      </div>
    </section>
  )
}
