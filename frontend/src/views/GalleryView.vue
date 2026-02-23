<script setup lang="ts">
import { useFavoritesStore } from "@/stores/favorites"
import { useCartStore } from "@/stores/cart"
import { useProducts } from "@/composables/useProducts"
import { useRouter } from "vue-router"

const favorites = useFavoritesStore()
const cart = useCartStore()
const router = useRouter()

const {
  allProducts,
  search,
  selectedCategory,
  sortOrder,
  filteredProducts,
  resetFilters
} = useProducts()

function goToProduct(id: string) {
  router.push(`/product/${id}`)
}
</script>

<template>
  <section class="shop">
    <h1>SHOP</h1>

    <!-- Filtros -->
    <div class="filters">
      <input
        v-model="search"
        type="text"
        placeholder="Buscar obra..."
      />

      <select v-model="selectedCategory">
        <option value="all">Todas</option>
        <option value="digital">Digital</option>
        <option value="traditional">Traditional</option>
      </select>

      <select v-model="sortOrder">
        <option value="default">Ordenar</option>
        <option value="price-asc">Precio ↑</option>
        <option value="price-desc">Precio ↓</option>
      </select>
    </div>

    <!-- No hay productos -->
    <div v-if="allProducts.length === 0" class="no-results">
      <div class="no-results-icon">📦</div>
      <h3>No hay productos disponibles</h3>
      <p>Estamos preparando nuevas obras para ti.</p>
    </div>

    <!-- No hay resultados -->
    <div v-else-if="filteredProducts.length === 0" class="no-results">
      <div class="no-results-icon">🔍</div>
      <h3>No se encontraron resultados</h3>
      <p>Intenta con otro nombre o cambia los filtros.</p>
      <button @click="resetFilters">Ver todas las obras</button>
    </div>

    <!-- Grid -->
    <div v-else class="grid">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="card"
        @click="goToProduct(product.id)"
      >
        <div class="image-wrapper">
          <img :src="product.image" />

          <!-- Overlay -->
          <div class="overlay">
            <button @click.stop="cart.addToCart(product)">
              Añadir al carrito
            </button>
          </div>

          <!-- Favorito -->
          <button
            class="favorite-btn"
            @click.stop="favorites.toggleFavorite(product)"
          >
            {{ favorites.isFavorite(product.id) ? "❤️" : "🤍" }}
          </button>
        </div>

        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} €</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shop {
  padding: 4rem 6rem;
  background: var(--bg);
  color: var(--text);
}

h1 {
  color: var(--text);
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.filters input,
.filters select {
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--primary-blue);
  background: transparent;
  color: var(--text);
}

.filters input:focus,
.filters select:focus {
  outline: none;
  border-color: var(--primary-blue);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

/* CARD */
.card {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-6px);
}

/* IMAGE */
.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 12px;
  background: var(--surface);
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover img {
  transform: scale(1.08);
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(30, 58, 102, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .overlay {
  opacity: 1;
}

.overlay button {
  background: var(--primary-blue);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.overlay button:hover {
  transform: scale(1.05);
}

/* FAVORITE */
.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--surface);
  border: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease;
}

.favorite-btn:hover {
  transform: scale(1.1);
}

/* TEXT */
.card h3 {
  margin-top: 1rem;
}

.card p {
  opacity: 0.7;
}

/* NO RESULTS */
.no-results {
  text-align: center;
  margin-top: 4rem;
}

.no-results button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary-blue);
  background: transparent;
  color: var(--primary-blue);
  cursor: pointer;
}

.no-results button:hover {
  background: var(--primary-blue);
  color: white;
}
</style>