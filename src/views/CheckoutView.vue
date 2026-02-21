<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useCartStore } from "@/stores/cart"

const cart = useCartStore()
const router = useRouter()

const name = ref("")
const email = ref("")
const address = ref("")
const loading = ref(false)

const submitOrder = () => {
  if (!name.value || !email.value || !address.value) {
    alert("Por favor completa todos los campos")
    return
  }

  loading.value = true

  setTimeout(() => {
    cart.items = []
    localStorage.removeItem("cart")
    router.push("/success")
  }, 1500)
}
</script>

<template>
  <section class="checkout">
    <h2>Checkout</h2>

    <div class="layout">
      <!-- Formulario -->
      <div class="form">
        <input v-model="name" placeholder="Nombre completo" />
        <input v-model="email" placeholder="Correo electrónico" />
        <textarea v-model="address" placeholder="Dirección"></textarea>

        <button @click="submitOrder" :disabled="loading">
          {{ loading ? "Procesando..." : "Confirmar pedido" }}
        </button>
      </div>

      <!-- Resumen -->
      <div class="summary">
        <h3>Resumen</h3>

        <div
          v-for="item in cart.items"
          :key="item.product.id"
        >
          {{ item.product.name }} x {{ item.quantity }}
        </div>

        <h3>Total: {{ cart.totalPrice }} USD</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
.checkout {
  padding: 2rem;
}

.layout {
  display: flex;
  gap: 3rem;
}

.form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.summary {
  width: 300px;
  border-left: 1px solid #eee;
  padding-left: 2rem;
}

input, textarea {
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  padding: 0.8rem;
  background: #0f1c2e;
  color: white;
  border: none;
  border-radius: 6px;
}
</style>