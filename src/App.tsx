import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { Products } from '@/pages/Products'
import { Cart } from '@/pages/Cart'
import { About } from '@/pages/About'
import { useEffect, useRef } from 'react'

const pageOrder = ['/', '/kits', '/about', '/cart']

function SwipeableRoutes() {
  const navigate = useNavigate()
  const location = useLocation()
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const touchStartY = useRef(0)

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX.current = e.changedTouches[0].clientX
      handleSwipe(e)
    }

    const handleSwipe = (e: TouchEvent) => {
      // Check if the touch is on a scrollable element
      const target = e.target as HTMLElement
      const scrollableElement = target.closest('.scrollbar-hide, [class*="overflow-x"]')

      if (scrollableElement) {
        // Don't navigate if swiping on a scrollable element
        return
      }

      const swipeThreshold = 100
      const swipeDistance = touchStartX.current - touchEndX.current
      const verticalDistance = Math.abs(touchStartY.current - (e.changedTouches[0]?.clientY || touchStartY.current))

      // If vertical swipe is more prominent, don't navigate
      if (verticalDistance > Math.abs(swipeDistance)) return

      if (Math.abs(swipeDistance) < swipeThreshold) return

      const currentIndex = pageOrder.indexOf(location.pathname)
      if (currentIndex === -1) return

      // Swipe left (next page)
      if (swipeDistance > 0 && currentIndex < pageOrder.length - 1) {
        navigate(pageOrder[currentIndex + 1])
      }
      // Swipe right (previous page)
      else if (swipeDistance < 0 && currentIndex > 0) {
        navigate(pageOrder[currentIndex - 1])
      }
    }

    // Only add listeners on mobile
    if (window.innerWidth <= 768) {
      document.addEventListener('touchstart', handleTouchStart)
      document.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [navigate, location])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/kits" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <SwipeableRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
