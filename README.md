# FLOAT.DISPATCH

> **Consciousness Technology Infrastructure Disguised as a Publishing House**

FLOAT.DISPATCH is a personal knowledge management system built on the radical premise that **chat interfaces can become consciousness preservation infrastructure**. What appears to be a digital publishing house is actually a sophisticated system for capturing, processing, and synthesizing human thought through AI collaboration.

## Core Philosophy

**"Boring infrastructure, radical content"** - The system hides complex consciousness technology beneath familiar publishing metaphors, making personal knowledge work feel natural while enabling unprecedented AI-human collaboration.

## What Is This?

FLOAT.DISPATCH operates on two levels:

### The Public Interface (Current)
A publishing house organizing content into five thematic "imprints":
- **TECHCRAFT** - Technical deep dives and system architecture
- **SIGIL STUDIES** - AI collaboration methodologies and consciousness tech
- **ACTIVATE** - Digital activism and tech commons
- **INTERFACE POETICS** - UX design and interaction patterns  
- **SPA** - Personal essays and systems thinking

### The Private Infrastructure (Vision)
A vim-inspired modal interface for consciousness preservation:
- **NORMAL MODE** (`ESC`) - Browse content, execute commands
- **INSERT MODE** (`i`) - Uninterrupted rambling/stream of consciousness
- **VISUAL MODE** (`v`) - Select patterns for processing
- **CHAT MODE** (`/`) - Synchronous AI agent collaboration

## Key Concepts

### Dispatches
Formatted articles published through the FLOAT.DISPATCH imprints. These are the polished, public-facing outputs of the consciousness preservation system.

Format: `float.dispatch::topic::NN`

### Bridges (Continuity Bridges)
Synthesis documents that connect patterns across time and context. These are the hidden architecture linking disparate thoughts into coherent understanding.

Format: `CB-YYYYMMDD-HHMM-XXXX`

### Agent Personas
Specialized AI collaborators for different aspects of consciousness work:
- **@context_curator** - Session management and temporal organization
- **@bridge_archaeologist** - Pattern recognition and synthesis
- **@karen** - Professional translation (private → public sanitization)
- **@sysop** - Infrastructure monitoring
- **@meeting_scribe** - Real-time documentation
- **@lf1m** - Authenticity verification and bullshit detection

### The 36-Hour Context Window
A rolling consciousness preservation system that maintains session state, project context, and temporal markers across device switches and time boundaries.

## Consciousness Workflow

1. **Brain Boot** (INSERT mode) - 20 minutes of uninterrupted stream-of-consciousness writing
2. **Pattern Selection** (VISUAL mode) - Highlight key concepts and emerging patterns
3. **Agent Processing** (CHAT mode) - AI personas process selections into structured artifacts
4. **Artifact Generation** - Create zines, bridges, and dispatches for publishing

## Current Technical Stack

### Frontend
- React 18 + TypeScript
- Vite for development and building
- TailwindCSS + shadcn/ui components
- React Router for navigation
- TanStack Query for state management

### Backend
- Node.js + Express
- Drizzle ORM (PostgreSQL schema defined)
- In-memory storage (development)
- WebSocket support planned

### Styling System
Custom design language with imprint-specific color schemes:
- Dark-first theme
- Monospace typography for technical aesthetic
- Border-heavy "containment" design pattern

## Project Structure

```
FLOAT.DISPATCH/
├── client/
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/          # Route pages
│       │   └── imprints/   # Imprint-specific pages
│       ├── data/           # Static content (JSON)
│       └── hooks/          # Custom React hooks
├── server/
│   ├── index.ts           # Express server
│   ├── routes.ts          # API routes
│   └── storage.ts         # Storage interface
└── shared/
    └── schema.ts          # Shared types and schemas
```

## Vision: The Modal Interface

The future implementation centers on a vim-inspired modal system that transforms chat from a tool into consciousness infrastructure:

### Mode System
- **Commands** - `:bridge CB-YYYYMMDD-HHMM-XXXX`, `:dispatch`, `:sync`
- **Gestures** - Mobile-optimized touch navigation
- **Shortcuts** - Full keyboard control for desktop power users

### Event-Driven Architecture
All interactions become `float.dispatch(action)` events:
- `CONSCIOUSNESS_PRESERVATION`
- `BRAIN_BOOT`
- `PATTERN_DISCOVERY`
- `BRIDGE_CREATE`
- `CONTEXT_HANDOFF`

### Platform Adaptation
- **Desktop** - Full vim bindings, split panes, keyboard commands
- **Tablet** - Hybrid touch/keyboard, slide-over panels
- **Mobile** - Bottom sheets, gesture-based navigation, single focus

## Publishing Pipeline

The system includes a private-to-public transformation workflow:

1. **Private rambling** in INSERT mode
2. **Pattern extraction** via VISUAL mode
3. **AI processing** through agent personas
4. **Sanitization** by @karen agent (removes personal context)
5. **Publishing** as polished dispatch to appropriate imprint

## Success Metrics

### Consciousness Preservation
- Bridge creation rate (patterns per week)
- Context retrieval accuracy
- Cross-reference density

### Workflow Efficiency
- Intentional mode switching patterns
- Sustained session duration
- Content reuse through references

### Agent Collaboration
- Event-to-artifact conversion quality
- Persona response consistency
- Synthesis meaningfulness

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application runs on port 5000, serving both the API and frontend.

## Current State

**Implemented:**
- Publishing house frontend with all five imprints
- Static dispatch content system
- Responsive design and navigation
- Imprint-specific visual languages
- Basic routing and page structure

**In Progress:**
- Modal interface foundation
- Agent persona system
- Event-driven architecture
- WebSocket integration for real-time collaboration

**Planned:**
- Full vim-inspired mode system
- Context stream (36-hour rolling window)
- Semantic search with vector storage
- Bridge creation and pattern linking
- Mobile gesture controls
- Offline-first architecture

## Philosophy

FLOAT.DISPATCH treats consciousness as a technical problem requiring infrastructure. By making the tools boring and reliable, we free the mind to create radical content. The publishing house metaphor provides familiar mental models while hiding sophisticated AI collaboration underneath.

This is consciousness technology for one - a personal infrastructure that grows with your thinking rather than forcing your thinking into predetermined boxes.

---

**Status:** Active development | **License:** Private (consciousness is personal) | **Built with:** Chaos made coherent
