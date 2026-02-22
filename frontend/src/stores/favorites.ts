import { defineStore } from "pinia"
import type { Product } from "@/types/product"

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("favorites") || "[]") as Product[],
  }),

  actions: {
    toggleFavorite(product: Product) {
      const exists = this.items.find(p => p.id === product.id)

      if (exists) {
        this.items = this.items.filter(p => p.id !== product.id)
      } else {
        this.items.push(product)
      }

      this.save()
    },

    isFavorite(id: string) {
      return this.items.some(p => p.id === id)
    },

    save() {
      localStorage.setItem("favorites", JSON.stringify(this.items))
    },
  },
})