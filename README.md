# The Governor HQ Website

> Modern landing page for The Governor HQ ecosystem - built with React, Vite, TypeScript, and Tailwind CSS

## 🌐 Live Site

Visit [governor-hq.com](https://governor-hq.com)

## ✨ Features

- **Modern Design** - Minimalist, Apple-like aesthetic
- **Smooth Animations** - Subtle motion with Framer Motion
- **Responsive** - Mobile-first design approach
- **Fast** - Optimized with Vite
- **Accessible** - Semantic HTML and ARIA labels

## 🛠️ Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/the-governor-hq/governor-hq-website.git
cd governor-hq-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
governor-hq-website/
├── src/
│   ├── components/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Projects.tsx    # Projects showcase
│   │   └── Footer.tsx      # Footer section
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies
```

## 🚢 Deployment

This site is optimized for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

or simply connect your GitHub repository to Vercel for automatic deployments.

## 🎨 Customization

### Colors

Edit colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your color palette
      }
    }
  }
}
```

### Projects

Update the projects array in `src/components/Projects.tsx` to add/modify projects.

## 📄 License

MIT © The Governor HQ

## 🤝 Contributing

Contributions are welcome! Please check out our [contributing guidelines](https://github.com/the-governor-hq/constitution/blob/main/CONTRIBUTING.md).

## 🔗 Links

- [GitHub Organization](https://github.com/the-governor-hq)
- [BodyPress](https://github.com/the-governor-hq/bodypress)
- [Constitution](https://github.com/the-governor-hq/constitution)
- [Wearable SDK](https://github.com/the-governor-hq/wearable-sdk)
- [Ambiant Scan](https://github.com/the-governor-hq/ambiant-scan)
