import { defineStore } from "pinia"
import type { Product } from "@/types/product"

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("cart") || "[]") as Product[],
  }),

  getters: {
    totalPrice: (state) =>
      state.items.reduce((total, item) => total + item.price, 0),

    totalItems: (state) => state.items.length,
  },

  actions: {
    addToCart(product: Product) {
      this.items.push(product)
      this.saveCart()
    },

    removeFromCart(id: string) {
      this.items = this.items.filter((item) => item.id !== id)
      this.saveCart()
    },

    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.items))
    },
  },
})