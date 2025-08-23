# FLOAT.DISPATCH

## Overview

FLOAT.DISPATCH is a full-stack web application built as a publishing house platform that explores the theme of "chaos made coherent" through curated content collections. The platform organizes content into thematic "imprints" (TECHCRAFT, SIGIL STUDIES, ACTIVATE, INTERFACE POETICS, and SPA), each with distinct visual languages and editorial focuses. The application features a modern React frontend with a Node.js/Express backend, designed to showcase technical articles, AI collaboration experiments, design philosophy, and digital activism content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system featuring imprint-specific color schemes and dark theme by default
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **Routing**: React Router for client-side navigation with nested routes for imprint-specific content
- **State Management**: TanStack Query for server state management and data fetching
- **Component Organization**: Modular architecture with reusable components, layouts, and page-specific components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework using ES modules
- **Database Layer**: Drizzle ORM configured for PostgreSQL with schema-driven development
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and PostgreSQL support for production
- **API Design**: RESTful API structure with `/api` prefix for backend routes
- **Development Server**: Integrated Vite dev server with Express for seamless full-stack development

### Data Architecture
- **Database Schema**: PostgreSQL with Drizzle ORM, currently defines users table with username/password authentication structure
- **Content Management**: JSON-based content storage for static content (dispatches, imprints, navigation) with potential for database migration
- **Type Safety**: Shared TypeScript types between frontend and backend using Zod schemas for validation

### Build and Deployment
- **Development**: Concurrent frontend (Vite) and backend (tsx) development servers
- **Production Build**: Vite builds frontend to `dist/public`, esbuild bundles backend to `dist/index.js`
- **Asset Management**: Public assets served statically, with special handling for attached assets

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL dialect support
- **@tanstack/react-query**: Server state management and data fetching library
- **react-router-dom**: Client-side routing for single-page application navigation

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives (dialogs, dropdowns, forms, etc.)
- **tailwindcss**: Utility-first CSS framework with custom design system configuration
- **class-variance-authority**: Type-safe component variant system for consistent styling
- **lucide-react**: Modern icon library for consistent iconography

### Development Tools
- **typescript**: Static type checking across frontend and backend
- **vite**: Fast build tool and development server with React plugin
- **esbuild**: Fast JavaScript bundler for backend production builds
- **@replit/vite-plugin-***: Replit-specific development tooling for enhanced debugging

### Code Quality and Syntax
- **react-syntax-highlighter**: Code syntax highlighting for technical content display
- **react-helmet**: Document head management for SEO and meta tags

### Form and Data Handling
- **@hookform/resolvers**: Form validation integration with React Hook Form
- **zod**: Schema validation library integrated with Drizzle ORM
- **date-fns**: Date manipulation and formatting utilities

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions (configured but not yet implemented)