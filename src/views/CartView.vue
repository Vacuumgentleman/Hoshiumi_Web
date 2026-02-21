<script setup lang="ts">
import { useCartStore } from "@/stores/cart"

const cart = useCartStore()
</script>

<template>
  <section>
    <h2>Carrito</h2>

    <div v-if="cart.items.length === 0">
      <p>No hay productos en el carrito.</p>
    </div>

    <div v-else>
      <div
        v-for="item in cart.items"
        :key="item.product.id"
        class="cart-item"
      >
        <h3>{{ item.product.name }}</h3>
        <p>Precio: {{ item.product.price }} USD</p>
        <p>Cantidad: {{ item.quantity }}</p>

        <div class="controls">
          <button @click="cart.decreaseQuantity(item.product.id)">-</button>
          <button @click="cart.addToCart(item.product)">+</button>
          <button @click="cart.removeFromCart(item.product.id)">
            Eliminar
          </button>
        </div>
      </div>

      <h3>Total: {{ cart.totalPrice }} USD</h3>
      <RouterLink to="/checkout" class="checkout-btn">
        Proceder al pago
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.cart-item {
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
}

.controls {
  display: flex;
  gap: 0.5rem;
}

.checkout-btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background: #0f1c2e;
  color: white;
  border-radius: 8px;
}
</style>