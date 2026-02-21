<template>
  <section class="success">
    <h1>✨ Pedido confirmado ✨</h1>
    <p>Gracias por apoyar a Hoshiumi.</p>

    <RouterLink to="/gallery" class="btn">
      Volver a la tienda
    </RouterLink>
  </section>
</template>

<style scoped>
.success {
  text-align: center;
  padding: 5rem 2rem;
}

.btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background: black;
  color: white;
  border-radius: 8px;
}
</style>