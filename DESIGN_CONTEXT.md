# BRaket Platform - Design Context & Documentation

## 🎯 Project Overview

**BRaket** is a role-based talent discovery and commission platform specifically for Bicol University students to help them monetize their technical and creative skills locally.

### Repository
- **GitHub**: https://github.com/ochlzo/braket-platform
- **Status**: Active Development
- **Last Updated**: March 19, 2026

---

## 🎨 Design System

### Typography
- **Primary Font**: [Satoshi](https://www.fontshare.com/fonts/satoshi) from FontShare
- **Weight Variations**: 400 (Regular), 500 (Medium), 700 (Bold), 900 (Black)
- **Implementation**: Imported in `/src/styles/fonts.css`

### Color Palette

#### Primary Colors
- **Cyan**: `#4FC3F7` - Used for primary CTAs, links, and accents
- **Orange**: `#FF6B1A` - Used for highlights, secondary CTAs, and emphasis

#### Accent Colors
- **Blues**: `#EFF6FF`, `#E1F5FE`, `#DBEAFE`, `#E0F7FA`
- **Oranges**: `#FFF7ED`, `#FFF3E0`, `#FFEDD5`, `#FFEAD5`, `#FFE8DC`
- **Greens**: `#DCFCE7`, `#D1FAE5`
- **Purples**: `#F3E8FF`, `#E0E7FF`, `#FCE7F3`
- **Yellows**: `#FEF3C7`
- **Reds**: `#FEE2E2`
- **Neutrals**: `#F3F4F6`, `#FEF5F0`

### Design Principles
- **Modern & Colorful**: Vibrant backgrounds instead of white
- **Rounded Elements**: Generous border-radius for cards, buttons, and containers
- **Gradient CTAs**: Eye-catching gradient buttons and hero sections
- **Pastel Cards**: Soft, colorful backgrounds for content cards
- **Badge Tags**: Visual categorization with badge components
- **2x2 Grid System**: Organized layout for features and services
- **Side-by-Side Layouts**: Two-column layouts for content sections

---

## 🏗️ Architecture

### Tech Stack
- **Framework**: React 19.0.0
- **Language**: TypeScript 5.6.3
- **Build Tool**: Vite 6.0.5
- **Routing**: React Router 7.1.1 (Data mode pattern)
- **Styling**: Tailwind CSS v4.0
- **UI Components**: shadcn/ui (47 components)
- **Icons**: lucide-react

### Project Structure
```
braket-platform/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/           # 47 shadcn/ui components
│   │   │   ├── figma/        # ImageWithFallback component
│   │   │   └── Navigation.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Browse.tsx
│   │   │   ├── Services.tsx
│   │   │   └── HowItWorks.tsx
│   │   ├── App.tsx           # Main app component
│   │   └── routes.ts         # React Router configuration
│   ├── styles/
│   │   ├── fonts.css         # Satoshi font imports
│   │   └── theme.css         # Tailwind theme & design tokens
│   └── main.tsx              # App entry point
├── public/                   # Static assets
└── package.json
```

---

## 📄 Implemented Pages

### 1. Home Page (`/src/app/pages/Home.tsx`)
**Status**: ✅ Complete

#### Sections:
- **Hero Section**: Two-column layout with headline, CTA buttons, user avatars, and hero image
- **Stats Section**: Side-by-side layout with statistics card and image grid
- **Categories Section**: 2x2 grid of service categories with pastel backgrounds
- **Features Section**: 2x2 grid showcasing platform features with decorative elements
- **CTA Section**: Gradient background final call-to-action

#### Key Features:
- Vibrant gradient backgrounds
- Rounded cards with pastel colors
- Badge components for labels
- Star rating displays
- Responsive grid layouts
- ImageWithFallback for all images

### 2. Browse Page (`/src/app/pages/Browse.tsx`)
**Status**: ✅ Complete (Structure)

#### Features:
- Search functionality with icon
- Category filter pills
- Advanced filters (rating, location)
- Talent cards grid (3-column)
- Mock talent data (6 talents)
- Rating and review display
- Availability badges
- Skill tags
- "View Profile" CTAs

#### Data Structure:
```typescript
{
  id: number;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  hourlyRate: string;
  location: string;
  skills: string[];
  image: string;
  available: boolean;
}
```

### 3. Services Page (`/src/app/pages/Services.tsx`)
**Status**: ✅ Complete (Structure)

#### Categories:
- Web & App Development
- Graphic Design
- Photography
- Video Production
- Content Writing
- Music & Audio
- Digital Marketing
- Business Consulting

#### Features:
- 3-column service grid
- Pastel colored cards
- Icon-based categorization
- Feature lists per service
- "Find Talents" CTAs
- Gradient CTA section

### 4. How It Works Page (`/src/app/pages/HowItWorks.tsx`)
**Status**: ✅ Complete (Structure)

#### Sections:
- **For Clients**: 4-step process with numbered cards
- **For Talents**: 4-step process for student talents
- **Platform Features**: 3x2 grid of key features
- **Final CTA**: Gradient section with sign-up buttons

#### Design Elements:
- Step-by-step flow with arrow indicators
- Color-coded sections
- Numbered badges
- Dual user perspective (clients vs talents)

---

## 🧩 Core Components

### Navigation (`/src/app/components/Navigation.tsx`)
- Fixed header with white background
- Logo and navigation links
- Mobile-responsive hamburger menu
- "Sign In" and "Get Started" buttons
- Active route highlighting

### ImageWithFallback (`/src/app/components/figma/ImageWithFallback.tsx`)
- Protected component - DO NOT MODIFY
- Handles image loading with fallback
- Used throughout the app for all images

### UI Components (shadcn/ui)
47 reusable components including:
- Button, Badge, Card, Input, Select
- Dialog, Alert, Accordion, Tabs
- Navigation Menu, Dropdown, Popover
- And many more...

---

## 🎯 Pending Features

### High Priority
1. **Talent Profile Pages**: Individual talent detail pages with portfolio
2. **Portfolio System**: Image gallery and work showcase
3. **Review System**: Star ratings and written reviews
4. **Commission History**: Transaction tracking for talents and clients
5. **Search Functionality**: Full-text search with filters
6. **Reputation System**: Ranking algorithm based on ratings

### Medium Priority
7. **User Authentication**: Sign up/login for students and clients
8. **Project Posting**: Clients can post project requirements
9. **Messaging System**: Communication between talents and clients
10. **Payment Integration**: Secure commission payments
11. **Notification System**: Updates on projects and messages

### Future Enhancements
- Advanced analytics dashboard
- Skills verification system
- Student ID verification
- Calendar/availability system
- Mobile app version

---

## 🚀 Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow React functional component patterns
- Use Tailwind utility classes for styling
- Maintain consistent spacing and naming

### Component Creation
- Place page components in `/src/app/pages/`
- Place reusable components in `/src/app/components/`
- Import UI components from `/src/app/components/ui/`
- Use `ImageWithFallback` for all images

### Routing
- Configure routes in `/src/app/routes.ts`
- Use React Router Data mode pattern
- Main app uses `<RouterProvider router={router} />`

### Styling
- Primary colors: `#4FC3F7` and `#FF6B1A`
- Use pastel backgrounds from the color palette
- Prefer rounded corners (`rounded-2xl`, `rounded-3xl`)
- Apply gradient backgrounds for CTAs
- Use badge components for tags and labels

### Images
- Use `ImageWithFallback` component
- Source images from Unsplash for placeholders
- Maintain consistent aspect ratios

---

## 📦 Dependencies

### Core
- react: ^19.0.0
- react-dom: ^19.0.0
- react-router: ^7.1.1

### UI & Styling
- @radix-ui/* (multiple packages for shadcn/ui)
- tailwindcss: ^4.0.0
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- tailwind-merge: ^2.5.5

### Icons & Utilities
- lucide-react: ^0.469.0
- date-fns: ^4.1.0
- recharts: ^2.15.0

### Development
- typescript: ^5.6.3
- vite: ^6.0.5
- @vitejs/plugin-react: ^4.3.4

---

## 🎨 Design References

The design follows a modern, colorful aesthetic inspired by contemporary SaaS platforms with:
- Clean typography (Satoshi font)
- Vibrant color palette
- Generous whitespace
- Card-based layouts
- Gradient accents
- Rounded corners
- Pastel backgrounds

---

## 📝 Notes for AI Agents

### When Adding Features:
1. **Check existing components** in `/src/app/components/ui/` before creating new ones
2. **Follow the color palette** defined in this document
3. **Use ImageWithFallback** for all image elements
4. **Maintain consistency** with existing page designs
5. **Test responsiveness** for mobile, tablet, and desktop

### When Modifying:
- **DO NOT** modify protected files (ImageWithFallback, pnpm-lock.yaml)
- **DO NOT** change font imports outside of `/src/styles/fonts.css`
- **ALWAYS** use the established color palette
- **MAINTAIN** the rounded, colorful design aesthetic

### Code Patterns:
```typescript
// Import pattern for UI components
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

// Import pattern for images
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Color usage
className="bg-[#4FC3F7]"  // Primary cyan
className="text-[#FF6B1A]"  // Primary orange
className="bg-[#E1F5FE]"  // Pastel blue card

// Rounded corners
className="rounded-2xl"  // Cards
className="rounded-3xl"  // Larger sections
className="rounded-full"  // Buttons, badges
```

---

## 🔗 Quick Links

- **GitHub Repository**: https://github.com/ochlzo/braket-platform
- **Satoshi Font**: https://www.fontshare.com/fonts/satoshi
- **shadcn/ui**: https://ui.shadcn.com
- **Tailwind CSS**: https://tailwindcss.com
- **React Router**: https://reactrouter.com

---

## ✅ Implementation Checklist

### Completed
- [x] Project setup with Vite + React + TypeScript
- [x] Tailwind CSS v4 configuration
- [x] Satoshi font integration
- [x] React Router setup with Data mode
- [x] Navigation component
- [x] Home page design
- [x] Browse page structure
- [x] Services page structure
- [x] How It Works page structure
- [x] 47 shadcn/ui components
- [x] GitHub repository initialization

### In Progress
- [ ] Upload all components to GitHub
- [ ] Talent profile pages
- [ ] Portfolio system
- [ ] Review and rating system

### Planned
- [ ] User authentication
- [ ] Search functionality
- [ ] Commission tracking
- [ ] Messaging system
- [ ] Payment integration

---

**Last Updated**: March 19, 2026 | **Maintainer**: ochlzo | **Version**: 1.0.0
