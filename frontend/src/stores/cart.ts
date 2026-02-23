import { defineStore } from "pinia"
import type { Product } from "@/types/product"

export interface CartItem {
  product: Product
  quantity: number
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
    isOpen: false,
  }),

  getters: {
    totalPrice: (state) =>
      state.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      ),

    totalItems: (state) =>
      state.items.reduce(
        (total, item) => total + item.quantity,
        0
      ),
  },

  actions: {
    openCart() {
      this.isOpen = true
    },

    closeCart() {
      this.isOpen = false
    },

    addToCart(product: Product, qty = 1) {
      const existing = this.items.find(
        (item) => item.product.id === product.id
      )

      if (existing) {
        existing.quantity += qty
      } else {
        this.items.push({
          product,
          quantity: qty,
        })
      }

      this.openCart()
      this.saveCart()
    },

    removeFromCart(id: string) {
      this.items = this.items.filter(
        (item) => item.product.id !== id
      )
      this.saveCart()
    },

    decreaseQuantity(id: string) {
      const item = this.items.find(
        (item) => item.product.id === id
      )

      if (!item) return

      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.removeFromCart(id)
      }

      this.saveCart()
    },

    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.items))
    },

    loadCart() {
      const saved = localStorage.getItem("cart")
      if (saved) {
        try {
          this.items = JSON.parse(saved)
        } catch {
          this.items = []
        }
      }
    }
  },
})