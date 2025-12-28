import { Button } from '@/components/ui/button'
import { useCurrencyStore } from '@/store/currencyStore'

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrencyStore()

  return (
    <div className="flex items-center gap-1 rounded-md border p-0.5">
      <Button
        variant={currency === 'DT' ? 'default' : 'ghost'}
        size="sm"
        className="h-7 px-2 text-xs"
        onClick={() => setCurrency('DT')}
      >
        DT
      </Button>
      <Button
        variant={currency === 'EUR' ? 'default' : 'ghost'}
        size="sm"
        className="h-7 px-2 text-xs"
        onClick={() => setCurrency('EUR')}
      >
        EUR
      </Button>
    </div>
  )
}