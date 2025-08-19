# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FLOAT.DISPATCH is a neuroqueer ritual publishing system built with React, TypeScript, and Vite. It explores themes of 'chaos made coherent' through curated content across multiple imprints, featuring consciousness technology concepts and sacred incoherence preservation.

## Core Development Commands

```bash
# Start development server on port 8080
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Architecture & Key Patterns

### Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/UI base components (50+ components)
│   ├── changelog/       # Changelog system with localStorage persistence
│   └── home/           # Homepage sections (Hero, Imprints, etc.)
├── pages/              # Route components with React Router
│   └── imprints/       # Multi-level imprint pages (5 imprints)
│       ├── activate/
│       ├── interface-poetics/
│       ├── sigil-studies/
│       ├── spa/
│       └── techcraft/
├── hooks/              # Custom React hooks
└── lib/                # Utility functions (cn, utils)
```

### Routing Architecture
- Uses React Router DOM v6 with BrowserRouter
- Main app entry at `src/App.tsx` defines all routes
- Nested imprint routes under `/imprints/*`
- 404 handling with custom NotFound page
- Multiple dispatch pages per imprint (e.g., `/imprints/sigil-studies/continuity-bridges`)

### State Management
- @tanstack/react-query for server state
- localStorage for changelog persistence (JSON array of entries)
- React hooks for local component state
- No global state management (Redux/Zustand not used)

### Component Architecture
- Shadcn/UI component library as foundation
- Components wrapped with React.memo for performance
- TypeScript interfaces for all props
- Consistent naming: PascalCase for components, kebab-case for files

### Changelog System
- Custom changelog component at `src/components/changelog/Changelog.tsx`
- Entries stored as JSON in localStorage with schema:
  ```typescript
  interface ChangelogEntry {
    id: string;
    description: string;
    completed: boolean;
    timestamp: string;
  }
  ```
- Auto-generates IDs with timestamp + random number
- Toast notifications on actions (add, complete)

### Styling Patterns
- Tailwind CSS with custom configuration
- Dark theme by default (gray-900 backgrounds)
- Imprint-specific color schemes:
  - TechCraft: Electric blue (#4A90E2)
  - Sigil Studies: Magenta (#E24A90)
  - Activate: Neon green (#00ff9f)
  - Interface: Purple (#8b00ff)
- Consistent spacing and typography scales

### TypeScript Configuration
- Path alias `@/` maps to `./src/`
- Relaxed strictness for rapid development:
  - `noImplicitAny: false`
  - `strictNullChecks: false`
  - `noUnusedParameters: false`
- Separate configs for app and node environments

## Development Workflow

### Adding New Dispatches
1. Create new component in `src/pages/imprints/[imprint-name]/[dispatch-name].tsx`
2. Add route to `src/App.tsx` Routes component
3. Import and add Route element with proper path
4. Update navigation in relevant imprint index page

### Component Development
- Use existing UI components from `src/components/ui/`
- Implement React.memo for list items and expensive renders
- Use useCallback for event handlers passed to children
- Keep components under 150 lines when possible

### Performance Considerations
- Vite dev server runs on port 8080 with IPv6 support
- Component tagger enabled in development (Lovable integration)
- Code splitting happens automatically via React Router
- Images should be optimized before adding to public/

## Deployment Context

- **Primary deployment**: Lovable platform (lovable.dev)
- **Preview URL**: lov-float-dispatch-manifesto-forge.lovable.app
- **Build output**: dist/ directory
- **Static hosting compatible**: Can deploy to Vercel, Netlify, GitHub Pages

## Key Dependencies

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Shadcn/UI** component library
- **React Router DOM** for routing
- **React Hook Form** + Zod for forms
- **Recharts** for data visualization
- **Lucide React** for icons

## Testing Approach

Currently no test framework configured. When implementing tests:
1. Install testing dependencies (Vitest recommended for Vite projects)
2. Add test scripts to package.json
3. Focus on critical paths: changelog persistence, routing, form validation