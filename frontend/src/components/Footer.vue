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
        <p>Arte hecho con amor</p>
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

      <!-- REDES SOCIALES -->
      <div class="social">
        <a
          href="https://instagram.com/hoshiumi.art"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <i class="fab fa-instagram"></i>
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener"
          aria-label="X"
        >
          <i class="fab fa-x-twitter"></i>
        </a>

        <a
          href="https://pinterest.com/"
          target="_blank"
          rel="noopener"
          aria-label="Pinterest"
        >
          <i class="fab fa-pinterest"></i>
        </a>

        <a
          href="https://behance.net/"
          target="_blank"
          rel="noopener"
          aria-label="Behance"
        >
          <i class="fab fa-behance"></i>
        </a>

        <a
          href="mailto:contacto@hoshiumi.art"
          aria-label="Email"
        >
          <i class="fas fa-envelope"></i>
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

.social {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
}

.social a {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-blue);
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.social a:hover {
  background: var(--primary-blue);
  color: white;
  transform: translateY(-4px);
}

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