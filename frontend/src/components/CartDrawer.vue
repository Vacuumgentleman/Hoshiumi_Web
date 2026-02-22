<script setup lang="ts">
import { useCartStore } from "@/stores/cart"

const cart = useCartStore()
</script>

<template>
  <!-- Overlay -->
  <div v-if="cart.isOpen" class="overlay" @click="cart.closeCart"></div>

  <!-- Drawer -->
  <aside :class="['drawer', cart.isOpen ? 'open' : '']">
    <div class="header">
      <h2>Cart</h2>
      <button @click="cart.closeCart">✕</button>
    </div>

    <div v-if="cart.items.length === 0" class="empty">
      Your cart is empty
    </div>

    <div v-else class="items">
      <div
        v-for="item in cart.items"
        :key="item.product.id"
        class="item"
      >
        <img :src="item.product.image" />

        <div class="info">
          <p class="name">{{ item.product.name }}</p>

          <div class="quantity-controls">
            <button @click="cart.decreaseQuantity(item.product.id)">−</button>
            <span>{{ item.quantity }}</span>
            <button @click="cart.addToCart(item.product, 1)">+</button>
          </div>

          <p class="price">
            {{ item.product.price * item.quantity }} €
          </p>

          <button
            class="remove"
            @click="cart.removeFromCart(item.product.id)"
          >
            Remove
          </button>
        </div>
      </div>
    </div>

    <div class="footer" v-if="cart.items.length > 0">
      <p>Total: {{ cart.totalPrice }} €</p>
      <button class="checkout">Checkout</button>
    </div>
  </aside>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(4px);
  z-index: 9998;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 420px;
  height: 100vh;
  background: white;
  box-shadow: -10px 0 30px rgba(0,0,0,0.1);
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 9999;
  display: flex;
  flex-direction: column;
}

.drawer.open {
  transform: translateX(0);
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}

.items {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.item {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.item img {
  width: 70px;
  object-fit: cover;
}

.info {
  flex: 1;
}

.name {
  font-weight: 500;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0.5rem 0;
}

.quantity-controls button {
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  background: none;
  cursor: pointer;
}

.price {
  font-weight: 500;
  margin: 0.3rem 0;
}

.remove {
  font-size: 0.8rem;
  color: #888;
  background: none;
  border: none;
  cursor: pointer;
}

.footer {
  padding: 1.5rem;
  border-top: 1px solid #eee;
}

.checkout {
  width: 100%;
  padding: 0.9rem;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
}
</style>