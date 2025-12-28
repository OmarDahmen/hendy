import { CurrencySelector } from '@/components/CurrencySelector'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cartStore'
import { ShoppingCart, Store } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Store className="h-6 w-6" />
          <span>Hændy Kits</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-primary text-sm font-medium transition-colors">
            Accueil
          </Link>
          <Link
            to="/categories"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Nos Kits
          </Link>
          <Link to="/about" className="hover:text-primary text-sm font-medium transition-colors">
            À Propos
          </Link>

          <CurrencySelector />

          <Link to="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge
                  className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center p-0 text-xs"
                  variant="destructive"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
