# Structure des Images Produits

## Organisation des dossiers

```
public/products/
├── kits-enfants/
│   ├── carnets-creatifs/
│   │   ├── 1-carnet-animaux-jungle/
│   │   ├── 2-carnet-fruits-legumes/
│   │   └── 3-carnet-corps-humain/
│   └── kits-jouets-educatifs/
│       ├── 4-kit-resto-pizza/
│       ├── 5-kit-maison-monter/
│       └── 6-kit-comptoir-glaces/
└── kits-adolescents/
    ├── carnets-creatifs/
    │   ├── 7-journal-creatif-evasion/
    │   ├── 8-journal-creatif-confidence/
    │   └── 9-journal-creatif-racines/
    └── kits-creatifs/
        ├── 10-kit-bijoux/
        └── 11-kit-moodboard/
```

## Convention de nommage

### Format simplifié : numéros uniquement
- `0.jpg` : Image principale du produit (celle affichée sur la carte)
- `1.jpg` : Première image galerie
- `2.jpg` : Deuxième image galerie
- `3.jpg` : Troisième image galerie
- etc.

### Exemples par produit

#### Produit 1 - Carnet Créatif Animaux de la Jungle
```
kits-enfants/carnets-creatifs/1-carnet-animaux-jungle/
├── 0.jpg           (Photo principale - couverture)
├── 1.jpg           (Pages intérieures)
├── 2.jpg           (Détail illustrations)
└── 3.jpg           (Enfant utilisant le carnet)
```

#### Produit 4 - Kit Construction Bois
```
kits-enfants/kits-jouets-educatifs/4-construction-bois/
├── 0.jpg           (Photo du kit complet)
├── 1.jpg           (Pièces détaillées)
├── 2.jpg           (Construction en cours)
└── 3.jpg           (Modèle fini)
```

#### Produit 8 - Carnet Journal Intime
```
kits-adolescents/carnets-creatifs/8-journal-intime-premium/
├── 0.jpg
├── 1.jpg
├── 2.jpg
└── 3.jpg
```

#### Produit 11 - Kit Peinture Acrylique
```
kits-adolescents/kits-creatifs/11-peinture-acrylique-avance/
├── 0.jpg
├── 1.jpg
├── 2.jpg
└── 3.jpg
```

## Correspondance ID Produits

### Kits Enfants - Carnets Créatifs
- ID 1 : Carnet Créatif - Animaux de la Jungle
- ID 2 : Carnet Créatif - Fruits et Légumes
- ID 3 : Carnet Créatif - Le Corps Humain

### Kits Enfants - Kits Jouets Éducatifs
- ID 4 : Kit Resto Pizza
- ID 5 : Kit La Maison à Monter
- ID 6 : Kit Comptoir à Glaces

### Kits Adolescents - Carnets Créatifs
- ID 7 : Mon Journal Créatif – Évasion
- ID 8 : Mon Journal Créatif – Confidence
- ID 9 : Mon Journal Créatif – Racines

### Kits Adolescents - Kits Créatifs
- ID 10 : Kit Bijoux
- ID 11 : Kit Moodboard

## Recommandations techniques

### Format des images
- **Format préféré** : JPG pour les photos (meilleure compression)
- **Format alternatif** : PNG si transparence nécessaire
- **À éviter** : HEIC, BMP, TIFF (non compatibles web)

### Dimensions recommandées
- **Image principale (main)** : 800x800px minimum (ratio 1:1)
- **Images galerie** : 1200x1200px minimum (pour zoom)
- **Poids** : Max 500KB par image (compresser si nécessaire)

### Qualité
- Résolution : 72 DPI (suffisant pour le web)
- Compression JPG : 80-85% (bon équilibre qualité/poids)
- Éclairage : Privilégier lumière naturelle ou fond blanc
- Netteté : Images nettes et bien cadrées

### Conseils photos
1. **Image principale** : Fond neutre (blanc ou clair), produit centré
2. **Galerie 1** : Vue d'ensemble avec contexte
3. **Galerie 2** : Détails du produit (textures, finitions)
4. **Galerie 3** : Photo en situation (enfant/ado utilisant le produit)
5. **Galerie 4** : Détails supplémentaires ou variantes

## Outils de compression recommandés
- En ligne : TinyPNG, Squoosh
- Logiciel : ImageOptim (Mac), RIOT (Windows)
- Commande : `convert image.jpg -quality 85 -resize 1200x1200 image-optimized.jpg`

## Après avoir ajouté les images

Une fois les images placées dans les dossiers, il faudra mettre à jour :
- `src/data/products.ts` : Remplacer les URLs Unsplash par les chemins locaux
- Format : `/products/kits-enfants/carnets-creatifs/1-main.jpg`
