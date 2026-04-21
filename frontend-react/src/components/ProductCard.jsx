import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()

  return (
    <div className="card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} />

        <div className="card-overlay">
          <button onClick={e => { e.stopPropagation(); addToCart(product) }}>
            Añadir al carrito
          </button>
        </div>

        <button
          className="favorite-btn"
          onClick={e => { e.stopPropagation(); toggleFavorite(product) }}
        >
          {isFavorite(product.id) ? '❤️' : '🤍'}
        </button>
      </div>

      <h3>{product.name}</h3>
      <p>{product.price} €</p>
    </div>
  )
}
