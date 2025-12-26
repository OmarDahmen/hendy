import { useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { products, categories } from '@/data/products'
import { Button } from '@/components/ui/button'

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const filteredProducts =
    selectedCategory === 'Tous'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Nos Kits</h1>
        <p className="text-muted-foreground mb-6">
          Découvrez notre collection de kits créatifs et éducatifs
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">Aucun produit trouvé dans cette catégorie</p>
        </div>
      )}
    </div>
  )
}
