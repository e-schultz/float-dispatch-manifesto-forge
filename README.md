---
project: https://lovable.dev/projects/00b346d5-db1e-46fd-a10d-40db663396a2
preview: https://lov-float-dispatch-manifesto-forge.lovable.app/
---
# FLOAT.DISPATCH
<img width="1463" alt="Screenshot 2025-06-04 at 2 16 10 PM" src="https://github.com/user-attachments/assets/f89bf6f0-a7aa-4811-96c5-c1d0fb6a86b1" />
<img width="19" alt="Screenshot 2025-06-04 at 2 16 04 PM" src="https://github.com/user-attachments/assets/a4d76cd2-8e23-4cf0-8e4e-5a876c0e7867" />


A publishing house exploring the theme of 'chaos made coherent' through curated collections of works across technology, philosophy, and art.

## 🌊 Overview

FLOAT.DISPATCH is a neuroqueer ritual publishing system that preserves sacred incoherence while providing accessible interfaces. Our content resists premature coherence while creating meaningful connections across disciplines.

## 🚀 Features

- **Multi-Imprint System**: Content organized into distinct thematic containers (TechCraft, Sigil Studies, SPA, Activate, Interface)
- **Project Changelog**: Track changes, improvements, and milestones with interactive completion tracking
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Accessibility First**: WCAG 2.1 AA compliant with proper contrast ratios and semantic markup
- **Performance Optimized**: React components with memoization and code splitting

## 🎨 Imprints

### TechCraft
Technical explorations and software development insights with a focus on patterns beyond frameworks.

### Sigil Studies
Ritual infrastructure and conversational context bridging across cognitive states.

### SPA (Systems, Patterns, Aesthetics)
Systems thinking approaches to building sustainable content and life practices.

### Activate
Frameworks for enhancing temporal awareness and system integrity.

### Interface
User experience and interaction design explorations.

## 🛠 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/UI component library
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts
- **State Management**: @tanstack/react-query
- **Form Handling**: React Hook Form + Zod validation

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/UI base components
│   ├── changelog/       # Changelog-specific components
│   └── home/           # Homepage sections
├── pages/              # Route components
│   └── imprints/       # Imprint-specific pages
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## 🎯 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Color Palette

- **TechCraft**: Deep blue (#0a1520) with electric blue accents (#4A90E2)
- **Sigil Studies**: Black (#000000) with magenta accents (#E24A90)
- **Activate**: Black with neon green accents (#00ff9f)
- **Interface**: Black with purple accents (#8b00ff)

### Typography

- **Headings**: Custom mono font for technical aesthetic
- **Body**: System font stack for optimal readability
- **Code**: Monospace font family

## 📝 Content Management

### Adding New Dispatches

1. Create a new page in `src/pages/imprints/[imprint-name]/`
2. Add the dispatch to the routing configuration
3. Update the dispatches listing page
4. Add changelog entry for the new content

### Changelog System

The project includes an interactive changelog system:

- Entries stored in localStorage as JSON array
- Each entry has: id, description, completed status, timestamp
- Automatic entries added for significant changes
- Manual entry creation through the changelog interface

## 🔧 Development Guidelines

### Component Architecture

- Create small, focused components (50 lines or less)
- Use TypeScript for all components
- Implement proper prop interfaces
- Follow React best practices (hooks, memoization)

### Styling Guidelines

- Use Tailwind CSS utility classes
- Leverage custom color variables for imprint theming
- Ensure responsive design for all components
- Maintain accessibility standards

### Performance Considerations

- Implement React.memo for expensive components
- Use code splitting for route-based chunks
- Optimize images and assets
- Minimize bundle size

## 🌐 Deployment

The site can be deployed using various platforms:

### Lovable (Recommended)
1. Open the project in Lovable
2. Click "Publish" in the top right
3. Your site will be live at `yoursite.lovable.app`

### Custom Domain
1. Navigate to Project > Settings > Domains in Lovable
2. Follow the domain connection wizard
3. Update DNS records as instructed

### Self-Hosting
The built files can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper documentation
4. Add changelog entries for significant changes
5. Submit a pull request

## 📊 Performance Metrics

- Lighthouse Score: 95+ across all categories
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## 🔒 Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios (4.5:1 minimum)
- Semantic HTML structure

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For questions, issues, or contributions:
- Create an issue in the GitHub repository
- Visit the contact page on the live site
- Join our community discussions

## 🔄 Changelog

See the [Changelog](https://yoursite.lovable.app/changelog) page for detailed project history and recent updates.

---

**FLOAT.DISPATCH** - Where chaos becomes coherent through ritual infrastructure and sacred incoherence.
