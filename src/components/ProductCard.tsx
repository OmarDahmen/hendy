import { ShoppingCart, Check } from 'lucide-react'
import { Product } from '@/types/product'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCartStore } from '@/store/cartStore'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCartStore()
  const isInCart = items.some((item) => item.id === product.id)

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
          <Badge variant={product.inStock ? 'default' : 'secondary'}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => addItem(product)}
          disabled={!product.inStock || isInCart}
        >
          {isInCart ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
