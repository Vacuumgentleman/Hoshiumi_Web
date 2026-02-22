<script setup lang="ts">
import { products } from "@/data/products"
import { useFavoritesStore } from "@/stores/favorites"
import { useCartStore } from "@/stores/cart"
import { ref, computed } from "vue"

const search = ref("")
const selectedCategory = ref("all")
const sortOrder = ref("default")

const favorites = useFavoritesStore()
const cart = useCartStore()
const filteredProducts = computed(() => {
  let result = [...products]

  // 🔎 Buscar por nombre
  if (search.value.trim() !== "") {
    result = result.filter(product =>
      product.name.toLowerCase().includes(search.value.toLowerCase())
    )
  }

  // 🏷 Filtrar por categoría
  if (selectedCategory.value !== "all") {
    result = result.filter(
      product => product.category === selectedCategory.value
    )
  }

  // 💰 Ordenar
  if (sortOrder.value === "price-asc") {
    result.sort((a, b) => a.price - b.price)
  } else if (sortOrder.value === "price-desc") {
    result.sort((a, b) => b.price - a.price)
  }

  return result
})

function resetFilters() {
  search.value = ""
  selectedCategory.value = "all"
  sortOrder.value = "default"
}

</script>

<template>
  <section class="shop">
    <h1>SHOP</h1>
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
    <div class="grid">
      <div v-for="product in filteredProducts" :key="product.id" :class="['card',favorites.isFavorite(product.id) ? 'favorite-active' : '' ]">
          <div class="image-wrapper">
          <RouterLink :to="`/product/${product.id}`">
            <img :src="product.image" />
          </RouterLink>

          <!-- Add to cart overlay -->
          <div class="overlay">
            <button @click="cart.addToCart(product)">
              Añadir al carrito
            </button>
          </div>

          <!-- Favorite -->
          <button
            class="favorite"
            @click="favorites.toggleFavorite(product)"
          >
            {{ favorites.isFavorite(product.id) ? "❤️" : "♡" }}
          </button>
        </div>

        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} €</p>
      </div>
    </div>
        <div v-if="filteredProducts.length === 0 && search">
      No se encontraron resultados
      </div>

      <div v-else-if="products.length === 0">
        No hay productos disponibles
    </div>
    

    <div v-if="filteredProducts.length === 0 && search">
      <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>No se encontraron resultados</h3>
          <p>Intenta con otro nombre o cambia los filtros.</p>
          <button @click="resetFilters">Ver todas las obras</button>
      </div>
    </div>

    <div v-else-if="products.length === 0">
        <div class="no-results">
            <div class="no-results-icon">📦</div>
            <h3>No hay productos disponibles</h3>
            <p>Estamos preparando nuevas obras para ti.</p>
        </div>
    </div>


  </section>
</template>

<style scoped>
.shop {
  padding: 4rem 6rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
}

.card {
  text-align: center;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  transition: transform 0.5s ease;
}

.image-wrapper:hover img {
  transform: scale(1.03);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover .overlay {
  opacity: 1;
}

.overlay button {
  background: white;
  border: none;
  padding: 0.8rem 1.5rem;
  letter-spacing: 1px;
  cursor: pointer;
}

.favorite {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border-radius: 50%;
  border: none;
  padding: 0.5rem 0.6rem;
  cursor: pointer;
  font-size: 1rem;
}

.card h3 {
  margin-top: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
}

.card p {
  color: #888;
  margin-top: 0.3rem;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .shop {
    padding: 2rem;
  }
}
.favorite-active {
  transform: scale(1.02);
  transition: 0.3s ease;
}
.filters {
  display: flex;
  gap: 1rem;
  margin: 2rem 0 3rem 0;
  flex-wrap: wrap;
}

.filters input,
.filters select {
  padding: 0.6rem 0.8rem;
  border: 1px solid #ccc;
  background: transparent;
  font-size: 0.9rem;
}

.filters input {
  min-width: 220px;
}

.filters input:focus,
.filters select:focus {
  outline: none;
  border-color: black;
}

.no-results {
    text-align: center;
    padding: 100px 20px;
    color: #444;
    animation: fadeIn 0.4s ease;
}

.no-results-icon {
    font-size: 42px;
    margin-bottom: 15px;
    opacity: 0.6;
}

.no-results h3 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;
}

.no-results p {
    font-size: 15px;
    color: #777;
    margin-bottom: 20px;
}

.no-results button {
    padding: 10px 18px;
    border: 1px solid #333;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
}

.no-results button:hover {
    background: #333;
    color: white;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>