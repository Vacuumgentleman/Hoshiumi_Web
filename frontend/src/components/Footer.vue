<template>
  <footer class="footer">
    <div class="footer-container">

      <!-- Marca -->
      <div class="footer-brand">
        <h3>HOSHUMI</h3>
        <p>Arte minimalista contemporáneo</p>
      </div>

      <!-- Newsletter -->
      <div class="footer-newsletter">
        <p>Suscríbete al newsletter</p>
        <div class="newsletter-form">
          <input
            type="email"
            placeholder="Tu correo"
            v-model="email"
          />
          <button @click="subscribe">Enviar</button>
        </div>
      </div>

      <!-- Redes -->
      <div class="footer-social">
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <!-- Instagram SVG -->
          <svg viewBox="0 0 24 24" class="icon">
            <path fill="currentColor"
              d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 
              5-5V7c0-2.8-2.2-5-5-5H7zm5 5.2A4.8 4.8 0 1 1 7.2 12 
              4.8 4.8 0 0 1 12 7.2zm6.4-.9a1.2 1.2 0 1 1-1.2-1.2 
              1.2 1.2 0 0 1 1.2 1.2z"/>
          </svg>
        </a>

        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <svg viewBox="0 0 24 24" class="icon">
            <path fill="currentColor"
              d="M22 5.8c-.8.4-1.6.6-2.5.8a4.3 4.3 0 0 
              0 1.9-2.4c-.8.5-1.8.9-2.8 1.1A4.3 4.3 0 0 
              0 11 9.5a12.2 12.2 0 0 1-8.9-4.5 
              4.3 4.3 0 0 0 1.3 5.7c-.7 0-1.4-.2-2-.5 
              v.1a4.3 4.3 0 0 0 3.5 4.2c-.6.2-1.2.2-1.8.1 
              a4.3 4.3 0 0 0 4 3 
              A8.6 8.6 0 0 1 2 19.5a12.1 12.1 0 0 0 
              6.6 1.9c7.9 0 12.2-6.5 12.2-12.2v-.6c.8-.6 1.5-1.4 2-2.3z"/>
          </svg>
        </a>
      </div>

    </div>

    <!-- Legal -->
    <div class="footer-bottom">
      © 2026 Hoshiumi ·
      <RouterLink to="/privacy">Privacy Policy</RouterLink> ·
      <RouterLink to="/terms">Terms of Service</RouterLink> ·
      <RouterLink to="/cookies">Cookies Policy</RouterLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue"

const email = ref("")

const subscribe = () => {
  if (!email.value) return
  alert("Gracias por suscribirte ✨")
  email.value = ""
}
</script>

<style scoped>
.footer {
  margin-top: auto;
  padding: 3rem;
  border-top: 1px solid #222;
  background: var(--surface);
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.footer-newsletter input {
  padding: 0.5rem;
  border: 1px solid #444;
  background: transparent;
  color: var(--text);
}

.footer-newsletter button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--text);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: 0.2s ease;
}

.footer-newsletter button:hover {
  background: var(--text);
  color: var(--bg);
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.icon {
  width: 20px;
  height: 20px;
  opacity: 0.7;
  transition: 0.2s ease;
}

.icon:hover {
  opacity: 1;
}

.footer-bottom {
  margin-top: 2rem;
  font-size: 0.75rem;
  opacity: 0.7;
  text-align: center;
}

.footer-bottom a {
  color: var(--text);
  text-decoration: none;
}
</style>