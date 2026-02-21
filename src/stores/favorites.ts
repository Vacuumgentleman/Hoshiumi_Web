import { defineStore } from "pinia"

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    ids: JSON.parse(localStorage.getItem("favorites") || "[]") as string[],
  }),

  actions: {
    toggle(id: string) {
      if (this.ids.includes(id)) {
        this.ids = this.ids.filter((i) => i !== id)
      } else {
        this.ids.push(id)
      }
      localStorage.setItem("favorites", JSON.stringify(this.ids))
    },
  },
})