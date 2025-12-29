import { useCurrencyStore } from '@/store/currencyStore'
import { cn } from '@/lib/utils'

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrencyStore()

  return (
    <div className="flex items-center rounded-md border bg-muted p-0.5">
      <button
        className={cn(
          'rounded px-2.5 py-1 text-xs font-medium transition-all',
          currency === 'DT'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
        onClick={() => setCurrency('DT')}
      >
        DT
      </button>
      <button
        className={cn(
          'rounded px-2.5 py-1 text-xs font-medium transition-all',
          currency === 'EUR'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
        onClick={() => setCurrency('EUR')}
      >
        EUR
      </button>
    </div>
  )
}