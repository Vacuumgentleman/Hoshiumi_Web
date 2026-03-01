<template>
  <section class="success">
    <div class="card">
      <h1>✨ Pedido confirmado ✨</h1>
      <p>Tu pago fue procesado correctamente.</p>
      <p>Recibirás un correo de confirmación en breve.</p>

      <RouterLink to="/gallery" class="btn">
        Volver a la tienda
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.success {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  padding: 3rem;
  border-radius: 16px;
  background: var(--surface);
  text-align: center;
}

.btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: var(--primary-blue);
  color: white;
  border-radius: 8px;
}
</style> 