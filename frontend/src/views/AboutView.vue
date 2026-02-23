<template>
  <section class="about">
      <div class="about-container">
          <div class="about-text">
              <h2>Sobre Hoshiumi</h2>
              <p>
                  Hoshiumi es un proyecto artístico que fusiona minimalismo,
                  emoción y estética contemporánea. Cada obra busca capturar
                  momentos de calma, profundidad y conexión.
              </p>

              <p>
                  Todas las piezas están diseñadas cuidadosamente para aportar
                  elegancia y personalidad a cualquier espacio.
              </p>
          </div>

          <div class="about-image">
              <img src="/src/assets/images/About.png" alt="Studio Hoshiumi">
          </div>
      </div>
  </section>
</template>
<style scoped>

.about {
    padding: 100px 10%;
    background: #f8f8f8;
}

.about-container {
    display: flex;
    align-items: center;
    gap: 60px;
}

.about-text {
    flex: 1;
}

.about-text h2 {
    font-size: 32px;
    margin-bottom: 20px;
}

.about-text p {
    font-size: 16px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 15px;
}

.about-image {
    flex: 1;
}

.about-image img {
    width: 100%;
    border-radius: 8px;
}
</style>