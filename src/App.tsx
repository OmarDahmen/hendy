import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { Products } from '@/pages/Products'
import { Cart } from '@/pages/Cart'
import { About } from '@/pages/About'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <main className="w-full flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/kits" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
