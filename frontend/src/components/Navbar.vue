<script setup lang="ts">
import { useCartStore } from "@/stores/cart"
import { useThemeStore } from "@/stores/theme"
import logo from "@/assets/images/hoshiumi-logo.png"

const cart = useCartStore()
const theme = useThemeStore()

function toggleTheme() {
  theme.toggleTheme()
}
</script>

<template>
  <nav class="navbar">
    <!-- Logo -->
    <RouterLink to="/" class="logo">
      <img :src="logo" alt="Hoshiumi Logo" />
    </RouterLink>

    <!-- Links -->
    <div class="links">

      <!-- DAY / NIGHT SWITCH -->
      <div class="switch">
        <label>
          <input
            type="checkbox"
            :checked="theme.dark"
            @change="toggleTheme"
          />
          <div class="sun-moon">
            <div class="dots"></div>
          </div>
          <div class="background">
            <div class="stars1"></div>
            <div class="stars2"></div>
          </div>
        </label>
      </div>

      <RouterLink to="/gallery">Galería</RouterLink>
      <RouterLink to="/about">Sobre</RouterLink>

      <!-- CART -->
      <button class="cart-button" @click="cart.openCart()">
        🛒
        <span v-if="cart.totalItems > 0" class="cart-badge">
          {{ cart.totalItems }}
        </span>
      </button>

    </div>
  </nav>
</template>

<style scoped>

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
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -10px;
  background: var(--primary-blue);
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 50%;
}

/* ========================= */
/* DAY NIGHT SWITCH */
/* ========================= */

.switch {
  position: relative;
  width: 70px;
  height: 38px;
}

.switch input {
  position: absolute;
  width: 70px;
  height: 38px;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.background {
  position: absolute;
  width: 70px;
  height: 38px;
  border-radius: 30px;
  border: 2px solid #202020;
  background: linear-gradient(to right, #484848, #202020);
  transition: 0.3s ease;
}

.sun-moon {
  position: absolute;
  left: 2px;
  top: 2px;
  height: 32px;
  width: 32px;
  background: #FFFDF2;
  border-radius: 50%;
  border: 2px solid #DEE2C6;
  transition: 0.4s ease;
  z-index: 2;
}

.sun-moon .dots {
  position: absolute;
  top: 4px;
  left: 18px;
  height: 8px;
  width: 8px;
  background: #EFEEDB;
  border-radius: 50%;
}

/* STARS */

.stars1,
.stars2 {
  position: absolute;
  height: 4px;
  width: 4px;
  background: white;
  border-radius: 50%;
  transition: 0.3s ease;
}

.stars1 {
  top: 8px;
  right: 16px;
}

.stars2 {
  bottom: 8px;
  right: 22px;
}

/* CHECKED STATE */

.switch input:checked ~ .sun-moon {
  transform: translateX(32px) rotate(-25deg);
  background: #F5EC59;
  border-color: #E7C65C;
}

.switch input:checked ~ .background {
  border-color: #78C1D5;
  background: linear-gradient(to right, #78C1D5, #BBE7F5);
}

.switch input:checked ~ .background .stars1,
.switch input:checked ~ .background .stars2 {
  opacity: 0;
  transform: translateY(10px);
}

</style>