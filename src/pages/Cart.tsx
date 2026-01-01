import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { sendReservationEmail } from '@/lib/emailService'
import { useCartStore } from '@/store/cartStore'
import { useCurrencyStore, formatPrice } from '@/store/currencyStore'
import { Loader2, Minus, Plus, ShoppingBag, Sparkles, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Cart() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalPriceDT, clearCart } =
    useCartStore()
  const currency = useCurrencyStore((state) => state.currency)
  const [isReservationOpen, setIsReservationOpen] = useState(false)
  const [reservationData, setReservationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const totalPrice = getTotalPrice()
  const totalPriceDT = getTotalPriceDT()
  const shipping = totalPrice > 50 ? 0 : 4.99
  const shippingDT = totalPriceDT > 70 ? 0 : 7.9 // Tunisian equivalent
  const finalTotal = totalPrice + shipping
  const finalTotalDT = totalPriceDT + shippingDT

  const handleReservationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setEmailError(false)

    const cartItems = items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      personalization: item.personalization,
    }))

    const success = await sendReservationEmail(reservationData, cartItems, finalTotal)

    setIsLoading(false)
    if (success) {
      setIsSubmitted(true)
    } else {
      setEmailError(true)
    }
  }

  const handleCloseModal = () => {
    setIsReservationOpen(false)
    if (isSubmitted) {
      clearCart()
      setIsSubmitted(false)
      setReservationData({ firstName: '', lastName: '', email: '', phone: '' })
    }
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
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
    <div className="container mx-auto px-4 py-8">
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

                    <p className="text-lg font-bold">{formatPrice(item.price, item.priceDT, currency)}</p>
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
                  <span>
                    {currency === 'EUR'
                      ? `${totalPrice.toFixed(2)}€`
                      : `${totalPriceDT.toFixed(2)} DT`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Livraison</span>
                  <span>
                    {currency === 'EUR'
                      ? shipping === 0
                        ? 'GRATUITE'
                        : `${shipping.toFixed(2)}€`
                      : shippingDT === 0
                        ? 'GRATUITE'
                        : `${shippingDT.toFixed(2)} DT`}
                  </span>
                </div>
              </div>

              {currency === 'EUR'
                ? totalPrice < 50 && (
                    <p className="text-muted-foreground bg-secondary/20 mb-4 rounded p-2 text-sm">
                      Ajoutez {(50 - totalPrice).toFixed(2)}€ pour profiter de la livraison gratuite
                    </p>
                  )
                : totalPriceDT < 70 && (
                    <p className="text-muted-foreground bg-secondary/20 mb-4 rounded p-2 text-sm">
                      Ajoutez {(70 - totalPriceDT).toFixed(2)} DT pour profiter de la livraison
                      gratuite
                    </p>
                  )}

              <div className="mb-6 border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold">
                    {currency === 'EUR'
                      ? `${finalTotal.toFixed(2)}€`
                      : `${finalTotalDT.toFixed(2)} DT`}
                  </span>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={() => setIsReservationOpen(true)}>
                Réserver
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reservation Modal */}
      <Dialog open={isReservationOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="bg-white">
          {!isSubmitted ? (
            <>
              <DialogHeader>
                <DialogTitle>Réserver vos articles</DialogTitle>
                <DialogDescription>
                  Remplissez vos informations pour réserver vos articles. Nous vous contacterons
                  pour finaliser votre commande.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleReservationSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input
                        id="firstName"
                        value={reservationData.firstName}
                        onChange={(e) =>
                          setReservationData({ ...reservationData, firstName: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input
                        id="lastName"
                        value={reservationData.lastName}
                        onChange={(e) =>
                          setReservationData({ ...reservationData, lastName: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={reservationData.email}
                      onChange={(e) =>
                        setReservationData({ ...reservationData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={reservationData.phone}
                      onChange={(e) =>
                        setReservationData({ ...reservationData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                {emailError && (
                  <p className="mb-4 text-center text-sm text-red-500">
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
                )}
                <DialogFooter>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      'Confirmer la réservation'
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </>
          ) : (
            <div className="py-8 text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <ShoppingBag className="text-primary h-8 w-8" />
              </div>
              <DialogTitle className="mb-2">Réservation confirmée !</DialogTitle>
              <DialogDescription>
                Merci {reservationData.firstName} ! Nous vous contacterons bientôt à{' '}
                {reservationData.email} pour finaliser votre commande.
              </DialogDescription>
              <Button className="mt-6" onClick={handleCloseModal}>
                Fermer
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
