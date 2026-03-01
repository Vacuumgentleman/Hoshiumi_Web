<script setup lang="ts">
import { useThemeStore } from "@/stores/theme"
import CartDrawer from "@/components/CartDrawer.vue"
import Footer from "@/components/Footer.vue"
import Navbar from "@/components/Navbar.vue"
import "@/assets/styles/theme.css"

const theme = useThemeStore()
</script>

<template>
  <div :class="['layout', theme.dark ? 'dark' : 'light']">

    <Navbar />

    <main>
      <RouterView />
    </main>

    <CartDrawer />
    <Footer />

  </div>
</template>

<style scoped>
.layout {
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background 0.3s ease, color 0.3s ease;
}

main {
  flex: 1;
}
</style>