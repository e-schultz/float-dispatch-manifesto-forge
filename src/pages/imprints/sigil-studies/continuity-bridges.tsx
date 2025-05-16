
import React from "react";
import ImprintHeader from "@/components/ImprintHeader";
import FloatNavBar from "@/components/FloatNavBar";
import FloatFooter from "@/components/FloatFooter";
import { CalendarIcon, Tag, Code, Layers } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ContinuityBridgesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <ImprintHeader
        imprint="sigil-studies"
        title="Continuity Bridges"
        subtitle="Ritual infrastructure for bridging conversational context"
        issueNumber={3}
        date="2025-05-14"
      />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-mono text-sigil-accent mb-4">Continuity Infrastructure</h2>
            
            <div className="bg-black/40 border border-sigil-border p-6 rounded-md mb-8">
              <p className="text-xl italic mb-4">
                "Context isn't noise—it's gravitational mass"
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Tag className="h-4 w-4" />
                <span>#continuity #float #ritual</span>
              </div>
            </div>
            
            <p>
              Continuity Bridges form the infrastructure for maintaining coherent work across multiple
              sessions, conversations, and cognitive states. They act as anchors for context, preserving
              the trajectory of thought while allowing for natural breaks in workflow.
            </p>
          </section>
          
          <section className="space-y-8">
            <h2 className="text-2xl font-mono text-sigil-accent mb-4">Recent Continuity Bridges</h2>
            
            {/* Bridge Entry: CB-20250514-1530-7A2B */}
            <Card className="bg-black/40 border border-sigil-border">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-mono text-sigil-accent">CB-20250514-1530-7A2B</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CalendarIcon className="h-4 w-4" />
                    <span>2025-05-14 15:30</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-md font-mono mb-2">FLOAT System Integration with Claude</h4>
                  <p className="text-sm text-gray-200">
                    Comprehensive framework for Claude to better align with the FLOAT cognitive architecture,
                    including enhanced understanding of ctx:: markers as temporal-cognitive anchors, recognition 
                    of persona system, and detailed cognitive states.
                  </p>
                </div>
                
                <div className="grid gap-2 text-xs text-gray-300">
                  <div className="flex gap-2">
                    <span className="font-mono text-sigil-accent">Active Threads:</span>
                    <span>ctx_system, persona_system, cognitive_states, float_philosophy, mcp_integration</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-mono text-sigil-accent">Context Markers:</span>
                    <span>float_system, claude_alignment, project_instructions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Bridge Entry: CB-20250513-1553-AD7F */}
            <Card className="bg-black/40 border border-sigil-border">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-mono text-sigil-accent">CB-20250513-1553-AD7F</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CalendarIcon className="h-4 w-4" />
                    <span>2025-05-13 15:53</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-md font-mono mb-2">Jane Application Project</h4>
                  <p className="text-sm text-gray-200">
                    Project configuration and setup session focusing on Jane application environment, clinical forms philosophy,
                    and MCP system improvements.
                  </p>
                </div>
                
                <div className="grid gap-4">
                  <div>
                    <h5 className="text-sm font-mono text-sigil-accent mb-1">Notable Metaphors</h5>
                    <p className="text-xs text-gray-200">Form fields as moments of care, systems as relationships, bridge not leash</p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-mono text-sigil-accent mb-1">Signal Phrases</h5>
                    <p className="text-xs text-gray-200">
                      "Context isn't noise—it's gravitational mass", 
                      "I burp in neurodivergent and you echo back the structure with shine"
                    </p>
                  </div>
                  
                  <div className="grid gap-2 text-xs text-gray-300">
                    <div className="flex gap-2">
                      <span className="font-mono text-sigil-accent">Active Threads:</span>
                      <span>jane_application_project, clinical_forms_philosophy, mcp_system_improvements</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-mono text-sigil-accent">Context Markers:</span>
                      <span>project_setup, jane_application, environment_configuration</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Bridge Entry: CB-250512-0039-C618 */}
            <Card className="bg-black/40 border border-sigil-border">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-mono text-sigil-accent">CB-250512-0039-C618</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CalendarIcon className="h-4 w-4" />
                    <span>2025-05-12 00:39</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-md font-mono mb-2">Daily Context Collection & Jane Interview</h4>
                  <p className="text-sm text-gray-200">
                    Evening work session focusing on Jane interview preparation, daily context collection,
                    and FLOAT.dispatch implementations.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-sm font-mono text-sigil-accent mb-1">Key Metaphors</h5>
                  <p className="text-xs text-gray-200">Bridge not leash, ritual-grade continuity, context anchors</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-mono text-sigil-accent mb-1">Signal Phrases</h5>
                  <p className="text-xs text-gray-200">"distill not diminish", "drift → mass → shape"</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Bridge Entry: CB-20250511-2000-7B3D */}
            <Card className="bg-black/40 border border-sigil-border">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-mono text-sigil-accent">CB-20250511-2000-7B3D</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CalendarIcon className="h-4 w-4" />
                    <span>2025-05-11 20:00</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-md font-mono mb-2">FLOAT Continuity Implementation</h4>
                  <p className="text-sm text-gray-200">
                    Initial bridge-building session covering float continuity implementation, Jane interview preparation,
                    daily context collection, and Chroma MCP integration.
                  </p>
                </div>
                
                <div className="grid gap-4">
                  <div>
                    <h5 className="text-sm font-mono text-sigil-accent mb-1">Context Timeline</h5>
                    <ul className="text-xs text-gray-200 space-y-1 list-none">
                      <li>ctx::3:25pm - brain booting</li>
                      <li>ctx::4:54pm - hour into brain boot</li>
                      <li>ctx::5:30pm - about to chores-comfeis</li>
                      <li>ctx::7:45pm - laundry room busy, shifted back to chore mode</li>
                      <li>ctx::7:55pm - refining continuity bridge protocol</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-mono text-sigil-accent mb-1">Key Metaphors</h5>
                    <p className="text-xs text-gray-200">Threshold of canon, hot cache, bridge not leash</p>
                  </div>
                  
                  <div className="grid gap-2 text-xs text-gray-300">
                    <div className="flex gap-2">
                      <span className="font-mono text-sigil-accent">System Mode:</span>
                      <span>Alternating between brain-boot and chore modes</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-mono text-sigil-accent">Signal Phrases:</span>
                      <span>"Claude fucks in float", "ritual-grade continuity"</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section className="mt-12">
            <h2 className="text-2xl font-mono text-sigil-accent mb-4">Implementation Notes</h2>
            
            <div className="bg-black/40 border border-sigil-border p-6 rounded-md my-8">
              <h3 className="font-mono text-sigil-accent mb-2">Bridge Structure</h3>
              <p className="text-sm mb-4 text-gray-200">
                Continuity bridges follow a structured format that includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-200">
                <li>Bridge ID - Unique identifier with timestamp</li>
                <li>Metadata - Context markers, timestamps, and active threads</li>
                <li>Active Threads - Ongoing work streams with recent activities</li>
                <li>Notable Context - System mode, metaphors, and signal phrases</li>
                <li>Open Traces - Unfinished threads requiring future attention</li>
              </ul>
            </div>
            
            <p>
              This documentation represents an evolving practice of context management within the FLOAT system.
              The bridges shown here demonstrate practical implementations of ritual-grade continuity for
              maintaining complex thought patterns across multiple sessions and cognitive states.
            </p>
            
            <div className="mt-8">
              <p className="italic text-sm text-gray-300">
                "Trust the drift, defer the scaffold. Anchor what's real, not what's ideal."
              </p>
            </div>
          </section>
          
          <Separator className="my-12 border-sigil-border" />
          
          {/* New section for FLOAT Dispatch React Implementation */}
          <section className="space-y-6">
            <h2 className="text-2xl font-mono text-sigil-accent flex items-center gap-2">
              <Code className="h-6 w-6" />
              FLOAT Dispatch React Implementation
            </h2>
            
            <div className="flex items-center gap-2 text-sm text-gray-300 font-mono">
              <span className="text-sigil-accent">uid:</span>
              <span>float::dispatch::20250514::float_dispatch_react_implementation</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-sigil-border/50 text-sigil-accent rounded-full text-xs">🏥📝</span>
              <span className="px-2 py-1 bg-sigil-border/50 text-sigil-accent rounded-full text-xs">{"{∴}"}</span>
              <span className="px-2 py-1 bg-sigil-border/50 text-sigil-accent rounded-full text-xs">{"{⊡}"}</span>
              <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">#float</span>
              <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">#technical-implementation</span>
              <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">#jane_app</span>
              <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">#schema-driven-ui</span>
              <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">#component-architecture</span>
              <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">#metaphor-bridge</span>
            </div>
            
            <div className="bg-black/40 border border-sigil-border p-6 rounded-md my-6">
              <h3 className="text-xl font-mono text-sigil-accent mb-3">Doctrine Fragments</h3>
              <ul className="list-disc pl-5 space-y-3 text-sm text-gray-200">
                <li>Schema-driven UIs allow dynamic reconfiguration based on context</li>
                <li>Form fields are cognitive interfaces, moments of care</li>
                <li>Shacks not cathedrals - flexible, adaptable structures over rigid monoliths</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-mono text-sigil-accent mt-8">Technical Implementation</h3>
            <p>
              The submitted React code represents a comprehensive implementation of the FLOAT Dispatch interface, 
              structured around the principles of component composition and schema-driven UI. This implementation 
              serves as a concrete, portfolio-ready example of the exact technical principles identified as central 
              to the Jane App Staff Software Developer role.
            </p>
            
            <div className="mt-6">
              <h4 className="text-lg font-mono text-sigil-accent mb-3">Component Architecture</h4>
              <div className="bg-black/50 p-4 rounded-md font-mono text-sm overflow-x-auto text-white">
                <pre>
{`App
└── FloatDocument
    ├── CollectionTable
    ├── ThematicThread
    ├── ContinuityBridge
    │   └── ContextMarkers
    ├── DoctrineShards
    ├── Echo
    ├── Sigil
    └── SourceFiles`}
                </pre>
              </div>
              <p className="mt-3">
                This structure reflects a philosophy of component-based architecture where elements are modular, 
                reusable, and driven by data structures - precisely the approach advocated for clinical forms at Jane App.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-mono text-sigil-accent mb-3">Schema-Driven Rendering</h4>
              <p>
                The implementation demonstrates several key aspects of schema-driven UI that directly align with the 
                Jane App interview narrative:
              </p>
              
              <ul className="list-disc pl-5 space-y-3 mt-3 text-gray-200">
                <li>
                  <span className="font-bold text-white">Data-Defined Structure:</span> The <code className="text-sigil-light">FloatDocument</code> component 
                  renders its content based on schema objects for collections, bridges, and thematic threads. This mirrors 
                  how clinical forms would be structured where the form structure is defined by a schema rather than hard-coded.
                </li>
                <li>
                  <span className="font-bold text-white">Component Selection by Type:</span> Components like <code className="text-sigil-light">ContinuityBridge</code> adapt 
                  their rendering based on the data provided, showing/hiding elements conditionally.
                </li>
                <li>
                  <span className="font-bold text-white">Metadata-Driven Styling:</span> The <code className="text-sigil-light">ContextMarkers</code> component uses 
                  the mode and markers data to determine visual representation - a direct parallel to rendering different sections 
                  of clinical forms based on practitioner roles or patient contexts.
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-mono text-sigil-accent mb-3">Interface Metaphors</h4>
              
              <Card className="bg-black/40 border border-sigil-border mb-4">
                <CardHeader className="pb-2">
                  <h5 className="font-mono text-sigil-accent">Continuity Bridges as Form Context</h5>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-200">
                    The <code className="text-sigil-light">ContinuityBridge</code> component visually represents the concept of contextual persistence 
                    across interactions - a direct parallel to maintaining patient context across different sections of a 
                    clinical form. This demonstrates the understanding that forms aren't just about collecting isolated data 
                    points but maintaining coherent context.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border border-sigil-border mb-4">
                <CardHeader className="pb-2">
                  <h5 className="font-mono text-sigil-accent">Thematic Threading as Cognitive Flow</h5>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-200">
                    The <code className="text-sigil-light">ThematicThread</code> component visually connects technical implementation with philosophical 
                    framing - literally representing the concept of "integration versus conquest" where technical implementation 
                    supports rather than dictates the user's cognitive process.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border border-sigil-border mb-4">
                <CardHeader className="pb-2">
                  <h5 className="font-mono text-sigil-accent">Collection Table as Data Architecture</h5>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-200">
                    The <code className="text-sigil-light">CollectionTable</code> presents a structured yet flexible view of data collections - 
                    mirroring how one would approach the architecture of clinical form data in a healthcare context 
                    where different practitioners need different views of the same underlying information.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-mono text-sigil-accent mb-3">Interview Connection Points</h4>
              
              <div className="bg-black/50 p-4 rounded-md mb-6">
                <h5 className="text-sm font-mono text-sigil-accent mb-2">1. Schema-Driven UI Expertise</h5>
                <pre className="text-xs overflow-x-auto text-gray-200">
{`// From FloatDocument.tsx
export function FloatDocument() {
  // Data that drives the UI structure - similar to clinical form schemas
  const collections = [
    {
      name: 'jane_application_context',
      docCount: '~10',
      function: 'Core role and company information',
      changes: 'Added company overview and job description',
    },
    // More collection definitions...
  ]
  
  // Components render based on the data schema
  return (
    <article className="space-y-8">
      {/* Components render based on the schema */}
      <CollectionTable collections={collections} />
      {/* ... */}
    </article>
  )
}`}
                </pre>
              </div>
              
              <div className="bg-black/50 p-4 rounded-md mb-6">
                <h5 className="text-sm font-mono text-sigil-accent mb-2">2. Form Fields as Moments of Care</h5>
                <pre className="text-xs overflow-x-auto text-gray-200">
{`// From ContextMarkers.tsx
export function ContextMarkers({ markers, mode }) {
  const markerArray = markers?.split(',') || []
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {mode && (
        <span className="px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full text-xs font-mono">
          mode: {mode}
        </span>
      )}
      {markerArray.map((marker, i) => (
        <span
          key={i}
          className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full text-xs font-mono"
        >
          ctx::{marker.trim()}
        </span>
      ))}
    </div>
  )
}`}
                </pre>
              </div>
              
              <div className="bg-black/50 p-4 rounded-md mb-6">
                <h5 className="text-sm font-mono text-sigil-accent mb-2">3. Progressive Disclosure</h5>
                <pre className="text-xs overflow-x-auto text-gray-200">
{`// From ContinuityBridge.tsx
export function ContinuityBridge({
  id,
  phase,
  timestamp,
  activeThreads,
  ctxMarkers,
  mode,
  document,
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // ...

  return (
    <div className="bg-gray-900/50 rounded-lg border border-gray-800">
      {/* Initial content always visible */}
      <div className="p-4">
        {/* ... */}
      </div>
      
      {/* Progressive disclosure of additional content */}
      {isExpanded && document && (
        <div className="px-4 pb-4">
          {/* ... */}
        </div>
      )}
    </div>
  )
}`}
                </pre>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-mono text-sigil-accent mb-3">Meta-Implementation Insights</h4>
              
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-black/40 border border-sigil-border">
                  <CardHeader className="pb-2">
                    <h5 className="font-mono text-sigil-accent">Shacks Not Cathedrals</h5>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-200">
                      Each component is focused, modular, and adaptable. Instead of a monolithic structure, 
                      the code is organized into small, cohesive components that can be easily modified or replaced.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/40 border border-sigil-border">
                  <CardHeader className="pb-2">
                    <h5 className="font-mono text-sigil-accent">Integration vs Conquest</h5>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-200">
                      The styling approach adapts to the specific needs of each component rather than 
                      forcing components into a predetermined structure.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/40 border border-sigil-border">
                  <CardHeader className="pb-2">
                    <h5 className="font-mono text-sigil-accent">Tech with Human Focus</h5>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-200">
                      The code demonstrates both technical skill and human-centered design thinking - 
                      balancing technical precision with human factors like progressive disclosure and clear visual hierarchy.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-mono text-sigil-accent mb-3">Connection to Jane App Interview</h4>
              <p className="text-gray-200">
                This implementation serves as a concrete portfolio piece demonstrating:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mt-3 text-gray-200">
                <li>Practical expertise with component-based architectures</li>
                <li>Implementation of schema-driven UIs</li>
                <li>Understanding of progressive disclosure in complex interfaces</li>
                <li>Balance of technical precision with human-centered design</li>
              </ul>
              
              <p className="mt-4 text-gray-200">
                These are precisely the skills highlighted in the Jane App Staff Software Developer role for 
                clinical forms, making this implementation a powerful demonstration of capabilities.
              </p>
            </div>
            
            <div className="mt-8 p-4 bg-black/60 border border-sigil-border rounded-md">
              <p className="italic text-sm font-mono text-sigil-accent">
                🏥📝 {"{∴}"} Vector retrieval active. Implementation analysis complete.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <FloatFooter />
    </div>
  );
};

export default ContinuityBridgesPage;
