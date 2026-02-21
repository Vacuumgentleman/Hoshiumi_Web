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
      <div v-for="item in cart.items" :key="item.id">
        {{ item.name }} - {{ item.price }} USD
      </div>

      <h3>Total: {{ cart.totalPrice }} USD</h3>
    </div>
  </section>
</template>