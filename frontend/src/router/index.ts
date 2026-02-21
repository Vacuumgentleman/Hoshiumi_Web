import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import GalleryView from "@/views/GalleryView.vue"
import CartView from "@/views/CartView.vue"
import AboutView from "@/views/AboutView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/gallery", name: "gallery", component: GalleryView },
    { path: "/cart", name: "cart", component: CartView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/product/:id", name: "product",component: () => import("@/views/ProductView.vue")},
    { path: "/checkout",  name: "checkout", component: () => import("@/views/CheckoutView.vue")},
    { path: "/success", name: "success", component: () => import("@/views/SuccessView.vue")},

  ],
})

export default router