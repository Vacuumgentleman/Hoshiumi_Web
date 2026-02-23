<script setup lang="ts">
import { useCartStore } from "@/stores/cart"
import { useThemeStore } from "@/stores/theme"
import CartDrawer from "@/components/CartDrawer.vue"
import Footer from "@/components/Footer.vue"
import logo from "@/assets/images/hoshiumi-logo.png"
import "@/assets/styles/theme.css"

const cart = useCartStore()
const theme = useThemeStore()
</script>

<template>
  <div :class="['layout', theme.dark ? 'dark' : 'light']">

    <!-- NAVBAR -->
    <nav class="navbar">
      <RouterLink to="/" class="logo">
        <img :src="logo" alt="Hoshiumi Logo" />
      </RouterLink>

      <div class="links">
        <button class="theme-toggle" @click="theme.toggleTheme">
          {{ theme.dark ? "☀️" : "🌙" }}
        </button>

        <RouterLink to="/gallery">Galería</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>

        <button class="cart-button" @click="cart.openCart()">
          🛒
          <i class="icon-cart"></i>
          <span v-if="cart.totalItems > 0" class="cart-badge">
            {{ cart.totalItems }}
          </span>
        </button>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>

    <CartDrawer />
    <Footer />

  </div>
</template>

<style scoped>
.layout {
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
}

/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background: var(--surface);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.logo img {
  height: 38px;
}

.links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.links a {
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: 0.2s ease;
}

.links a:hover {
  opacity: 0.7;
}

/* ACTIVE ROUTE */
.links a.router-link-exact-active {
  color: var(--primary-blue);
}

.links a.router-link-exact-active::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-blue);
}

/* CART */
.cart-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text);
}

.badge {
  position: absolute;
  top: -6px;
  right: -10px;
  background: var(--primary-blue);
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 50%;
}

main {
  flex: 1;
}
</style>