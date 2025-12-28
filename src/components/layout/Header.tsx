import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cartStore'
import { ShoppingCart, Store } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { CurrencySelector } from '../CurrencySelector'

export function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems())
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full overflow-x-hidden border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Store className="h-6 w-6" />
          <span>Hændy Kits</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:underline ${
              isActive('/') ? 'text-primary underline' : ''
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/kits"
            className={`text-sm font-medium transition-colors hover:underline ${
              isActive('/kits') || isActive('/products') ? 'text-primary underline' : ''
            }`}
          >
            Nos Kits
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors hover:underline ${
              isActive('/about') ? 'text-primary underline' : ''
            }`}
          >
            À Propos
          </Link>
        </nav>

        <CurrencySelector />

        <Link to="/cart">
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center p-0"
              >
                {totalItems}
              </Badge>
            )}
          </Button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t md:hidden">
        <nav className="container mx-auto flex items-center justify-around px-4 py-2">
          <Link
            to="/"
            className={`text-xs font-medium transition-colors hover:underline ${
              isActive('/') ? 'text-primary underline' : ''
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/kits"
            className={`text-xs font-medium transition-colors hover:underline ${
              isActive('/kits') || isActive('/products') ? 'text-primary underline' : ''
            }`}
          >
            Nos Kits
          </Link>
          <Link
            to="/about"
            className={`text-xs font-medium transition-colors hover:underline ${
              isActive('/about') ? 'text-primary underline' : ''
            }`}
          >
            À Propos
          </Link>
        </nav>
      </div>
    </header>
  )
}
