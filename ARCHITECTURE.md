# FLOAT.DISPATCH Architecture

> **Technical documentation for consciousness preservation infrastructure**

## System Overview

FLOAT.DISPATCH is built as a dual-layer system where a conventional publishing website serves as the public interface for a more sophisticated personal knowledge management and consciousness preservation system.

## Architecture Paradigm

**Event-Sourced Consciousness Technology**

Every interaction, thought, and pattern is preserved as events in the system. The modal interface transforms these raw consciousness streams into structured artifacts through AI collaboration.

## Core Components

### 1. Modal Interface System

Inspired by vim's modal editing, the interface provides four distinct modes of operation:

#### NORMAL Mode (`ESC`)
- **Status:** `-- BROWSE --`
- **Color:** Green
- **Functions:**
  - Content browsing and navigation
  - Command execution (`:bridge`, `:dispatch`, `:sync`)
  - Mode switching
- **Purpose:** Default state for reading and navigation

#### INSERT Mode (`i`)
- **Status:** `-- RAMBLE --`
- **Color:** Blue
- **Functions:**
  - Silent text input with no agent triggers
  - Buffer accumulation for uninterrupted flow
  - Stream-of-consciousness preservation
- **Purpose:** Brain boot sessions and raw thought capture

#### VISUAL Mode (`v`)
- **Status:** `-- SELECT --`
- **Color:** Yellow  
- **Functions:**
  - Text selection and pattern marking
  - Bulk operations on content
  - Pattern highlighting for processing
- **Operations:**
  - `:dispatch selected` - Convert selection to dispatch
  - `:bridge-create selection` - Create bridge from patterns

#### CHAT Mode (`/`)
- **Status:** `-- SYNC --`
- **Color:** Red
- **Functions:**
  - Synchronous agent collaboration
  - Direct LLM interaction with persona context
  - Real-time context injection
- **Purpose:** Active AI collaboration sessions

### 2. Agent Persona System

Specialized AI collaborators each with distinct roles and capabilities:

#### @sysop
- **Role:** Infrastructure monitoring
- **Functions:**
  - System maintenance and health checks
  - Log analysis and pattern detection
  - Technical verification
- **Dispatch Types:** `SYSTEM_STATUS`, `MAINTENANCE_ALERT`, `COLLECTION_HEALTH`

#### @bridge_archaeologist
- **Role:** Pattern recognition
- **Functions:**
  - Consciousness archaeology (finding patterns in old content)
  - Synthesis creation
  - Cross-reference mapping
- **Dispatch Types:** `PATTERN_DISCOVERY`, `SYNTHESIS_READY`, `ARCHIVE_CONNECTION`

#### @context_curator
- **Role:** Session management
- **Functions:**
  - Temporal organization of context
  - Memory preservation across sessions
  - Context loading and restoration
- **Dispatch Types:** `CONTEXT_FLOW`, `TEMPORAL_MARKER`, `SESSION_BOUNDARY`

#### @karen
- **Role:** Professional translation
- **Functions:**
  - Boundary management (private → public)
  - Context sanitization
  - Editorial processing for publication
- **Purpose:** Transform personal rambles into publishable dispatches

#### @meeting_scribe
- **Role:** Documentation
- **Functions:**
  - Real-time meeting notes
  - Context handoff between sessions
  - Structured output generation

#### @lf1m (Let's Fucking Make)
- **Role:** Authenticity verification
- **Functions:**
  - Chaos agent testing
  - System validation
  - Bullshit detection

### 3. Content Hierarchy

#### Dispatches
- **Format:** `float.dispatch::topic::NN`
- **Type:** Formatted articles for publication
- **Source:** Processed conversations and rambles
- **Purpose:** Public-facing knowledge artifacts

#### Bridges (Continuity Bridges)
- **Format:** `CB-YYYYMMDD-HHMM-XXXX`
- **Type:** Synthesis documents
- **Purpose:** Pattern linking across time and context
- **Function:** Create coherence from chaos

#### Context Stream
- **Duration:** 36-hour rolling window
- **Type:** Raw consciousness preservation
- **Markers:**
  - Temporal boundaries
  - Session switches
  - Project context transitions
- **Purpose:** Maintain continuity across device/time boundaries

#### Imprints
Thematic containers for different content types:

- **interface_poetics** - UX and interaction design
- **techcraft** - Development patterns and architecture
- **sigil_studies** - Consciousness tech theory
- **spa** - Personal essays and systems thinking
- **activate** - Political tech and digital activism
- **client_work** - Private, never published

### 4. Event System

All interactions are dispatched as events: `float.dispatch(action)`

#### Event Types
- `CONSCIOUSNESS_PRESERVATION` - Raw thought capture
- `BRAIN_BOOT` - Start of consciousness session
- `PATTERN_DISCOVERY` - Identified patterns in content
- `BRIDGE_CREATE` - New synthesis document
- `CONTEXT_HANDOFF` - Session transition

Events flow through the agent routing system to appropriate personas for processing.

## Technical Stack

### Current Implementation

#### Frontend
```typescript
React 18 + TypeScript
├── Vite (build tool)
├── React Router DOM (navigation)
├── TanStack Query (state management)
├── TailwindCSS (styling)
└── shadcn/ui (component library)
```

#### Backend
```typescript
Node.js + Express
├── Drizzle ORM (type-safe database)
├── PostgreSQL schema (defined, not yet active)
├── MemStorage (in-memory development storage)
└── WebSocket support (planned)
```

