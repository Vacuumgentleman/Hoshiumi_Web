<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue"
import CartDrawer from "@/components/CartDrawer.vue"
</script>


<template>
  <MainLayout />
  <RouterView />
  <CartDrawer />
</template>
