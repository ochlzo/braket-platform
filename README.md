# BRaket Platform

A role-based talent discovery and commission platform specifically for Bicol University students to help them monetize their technical and creative skills locally.

## Features

- **Search & Browse**: Find verified BU student talents with advanced filters (rating, talent category, location)
- **Digital Portfolios**: Showcase work and build professional profiles
- **Reviews & Ratings**: Transparent feedback system for both clients and talents
- **Commission History**: Track projects and transactions
- **Reputation-Based Ranking**: Merit-based visibility system
- **Secure Platform**: Verified student-only community

## Tech Stack

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS v4 with custom theme
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router 7
- **Icons**: Lucide React
- **Fonts**: Satoshi from FontShare

## Design System

- **Primary Colors**: 
  - Cyan: #4FC3F7
  - Orange: #FF6B1A
- **Typography**: Satoshi font family with weights 400, 500, 700, 900
- **Style**: Modern, colorful design with vibrant blues, oranges, greens, and purples
- **Components**: Rounded elements, gradient CTAs, pastel colored cards with badge tags

## Project Structure

```
braket-platform/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/           # shadcn/ui components
│   │   │   ├── figma/        # ImageWithFallback component
│   │   │   └── Navigation.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Browse.tsx
│   │   │   ├── Services.tsx
│   │   │   └── HowItWorks.tsx
│   │   ├── App.tsx
│   │   ├── Root.tsx
│   │   └── routes.tsx
│   └── styles/
│       ├── fonts.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── package.json
├── vite.config.ts
├── postcss.config.mjs
└── ATTRIBUTIONS.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ochlzo/braket-platform.git
cd braket-platform

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Build

```bash
# Build for production
pnpm run build
```

## Pages

- **Home** (`/`): Hero section, category browse, features showcase
- **Browse** (`/browse`): Search and filter talents, view profiles
- **Services** (`/services`): Available service categories
- **How It Works** (`/how-it-works`): Platform guide for clients and talents

## License

This project is for educational purposes for Bicol University students.

## Attributions

- UI Components from [shadcn/ui](https://ui.shadcn.com/) (MIT License)
- Photos from [Unsplash](https://unsplash.com)
- Font: Satoshi from [FontShare](https://www.fontshare.com/)
