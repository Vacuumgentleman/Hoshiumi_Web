import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import GalleryView from "@/views/GalleryView.vue"
import AboutView from "@/views/AboutView.vue"
//Legal
import Privacy from "@/views/legal/Privacy.vue"
import Terms from "@/views/legal/Terms.vue"
import Cookies from "@/views/legal/Cookies.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/gallery", name: "gallery", component: GalleryView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/checkout",  name: "checkout", component: () => import("@/views/CheckoutView.vue")},
    { path: "/success", name: "success", component: () => import("@/views/SuccessView.vue")},
    { path: "/product/:id", name: "product", component: () => import("@/views/ProductDetailView.vue"), props: true,},
    { path: "/privacy", component: Privacy},
    { path: "/terms", component: Terms},
    { path: "/cookies", component: Cookies},
  ],
})

export default router