<script setup lang="ts">
import { ref } from "vue"
import { useCartStore } from "@/stores/cart"
import { useThemeStore } from "@/stores/theme"
import logo from "@/assets/images/hoshiumi-logo.png"

const cart = useCartStore()
const theme = useThemeStore()

const menuOpen = ref(false)

function toggleTheme() {
  theme.toggleTheme()
}

function closeMenu() {
  menuOpen.value = false
}

function handleCartClick() {
  closeMenu()
  cart.openCart()
}
</script>

<template>
  <nav class="navbar">
    <!-- Logo -->
    <RouterLink to="/" class="logo" @click="closeMenu">
      <img :src="logo" alt="Hoshiumi Logo" />
    </RouterLink>

    <!-- Burger button (mobile only) -->
    <button
      class="burger"
      :class="{ open: menuOpen }"
      @click="menuOpen = !menuOpen"
      aria-label="Abrir menú"
      :aria-expanded="menuOpen"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Links -->
    <div class="links" :class="{ 'links--open': menuOpen }">

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

      <RouterLink to="/gallery" @click="closeMenu">Galería</RouterLink>
      <RouterLink to="/about" @click="closeMenu">Sobre</RouterLink>

      <!-- CART -->
      <button class="cart-button" @click="handleCartClick">
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

/* ========================= */
/* BURGER BUTTON             */
/* ========================= */

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
}

.burger::before {
  content: "";
  position: absolute;
  inset: -12px -8px;
}

.burger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.burger.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* ========================= */
/* RESPONSIVE                */
/* ========================= */

@media (max-width: 1024px) {
  .navbar {
    padding: 1rem 1.5rem;
  }
}

@media (max-width: 640px) {
  .navbar {
    padding: 0.75rem 1rem;
    flex-wrap: wrap;
  }

  .burger {
    display: flex;
  }

  .links {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    width: 100%;
    order: 3;
    background: var(--surface);
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding: 0.5rem 0;
  }

  .links--open {
    display: flex;
  }

  .links a,
  .links .cart-button {
    width: 100%;
    padding: 0.85rem 1rem;
    min-height: 44px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    border-radius: 0;
    gap: 0.5rem;
  }

  .links a.router-link-exact-active::after {
    display: none;
  }

  .links a.router-link-exact-active {
    background: rgba(61, 117, 207, 0.1);
    border-left: 3px solid var(--primary-blue);
    padding-left: calc(1rem - 3px);
  }

  .switch {
    margin: 0.75rem 1rem;
  }
}

</style>