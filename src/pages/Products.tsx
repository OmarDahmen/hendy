import { useState, useMemo } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { products, categories, subcategories } from '@/data/products'
import { Button } from '@/components/ui/button'

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [selectedSubcategory, setSelectedSubcategory] = useState('Tous')

  // Get available subcategories based on selected category
  const availableSubcategories = useMemo(() => {
    if (selectedCategory === 'Tous') return []
    return subcategories[selectedCategory as keyof typeof subcategories] || []
  }, [selectedCategory])

  // Reset subcategory when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSelectedSubcategory('Tous')
  }

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'Tous') {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by subcategory
    if (selectedSubcategory !== 'Tous') {
      filtered = filtered.filter((product) => product.subcategory === selectedSubcategory)
    }

    return filtered
  }, [selectedCategory, selectedSubcategory])

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Nos Kits</h1>
        <p className="text-muted-foreground mb-6">
          Découvrez notre collection de kits créatifs et éducatifs
        </p>

        {/* Category Filter */}
        <div className="mb-4">
          <h2 className="mb-2 text-sm font-semibold">Catégories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        {availableSubcategories.length > 0 && (
          <div>
            <h2 className="mb-2 text-sm font-semibold">Sous-catégories</h2>
            <div className="flex flex-wrap gap-2">
              {availableSubcategories.map((subcategory) => (
                <Button
                  key={subcategory}
                  variant={selectedSubcategory === subcategory ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSubcategory(subcategory)}
                >
                  {subcategory}
                </Button>
              ))}
            </div>
          </div>
        )}
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
