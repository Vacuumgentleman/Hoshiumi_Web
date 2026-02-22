<script setup lang="ts">
import { useCartStore } from "@/stores/cart"
import { useThemeStore } from "@/stores/theme"
import CartDrawer from "@/components/CartDrawer.vue"
import Footer from "@/components/Footer.vue"

const cart = useCartStore()
const theme = useThemeStore()
</script>

<template>
  <div :class="['layout', theme.dark ? 'dark' : 'light']">
    <nav class="navbar">
      <RouterLink to="/" class="logo">
        Hoshiumi
      </RouterLink>

      <div class="links">
        <button class="theme-toggle" @click="theme.toggleTheme">
          {{ theme.dark ? "☀️" : "🌙" }}
        </button>
        <RouterLink to="/gallery">Galería</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>

        <!-- Cart Button -->
        <button class="cart-button" @click="cart.openCart">
          🛒
          <span
            v-if="cart.totalItems > 0"
            class="badge"
          >
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

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
  text-decoration: none;
  color: var(--color-text);
}

.links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.links a {
  font-size: 0.95rem;
  color: var(--color-muted);
  transition: 0.2s ease;
  text-decoration: none;
}

.links a:hover {
  color: var(--color-text);
}

/* Cart button */
.cart-button {
  position: relative;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

/* Badge */
.badge {
  position: absolute;
  top: -6px;
  right: -10px;
  background: black;
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 50%;
}
.light {
  --bg: #ffffff;
  --text: #111;
  --surface: #f5f5f5;
}

.dark {
  --bg: #111;
  --text: #f5f5f5;
  --surface: #1c1c1c;
}

.layout {
  background: var(--bg);
  color: var(--text);
  transition: 0.3s ease;
}

main {
  flex: 1;
}
</style>