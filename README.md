# 🎓 BRaket - Bicol University Talent Discovery Platform

> **Role-based talent discovery and commission platform for Bicol University students to monetize their technical and creative skills locally.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-blue)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Development](#development)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

---

## 🎯 Overview

**BRaket** is a modern web platform designed to connect Bicol University students with opportunities to showcase their skills, build portfolios, and earn through commission-based projects. The platform features:

- 🔍 **Advanced Search & Filtering** - Find talents by skill, rating, location, and category
- ⭐ **Review & Rating System** - Transparent feedback and reputation building
- 💼 **Digital Portfolios** - Showcase work and attract clients
- 📊 **Commission Tracking** - Monitor project history and earnings
- 🎨 **Beautiful UI** - Modern, colorful design with Satoshi font

---

## ✨ Features

### For Clients
- Browse verified BU student talents
- Filter by skill, rating, and location
- View portfolios and reviews
- Commission talents directly
- Track project history

### For Talents (Students)
- Create professional profiles
- Build digital portfolios
- Receive and manage commissions
- Earn reputation through reviews
- Track earnings and projects

### Platform Features
- ✅ Verified student credentials
- 🔒 Secure commission system
- 📱 Fully responsive design
- 🎨 Modern, accessible UI
- ⚡ Fast and performant

---

## 🛠️ Tech Stack

### Frontend
- **React 19.0** - UI library
- **TypeScript 5.6** - Type safety
- **Vite 6.0** - Build tool & dev server
- **React Router 7.1** - Client-side routing
- **Tailwind CSS 4.0** - Utility-first CSS

### UI Components
- **shadcn/ui** - 47 accessible components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icons

### Styling
- **Satoshi Font** - Custom typography from FontShare
- **Class Variance Authority** - Component variants
- **Tailwind Merge** - Conflict-free class merging

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- pnpm, npm, or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ochlzo/braket-platform.git
   cd braket-platform
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
pnpm run build
```

---

## 📁 Project Structure

```
braket-platform/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/              # 47 shadcn/ui components
│   │   │   ├── figma/           # ImageWithFallback component
│   │   │   └── Navigation.tsx   # Main navigation
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Landing page
│   │   │   ├── Browse.tsx       # Talent browsing
│   │   │   ├── Services.tsx     # Service categories
│   │   │   └── HowItWorks.tsx   # Platform guide
│   │   ├── App.tsx              # Main app component
│   │   └── routes.ts            # Route configuration
│   ├── styles/
│   │   ├── fonts.css            # Satoshi font imports
│   │   └── theme.css            # Design tokens
│   └── main.tsx                 # Entry point
├── public/                      # Static assets
├── DESIGN_CONTEXT.md            # Complete design documentation
└── package.json
```

---

## 🎨 Design System

### Colors

#### Primary
- **Cyan**: `#4FC3F7` - Primary CTAs and links
- **Orange**: `#FF6B1A` - Highlights and emphasis

#### Accent Palette
- **Blues**: `#EFF6FF`, `#E1F5FE`, `#DBEAFE`
- **Oranges**: `#FFF3E0`, `#FFEDD5`, `#FFEAD5`
- **Greens**: `#DCFCE7`, `#D1FAE5`
- **Purples**: `#F3E8FF`, `#E0E7FF`

### Typography
- **Font Family**: Satoshi (FontShare)
- **Weights**: 400, 500, 700, 900

### Design Principles
- Modern & colorful aesthetics
- Rounded elements and corners
- Gradient CTAs
- Pastel card backgrounds
- Badge tags for categorization

For complete design documentation, see [DESIGN_CONTEXT.md](./DESIGN_CONTEXT.md)

---

## 💻 Development

### Available Scripts

```bash
# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Lint code
pnpm run lint
```

### Component Development

All UI components follow the shadcn/ui pattern:

```typescript
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

export function MyComponent() {
  return (
    <div>
      <Badge className="bg-[#E1F5FE] text-[#4FC3F7]">
        Featured
      </Badge>
      <Button className="bg-[#4FC3F7] rounded-full">
        Click Me
      </Button>
    </div>
  );
}
```

### Routing

Routes are configured in `/src/app/routes.ts` using React Router Data mode:

```typescript
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "browse", Component: Browse },
      // ...
    ],
  },
]);
```

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- [x] Project setup
- [x] Design system
- [x] Core pages (Home, Browse, Services, How It Works)
- [x] Navigation
- [x] UI component library

### Phase 2: Core Features (In Progress)
- [ ] Talent profile pages
- [ ] Portfolio system
- [ ] Review & rating system
- [ ] Search functionality
- [ ] Advanced filtering

### Phase 3: User System
- [ ] Authentication (student verification)
- [ ] User profiles
- [ ] Commission tracking
- [ ] Messaging system

### Phase 4: Transactions
- [ ] Payment integration
- [ ] Project posting
- [ ] Commission management
- [ ] Analytics dashboard

### Phase 5: Enhancement
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Skills verification
- [ ] Notification system

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Coding Guidelines

- Use TypeScript for all new code
- Follow the existing design system
- Write responsive, accessible components
- Add comments for complex logic
- Test across different screen sizes

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Team

**Maintainer**: [@ochlzo](https://github.com/ochlzo)

---

## 📞 Contact

For questions or feedback:
- GitHub Issues: [Create an issue](https://github.com/ochlzo/braket-platform/issues)
- Repository: https://github.com/ochlzo/braket-platform

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Satoshi Font](https://www.fontshare.com/fonts/satoshi) - Modern typography
- [Lucide](https://lucide.dev) - Icon set
- [Unsplash](https://unsplash.com) - Placeholder images

---

<div align="center">

**Made with ❤️ for Bicol University Students**

[Report Bug](https://github.com/ochlzo/braket-platform/issues) · [Request Feature](https://github.com/ochlzo/braket-platform/issues)

</div>
