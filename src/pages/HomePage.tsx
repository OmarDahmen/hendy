import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'

export function HomePage() {
  const featuredProducts = products.filter(p => p.personalizable).slice(0, 3)
  const kitsJouets = products.filter(p => p.subcategory === 'Kits Jouets Éducatifs')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Bienvenue chez Hændy Kits</h1>
        <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
          Découvrez nos kits créatifs et éducatifs pour enfants et adolescents.
          Apprendre en jouant, créer en s'amusant !
        </p>
      </div>

      {/* Carnets Créatifs Personnalisés */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Carnets Créatifs Personnalisés</h2>
          <p className="text-muted-foreground">
            Des carnets uniques, personnalisables avec le prénom de votre enfant
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Kits Jouets Éducatifs */}
      <section className="mb-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Kits Jouets Éducatifs</h2>
          <p className="text-muted-foreground">
            Des kits complets pour développer la créativité et la motricité fine
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kitsJouets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mt-16 bg-secondary/20 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-6">Nos Valeurs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl mb-3">🎨</div>
            <h4 className="font-semibold mb-2">Créativité</h4>
            <p className="text-sm text-muted-foreground">
              Stimuler l'imagination et l'expression artistique
            </p>
          </div>
          <div>
            <div className="text-4xl mb-3">📚</div>
            <h4 className="font-semibold mb-2">Éducation</h4>
            <p className="text-sm text-muted-foreground">
              Apprendre en s'amusant avec des kits ludiques
            </p>
          </div>
          <div>
            <div className="text-4xl mb-3">✨</div>
            <h4 className="font-semibold mb-2">Personnalisation</h4>
            <p className="text-sm text-muted-foreground">
              Chaque produit unique pour chaque enfant
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}