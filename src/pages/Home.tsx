import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { products } from '@/data/products'
import { ArrowRight, Package, Shield, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 md:py-32">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Bienvenue chez Hændy Kits
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez nos kits créatifs et éducatifs pour enfants et adolescents. Apprendre en jouant !
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Produits en Vedette
            </h2>
            <p className="text-muted-foreground">
              Découvrez nos kits les plus populaires
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/kits">
              <Button variant="outline" size="lg">
                Voir Tous les Produits
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <Package className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Produits de Qualité</h3>
                <p className="text-sm text-muted-foreground">
                  Sélection soigneuse de kits créatifs et éducatifs de haute qualité
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <Truck className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Livraison Rapide</h3>
                <p className="text-sm text-muted-foreground">
                  Livraison gratuite pour les commandes de plus de 50€. Recevez vos kits rapidement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Paiement Sécurisé</h3>
                <p className="text-sm text-muted-foreground">
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
