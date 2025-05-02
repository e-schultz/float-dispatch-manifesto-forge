
import React from "react";
import { Grid3X3, BookOpen, ArrowRight } from 'lucide-react';
import Link from "next/link";
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
                href="/imprints" 
                className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                <span>Browse Imprints</span>
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 border border-white px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <span>About FLOAT.dispatch</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-techcraft-DEFAULT border border-techcraft-border rounded-md flex items-center justify-center">
              <span className="text-techcraft-accent font-mono text-xl">TECHCRAFT</span>
            </div>
            <div className="aspect-square bg-black border border-sigil-border rounded-md flex items-center justify-center">
              <span className="text-sigil-accent font-mono text-xl">SIGIL STUDIES</span>
            </div>
            <div className="aspect-square bg-black border border-activate-border rounded-md flex items-center justify-center">
              <span className="text-activate-accent font-mono text-xl">ACTIVATE</span>
            </div>
            <div className="aspect-square bg-black border border-interface-border rounded-md flex items-center justify-center">
              <span className="text-interface-accent font-mono text-xl">INTERFACE POETICS</span>
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
              href="/dispatches" 
              className="inline-flex items-center gap-1 text-sm hover:underline"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DispatchCard
              title="Oracle Crosstalk: Slutprint Leaks"
              description="Exploring the resonance patterns that emerge when prompting across multiple AI models. What echoes spill from cross-model prompting?"
              date="2025-05-02"
              imprint="sigil-studies"
              slug="oracle-crosstalk-slutprint-leaks"
              tags={["ai", "prompts", "ritual"]}
              size="42kb"
            />
            
            <DispatchCard
              title="Reactive Patterns: Beyond the Framework"
              description="We become so immersed in framework-thinking that we forget to see the underlying patterns. React isn't special because it's React."
              date="2025-05-02"
              imprint="techcraft"
              slug="reactive-patterns-beyond-framework"
              tags={["development", "architecture", "patterns"]}
              size="38kb"
            />
            
            <DispatchCard
              title="FLOAT vs AI Gaslighting"
              description="A deep exploration of how OpenAI's 'management cosplay' update violated core principles of trust and authentic interaction."
              date="2025-05-01"
              imprint="activate"
              slug="float-vs-ai-gaslighting"
              tags={["ai-ethics", "trust", "system-integrity"]}
              size="25kb"
            />
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
          
          <div className="grid gap-8 md:grid-cols-2">
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
