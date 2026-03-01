<script setup lang="ts">
import brandName from "@/assets/images/brand-name.png"
</script>
<template>
  <section class="hero">
    <img :src="brandName" alt="Hoshiumi" class="hero-logo" />
    <p>Arte inspirado en el océano, las estrellas y la imaginación.</p>

    <RouterLink to="/gallery" class="btn">
      Explorar colección
    </RouterLink>
  </section>
</template>

<style scoped>
.hero {
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: #B1CAE8;
  background-image: url("@/assets/images/home-overlay.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  overflow: hidden;
}

/* Overlay dinámico */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(177, 202, 232, 0.55);
  backdrop-filter: blur(2px);
  z-index: 0;
}


/* Contenido encima */
.hero > * {
  position: relative;
  z-index: 1;
}

.hero p {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 2rem;
  max-width: 700px;
  line-height: 1.6;
  text-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

/* Overlay suave */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #b1cae8a6;
  z-index: 0;
}

.hero > * {
  position: relative;
  z-index: 1;
}

.hero p {
  color: #1e3a66;
  margin-bottom: 2rem;
  max-width: 600px;
}

.btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.9rem 2.2rem;
  background: #205BA9;
  color: white;
  text-decoration: none;
  border-radius: 40px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #163f78;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}
.hero-logo {
  width: 640px;
  max-width: 100%;
  margin-bottom: 1.5rem;
  object-fit: contain;
  animation: fadeUp 0.8s ease;

}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>