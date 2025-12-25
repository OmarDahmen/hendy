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
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Welcome to Hændy Kits
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the latest tech gadgets and accessories at unbeatable prices
            </p>
            <Link to="/products">
              <Button size="lg">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <Package className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Quality Products</h3>
                <p className="text-sm text-muted-foreground">
                  Carefully curated selection of top-quality tech products
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <Truck className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  Free shipping on orders over $50. Get your items quickly
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center p-6">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Shop with confidence using our secure payment system
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Check out our most popular items
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
