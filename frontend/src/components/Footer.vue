<script setup lang="ts">
import { ref } from "vue"

const email = ref("")
const error = ref("")
const success = ref("")

const validateEmail = (value: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(value)
}

const subscribe = () => {
  error.value = ""
  success.value = ""

  if (!validateEmail(email.value)) {
    error.value = "Introduce un correo válido"
    return
  }

  success.value = "¡Suscripción exitosa!"
  email.value = ""
}
</script>

<template>
  <footer class="footer">

    <div class="footer-grid">

      <!-- MARCA -->
      <div class="brand">
        <h3>HOSHUMI</h3>
        <p>Arte minimalista contemporáneo</p>
      </div>

      <!-- NEWSLETTER -->
      <div class="newsletter">
        <h4>Suscríbete al newsletter</h4>

        <form @submit.prevent="subscribe" class="newsletter-form">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            v-model="email"
            required
          />
          <button type="submit">Suscribirme</button>
        </form>

        <p v-if="error" class="error">{{ error }}</p>
        <p v-if="success" class="success">{{ success }}</p>
      </div>

      <!-- SOCIAL -->
      <div class="social">
        <a href="#" aria-label="Instagram">
          <svg viewBox="0 0 24 24" class="icon">
            <path fill="currentColor"
              d="M7 2C4 2 2 4 2 7v10c0 3 2 5 5 5h10c3 0 5-2 5-5V7c0-3-2-5-5-5H7z"/>
          </svg>
        </a>

        <a href="#" aria-label="Twitter">
          <svg viewBox="0 0 24 24" class="icon">
            <path fill="currentColor"
              d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.4-1.6.7-2.5.9a4 4 0 0 0-7 3.6A11.3 11.3 0 0 1 3 4.9a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 4"/>
          </svg>
        </a>
      </div>

    </div>

    <div class="footer-bottom">
      © 2026 Hoshiumi ·
      <RouterLink to="/privacy">Privacy</RouterLink> ·
      <RouterLink to="/terms">Terms</RouterLink> ·
      <RouterLink to="/cookies">Cookies</RouterLink>
    </div>

  </footer>
</template>

<style scoped>
.footer {
  background: var(--surface);
  padding: 4rem 2rem 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  align-items: center;
  gap: 2rem;
}

/* AZUL */
.brand h3,
.newsletter h4 {
  color: var(--primary-blue);
}

.newsletter {
  text-align: center;
}

.newsletter-form {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.newsletter input {
  padding: 0.8rem 1rem;
  border: 2px solid var(--primary-blue);
  border-radius: 8px;
  background: transparent;
  color: var(--text);
  min-width: 260px;
}

.newsletter button {
  padding: 0.8rem 1.5rem;
  background: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.icon {
  width: 22px;
  height: 22px;
  color: var(--primary-blue);
}

.footer-bottom {
  margin-top: 3rem;
  text-align: center;
}

.footer-bottom a {
  color: var(--text);
  text-decoration: none;
}

.footer-bottom a.router-link-exact-active {
  color: var(--primary-blue);
  text-decoration: underline;
}
</style>