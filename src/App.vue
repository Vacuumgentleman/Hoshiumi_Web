<script setup lang="ts">
import { useCartStore } from "@/stores/cart"

const cart = useCartStore()
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="logo">Hoshiumi</RouterLink>

    <div class="links">
      <RouterLink to="/gallery">Galería</RouterLink>
      <RouterLink to="/cart"> Carrito ({{ cart.totalItems }})
</RouterLink>
      <RouterLink to="/about">Sobre</RouterLink>
    </div>
  </nav>

  <router-view />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
}

.logo {
  font-weight: bold;
}

.links a {
  margin-left: 1.5rem;
}
</style>
