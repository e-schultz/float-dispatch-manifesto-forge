
import React from "react";
import { Link } from "react-router-dom";
import { Grid3X3, BookOpen, ArrowRight } from 'lucide-react';
import DispatchCard from "../components/DispatchCard";
import FloatNavBar from "../components/FloatNavBar";
import FloatFooter from "../components/FloatFooter";
import SigilToss from "../components/SigilToss";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 border-b border-gray-800">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-4">
              FLOAT.
              <span className="text-sigil-accent">DISPATCH</span>
            </h1>
            <p className="text-xl opacity-90 mb-6">
              A publishing house exploring the theme of 'chaos made coherent' through curated collections of works across technology, philosophy, and art.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/imprints" 
                className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                <span>Browse Imprints</span>
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 border border-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <span>About FLOAT.dispatch</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-techcraft-DEFAULT border border-techcraft-border rounded-md flex items-center justify-center">
              <span className="text-techcraft-accent font-mono text-xl">TECH</span>
            </div>
            <div className="aspect-square bg-black border border-sigil-border rounded-md flex items-center justify-center">
              <span className="text-sigil-accent font-mono text-xl">SIGIL</span>
            </div>
            <div className="aspect-square bg-black border border-purple-900 rounded-md flex items-center justify-center">
              <span className="text-purple-400 font-mono text-xl">SPA</span>
            </div>
            <div className="aspect-square bg-black border border-activate-border rounded-md flex items-center justify-center">
              <span className="text-activate-accent font-mono text-xl">ACTIVATE</span>
            </div>
            <div className="aspect-square bg-black border border-interface-border rounded-md flex items-center justify-center">
              <span className="text-interface-accent font-mono text-xl">INTERFACE</span>
            </div>
            <div className="aspect-square bg-black border border-gray-800 rounded-md flex items-center justify-center">
              <span className="text-white font-mono text-xl opacity-50">FLOAT</span>
            </div>
          </div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      </section>
      
      {/* Featured Dispatches */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-mono">Recent Dispatches</h2>
            <Link 
              to="/dispatches" 
              className="inline-flex items-center gap-1 text-sm hover:underline"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DispatchCard
              title="RFC - Temporal Awareness Instructions"
              description="Framework for enhancing FLOAT's prompt instructions to handle temporal queries by leveraging structured daily summaries in the float_summary_docs collection."
              date="2025-05-15"
              imprint="activate"
              slug="temporal-awareness-rfc"
              tags={["rfc", "temporal-queries", "prompt-instructions"]}
              size="32kb"
            />
            
            <DispatchCard
              title="Systems Thinking for the Soul"
              description="How to Build Content (and Life) That Doesn't Collapse. A ritual shack × systems bard × recursive case study."
              date="2025-05-04"
              imprint="spa"
              slug="systems-thinking"
              tags={["systems", "patterns", "ritual"]}
              size="45kb"
            />
            
            <DispatchCard
              title="Better as a T-Shirt Rule"
              description="Symbolic compression for decision-making. How to distill complex ideas into actionable, memorable forms."
              date="2025-05-03"
              imprint="spa"
              slug="tshirt-rule"
              tags={["rituals", "systems", "knowledge"]}
              size="38kb"
            />
          </div>
        </div>
      </section>
      
      {/* New RFC Temporal Awareness Section */}
      <section className="py-16 px-4 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-bold font-mono">RFC - Temporal Awareness Instructions</h2>
            <span className="px-2 py-0.5 bg-amber-900/30 text-amber-300 rounded text-xs">DRAFT</span>
          </div>
          
          <div className="border border-gray-800 rounded-lg p-6 bg-black/50">
            <div className="flex flex-wrap gap-2 mb-4 text-xs font-mono">
              <span className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full">uid: temporal_awareness_rfc_20250515</span>
              <span className="px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full">timestamp: 2025-05-15-04:15</span>
              <span className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full">ctx: temporal_query_enhancement</span>
              <span className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full">persona: Sysop</span>
            </div>
            
            <p className="text-lg mb-6">
              Framework for enhancing FLOAT's prompt instructions to handle temporal queries by leveraging structured daily summaries in the float_summary_docs collection.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">Problem Statement</h3>
                <p className="opacity-90">
                  Current FLOAT prompts lack explicit instructions for handling time-based queries, resulting in inefficient searching across collections when users ask about recent activities, achievements, or created artifacts.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Proposed Solution</h3>
                <p className="opacity-90">
                  Temporal Awareness Instructions that prioritize checking float_summary_docs collection first for daily summaries, using metadata tags to narrow results, and extracting relevant information based on query intent.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Implementation Example</h3>
                <p className="opacity-90">
                  Step-by-step process for handling a query like 'What did I do yesterday with FLOAT?' by calculating the date, finding the appropriate summary, and extracting project-specific information.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-xs font-mono">
                <div className="px-3 py-1 bg-gray-900 rounded-md">
                  <span className="opacity-70">Review by</span>
                  <span className="block text-amber-400">2025-05-22</span>
                </div>
                
                <div className="px-3 py-1 bg-gray-900 rounded-md">
                  <span className="opacity-70">Priority</span>
                  <span className="block text-yellow-400">Medium</span>
                </div>
                
                <div className="px-3 py-1 bg-gray-900 rounded-md">
                  <span className="opacity-70">Status</span>
                  <span className="block text-blue-400">Needs Review</span>
                </div>
                
                <div className="px-3 py-1 bg-gray-900 rounded-md">
                  <span className="opacity-70">Related Bridge</span>
                  <span className="block text-purple-400">CB-20250515-0230-S8W7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Imprints Section */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Grid3X3 className="h-5 w-5" />
            <h2 className="text-2xl font-bold font-mono">Imprints</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-techcraft-border rounded-md p-6 bg-techcraft-DEFAULT/50">
              <h3 className="text-xl font-bold text-techcraft-accent mb-2 font-mono">TECHCRAFT</h3>
              <p className="text-sm opacity-90 mb-4">
                Technical deep dives, system architecture, code philosophy essays, and architectural critiques.
              </p>
              <div className="text-xs font-mono opacity-70">
                dev • apis • systems • architecture
              </div>
            </div>
            
            <div className="border border-sigil-border rounded-md p-6 bg-black">
              <h3 className="text-xl font-bold text-sigil-accent mb-2 font-mono">SIGIL STUDIES</h3>
              <p className="text-sm opacity-90 mb-4">
                AI prompting methodologies, ritual tech practices, creative collaborations, and model experiments.
              </p>
              <div className="text-xs font-mono opacity-70">
                ai • prompts • divination • ritual
              </div>
            </div>
            
            <div className="border border-purple-900 rounded-md p-6 bg-black">
              <h3 className="text-xl font-bold text-purple-400 mb-2 font-mono">SPA</h3>
              <p className="text-sm opacity-90 mb-4">
                Systems thinking, personal growth, cognitive approaches to complexity, and ritual infrastructure.
              </p>
              <div className="text-xs font-mono opacity-70">
                systems • patterns • cognition • ritual
              </div>
            </div>
            
            <div className="border border-activate-border rounded-md p-6 bg-black">
              <h3 className="text-xl font-bold text-activate-accent mb-2 font-mono">ACTIVATE</h3>
              <p className="text-sm opacity-90 mb-4">
                Digital activism, tech commons, community futures, critical analysis, and tactical toolkits.
              </p>
              <div className="text-xs font-mono opacity-70">
                activism • commentary • futures • commons
              </div>
            </div>
            
            <div className="border border-interface-border rounded-md p-6 bg-black">
              <h3 className="text-xl font-bold text-interface-accent mb-2 font-mono">INTERFACE POETICS</h3>
              <p className="text-sm opacity-90 mb-4">
                UX design, component systems, interaction patterns, and ambient interface explorations.
              </p>
              <div className="text-xs font-mono opacity-70">
                ux • design • components • interaction
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ritual Section */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold font-mono mb-6">Ritual Reflections</h2>
            <p className="text-lg opacity-90 mb-8">
              Pause. Consider. Respond. The ritual sigil {"{∴}"} invites a moment of reflection at key points in the text.
            </p>
            <div className="flex justify-center gap-6">
              <div className="p-6 border border-sigil-border rounded-md">
                <p className="mb-4">
                  "Trust is not about control but about resilience in the face of necessary vulnerability." 
                  <SigilToss 
                    prompt="How do you balance trust and vulnerability in your own systems?"
                    theme="oracle-crosstalk"
                  />
                </p>
                <div className="text-xs opacity-70">
                  from FLOAT vs AI Gaslighting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <FloatFooter />
    </div>
  );
};

export default Index;
