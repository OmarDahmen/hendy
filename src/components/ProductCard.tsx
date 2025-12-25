import { ShoppingCart, Check, Sparkles } from 'lucide-react'
import type { Product } from '@/types/product'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCartStore } from '@/store/cartStore'
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
      <Card className="overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
        <CardHeader className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
            {product.personalizable && (
              <Badge className="absolute top-2 left-2" variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Personnalisable
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
            <Badge variant={product.inStock ? 'default' : 'secondary'}>
              {product.inStock ? 'En stock' : 'Rupture'}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.description}
          </p>
          <p className="text-2xl font-bold">{product.price.toFixed(2)} €</p>
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