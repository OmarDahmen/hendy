# Hændy - E-Commerce Demo

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Vite + React + TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand (for cart)
- **Icons**: Lucide React

## Features

- 🏠 Home page with hero section and featured products
- 📦 Products page with category filtering
- 🛒 Fully functional shopping cart with persistence
- ℹ️ About page with company information
- 📱 Fully responsive design for mobile and desktop
- 🎨 Beautiful UI with shadcn/ui components
- 💾 Cart state persisted to localStorage

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header with cart badge
│   │   └── Footer.tsx      # Site footer
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   └── ProductCard.tsx     # Reusable product card component
├── pages/
│   ├── Home.tsx           # Landing page
│   ├── Products.tsx       # Products listing with filters
│   ├── Cart.tsx           # Shopping cart page
│   └── About.tsx          # About page
├── store/
│   └── cartStore.ts       # Zustand cart state management
├── types/
│   └── product.ts         # TypeScript interfaces
├── data/
│   └── products.ts        # Product data
├── lib/
│   └── utils.ts           # Utility functions
├── App.tsx                # Main app component with routing
└── main.tsx              # App entry point
```

## Deployment

This project can be deployed to various free hosting services:

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Update `vite.config.ts` with your repo name as base
4. Run: `npm run deploy`

## License

MIT
