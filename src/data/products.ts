import type { Product } from '@/types/product'

export const products: Product[] = [
  // Carnets Créatifs Personnalisés
  {
    id: 1,
    name: 'Carnet Créatif - Animaux de la Jungle',
    description:
      "Carnet personnalisé avec des illustrations colorées d'animaux de la jungle. Parfait pour stimuler la créativité et l'imagination des enfants.",
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80',
    category: 'Kits Enfants',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
  },
  {
    id: 2,
    name: 'Carnet Créatif - Fruits et Légumes',
    description:
      'Carnet éducatif personnalisé pour découvrir les fruits et légumes de manière ludique et créative.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80',
    category: 'Kits Enfants',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
  },
  {
    id: 3,
    name: 'Carnet Créatif - Le Corps Humain',
    description: "Carnet personnalisé pour apprendre l'anatomie de façon amusante et interactive.",
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80',
    category: 'Kits Enfants',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
  },

  // Kits Jouets Éducatifs
  {
    id: 4,
    name: 'Kit Resto Pizza',
    description:
      'Kit complet pour créer son propre restaurant de pizzas. Développe la créativité et les compétences sociales.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80',
    category: 'Kits Enfants',
    subcategory: 'Kits Jouets Éducatifs',
    inStock: true,
    personalizable: false,
  },
  {
    id: 5,
    name: 'Kit La Maison à Monter',
    description:
      'Kit de construction pour assembler sa propre maison. Stimule la motricité fine et la logique spatiale.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    category: 'Kits Enfants',
    subcategory: 'Kits Jouets Éducatifs',
    inStock: true,
    personalizable: false,
  },
  {
    id: 6,
    name: 'Kit Comptoir à Glaces',
    description: "Kit complet pour jouer au glacier. Encourage l'imagination et le jeu de rôle.",
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80',
    category: 'Kits Enfants',
    subcategory: 'Kits Jouets Éducatifs',
    inStock: true,
    personalizable: false,
  },
]

export const categories = ['Tous', 'Kits Enfants', 'Kits Adolescents']
export const subcategories = {
  'Kits Enfants': ['Tous', 'Carnets Créatifs', 'Kits Jouets Éducatifs'],
  'Kits Adolescents': ['Tous', 'Kits Créatifs'],
}
