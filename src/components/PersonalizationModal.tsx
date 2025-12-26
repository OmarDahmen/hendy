import { useState } from 'react'
import type { Product, PersonalizationData } from '@/types/product'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCartStore } from '@/store/cartStore'
import { Upload } from 'lucide-react'

interface PersonalizationModalProps {
  product: Product
  open: boolean
  onClose: () => void
}

export function PersonalizationModal({ product, open, onClose }: PersonalizationModalProps) {
  const addItem = useCartStore((state) => state.addItem)
  const [formData, setFormData] = useState<PersonalizationData>({
    firstName: '',
    lastName: '',
    customMessage: '',
    customImage: null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addItem(product, formData)
    onClose()
    setFormData({
      firstName: '',
      lastName: '',
      customMessage: '',
      customImage: null,
    })
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData({ ...formData, customImage: file })
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Personnaliser votre {product.name}</DialogTitle>
          <DialogDescription>
            Ajoutez les informations de personnalisation pour rendre ce produit unique
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Prénom *</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="Entrez le prénom"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Nom *</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="Entrez le nom"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="customMessage">Message personnalisé *</Label>
            <Input
              id="customMessage"
              value={formData.customMessage}
              onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
              placeholder="Entrez votre message"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="customImage">Image personnalisée (optionnel)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="customImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="cursor-pointer"
              />
              <Upload className="text-muted-foreground h-4 w-4" />
            </div>
            {formData.customImage && (
              <p className="text-muted-foreground text-sm">
                Fichier sélectionné: {formData.customImage.name}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit">Ajouter au panier</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
