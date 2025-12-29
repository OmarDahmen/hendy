import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { products } from '@/data/products'
import { ArrowRight, ChevronLeft, ChevronRight, Package, Shield, Truck } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  // Produits en vedette (ordre spécifique)
  const featuredProductIds = [6, 4, 5, 3, 11, 10, 8, 12]
  const featuredProducts = featuredProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p) => p !== undefined)

  const updateArrowsVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      updateArrowsVisibility()
      container.addEventListener('scroll', updateArrowsVisibility)
      window.addEventListener('resize', updateArrowsVisibility)

      return () => {
        container.removeEventListener('scroll', updateArrowsVisibility)
        window.removeEventListener('resize', updateArrowsVisibility)
      }
    }
  }, [])

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
      {/* Hero Section with Banner */}
      <section className="relative overflow-hidden pt-8">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/banner.png)',
              }}
            />
            <div className="relative py-20 md:py-32">
              <div className="max-w-md pl-8 text-left md:max-w-lg md:pl-12">
                <div>
                  <img src="/logo-text.png" alt="Hændy Kits" className="h-16 w-auto" />
                </div>
                <p className="mb-8 text-xl font-medium text-gray-700">
                  Créativité et Apprentissage pour Enfants
                </p>
                <p className="mb-8 text-lg text-gray-600">
                  Découvrez nos kits créatifs et éducatifs pour enfants et adolescents. Apprendre en
                  jouant, créer en s'amusant !
                </p>
                <Link to="/kits">
                  <Button size="lg" className="shadow-lg">
                    Découvrir nos Kits <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Produits en Vedette</h2>
            <p className="text-muted-foreground">Découvrez nos kits les plus populaires</p>
          </div>

          {/* Horizontal scrollable container */}
          <div className="group relative -mx-4 px-4">
            {/* Bouton navigation gauche */}
            {showLeftArrow && (
              <Button
                variant="outline"
                size="icon"
                className="bg-background/80 absolute top-1/2 left-8 z-10 hidden -translate-y-1/2 rounded-full opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 md:flex"
                onClick={() => scroll('left')}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}

            {/* Bouton navigation droite */}
            {showRightArrow && (
              <Button
                variant="outline"
                size="icon"
                className="bg-background/80 absolute top-1/2 right-8 z-10 hidden -translate-y-1/2 rounded-full opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100 md:flex"
                onClick={() => scroll('right')}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}

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

          {/* Bouton "Voir Tous les Produits" */}
          <div className="mt-8 text-center">
            <Link to="/kits">
              <Button variant="outline" size="lg">
                Voir Tous les Produits <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
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
