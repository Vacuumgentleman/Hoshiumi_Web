import type { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: "1",
    name: "Moonlight Reverie",
    description: "Ilustración digital inspirada en el océano nocturno.",
    price: 35,
    category: "digital",
    image: "/images/moonlight.jpg",
    stock: 999,
    featured: true,
  },
  {
    id: "2",
    name: "Ocean Spirit Print",
    description: "Print en papel de alta calidad tamaño A3.",
    price: 50,
    category: "print",
    image: "/images/ocean.jpg",
    stock: 10,
  },
]