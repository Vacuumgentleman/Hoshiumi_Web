<script setup lang="ts">
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import { useCartStore } from "@/stores/cart"

const cart = useCartStore()
const router = useRouter()

const name = ref("")
const email = ref("")
const address = ref("")
const loading = ref(false)

const shipping = computed(() => cart.totalPrice > 50 ? 0 : 5)
const finalTotal = computed(() => cart.totalPrice + shipping.value)

const submitOrder = () => {
  if (!name.value || !email.value || !address.value) {
    alert("Por favor completa todos los campos")
    return
  }

  loading.value = true

  // Simulación tipo pasarela de pago
  setTimeout(() => {
    cart.items = []
    localStorage.removeItem("cart")
    router.push("/success")
  }, 2000)
}
</script>

<template>
  <section class="checkout">
    <h2>Checkout</h2>

    <div v-if="cart.items.length === 0" class="empty">
      Tu carrito está vacío.
    </div>

    <div v-else class="layout">
      <!-- Formulario -->
      <div class="form">
        <h3>Información de envío</h3>

        <input v-model="name" placeholder="Nombre completo" />
        <input v-model="email" placeholder="Correo electrónico" />
        <textarea v-model="address" placeholder="Dirección completa"></textarea>

        <h3>Método de pago</h3>
        <div class="fake-payment">
          <p>💳 Tarjeta de crédito / débito</p>
          <p class="note">(Simulación de pago segura)</p>
        </div>

        <button @click="submitOrder" :disabled="loading">
          {{ loading ? "Procesando pago..." : `Pagar ${finalTotal} €` }}
        </button>
      </div>

      <!-- Resumen -->
      <div class="summary">
        <h3>Resumen del pedido</h3>

        <div
          v-for="item in cart.items"
          :key="item.product.id"
          class="summary-item"
        >
          <span>{{ item.product.name }} x {{ item.quantity }}</span>
          <span>{{ item.product.price * item.quantity }} €</span>
        </div>

        <div class="divider"></div>

        <div class="row">
          <span>Subtotal</span>
          <span>{{ cart.totalPrice }} €</span>
        </div>

        <div class="row">
          <span>Envío</span>
          <span>{{ shipping === 0 ? "Gratis" : shipping + " €" }}</span>
        </div>

        <div class="total">
          <span>Total</span>
          <span>{{ finalTotal }} €</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.checkout {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: auto;
}

.layout {
  display: flex;
  gap: 4rem;
}

.form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.summary {
  width: 350px;
  padding: 2rem;
  background: var(--surface);
  border-radius: 12px;
}

input, textarea {
  padding: 0.9rem;
  border-radius: 8px;
  border: 1px solid var(--surface);
}

.fake-payment {
  padding: 1rem;
  border: 1px solid var(--surface);
  border-radius: 8px;
  margin-bottom: 1rem;
}

.note {
  font-size: 0.8rem;
  opacity: 0.7;
}

button {
  padding: 1rem;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.divider {
  height: 1px;
  background: var(--surface);
  margin: 1rem 0;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.total {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-top: 1rem;
}

.empty {
  text-align: center;
  padding: 3rem;
}
</style>