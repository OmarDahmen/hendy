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
    <div className="container px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Nos Kits</h1>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucun produit trouvé dans cette catégorie</p>
        </div>
      )}
    </div>
  )
}
