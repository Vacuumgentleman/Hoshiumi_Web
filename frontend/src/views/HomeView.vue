<script setup lang="ts">
</script>

<template>
  <section class="hero">
    <h1>Hoshiumi</h1>
    <p>Arte inspirado en el océano, las estrellas y la imaginación.</p>
    <RouterLink to="/gallery" class="btn">Explorar colección</RouterLink>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 5rem 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
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