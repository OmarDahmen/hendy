import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { useCartStore } from '@/store/cartStore'
import type { Product } from '@/types/product'
import { Check, ShoppingCart, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { PersonalizationModal } from './PersonalizationModal'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCartStore()
  const isInCart = items.some((item) => item.id === product.id)
  const [showPersonalization, setShowPersonalization] = useState(false)

  const handleAddToCart = () => {
    if (product.personalizable) {
      setShowPersonalization(true)
    } else {
      addItem(product)
    }
  }

  return (
    <>
      <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
            {product.personalizable && (
              <Badge className="absolute top-2 left-2" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Personnalisable
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="line-clamp-1 text-lg font-semibold">{product.name}</h3>
            <Badge variant={product.inStock ? 'default' : 'secondary'}>
              {product.inStock ? 'En stock' : 'Rupture'}
            </Badge>
          </div>
          <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">{product.description}</p>
          <p className="text-2xl font-bold">{product.price.toFixed(2)}€</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            className="w-full"
            onClick={handleAddToCart}
            disabled={!product.inStock || isInCart}
          >
            {isInCart ? (
              <>
                <Check className="mr-2 h-4 w-4" /> Ajouté au panier
              </>
            ) : (
              <>
                <ShoppingCart className="mr-2 h-4 w-4" />
                {product.personalizable ? 'Personnaliser' : 'Ajouter au panier'}
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      {product.personalizable && (
        <PersonalizationModal
          product={product}
          open={showPersonalization}
          onClose={() => setShowPersonalization(false)}
        />
      )}
    </>
  )
}
