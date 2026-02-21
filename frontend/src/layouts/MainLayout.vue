<script setup lang="ts">
import { useCartStore } from "@/stores/cart"

const cart = useCartStore()
</script>

<template>
  <div class="layout">
    <nav class="navbar">
      <RouterLink to="/" class="logo">
        Hoshiumi
      </RouterLink>

      <div class="links">
        <RouterLink to="/gallery">Galería</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
        <RouterLink to="/cart" class="cart">
          🛒 {{ cart.totalItems }}
        </RouterLink>
      </div>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background: var(--color-surface);
  border-bottom: 1px solid #222;
}

.logo {
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.links a {
  margin-left: 2rem;
  font-size: 0.95rem;
  color: var(--color-muted);
  transition: 0.2s ease;
}

.links a:hover {
  color: var(--color-text);
}

.cart {
  background: var(--color-accent);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  color: rgb(0, 0, 0) !important;
}
</style>