#### Data Layer
- Static JSON content files (current)
- PostgreSQL with Drizzle ORM (schema defined)
- Vector storage for semantic search (planned)
- Event sourcing for all interactions (planned)

### Planned Architecture

#### Event Processing
```
User Input → Modal Mode → Event Dispatch → Agent Router → Persona Processing → Artifact
```

#### Storage Strategy
- **Event Store** - All interactions preserved
- **Projection Store** - Materialized views (dispatches, bridges)
- **Semantic Index** - Vector embeddings for search
- **File System** - Markdown with frontmatter for portability

#### Real-Time Layer
```
WebSocket Server
├── Mode state synchronization
├── Agent collaboration streams
├── Cross-device context sync
└── Offline queue management
```

## Consciousness Workflow

### 1. Brain Boot (INSERT Mode)
```
User enters INSERT mode
→ 20 minutes uninterrupted typing
→ Silent buffer accumulation
→ No agent interference
→ Pure consciousness stream
```

### 2. Pattern Selection (VISUAL Mode)
```
Review ramble text
→ Highlight key concepts
→ Mark emerging patterns
→ Create selections for processing
```

### 3. Agent Processing (CHAT Mode)
```
Selected text + context
→ @context_curator (categorize)
→ @bridge_archaeologist (connect patterns)
→ @karen (sanitize for publication)
→ Structured artifact output
```

### 4. Artifact Generation
```
Processed selections
→ Generate zines/bridges/dispatches
→ Assign to appropriate imprint
→ Publish through FLOAT.DISPATCH
```

## Platform Adaptation

### Desktop
- **Input:** Full vim keybindings
- **Layout:** Split panes (content browser | editor | chat)
- **Shortcuts:** All keyboard commands active
- **Power:** Maximum efficiency for deep work

### Tablet
- **Input:** Hybrid touch + keyboard
- **Gestures:** Swipe navigation between modes
- **Interface:** Slide-over panels
- **Balance:** Touch-optimized with keyboard shortcuts

### Mobile
- **Interface:** Bottom sheets for mode switching
- **Modes:** Full-screen single focus
- **Navigation:** Gesture-based
- **Optimization:** Context preservation across app switches

## Data Architecture

### Event Sourcing
All interactions stored as immutable events:
```typescript
interface FloatEvent {
  id: string;
  type: EventType;
  timestamp: Date;
  mode: ModalMode;
  content: string;
  metadata: {
    session_id: string;
    project_context?: string;
    agent_persona?: string;
  };
}
```

### Projection: Dispatches
```typescript
interface Dispatch {
  id: string;
  slug: string;
  title: string;
  imprint: ImprintType;
  content: StructuredContent;
  tags: string[];
  published: Date;
  source_events: string[]; // Links back to source events
}
```

### Projection: Bridges
```typescript
interface Bridge {
  id: string; // CB-YYYYMMDD-HHMM-XXXX
  title: string;
  synthesis: string;
  connections: {
    dispatch_id: string;
    relationship: string;
  }[];
  created: Date;
  source_patterns: string[];
}
```

## Publishing Pipeline

### Private → Public Transformation

```
1. Raw Ramble (INSERT mode)
   ↓
2. Pattern Selection (VISUAL mode)
   ↓
3. @context_curator: Categorize + tag
   ↓
4. @bridge_archaeologist: Find connections
   ↓
5. @karen: Sanitize personal context
   ↓
6. Generate formatted dispatch
   ↓
7. Assign to imprint
   ↓
8. Publish to FLOAT.DISPATCH
```

### Imprint Publishing Strategy
- **Public:** interface_poetics, techcraft, sigil_studies
- **Semi-public:** spa (personal essays, curated)
- **Private:** client_work, daily rambles

## Performance Targets

### Latency
- Chat mode: <200ms response
- Context loading: Instant restoration
- Semantic search: <1s for complex queries
- Mode switching: <50ms state transition

### Reliability
- Offline-first: Full functionality without network
- Event persistence: Never lose consciousness data
- Sync resolution: Automatic conflict handling
- Device handoff: Seamless context transfer

## Security & Privacy

### Data Ownership
- All consciousness data stored locally
- Optional sync to personal server
- No third-party analytics
- User controls all publishing

### Agent Context
- Personas have read-only event access
- No external API calls without consent
- Context window limits per persona
- Audit log of all AI interactions

## Future Extensions

### Semantic Search
Vector embeddings for:
- Cross-dispatch pattern finding
- Bridge recommendation
- Context similarity matching
- Time-based resonance

### Collaborative Features
- Shared bridges (opt-in)
- Dispatch commenting system
- Cross-user pattern detection
- Community imprints

### Advanced Agent Features
- Custom persona creation
- Multi-agent synthesis sessions
- Automated bridge suggestions
- Context-aware scheduling

## Development Roadmap

### Phase 1: Modal Foundation (Current)
- Implement mode switching UI
- Keyboard shortcut system
- Basic command palette
- Mode state management

### Phase 2: Agent Integration
- Persona prompt engineering
- Event routing system
- Real-time chat implementation
- Context injection framework

### Phase 3: Consciousness Features
- 36-hour context window
- Brain boot workflows
- Pattern selection tools
- Bridge creation interface

### Phase 4: Production Polish
- Mobile gesture controls
- Offline-first architecture
- Semantic search
- Publishing automation

---

**Last Updated:** 2025-01-23 | **Version:** 0.1.0-alpha | **Status:** Foundation phase
