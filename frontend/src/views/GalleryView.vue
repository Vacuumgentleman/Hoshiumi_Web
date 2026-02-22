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
</style>