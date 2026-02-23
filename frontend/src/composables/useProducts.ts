import { ref, computed } from "vue"
import { products } from "@/data/products"

export function useProducts() {
  const allProducts = ref(products) // 🔥 esto es nuevo
  const search = ref("")
  const selectedCategory = ref("all")
  const sortOrder = ref("default")

  const filteredProducts = computed(() => {
    let result = [...allProducts.value]

    if (search.value) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.value.toLowerCase())
      )
    }

    if (selectedCategory.value !== "all") {
      result = result.filter(
        p => p.category === selectedCategory.value
      )
    }

    if (sortOrder.value === "price-asc") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortOrder.value === "price-desc") {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  })

  function resetFilters() {
    search.value = ""
    selectedCategory.value = "all"
    sortOrder.value = "default"
  }

  return {
    allProducts, // 🔥 exponemos esto
    search,
    selectedCategory,
    sortOrder,
    filteredProducts,
    resetFilters
  }
}