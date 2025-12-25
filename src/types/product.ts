export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: 'Kits Enfants' | 'Kits Adolescents'
  subcategory: 'Carnets Créatifs' | 'Kits Jouets Éducatifs' | 'Kits Créatifs'
  inStock: boolean
  personalizable?: boolean
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