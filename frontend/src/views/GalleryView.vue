<script setup lang="ts">
import { ref, computed } from "vue"
import { products } from "@/data/products"
import { useCartStore } from "@/stores/cart"

const cart = useCartStore()

const search = ref("")
const selectedCategory = ref("all")

const filteredProducts = computed(() => {
  return products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.value.toLowerCase())

    const matchesCategory =
      selectedCategory.value === "all" ||
      product.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})
</script>

<template>
  <section>
    <h2>Galería</h2>

    <!-- Controles -->
    <div class="controls">
      <input
        v-model="search"
        type="text"
        placeholder="Buscar obra..."
      />

      <select v-model="selectedCategory">
        <option value="all">Todas</option>
        <option value="digital">Digital</option>
        <option value="print">Print</option>
        <option value="original">Original</option>
        <option value="merch">Merch</option>
      </select>
    </div>

    <!-- Productos -->
    <div class="grid">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="card"
      >
        <img :src="product.image" :alt="product.name" />
        <RouterLink :to="`/product/${product.id}`">
        <h3>{{ product.name }}</h3>
        </RouterLink>
        <p>{{ product.price }} USD</p>
        <button @click="cart.addToCart(product)">
          Agregar al carrito
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

input, select {
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.card {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 10px;
  text-align: center;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

img {
  width: 100%;
  border-radius: 8px;
}
</style>