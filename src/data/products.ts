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

  // Kits Adolescents - Carnets Créatifs / Journaux
  {
    id: 7,
    name: 'Mon Journal Créatif – Évasion',
    description:
      "Journal créatif pour adolescents avec des pages inspirantes pour explorer ses rêves et projets. Un espace pour s'évader et laisser libre cours à son imagination.",
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?w=500&q=80',
    category: 'Kits Adolescents',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
  },
  {
    id: 8,
    name: 'Mon Journal Créatif – Confidence',
    description:
      'Journal intime avec des prompts créatifs pour exprimer ses émotions et pensées. Un compagnon de confiance pour les moments personnels.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&q=80',
    category: 'Kits Adolescents',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
  },
  {
    id: 9,
    name: 'Mon Journal Créatif – Racines',
    description:
      'Journal créatif pour se reconnecter à ses origines et valeurs. Des activités pour explorer son identité et son histoire familiale.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&q=80',
    category: 'Kits Adolescents',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
  },

  // Kits Adolescents - Kits Créatifs Ado
  {
    id: 10,
    name: 'Kit Bijoux',
    description:
      "Kit complet pour créer ses propres bijoux tendance. Contient perles, fils, fermoirs et outils pour fabriquer bracelets, colliers et boucles d'oreilles.",
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80',
    category: 'Kits Adolescents',
    subcategory: 'Kits Créatifs',
    inStock: true,
    personalizable: false,
  },
  {
    id: 11,
    name: 'Kit Moodboard',
    description:
      "Kit créatif pour réaliser des tableaux d'inspiration personnalisés. Inclut cadre, épingles, stickers et accessoires pour créer son univers visuel.",
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&q=80',
    category: 'Kits Adolescents',
    subcategory: 'Kits Créatifs',
    inStock: true,
    personalizable: false,
  },
]

export const categories = ['Tous', 'Kits Enfants', 'Kits Adolescents']
export const subcategories = {
  'Kits Enfants': ['Tous', 'Carnets Créatifs', 'Kits Jouets Éducatifs'],
  'Kits Adolescents': ['Tous', 'Carnets Créatifs', 'Kits Créatifs'],
}
