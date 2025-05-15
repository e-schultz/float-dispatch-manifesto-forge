
import React from "react";
import { Grid3X3 } from 'lucide-react';

const Imprints = () => {
  return (
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
  );
};

export default Imprints;
