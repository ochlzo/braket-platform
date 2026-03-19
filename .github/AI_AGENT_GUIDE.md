# 🤖 AI Agent Development Guide

> **Quick Start Guide for AI Agents working on the BRaket Platform**

---

## 🎯 First Steps

When you first access this repository:

1. ✅ **Read `DESIGN_CONTEXT.md`** - Complete design system and architecture
2. ✅ **Read `README.md`** - Project overview and getting started
3. ✅ **Check `UPLOAD_STATUS.md`** - Current file upload status
4. ✅ **Review `package.json`** - Dependencies and scripts

---

## 🎨 Design System Quick Reference

### Colors
```css
/* Primary */
--cyan: #4FC3F7;      /* Primary CTAs, links */
--orange: #FF6B1A;    /* Highlights, emphasis */

/* Pastel Backgrounds */
--blue-light: #E1F5FE;
--orange-light: #FFF3E0;
--green-light: #DCFCE7;
--purple-light: #F3E8FF;
```

### Typography
```css
/* Font: Satoshi (from FontShare) */
font-family: 'Satoshi', sans-serif;

/* Weights */
400 - Regular
500 - Medium
700 - Bold
900 - Black
```

### Common Patterns
```typescript
// Rounded elements
className="rounded-2xl"   // Cards
className="rounded-3xl"   // Sections
className="rounded-full"  // Buttons, badges

// Primary colors
className="bg-[#4FC3F7]"  // Cyan background
className="text-[#FF6B1A]" // Orange text

// Gradient CTAs
className="bg-gradient-to-r from-[#FF6B1A] to-[#4FC3F7]"
```

---

## 🛠️ Tech Stack

- **React 19.0** + **TypeScript 5.6**
- **Vite 6.0** (build tool)
- **React Router 7.1** (Data mode)
- **Tailwind CSS 4.0**
- **shadcn/ui** (47 components)
- **Lucide React** (icons)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── figma/           # ImageWithFallback (protected)
│   │   └── Navigation.tsx   # Main nav
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Browse.tsx
│   │   ├── Services.tsx
│   │   └── HowItWorks.tsx
│   ├── App.tsx
│   └── routes.ts
├── styles/
│   ├── fonts.css
│   └── theme.css
└── main.tsx
```

---

## 🚨 Protected Files (DO NOT MODIFY)

- `src/app/components/figma/ImageWithFallback.tsx`
- `pnpm-lock.yaml`

---

## ✅ Common Tasks

### Creating a New Page

```typescript
// src/app/pages/MyPage.tsx
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router';

export function MyPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Your content */}
        </div>
      </section>
    </div>
  );
}
```

### Adding a Route

```typescript
// src/app/routes.ts
import { MyPage } from './pages/MyPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // ... existing routes
      { path: "my-page", Component: MyPage },
    ],
  },
]);
```

### Using UI Components

```typescript
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader } from '../components/ui/card';

<Card className="bg-[#E1F5FE] rounded-3xl">
  <CardHeader>
    <Badge className="bg-[#4FC3F7] text-white rounded-full">
      Featured
    </Badge>
  </CardHeader>
  <CardContent>
    <Button className="bg-[#FF6B1A] text-white rounded-full">
      Learn More
    </Button>
  </CardContent>
</Card>
```

### Using Images

```typescript
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

<ImageWithFallback
  src="https://images.unsplash.com/..."
  alt="Description"
  className="w-full h-[500px] object-cover rounded-3xl"
/>
```

---

## 📝 Coding Standards

### Component Pattern

```typescript
export function ComponentName() {
  // State
  const [state, setState] = useState();
  
  // Data
  const items = [...];
  
  // Render
  return (
    <div className="...">
      {/* Content */}
    </div>
  );
}
```

### Styling Pattern

```typescript
// Use Tailwind utility classes
className="bg-white rounded-2xl p-8 shadow-lg"

// Use design system colors
className="bg-[#4FC3F7] text-white"

// Responsive design
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"

// Hover states
className="hover:shadow-xl hover:-translate-y-1 transition-all"
```

---

## 🎯 Pending Features to Implement

### High Priority
1. **Talent Profile Pages**
   - Individual talent detail view
   - Portfolio gallery
   - Reviews section
   - Contact/hire CTA

2. **Search Functionality**
   - Full-text search
   - Filter by skills, rating, location
   - Sort options

3. **Review System**
   - Star ratings
   - Written reviews
   - Review form
   - Rating aggregation

### Medium Priority
4. **User Authentication**
   - Student email verification
   - Login/signup
   - Profile management

5. **Portfolio System**
   - Upload work samples
   - Project descriptions
   - Image galleries

6. **Commission Tracking**
   - Project history
   - Earnings dashboard
   - Status tracking

---

## 🚦 Important Notes

### Font Imports
- **ONLY** add font imports to `/src/styles/fonts.css`
- Never add font imports to other CSS files

### Routing
- Use React Router **Data mode** pattern
- Configure routes in `/src/app/routes.ts`
- Use `<RouterProvider router={router} />` in App.tsx

### Components
- Import shadcn/ui components from `/src/app/components/ui/`
- Use `ImageWithFallback` for all images (not `<img>`)
- Create new components in `/src/app/components/`

### Colors
- Primary: `#4FC3F7` (cyan), `#FF6B1A` (orange)
- Use pastel backgrounds from the color palette
- Maintain vibrant, colorful aesthetic

---

## 📚 Resources

- **shadcn/ui Docs**: https://ui.shadcn.com
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Router**: https://reactrouter.com
- **Satoshi Font**: https://www.fontshare.com/fonts/satoshi
- **Lucide Icons**: https://lucide.dev

---

## ✅ Pre-Commit Checklist

- [ ] Code follows TypeScript best practices
- [ ] Components use existing shadcn/ui components
- [ ] Colors match design system (`#4FC3F7`, `#FF6B1A`)
- [ ] Rounded corners applied (`rounded-2xl`, `rounded-3xl`)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Images use `ImageWithFallback`
- [ ] No font imports outside `/src/styles/fonts.css`
- [ ] Protected files not modified

---

## 🚀 Quick Commands

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Preview build
pnpm run preview

# Lint code
pnpm run lint
```

---

**Happy Coding! 🚀**

For questions, refer to:
- `DESIGN_CONTEXT.md` - Complete design documentation
- `README.md` - Project overview
- `UPLOAD_STATUS.md` - File upload status
