import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Currency = 'EUR' | 'DT'

interface CurrencyStore {
  currency: Currency
  setCurrency: (currency: Currency) => void
}

export const useCurrencyStore = create<CurrencyStore>()(
  persist(
    (set) => ({
      currency: 'DT', // Default to DT
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: 'currency-storage',
    }
  )
)

// Helper function to format price based on currency
export function formatPrice(priceEUR: number, priceDT: number, currency: Currency): string {
  if (currency === 'EUR') {
    return `${priceEUR.toFixed(2)}€`
  }
  return `${priceDT.toFixed(2)} DT`
}

// Helper function to get currency symbol
export function getCurrencySymbol(currency: Currency): string {
  return currency === 'EUR' ? '€' : 'DT'
}