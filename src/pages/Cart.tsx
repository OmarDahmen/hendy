import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useCartStore } from '@/store/cartStore'
import { Minus, Plus, ShoppingBag, Sparkles, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Cart() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()

  const totalPrice = getTotalPrice()
  const shipping = totalPrice > 50 ? 0 : 4.99
  const tax = totalPrice * 0.2 // TVA 20%
  const finalTotal = totalPrice + shipping + tax

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-16">
        <div className="mx-auto max-w-md text-center">
          <ShoppingBag className="text-muted-foreground mx-auto mb-4 h-16 w-16" />
          <h2 className="mb-2 text-2xl font-bold">Votre panier est vide</h2>
          <p className="text-muted-foreground mb-6">Ajoutez des produits pour commencer</p>
          <Link to="/">
            <Button>Découvrir nos kits</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Panier</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="space-y-4 lg:col-span-2">
          {items.map((item, index) => (
            <Card key={`${item.id}-${index}`}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-md object-cover"
                    />
                    {item.personalizable && (
                      <div className="absolute -top-2 -right-2">
                        <Sparkles className="text-primary h-5 w-5" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground mb-2 line-clamp-1 text-sm">
                      {item.description}
                    </p>

                    {item.personalization && (
                      <div className="bg-secondary/20 mb-2 rounded p-2 text-sm">
                        <p className="font-medium">Personnalisation:</p>
                        <p className="text-muted-foreground">
                          {item.personalization.firstName} {item.personalization.lastName}
                        </p>
                        <p className="text-muted-foreground italic">
                          "{item.personalization.customMessage}"
                        </p>
                      </div>
                    )}

                    <p className="text-lg font-bold">{item.price.toFixed(2)}€</p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>

                    {!item.personalizable && (
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button variant="outline" onClick={clearCart} className="w-full">
            Vider le panier
          </Button>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-bold">Résumé de la commande</h2>

              <div className="mb-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span>{totalPrice.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Livraison</span>
                  <span>{shipping === 0 ? 'GRATUITE' : `${shipping.toFixed(2)}€`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">TVA (20%)</span>
                  <span>{tax.toFixed(2)}€</span>
                </div>
              </div>

              {totalPrice < 50 && (
                <p className="text-muted-foreground bg-secondary/20 mb-4 rounded p-2 text-sm">
                  Ajoutez {(50 - totalPrice).toFixed(2)}€ pour profiter de la livraison gratuite
                </p>
              )}

              <div className="mb-6 border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold">{finalTotal.toFixed(2)}€</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Passer la commande
              </Button>

              <p className="text-muted-foreground mt-4 text-center text-xs">Paiement sécurisé</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
