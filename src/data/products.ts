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
    images: [
      'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=500&q=80',
      'https://images.unsplash.com/photo-1518623001395-125242310d0c?w=500&q=80',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80',
    ],
    category: 'Kits Enfants',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
    features: [
      '48 pages illustrées haute qualité',
      'Personnalisation avec prénom et message',
      'Couverture rigide résistante',
      'Illustrations colorées et éducatives',
      'Format A5 facile à transporter',
    ],
    detailedDescription:
      "Ce carnet créatif emmène votre enfant dans une aventure au cœur de la jungle ! Avec ses illustrations colorées d'animaux sauvages, il stimule l'imagination et la créativité. Chaque page propose des activités ludiques et éducatives sur les animaux de la jungle. La personnalisation avec le prénom de l'enfant rend ce carnet unique et précieux.",
  },
  {
    id: 2,
    name: 'Carnet Créatif - Fruits et Légumes',
    description:
      'Carnet éducatif personnalisé pour découvrir les fruits et légumes de manière ludique et créative.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&q=80',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80',
    ],
    category: 'Kits Enfants',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
    features: [
      '48 pages éducatives illustrées',
      'Découverte des fruits et légumes de saison',
      'Activités de coloriage et jeux',
      'Personnalisation unique',
      'Papier écologique certifié',
    ],
    detailedDescription:
      "Un carnet ludique pour apprendre à reconnaître et nommer les fruits et légumes ! Avec des illustrations appétissantes et des activités amusantes, votre enfant découvre l'importance d'une alimentation saine. Le carnet inclut des coloriages, des jeux de reconnaissance et des informations adaptées à l'âge de l'enfant.",
  },
  {
    id: 3,
    name: 'Carnet Créatif - Le Corps Humain',
    description: "Carnet personnalisé pour apprendre l'anatomie de façon amusante et interactive.",
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80',
      'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80',
    ],
    category: 'Kits Enfants',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
    features: [
      'Découverte du corps humain simplifiée',
      '48 pages avec schémas clairs',
      'Activités interactives et quiz',
      'Vocabulaire adapté aux enfants',
      'Personnalisation avec prénom',
    ],
    detailedDescription:
      "Ce carnet éducatif fait découvrir le corps humain aux enfants de manière simple et ludique. Avec des schémas clairs et des explications adaptées, votre enfant apprend le fonctionnement des organes, des muscles et du squelette. Les activités interactives renforcent l'apprentissage de façon amusante.",
  },

  // Kits Jouets Éducatifs
  {
    id: 4,
    name: 'Kit Resto Pizza',
    description:
      'Kit complet pour créer son propre restaurant de pizzas. Développe la créativité et les compétences sociales.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500&q=80',
      'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=500&q=80',
      'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500&q=80',
    ],
    category: 'Kits Enfants',
    subcategory: 'Kits Jouets Éducatifs',
    inStock: true,
    personalizable: false,
    features: [
      'Plus de 30 accessoires inclus',
      'Pâte à modeler réutilisable',
      'Fiches recettes illustrées',
      'Développe la créativité culinaire',
      'Jeu de rôle éducatif',
    ],
    detailedDescription:
      "Transformez votre enfant en chef pizzaiolo ! Ce kit complet contient tout le nécessaire pour créer et servir des pizzas délicieuses : pâte à modeler, emporte-pièces, ustensiles et accessoires. Les enfants développent leur imagination, apprennent le jeu de rôle et s'amusent pendant des heures. Idéal pour jouer seul ou avec des amis.",
  },
  {
    id: 5,
    name: 'Kit La Maison à Monter',
    description:
      'Kit de construction pour assembler sa propre maison. Stimule la motricité fine et la logique spatiale.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1587462161949-131bb62ba221?w=500&q=80',
      'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=500&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80',
    ],
    category: 'Kits Enfants',
    subcategory: 'Kits Jouets Éducatifs',
    inStock: true,
    personalizable: false,
    features: [
      'Plus de 100 pièces en bois',
      'Instructions claires étape par étape',
      'Développe la motricité fine',
      'Apprentissage de la construction',
      'Bois écologique certifié FSC',
    ],
    detailedDescription:
      "Un kit de construction fascinant pour créer sa propre maison ! Avec plus de 100 pièces en bois de qualité, votre enfant apprend les bases de la construction tout en s'amusant. Ce jeu éducatif développe la patience, la logique spatiale et la coordination œil-main. Une fois montée, la maison devient un jouet avec lequel l'enfant peut continuer à jouer.",
  },
  {
    id: 6,
    name: 'Kit Comptoir à Glaces',
    description: "Kit complet pour jouer au glacier. Encourage l'imagination et le jeu de rôle.",
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&q=80',
      'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&q=80',
      'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=500&q=80',
    ],
    category: 'Kits Enfants',
    subcategory: 'Kits Jouets Éducatifs',
    inStock: true,
    personalizable: false,
    features: [
      'Comptoir de glacier coloré',
      '8 parfums de glaces différents',
      'Accessoires: cuillères, cornets, coupelles',
      "Apprentissage des chiffres et de l'argent",
      'Jeu de rôle marchand-client',
    ],
    detailedDescription:
      "Votre enfant devient glacier avec ce kit complet ! Il apprend à servir ses clients, à compter la monnaie et à créer de délicieuses combinaisons de parfums. Ce jeu développe les compétences sociales, le calcul mental et l'imagination. Parfait pour organiser une vraie boutique de glaces à la maison !",
  },

  // Kits Adolescents - Carnets Créatifs / Journaux
  {
    id: 7,
    name: 'Mon Journal Créatif – Évasion',
    description:
      "Journal créatif pour adolescents avec des pages inspirantes pour explorer ses rêves et projets. Un espace pour s'évader et laisser libre cours à son imagination.",
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&q=80',
      'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=500&q=80',
      'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=500&q=80',
    ],
    category: 'Kits Adolescents',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
    features: [
      '120 pages de qualité premium',
      'Prompts créatifs inspirants',
      'Pages à personnaliser',
      'Couverture rigide élégante',
      'Format pratique à emporter partout',
    ],
    detailedDescription:
      "Un compagnon d'évasion pour les adolescents rêveurs ! Ce journal créatif propose des prompts inspirants pour explorer ses aspirations, projets et rêves. Avec ses pages soigneusement conçues, il encourage l'introspection créative et l'expression personnelle. La personnalisation rend chaque journal unique.",
  },
  {
    id: 8,
    name: 'Mon Journal Créatif – Confidence',
    description:
      'Journal intime avec des prompts créatifs pour exprimer ses émotions et pensées. Un compagnon de confiance pour les moments personnels.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1554306297-0c86e837d24b?w=500&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=80',
    ],
    category: 'Kits Adolescents',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
    features: [
      'Espace sécurisé pour confidences',
      'Questions guidées pour introspection',
      '120 pages papier premium',
      'Design élégant et discret',
      'Fermoir avec petit cadenas',
    ],
    detailedDescription:
      "Un journal intime conçu pour les adolescents qui ont besoin d'un espace personnel pour exprimer leurs émotions. Avec des prompts réfléchis et bienveillants, ce journal aide à comprendre et à gérer ses sentiments. Le cadenas assure la confidentialité des pensées les plus intimes.",
  },
  {
    id: 9,
    name: 'Mon Journal Créatif – Racines',
    description:
      'Journal créatif pour se reconnecter à ses origines et valeurs. Des activités pour explorer son identité et son histoire familiale.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&q=80',
      'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500&q=80',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&q=80',
    ],
    category: 'Kits Adolescents',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
    features: [
      'Activités sur identité et héritage',
      'Arbre généalogique à compléter',
      'Pages pour interviews familiales',
      'Espace photos et souvenirs',
      '120 pages soigneusement conçues',
    ],
    detailedDescription:
      "Un journal précieux pour explorer ses racines et son identité. À travers des activités réfléchies, les adolescents découvrent leur histoire familiale, leurs valeurs et ce qui les définit. Parfait pour renforcer les liens familiaux et comprendre d'où l'on vient pour mieux savoir où l'on va.",
  },

  // Kits Adolescents - Kits Créatifs Ado
  {
    id: 10,
    name: 'Kit Bijoux',
    description:
      "Kit complet pour créer ses propres bijoux tendance. Contient perles, fils, fermoirs et outils pour fabriquer bracelets, colliers et boucles d'oreilles.",
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80',
    ],
    category: 'Kits Adolescents',
    subcategory: 'Kits Créatifs',
    inStock: true,
    personalizable: false,
    features: [
      'Plus de 300 perles variées',
      'Fils et fermoirs professionnels',
      'Outils de bijouterie inclus',
      'Guide avec 15 modèles tendance',
      'Rangement organisé inclus',
    ],
    detailedDescription:
      "Un kit complet pour devenir créateur de bijoux ! Avec une grande variété de perles, de fils et d'outils professionnels, les adolescents peuvent créer des bijoux uniques et tendance. Le guide inclut 15 modèles à suivre, mais l'imagination reste la seule limite. Parfait pour créer des cadeaux personnalisés ou lancer sa propre petite collection.",
  },
  {
    id: 11,
    name: 'Kit Moodboard',
    description:
      "Kit créatif pour réaliser des tableaux d'inspiration personnalisés. Inclut cadre, épingles, stickers et accessoires pour créer son univers visuel.",
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&q=80',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80',
    ],
    category: 'Kits Adolescents',
    subcategory: 'Kits Créatifs',
    inStock: true,
    personalizable: false,
    features: [
      'Cadre liège 50x70cm',
      'Pack de 200 épingles colorées',
      'Stickers et washi tape variés',
      'Lettres adhésives dorées',
      "Guide d'inspiration créative",
    ],
    detailedDescription:
      "Créez votre univers visuel avec ce kit moodboard complet ! Parfait pour rassembler ses inspirations, ses objectifs et ses rêves de manière visuelle et créative. Le grand format permet d'afficher photos, citations, dessins et tout ce qui inspire. Un outil puissant pour la visualisation et la motivation quotidienne.",
  },
]

export const categories = ['Tous', 'Kits Enfants', 'Kits Adolescents']
export const subcategories = {
  'Kits Enfants': ['Tous', 'Carnets Créatifs', 'Kits Jouets Éducatifs'],
  'Kits Adolescents': ['Tous', 'Carnets Créatifs', 'Kits Créatifs'],
}
