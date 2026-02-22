<script setup lang="ts">
import { useRoute } from "vue-router"
import { products } from "@/data/products"
import { useCartStore } from "@/stores/cart"
import { ref, computed } from "vue"

const route = useRoute()
const cart = useCartStore()
const quantity = ref(1)

const product = computed(() =>
  products.find(p => p.id === route.params.id)
)

function addToCart() {
  if (!product.value) return
  cart.addToCart(product.value, quantity.value)
  quantity.value = 1
}
</script>

<template>
  <section v-if="product" class="product-wrapper">
    <div class="layout">

      <!-- Imagen -->
      <div class="image-section">
        <img :src="product.image" />
      </div>

      <!-- Info -->
      <div class="info-section">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price }} €</p>

        <p class="description">
          Obra original de la colección Hoshiumi.  
          Técnica mixta sobre papel artístico.  
          Edición limitada.
        </p>

        <div class="quantity">
          <button @click="quantity > 1 && quantity--">−</button>
          <span>{{ quantity }}</span>
          <button @click="quantity++">+</button>
        </div>

        <button class="add-btn" @click="addToCart">
          Add to basket
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
.product-wrapper {
  padding: 4rem 10rem;
}

.layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 6rem;
  align-items: start;
}

.image-section img {
  width: 100%;
}

.info-section h1 {
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.quantity button {
  width: 35px;
  height: 35px;
  border: 1px solid #ddd;
  background: none;
  cursor: pointer;
  font-size: 1rem;
}

.add-btn {
  background: #222;
  color: white;
  padding: 0.9rem 2rem;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: background 0.3s ease;
}

.add-btn:hover {
  background: #444;
}

@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .product-wrapper {
    padding: 2rem;
  }
}
</style>