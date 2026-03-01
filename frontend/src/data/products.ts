import type { Product } from "@/types/product"

export const products: Product[] = [

  /* ================= PRINTS ================= */

  {
    id: "1",
    name: "Arcane",
    description: "Print artístico inspirado en la serie Arcane usa contrastes intensos en la escena que retrata a powder junto a ekko.",
    price: 50,
    category: "print",
    image: new URL("../assets/images/Products/prints/Arcane.png", import.meta.url).href,
    stock: 15,
    featured: true,
  },

  {
    id: "2",
    name: "Fresita",
    description: "Ilustración vibrante con tonos pastel y estilo kawaii. Print tamaño A4 en papel de alta calidad.",
    price: 35,
    category: "print",
    image: new URL("../assets/images/Products/prints/Fresita.png", import.meta.url).href,
    stock: 20,
  },

  {
    id: "3",
    name: "Kokomi",
    description: "Print inspirado en Genshin Impact y la revista vogue, el estilo abarca fantasía acuática, colores suaves y detalles delicados.",
    price: 45,
    category: "print",
    image: new URL("../assets/images/Products/prints/Kokomi.jpeg", import.meta.url).href,
    stock: 12,
  },

  {
    id: "4",
    name: "Miku",
    description: "Ilustración dinámica con estilo pop japonés de la diva virtual Hatsune Miku. Impresión profesional en papel satinado.",
    price: 40,
    category: "print",
    image: new URL("../assets/images/Products/prints/Miku.png", import.meta.url).href,
    stock: 18,
  },

  {
    id: "5",
    name: "Rose",
    description: "Ilustracion de la cantante Roseanne Park, cuenta con una composición atrevida con colores rosas y detalles de su hit apt.",
    price: 38,
    category: "print",
    image: new URL("../assets/images/Products/prints/Rose.jpeg", import.meta.url).href,
    stock: 14,
  },

  {
    id: "6",
    name: "Uraraka",
    description: "Print lleno de energía y dolor, inspirado en personaje Uraraka de la serie My Hero Academia.",
    price: 42,
    category: "print",
    image: new URL("../assets/images/Products/prints/Uraraka.png", import.meta.url).href,
    stock: 16,
  },

  /* ================= STICKER PACKS ================= */

  {
    id: "7",
    name: "Sticker Pack SZZOO",
    description: "Pack de stickers basadon en la banda stay kids con una representacion de animales de cada uno.",
    price: 12,
    category: "sticker",
    image: new URL("../assets/images/Products/stickers/SKZOO.png", import.meta.url).href,
    stock: 50,
    featured: true,
  },

  {
    id: "8",
    name: "Sticker Pack ANITEEZ",
    description: "Colección de stickers de la banda Ateez, con una representación en un animal adorable de cada uno de sus integrantes, con acabado mate premium.",
    price: 12,
    category: "sticker",
    image: new URL("../assets/images/Products/stickers/ANITEEZ.png", import.meta.url).href,
    stock: 50,
  },

  /* ================= STICKERS INDIVIDUALES ================= */

  {
    id: "9",
    name: "Sticker Conejo",
    description: "Sticker individual ilustrado con acabado brillante y resistente.",
    price: 4,
    category: "sticker",
    image: new URL("../assets/images/Products/stickers/Conejo.png", import.meta.url).href,
    stock: 100,
  },

  {
    id: "10",
    name: "Sticker Huron",
    description: "Ilustración original en formato sticker, resistente al agua y rayones.",
    price: 4,
    category: "sticker",
    image: new URL("../assets/images/Products/stickers/Huron.png", import.meta.url).href,
    stock: 100,
  },

  {
    id: "11",
    name: "Sticker Loro",
    description: "Sticker colorido con acabado premium y adhesivo duradero.",
    price: 4,
    category: "sticker",
    image: new URL("../assets/images/Products/stickers/Loro.png", import.meta.url).href,
    stock: 100,
  },

  {
    id: "12",
    name: "Sticker Perro",
    description: "Diseño adorable en formato sticker individual, resistente al agua.",
    price: 4,
    category: "sticker",
    image: new URL("../assets/images/Products/stickers/Perro.png", import.meta.url).href,
    stock: 100,
  },

  {
    id: "13",
    name: "Sticker Gato",
    description: "Sticker ilustrado con detalles finos y acabado profesional.",
    price: 4,
    category: "sticker",
    image: new URL("../assets/images/Products/stickers/Gato.png", import.meta.url).href,
    stock: 100,
  },

]