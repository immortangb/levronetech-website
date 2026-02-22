# Levrone Technologies Website

A professional IT services website for Levrone Technologies in Bloemfontein.

## Features

- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ All 4 service sections with pricing
- ✅ Student discount banner
- ✅ Contact form
- ✅ SEO optimized
- ✅ Fast loading (static export)
- ✅ Professional color scheme
- ✅ Hover animations and transitions

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
```

This creates a static export in the `dist` folder.

## Deployment to Vercel

### Option 1: Connect GitHub Repository (Recommended)

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**Settings:**
- Framework Preset: Next.js
- Build Command: `next build`
- Output Directory: `dist`

### Option 2: Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## File Structure

```
levronetech-website/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── package.json         # Dependencies
├── next.config.js       # Next.js config (static export)
├── tailwind.config.ts   # Tailwind CSS config
├── tsconfig.json        # TypeScript config
├── postcss.config.js    # PostCSS config
└── .gitignore          # Git ignore rules
```

## Customization

- **Colors**: Edit `tailwind.config.ts` to change the color scheme
- **Content**: Edit `app/page.tsx` to modify sections
- **Images**: Replace Unsplash URLs with your own images
- **Contact Info**: Update email and address in the Contact section

## License

All rights reserved - Levrone Technologies
