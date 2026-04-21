import { useState, useMemo } from 'react'
import { products } from '../data/products'
import { useFavorites } from '../context/FavoritesContext'
import ProductCard from '../components/ProductCard'
import './Gallery.css'

export default function Gallery() {
  const { isFavorite } = useFavorites()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('default')
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]

    if (search) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }

    if (showOnlyFavorites) {
      result = result.filter(p => isFavorite(p.id))
    }

    if (sortOrder === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sortOrder === 'price-desc') result.sort((a, b) => b.price - a.price)

    return result
  }, [search, selectedCategory, sortOrder, showOnlyFavorites, isFavorite])

  function resetFilters() {
    setSearch('')
    setSelectedCategory('all')
    setSortOrder('default')
    setShowOnlyFavorites(false)
  }

  return (
    <section className="shop">
      <h1>SHOP</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Buscar obra..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          <option value="all">Todas</option>
          <option value="print">Prints</option>
          <option value="sticker">Stickers</option>
        </select>
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="default">Ordenar</option>
          <option value="price-asc">Precio ↑</option>
          <option value="price-desc">Precio ↓</option>
        </select>
        <button
          className={`favorite-filter ${showOnlyFavorites ? 'active' : ''}`}
          onClick={() => setShowOnlyFavorites(f => !f)}
        >
          {showOnlyFavorites ? '❤️ Solo favoritos' : '🤍 Mostrar todo'}
        </button>
      </div>

      {products.length === 0 ? (
        <div className="no-results">
          <div className="no-results-icon">📦</div>
          <h3>No hay productos disponibles</h3>
          <p>Estamos preparando nuevas obras para ti.</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <h3>No se encontraron resultados</h3>
          <p>Intenta con otro nombre o cambia los filtros.</p>
          <button onClick={resetFilters}>Ver todas las obras</button>
        </div>
      ) : (
        <div className="grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
