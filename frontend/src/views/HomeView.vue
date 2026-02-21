<template>
  <section class="hero">
    <h1>Hoshiumi</h1>
    <p>Arte inspirado en el océano, las estrellas y la imaginación.</p>

    <RouterLink to="/gallery" class="btn">Explorar colección</RouterLink>
  </section>
</template>

<style scoped>
.hero {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  color: var(--color-muted);
  margin-bottom: 2rem;
}

.cta {
  background: var(--color-accent);
  padding: 1rem 2rem;
  border-radius: 30px;
  color: white;
  transition: 0.3s ease;
}

.cta:hover {
  opacity: 0.85;
}
.btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background: black;
  color: white;
  text-decoration: none;
  border-radius: 8px;
}
</style>