<script setup lang="ts">
const email = "contacto@hoshiumi.art"
const instagram = "https://instagram.com/hoshiumi.art"
</script>

<template>
  <section class="about">
    <div class="about-container">

      <div class="about-text">
        <h2>Sobre Hoshiumi</h2>

        <p>
          Hoshiumi nace como un proyecto artístico digital grupal centrado en la
          armonía visual, el mar y la emoción silenciosa.
          Cada obra busca transmitir calma, profundidad y una conexión íntima
          entre el espectador y el espacio que habita.
        </p>

        <p>
          Inspirado en la estética marina y el equilibrio entre luz y vacío,
          el proyecto explora composiciones limpias, contrastes suaves y una
          narrativa visual sutil pero poderosa.
        </p>

        <p>
          Todas las piezas están diseñadas cuidadosamente para integrarse con
          elegancia, aportando identidad sin saturar el ambiente.
        </p>

        <!-- Contacto -->
        <div class="contact">
          <h3>Contacto</h3>

          <p>
            ✉ Email:
            <a :href="`mailto:${email}`">{{ email }}</a>
          </p>

          <p>
            📷 Instagram:
            <a :href="instagram" target="_blank">
              @hoshiumi.art
            </a>
          </p>
        </div>

      </div>

      <div class="about-image">
        <img src="@/assets/images/About.png" alt="Studio Hoshiumi">
      </div>

    </div>
  </section>
</template>

<style scoped>

.about {
  padding: 6rem 8%;
  background: var(--bg);
  color: var(--text);
}

.about-container {
  display: flex;
  align-items: center;
  gap: 5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: var(--text);;
}

.about-text p {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.2rem;
  opacity: 0.85;
}

.contact {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(128,128,128,0.2);
}

.contact h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.contact a {
  text-decoration: none;
  font-weight: 500;
}

.contact a:hover {
  text-decoration: underline;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  border-radius: 16px;
  transition: transform 0.4s ease;
}

.about-image img:hover {
  transform: scale(1.03);
}

/* Responsive */
@media (max-width: 900px) {
  .about-container {
    flex-direction: column;
  }

  .about {
    padding: 4rem 6%;
  }
}

</style>