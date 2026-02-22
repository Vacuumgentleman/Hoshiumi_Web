<script setup lang="ts">
import { useCartStore } from "@/stores/cart"
import { useUIStore } from "@/stores/ui"

const cart = useCartStore()
const ui = useUIStore()

function increaseQuantity(id: string) {
  const item = cart.items.find(i => i.product.id === id)
  if (item) {
    item.quantity++
    cart.saveCart()
  }
}

function decreaseQuantity(id: string) {
  const item = cart.items.find(i => i.product.id === id)
  if (item && item.quantity > 1) {
    item.quantity--
    cart.saveCart()
  }
}

function removeItem(id: string) {
  cart.removeFromCart(id)
}
</script>

<template>
  <transition name="fade">
    <div v-if="ui.isCartOpen" class="overlay" @click="ui.closeCart">
      <transition name="slide">
        <div class="drawer" @click.stop>
          
          <!-- Header -->
          <div class="drawer-header">
            <h2>Carrito</h2>
            <button class="close" @click="ui.closeCart">✕</button>
          </div>

          <!-- Empty -->
          <div v-if="cart.items.length === 0" class="empty">
            Tu carrito está vacío.
          </div>

          <!-- Items -->
          <div v-else class="items">
            <div
              v-for="item in cart.items"
              :key="item.product.id"
              class="item"
            >
              <img :src="item.product.image" />

              <div class="info">
                <h4>{{ item.product.name }}</h4>
                <p>{{ item.product.price }} €</p>

                <div class="quantity">
                  <button @click="decreaseQuantity(item.product.id)">−</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="increaseQuantity(item.product.id)">+</button>
                </div>
              </div>

              <button
                class="remove"
                @click="removeItem(item.product.id)"
              >
                ✕
              </button>
            </div>

            <!-- Total -->
            <div class="summary">
              <div class="total">
                <span>Total</span>
                <span>{{ cart.totalPrice }} €</span>
              </div>

              <button class="checkout">
                TERMINAR PEDIDO
              </button>
            </div>
          </div>

        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
/* Overlay */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: flex-end;
  z-index: 2000;
}

/* Drawer */
.drawer {
  width: 420px;
  background: #ffffff;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0,0,0,0.1);
}

/* Header */
.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.drawer-header h2 {
  font-family: "Playfair Display", serif;
  font-weight: 500;
}

.close {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

/* Empty */
.empty {
  margin-top: 3rem;
  text-align: center;
  color: #777;
}

/* Items */
.items {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.8rem;
  align-items: center;
}

.item img {
  width: 70px;
  height: 70px;
  object-fit: cover;
}

.info {
  flex: 1;
}

.info h4 {
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.info p {
  font-size: 0.9rem;
  color: #777;
}

/* Quantity */
.quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.quantity button {
  border: 1px solid #ddd;
  background: none;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.quantity span {
  font-size: 0.9rem;
}

/* Remove */
.remove {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #aaa;
}

/* Summary */
.summary {
  margin-top: auto;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}

.total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-weight: 500;
}

.checkout {
  width: 100%;
  padding: 1rem;
  background: black;
  color: white;
  border: none;
  letter-spacing: 1px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.checkout:hover {
  opacity: 0.85;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.35s cubic-bezier(.25,.8,.25,1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>