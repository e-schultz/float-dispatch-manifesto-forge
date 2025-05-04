
import React from "react";
import FloatNavBar from "../components/FloatNavBar";
import FloatFooter from "../components/FloatFooter";
import DispatchCard from "../components/DispatchCard";
import { Grid3X3 } from 'lucide-react';

const DispatchesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <header className="w-full py-12 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-mono mb-4">ALL DISPATCHES</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Browse the complete collection of FLOAT.DISPATCH articles across all imprints.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-8">
          <Grid3X3 className="h-5 w-5" />
          <h2 className="text-2xl font-bold font-mono">Latest Dispatches</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </main>
      
      <FloatFooter />
    </div>
  );
};

export default DispatchesPage;
