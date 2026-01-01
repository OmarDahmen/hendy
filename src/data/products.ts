import type { Product } from '@/types/product'

// Helper function to build product image paths
const getProductImages = (
  category: 'kits-enfants' | 'kits-adolescents',
  subcategory: string,
  id: number,
  folderName: string,
  imageCount: number,
  extension: 'png' | 'jpg' = 'png'
) => {
  const basePath = `/products/${category}/${subcategory}/${id}-${folderName}`
  const images: string[] = []
  for (let i = 1; i < imageCount; i++) {
    images.push(`${basePath}/${i}.${extension}`)
  }
  return {
    image: `${basePath}/0.${extension}`,
    images,
  }
}

export const products: Product[] = [
  // Carnets Créatifs Personnalisés
  {
    id: 1,
    name: 'Carnet Créatif - Animaux de la Jungle',
    description:
      "Carnet personnalisé avec des illustrations colorées d'animaux de la jungle. Parfait pour stimuler la créativité et l'imagination des enfants.",
    price: 29.99,
    priceDT: 39.9,
    ...getProductImages('kits-enfants', 'carnets-creatifs', 1, 'carnet-animaux-jungle', 14),
    category: 'Kits Enfants',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
    features: [
      'Plus de 80 pages richement illustrées en haute qualité',
      'Personnalisation avec nom, prénom et photo personnelle',
      '7 masques de déguisement d’animaux, 16 étiquettes et 48 stickers offerts avec le carnet',
      'Couverture rigide, solide et durable',
      'Format A5, pratique et facile à transporter',
    ],
    detailedDescription:
      "Ce carnet créatif emmène votre enfant dans une aventure au cœur de la jungle ! Avec ses illustrations colorées d'animaux sauvages, il stimule l'imagination et la créativité. Chaque page propose des activités ludiques et éducatives sur les animaux de la jungle. La personnalisation avec le nom/ prénom et la photo personnelle de l'enfant rend ce carnet unique et précieux",
  },
  {
    id: 2,
    name: 'Carnet Créatif - Fruits et Légumes',
    description:
      'Carnet éducatif personnalisé pour découvrir les fruits et légumes de manière ludique et créative.',
    price: 29.99,
    priceDT: 39.9,
    ...getProductImages('kits-enfants', 'carnets-creatifs', 2, 'carnet-fruits-legumes', 2),
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
    price: 29.99,
    priceDT: 39.9,
    ...getProductImages('kits-enfants', 'carnets-creatifs', 3, 'carnet-corps-humain', 2),
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
  {
    id: 12,
    name: 'Carnet Créatif - Mon Petit Mouton',
    description:
      'Carnet personnalisé avec des illustrations adorables de moutons. Parfait pour développer la créativité et accompagner les enfants dans leurs apprentissages.',
    price: 14.99,
    priceDT: 19.9,
    ...getProductImages('kits-enfants', 'carnets-creatifs', 12, 'carnet-petit-mouton', 5, 'jpg'),
    category: 'Kits Enfants',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
    features: [
      '15 pages illustrées en haute qualité',
      'Personnalisation avec le prénom et un message',
      'Enveloppe créative offerte, contenant trois activités',
      'Couverture rigide, solide et durable',
      'Format A5, pratique et facile à transporter',
    ],
    detailedDescription:
      "Ce carnet créatif invite votre enfant dans l'univers tendre des moutons ! Avec ses illustrations douces et apaisantes, il encourage la créativité et l'imagination. Chaque page propose des activités ludiques et éducatives autour de ce petit animal attachant. La personnalisation avec le prénom de l'enfant rend ce carnet unique et précieux.",
  },

  // Kits Jouets Éducatifs
  {
    id: 4,
    name: 'Kit Resto Pizza',
    description:
      'Kit complet pour créer son propre restaurant de pizzas. Développe la créativité et les compétences sociales.',
    price: 15.99,
    priceDT: 25.9,
    ...getProductImages('kits-enfants', 'kits-jouets-educatifs', 4, 'kit-resto-pizza', 5),
    category: 'Kits Enfants',
    subcategory: 'Kits Jouets Éducatifs',
    inStock: true,
    personalizable: false,
    features: [
      'Plus de 20 éléments en carton : pizzas, ingrédients, menus, boîtes, ustensiles et four à assembler',
      'Nom du restaurant personnalisable (sur le menu et les boîtes à pizza)',
      'Jeu écoresponsable, sans plastique, léger, recyclable et sans danger pour les enfants',
      'Favorise le jeu de rôle, l’imagination et la créativité',
      'Activité manuelle : pliage et assemblage',
      'Adapté au jeu seul ou à plusieurs',
    ],
    detailedDescription:
      'Transformez votre enfant en chef pizzaiolo ! Ce kit pizza 100 % en carton invite les enfants à plonger dans l’univers de la pizzeria grâce à un jeu de rôle créatif, immersif et responsable. Tout est à assembler et manipuler : fonds de pizzas, ingrédients, garnitures, menus, boîtes à pizza, pelles, planches… jusqu’au four à pizza en carton à plier et monter soi-même. Conçu pour stimuler l’imagination et la créativité, ce jeu favorise le développement du jeu symbolique, de la narration et des interactions sociales, tout en proposant une alternative durable, sûre et respectueuse de l’environnement. Le kit offre également une personnalisation unique : le nom du restaurant peut être créé à partir du prénom ou du surnom de votre enfant, et figure directement sur les menus et les boîtes à pizza, renforçant l’immersion et l’appropriation du jeu.',
  },
  {
    id: 5,
    name: 'Kit La Maison à Monter',
    description:
      'Kit de construction pour assembler sa propre maison. Stimule la motricité fine et la logique spatiale.',
    price: 11.99,
    priceDT: 19.9,
    ...getProductImages('kits-enfants', 'kits-jouets-educatifs', 5, 'kit-maison-monter', 2),
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
    price: 19.99,
    priceDT: 29.9,
    ...getProductImages('kits-enfants', 'kits-jouets-educatifs', 6, 'kit-comptoir-glaces', 2),
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
    price: 27.99,
    priceDT: 37.9,
    ...getProductImages(
      'kits-adolescents',
      'carnets-creatifs',
      7,
      'journal-creatif-evasion',
      17,
      'jpg'
    ),
    category: 'Kits Adolescents',
    subcategory: 'Carnets Créatifs',
    inStock: true,
    personalizable: true,
    features: [
      'Plus de 180 pages de qualité premium',
      'Pages personnalisables',
      'Pochette de visual journaling offerte avec le carnet, contenant des éléments créatifs inspirants : patterns thématiques, cadres photo, stickers, sticky notes, masking tape…',
      'Couverture rigide élégante',
      'Format A5, pratique et facile à emporter partout',
    ],
    detailedDescription:
      "Un compagnon d'évasion pour les adolescents rêveurs ! Ce journal créatif propose des prompts inspirants pour explorer ses aspirations, projets et rêves. Avec ses pages soigneusement conçues, il encourage l'introspection créative et l'expression personnelle. La personnalisation rend chaque journal unique.",
  },
  {
    id: 8,
    name: 'Mon Journal Créatif – Confidence',
    description:
      'Journal intime avec des prompts créatifs pour exprimer ses émotions et pensées. Un compagnon de confiance pour les moments personnels.',
    price: 27.99,
    priceDT: 37.9,
    ...getProductImages(
      'kits-adolescents',
      'carnets-creatifs',
      8,
      'journal-creatif-confidence',
      1,
      'jpg'
    ),
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
    price: 27.99,
    priceDT: 37.9,
    ...getProductImages(
      'kits-adolescents',
      'carnets-creatifs',
      9,
      'journal-creatif-racines',
      1,
      'jpg'
    ),
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
    price: 30.99,
    priceDT: 39.9,
    ...getProductImages('kits-adolescents', 'kits-creatifs', 10, 'kit-bijoux', 1, 'png'),
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
    price: 31.99,
    priceDT: 41.9,
    ...getProductImages('kits-adolescents', 'kits-creatifs', 11, 'kit-moodboard', 1, 'png'),
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
