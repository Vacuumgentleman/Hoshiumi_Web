import { defineStore } from "pinia"
import type { Product } from "@/types/product"

interface CartItem {
  product: Product
  quantity: number
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[],
  }),

  getters: {
    totalPrice: (state) =>
      state.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      ),

    totalItems: (state) =>
      state.items.reduce((total, item) => total + item.quantity, 0),
  },

  actions: {
    addToCart(product: Product) {
      const existing = this.items.find(
        (item) => item.product.id === product.id
      )

      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ product, quantity: 1 })
      }

      this.saveCart()
    },

    removeFromCart(id: string) {
      this.items = this.items.filter(
        (item) => item.product.id !== id
      )
      this.saveCart()
    },

    decreaseQuantity(id: string) {
      const existing = this.items.find(
        (item) => item.product.id === id
      )

      if (!existing) return

      if (existing.quantity > 1) {
        existing.quantity--
      } else {
        this.removeFromCart(id)
      }

      this.saveCart()
    },

    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.items))
    },
  },
})