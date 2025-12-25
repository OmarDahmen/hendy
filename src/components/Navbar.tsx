import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cartStore'
import { ShoppingCart, Store } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Store className="h-6 w-6" />
          <span>Hændy Kits</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">
            Nos Kits
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            À Propos
          </Link>

          <Link to="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
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