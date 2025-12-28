export interface Product {
  id: number
  name: string
  description: string
  price: number
  priceDT: number
  image: string
  images?: string[] // Additional product images for gallery
  category: 'Kits Enfants' | 'Kits Adolescents'
  subcategory: 'Carnets Créatifs' | 'Kits Jouets Éducatifs' | 'Kits Créatifs'
  inStock: boolean
  personalizable?: boolean
  features?: string[] // Product features/highlights
  detailedDescription?: string // Longer description for modal
}

export interface PersonalizationData {
  firstName: string
  lastName: string
  customMessage: string
  customImage?: File | null
}

export interface CartItem extends Product {
  quantity: number
  personalization?: PersonalizationData
}
