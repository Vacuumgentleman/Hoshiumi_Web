import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './CartDrawer.css'

export default function CartDrawer() {
  const cart = useCart()
  const navigate = useNavigate()

  function goToProduct(id) {
    navigate(`/product/${id}`)
    cart.closeCart()
  }

  function goToCheckout() {
    cart.closeCart()
    navigate('/checkout')
  }

  return (
    <>
      {cart.isOpen && (
        <div className="overlay" onClick={cart.closeCart}></div>
      )}

      <aside className={`drawer ${cart.isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2>Cart</h2>
          <button onClick={cart.closeCart}>✕</button>
        </div>

        {cart.items.length === 0 ? (
          <div className="empty">
            <div className="empty-content">
              <div className="empty-icon">🛒</div>
              <h3>Your cart is empty</h3>
              <p>Add some art to begin your collection.</p>
            </div>
          </div>
        ) : (
          <div className="items">
            {cart.items.map(item => (
              <div key={item.product.id} className="item">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="clickable"
                  onClick={() => goToProduct(item.product.id)}
                />
                <div className="info">
                  <p
                    className="name clickable"
                    onClick={() => goToProduct(item.product.id)}
                  >
                    {item.product.name}
                  </p>
                  <div className="quantity-controls">
                    <button onClick={() => cart.decreaseQuantity(item.product.id)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => cart.addToCart(item.product, 1)}>+</button>
                  </div>
                  <p className="price">{item.product.price * item.quantity} €</p>
                  <button className="remove" onClick={() => cart.removeFromCart(item.product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.items.length > 0 && (
          <div className="drawer-footer">
            <p>Total: {cart.totalPrice} €</p>
            <button className="btn-primary" onClick={goToCheckout}>
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
