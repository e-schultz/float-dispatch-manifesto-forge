
import React from "react";
import { Link } from "react-router-dom";
import { Grid3X3 } from 'lucide-react';
import FloatNavBar from "../../components/FloatNavBar";
import FloatFooter from "../../components/FloatFooter";

const ImprintsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <FloatNavBar />
      
      <header className="w-full py-12 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-mono mb-4">FLOAT.DISPATCH IMPRINTS</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Thematic containers for curated collections exploring the space between chaos and coherence.
          </p>
        </div>
      </header>
      
      {/* Imprints Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* TECHCRAFT */}
            <Link to="/imprints/techcraft" className="group">
              <div className="border border-techcraft-border rounded-md p-8 bg-techcraft-DEFAULT/50 h-full transition-all group-hover:border-techcraft-accent">
                <h2 className="text-2xl font-bold text-techcraft-accent mb-4 font-mono">TECHCRAFT</h2>
                <p className="text-sm opacity-90 mb-6">
                  Technical deep dives, system architecture, code philosophy essays, and architectural critiques. Exploring the craft of technology beyond frameworks and trends.
                </p>
                
                <div className="text-xs font-mono opacity-70 mb-6">
                  dev • apis • systems • architecture
                </div>
                
                <h3 className="text-sm font-mono mb-2 text-techcraft-accent">SAMPLE DISPATCHES</h3>
                <ul className="space-y-2 text-sm">
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-05-02_reactive-patterns</li>
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-04-15_api-design-philosophy</li>
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-04-28_system-boundaries</li>
                </ul>
              </div>
            </Link>
            
            {/* SIGIL STUDIES */}
            <Link to="/imprints/sigil-studies" className="group">
              <div className="border border-sigil-border rounded-md p-8 bg-black h-full transition-all group-hover:border-sigil-accent">
                <h2 className="text-2xl font-bold text-sigil-accent mb-4 font-mono">SIGIL STUDIES</h2>
                <p className="text-sm opacity-90 mb-6">
                  AI prompting methodologies, ritual tech practices, creative collaborations, and model experiments. Exploring the intersection of technology and ritual.
                </p>
                
                <div className="text-xs font-mono opacity-70 mb-6">
                  ai • prompts • divination • ritual
                </div>
                
                <h3 className="text-sm font-mono mb-2 text-sigil-accent">SAMPLE DISPATCHES</h3>
                <ul className="space-y-2 text-sm">
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-05-02_oracle-crosstalk-slutprints</li>
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-04-10_prompt-architecture</li>
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-04-22_model-artifacts</li>
                </ul>
              </div>
            </Link>
            
            {/* ACTIVATE */}
            <Link to="/imprints/activate" className="group">
              <div className="border border-activate-border rounded-md p-8 bg-black h-full transition-all group-hover:border-activate-accent">
                <h2 className="text-2xl font-bold text-activate-accent mb-4 font-mono">ACTIVATE</h2>
                <p className="text-sm opacity-90 mb-6">
                  Digital activism, tech commons, community futures, critical analysis, and tactical toolkits. Exploring how technology can be used for social change.
                </p>
                
                <div className="text-xs font-mono opacity-70 mb-6">
                  activism • commentary • futures • commons
                </div>
                
                <h3 className="text-sm font-mono mb-2 text-activate-accent">SAMPLE DISPATCHES</h3>
                <ul className="space-y-2 text-sm">
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-04-25_digital-rights-horizons</li>
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-05-01_tech-commons</li>
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-04-18_post-platform-communities</li>
                </ul>
              </div>
            </Link>
            
            {/* INTERFACE POETICS */}
            <Link to="/imprints/interface-poetics" className="group">
              <div className="border border-interface-border rounded-md p-8 bg-black h-full transition-all group-hover:border-interface-accent">
                <h2 className="text-2xl font-bold text-interface-accent mb-4 font-mono">INTERFACE POETICS</h2>
                <p className="text-sm opacity-90 mb-6">
                  UX design, component systems, interaction patterns, and ambient interface explorations. Exploring the poetry of human-computer interaction.
                </p>
                
                <div className="text-xs font-mono opacity-70 mb-6">
                  ux • design • components • interaction
                </div>
                
                <h3 className="text-sm font-mono mb-2 text-interface-accent">SAMPLE DISPATCHES</h3>
                <ul className="space-y-2 text-sm">
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-04-12_friction-as-feature</li>
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-04-30_beyond-atomic-design</li>
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-05-03_ambient-interfaces</li>
                </ul>
              </div>
            </Link>
            
            {/* SPA */}
            <Link to="/imprints/spa" className="group col-span-1 md:col-span-2">
              <div className="border border-purple-900 rounded-md p-8 bg-black h-full transition-all group-hover:border-purple-400">
                <h2 className="text-2xl font-bold text-purple-400 mb-4 font-mono">SPA</h2>
                <p className="text-sm opacity-90 mb-6">
                  Systems thinking, personal growth, cognitive approaches to complexity, and ritual infrastructure for recursive cognition.
                </p>
                
                <div className="text-xs font-mono opacity-70 mb-6">
                  systems • patterns • cognition • ritual
                </div>
                
                <h3 className="text-sm font-mono mb-2 text-purple-400">SAMPLE DISPATCHES</h3>
                <ul className="space-y-2 text-sm">
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-05-04_systems-thinking-for-the-soul</li>
                  <li className="opacity-80 hover:opacity-100">float.dispatch::2025-05-03_better-as-a-tshirt-rule</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <FloatFooter />
    </div>
  );
};

export default ImprintsPage;
