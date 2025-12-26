import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useCartStore } from '@/store/cartStore'
import type { Product } from '@/types/product'
import { Check, ChevronLeft, ChevronRight, ShoppingCart, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { PersonalizationModal } from './PersonalizationModal'

interface ProductDetailsModalProps {
  product: Product | null
  open: boolean
  onClose: () => void
}

export function ProductDetailsModal({ product, open, onClose }: ProductDetailsModalProps) {
  const { addItem, items } = useCartStore()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [showPersonalization, setShowPersonalization] = useState(false)

  if (!product) return null

  const isInCart = items.some((item) => item.id === product.id)
  const allImages = [product.image, ...(product.images || [])]

  const handleAddToCart = () => {
    if (product.personalizable) {
      setShowPersonalization(true)
    } else {
      addItem(product)
    }
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="bg-white sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{product.name}</DialogTitle>
            <DialogDescription className="flex items-center gap-2">
              <Badge variant={product.inStock ? 'default' : 'secondary'}>
                {product.inStock ? 'En stock' : 'Rupture de stock'}
              </Badge>
              {product.personalizable && (
                <Badge variant="secondary">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Personnalisable
                </Badge>
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg border">
                <img
                  src={allImages[selectedImageIndex]}
                  alt={`${product.name} - Image ${selectedImageIndex + 1}`}
                  className="h-full w-full object-cover"
                />
                {allImages.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                        selectedImageIndex === index
                          ? 'border-primary'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="h-20 w-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col space-y-4">
              <div>
                <p className="text-3xl font-bold">{product.price.toFixed(2)}€</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  Catégorie: {product.category} · {product.subcategory}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Description</h3>
                <p className="text-muted-foreground text-sm">
                  {product.detailedDescription || product.description}
                </p>
              </div>

              {product.features && product.features.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-semibold">Caractéristiques</h3>
                  <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex-grow" />

              <div className="space-y-2">
                <Button
                  className="w-full"
                  size="lg"
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
                      {product.personalizable ? 'Personnaliser et ajouter' : 'Ajouter au panier'}
                    </>
                  )}
                </Button>
                {product.personalizable && !isInCart && (
                  <p className="text-muted-foreground text-center text-xs">
                    Ce produit peut être personnalisé avec votre nom et message
                  </p>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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