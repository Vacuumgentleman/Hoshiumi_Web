import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="not-found">
        <h2>Producto no encontrado</h2>
        <button onClick={() => navigate('/gallery')}>Volver a la galería</button>
      </div>
    )
  }

  function handleAdd() {
    addToCart(product, quantity)
    setQuantity(1)
  }

  return (
    <div className="product-wrapper">
      <div className="product-layout">
        <div className="image-frame">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <span className="category-badge">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-price">{product.price} €</p>
          <p className="product-description">{product.description}</p>

          <div className="quantity-row">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >−</button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
              disabled={quantity >= product.stock}
            >+</button>
          </div>

          <button className="btn-primary add-btn" onClick={handleAdd}>
            Añadir al carrito
          </button>

          <button
            className="favorite-toggle"
            onClick={() => toggleFavorite(product)}
          >
            {isFavorite(product.id) ? '❤️ En favoritos' : '🤍 Añadir a favoritos'}
          </button>
        </div>
      </div>
    </div>
  )
}
