
import React from "react";
import ImprintHeader from "@/components/ImprintHeader";
import FloatNavBar from "@/components/FloatNavBar";
import FloatFooter from "@/components/FloatFooter";
import { CalendarIcon, Tag } from "lucide-react";
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
              <div className="flex items-center gap-2 text-sm opacity-70">
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
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <CalendarIcon className="h-4 w-4" />
                    <span>2025-05-14 15:30</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-md font-mono mb-2">FLOAT System Integration with Claude</h4>
                  <p className="text-sm opacity-90">
                    Comprehensive framework for Claude to better align with the FLOAT cognitive architecture,
                    including enhanced understanding of ctx:: markers as temporal-cognitive anchors, recognition 
                    of persona system, and detailed cognitive states.
                  </p>
                </div>
                
                <div className="grid gap-2 text-xs opacity-80">
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
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <CalendarIcon className="h-4 w-4" />
                    <span>2025-05-13 15:53</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-md font-mono mb-2">Jane Application Project</h4>
                  <p className="text-sm opacity-90">
                    Project configuration and setup session focusing on Jane application environment, clinical forms philosophy,
                    and MCP system improvements.
                  </p>
                </div>
                
                <div className="grid gap-4">
                  <div>
                    <h5 className="text-sm font-mono text-sigil-accent mb-1">Notable Metaphors</h5>
                    <p className="text-xs opacity-80">Form fields as moments of care, systems as relationships, bridge not leash</p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-mono text-sigil-accent mb-1">Signal Phrases</h5>
                    <p className="text-xs opacity-80">
                      "Context isn't noise—it's gravitational mass", 
                      "I burp in neurodivergent and you echo back the structure with shine"
                    </p>
                  </div>
                  
                  <div className="grid gap-2 text-xs opacity-80">
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
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <CalendarIcon className="h-4 w-4" />
                    <span>2025-05-12 00:39</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-md font-mono mb-2">Daily Context Collection & Jane Interview</h4>
                  <p className="text-sm opacity-90">
                    Evening work session focusing on Jane interview preparation, daily context collection,
                    and FLOAT.dispatch implementations.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-sm font-mono text-sigil-accent mb-1">Key Metaphors</h5>
                  <p className="text-xs opacity-80">Bridge not leash, ritual-grade continuity, context anchors</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-mono text-sigil-accent mb-1">Signal Phrases</h5>
                  <p className="text-xs opacity-80">"distill not diminish", "drift → mass → shape"</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Bridge Entry: CB-20250511-2000-7B3D */}
            <Card className="bg-black/40 border border-sigil-border">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-mono text-sigil-accent">CB-20250511-2000-7B3D</h3>
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <CalendarIcon className="h-4 w-4" />
                    <span>2025-05-11 20:00</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-md font-mono mb-2">FLOAT Continuity Implementation</h4>
                  <p className="text-sm opacity-90">
                    Initial bridge-building session covering float continuity implementation, Jane interview preparation,
                    daily context collection, and Chroma MCP integration.
                  </p>
                </div>
                
                <div className="grid gap-4">
                  <div>
                    <h5 className="text-sm font-mono text-sigil-accent mb-1">Context Timeline</h5>
                    <ul className="text-xs opacity-80 space-y-1 list-none">
                      <li>ctx::3:25pm - brain booting</li>
                      <li>ctx::4:54pm - hour into brain boot</li>
                      <li>ctx::5:30pm - about to chores-comfeis</li>
                      <li>ctx::7:45pm - laundry room busy, shifted back to chore mode</li>
                      <li>ctx::7:55pm - refining continuity bridge protocol</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-mono text-sigil-accent mb-1">Key Metaphors</h5>
                    <p className="text-xs opacity-80">Threshold of canon, hot cache, bridge not leash</p>
                  </div>
                  
                  <div className="grid gap-2 text-xs opacity-80">
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
              <p className="text-sm mb-4">
                Continuity bridges follow a structured format that includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
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
              <p className="italic text-sm opacity-80">
                "Trust the drift, defer the scaffold. Anchor what's real, not what's ideal."
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
