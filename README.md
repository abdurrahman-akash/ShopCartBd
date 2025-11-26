# 🛒 SHOPCARTBD Modern E-commerce Platform

A feature-rich, responsive e-commerce website built with Next.js 15, TypeScript, and Tailwind CSS. Shop with confidence and enjoy a seamless shopping experience with our modern interface.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, intuitive design with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🔥 **Hot Deals Section** - Special promotions with eye-catching fire icons
- 🛍️ **Shopping Cart** - Real-time cart updates with notification badges
- ❤️ **Wishlist** - Save favorite products for later
- 🔍 **Smart Search** - Quick product search with keyboard shortcut (Ctrl+K)
- 🎭 **Hero Section** - Dynamic hero with animated elements and special offers
- 🎯 **Product Categories** - Easy navigation through product collections
- 🔐 **Authentication** - Sign In/Sign Up functionality
- ⚡ **Fast Performance** - Built on Next.js 15 with App Router

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 🎨 Design Highlights

### Header
- Two-tone logo with shopping cart icon
- Centered navigation menu with active state indicators
- Search bar with keyboard hint
- Cart & Wishlist icons with notification badges
- Responsive mobile menu with hamburger toggle

### Hero Section
- Gradient background with floating elements
- Animated "50% Off" headline with color transitions
- Feature badges (Premium Quality, Best Deals, Free Shipping)
- Call-to-action buttons with hover effects
- Stats showcase (50K+ customers, 4.9★ rating, 24/7 support)
- Floating badges with pulse and rotation animations

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abdurrahman-akash/ShopCartBd.git
cd shopcartbd
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
shopcartbd/
├── app/
│   ├── (client)/          # Client-facing pages
│   ├── globals.css        # Global styles and theme
│   └── layout.tsx         # Root layout
├── components/
│   ├── layouts/           # Header, Footer, Container
│   ├── ui/                # shadcn/ui components
│   ├── Hero.tsx           # Hero section component
│   └── constants/         # Static data
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 🎯 Key Components

- **Header** - Sticky navigation with search, cart, and auth
- **Hero** - Dynamic landing section with animations
- **Logo** - Custom SVG cart icon with branded typography
- **SearchBar** - Smart search with keyboard shortcuts
- **MobileMenu** - Responsive hamburger navigation

## 🎨 Color Palette

```css
--shop_dark_green: #003322    /* Primary brand color */
--shop_light_green: #3b9c3c   /* Accent & highlights */
--shop_orange: #F4A259        /* Call-to-action */
--shop_gold: #A8A43A          /* Logo accent */
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Build for Production

```bash
pnpm build
pnpm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abdur Rahman Akash**
- GitHub: [@abdurrahman-akash](https://github.com/abdurrahman-akash)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/abdurrahman-akash/ShopCartBd/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and Tailwind CSS

