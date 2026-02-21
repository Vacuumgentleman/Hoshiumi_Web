<script setup lang="ts">
import { useRoute } from "vue-router"
import { products } from "@/data/products"
import { useCartStore } from "@/stores/cart"
import { computed } from "vue"

const route = useRoute()
const cart = useCartStore()

const product = computed(() =>
  products.find((p) => p.id === route.params.id)
)
</script>

<template>
  <div v-if="product" class="product-page">
    <img :src="product.image" :alt="product.name" />

    <div class="info">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <h2>{{ product.price }} USD</h2>

      <button @click="cart.addToCart(product)">
        Agregar al carrito
      </button>
    </div>
  </div>

  <div v-else>
    Producto no encontrado.
  </div>
</template>

<style scoped>
.product-page {
  display: flex;
  gap: 3rem;
  padding: 2rem;
}

img {
  width: 400px;
  border-radius: 10px;
}

.info {
  max-width: 500px;
}
</style>