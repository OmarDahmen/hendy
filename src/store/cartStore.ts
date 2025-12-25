import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product, CartItem, PersonalizationData } from '@/types/product'

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, personalization?: PersonalizationData) => void
  removeItem: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, personalization) => {
        const items = get().items

        // Pour les produits personnalisables, on ajoute toujours un nouvel item
        if (product.personalizable && personalization) {
          set({ items: [...items, { ...product, quantity: 1, personalization }] })
        } else {
          // Pour les produits non personnalisables, on vérifie si déjà dans le panier
          const existingItem = items.find((item) => item.id === product.id && !item.personalization)

          if (existingItem) {
            set({
              items: items.map((item) =>
                item.id === product.id && !item.personalization
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            })
          } else {
            set({ items: [...items, { ...product, quantity: 1 }] })
          }
        }
      },

      removeItem: (productId) => {
        set({ items: get().items.filter((item) => item.id !== productId) })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }

        set({
          items: get().items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })
      },

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)