export type ProductCategory =
  | "sticker"
  | "print"
  | "original"
  | "merch"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: ProductCategory
  image: string
  stock: number
  featured?: boolean
  tags?: string[]
}