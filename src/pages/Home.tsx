import { useRef } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { products } from '@/data/products'
import { ArrowRight, ChevronLeft, ChevronRight, Package, Shield, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Sélectionner 8 produits variés : mélange de catégories et sous-catégories
  const featuredProducts = [
    ...products
      .filter((p) => p.category === 'Kits Enfants' && p.subcategory === 'Carnets Créatifs')
      .slice(0, 2),
    ...products
      .filter((p) => p.category === 'Kits Enfants' && p.subcategory === 'Kits Jouets Éducatifs')
      .slice(0, 2),
    ...products
      .filter((p) => p.category === 'Kits Adolescents' && p.subcategory === 'Carnets Créatifs')
      .slice(0, 2),
    ...products
      .filter((p) => p.category === 'Kits Adolescents' && p.subcategory === 'Kits Créatifs')
      .slice(0, 2),
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280 // Largeur d'une carte (250px) + gap (30px)
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="from-primary/10 to-primary/5 relative bg-gradient-to-r py-20 md:py-32">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Bienvenue chez Hændy Kits
            </h1>
            <p className="text-muted-foreground mb-8 text-xl">
              Découvrez nos kits créatifs et éducatifs pour enfants et adolescents. Apprendre en
              jouant, créer en s'amusant !
            </p>
            <Link to="/kits">
              <Button size="lg">
                Découvrir nos Kits <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Produits en Vedette</h2>
            <p className="text-muted-foreground">Découvrez nos kits les plus populaires</p>
          </div>

          {/* Horizontal scrollable container */}
          <div className="group relative -mx-4 px-4">
            {/* Bouton navigation gauche */}
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 absolute top-1/2 left-8 z-10 hidden -translate-y-1/2 rounded-full opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 md:flex"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Bouton navigation droite */}
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 absolute top-1/2 right-8 z-10 hidden -translate-y-1/2 rounded-full opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 md:flex"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
              >
                {featuredProducts.map((product) => (
                  <div key={product.id} className="w-[250px] flex-shrink-0 snap-start">
                    <ProductCard product={product} />
                  </div>
                ))}

                {/* Carte "Voir Tous les Produits" */}
                <Link to="/kits" className="w-[250px] flex-shrink-0 snap-start">
                  <Card className="flex h-full cursor-pointer items-center justify-center transition-shadow hover:shadow-lg">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <ArrowRight className="text-primary mb-4 h-12 w-12" />
                      <h3 className="mb-2 text-lg font-bold">Voir Tous les Produits</h3>
                      <p className="text-muted-foreground text-sm">
                        Découvrez notre collection complète de kits créatifs
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>

          {/* Indicateur de scroll pour mobile */}
          <div className="text-muted-foreground mt-4 text-center text-sm md:hidden">
            ← Faites défiler pour voir plus →
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Package className="text-primary mb-4 h-12 w-12" />
                <h3 className="mb-2 text-lg font-bold">Produits de Qualité</h3>
                <p className="text-muted-foreground text-sm">
                  Sélection soigneuse de kits créatifs et éducatifs de haute qualité
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Truck className="text-primary mb-4 h-12 w-12" />
                <h3 className="mb-2 text-lg font-bold">Livraison Rapide</h3>
                <p className="text-muted-foreground text-sm">
                  Livraison gratuite pour les commandes de plus de 50€. Recevez vos kits rapidement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Shield className="text-primary mb-4 h-12 w-12" />
                <h3 className="mb-2 text-lg font-bold">Paiement Sécurisé</h3>
                <p className="text-muted-foreground text-sm">
                  Achetez en toute confiance avec notre système de paiement sécurisé
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
