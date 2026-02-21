# Levrone Technologies Website

A professional IT company website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Responsive Design** - Works on all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Service Showcase** - Display all IT services with expandable details
- **Product Catalog** - Laptop sales with brand filtering
- **Contact Form** - Functional contact form with validation
- **Student Discount** - Highlighted 10% discount for UFS students
- **SEO Optimized** - Meta tags and semantic HTML

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)
- Sonner (toast notifications)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/levronetech-website.git
cd levronetech-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deployment

### Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy with default settings

### Custom Domain

To use your custom domain (levronetech.co.za):

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your domain: `levronetech.co.za`
4. Follow Vercel's DNS configuration instructions

## Project Structure

```
levronetech-website/
├── public/
│   ├── images/          # Website images
│   └── vite.svg         # Favicon
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles
│   └── vite-env.d.ts    # TypeScript declarations
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
├── tailwind.config.js   # Tailwind CSS config
└── vercel.json          # Vercel routing config
```

## Services & Pricing

- **Basic Repairs**: From R350
- **Hardware Repairs**: From R750
- **CCTV Installation**: From R2,500
- **Student Discount**: 10% off for UFS students

## Contact

- **Address**: UFS Bloemfontein, 9301
- **Phone**: 082 049 9013
- **Email**: brian@levronetech.co.za
- **Hours**: Monday-Friday, 08:00-16:00

## License

This project is proprietary to Levrone Technologies.
