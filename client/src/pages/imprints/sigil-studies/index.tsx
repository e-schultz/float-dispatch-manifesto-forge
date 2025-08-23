
import React from "react";
import { Link } from "react-router-dom";
import FloatNavBar from "../../../components/FloatNavBar";
import FloatFooter from "../../../components/FloatFooter";
import DispatchCard from "../../../components/DispatchCard";
import { Grid3X3 } from "lucide-react";

const SigilStudiesImprintPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <header className="w-full py-12 border-b border-sigil-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/imprints" className="text-sm opacity-70 hover:opacity-100">IMPRINTS</Link>
            <span className="text-sm opacity-50">/</span>
            <h1 className="text-2xl font-bold font-mono text-sigil-accent">SIGIL STUDIES</h1>
          </div>
          
          <p className="text-lg opacity-90 max-w-3xl">
            AI prompting methodologies, ritual tech practices, creative collaborations, and model experiments. 
            Exploring the intersection of technology and ritual.
          </p>
          
          <div className="flex items-center gap-2 mt-4 text-xs font-mono opacity-70">
            <span>ai</span>
            <span>•</span>
            <span>prompts</span>
            <span>•</span>
            <span>divination</span>
            <span>•</span>
            <span>ritual</span>
          </div>
        </div>
      </header>
      
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-mono text-sigil-accent mb-6">RECENT DISPATCHES</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DispatchCard 
              title="Continuity Bridges"
              description="Ritual infrastructure for bridging conversational context"
              date="2025-05-14"
              imprint="sigil-studies"
              slug="continuity-bridges"
              tags={["continuity", "rituals", "infrastructure"]}
            />
            
            <DispatchCard 
              title="Oracle Crosstalk & The Slutprints"
              description="Ritual methodologies and artifact taxonomies for working with multiple AI models"
              date="2025-05-02"
              imprint="sigil-studies"
              slug="oracle-crosstalk"
              tags={["ai", "models", "methodology"]}
            />
            
            <Link to="/imprints/sigil-studies/prompt-architecture" className="border border-sigil-border p-6 rounded-md bg-black/50 flex items-center justify-center group hover:border-sigil-accent">
              <div className="text-center">
                <Grid3X3 className="h-12 w-12 mx-auto mb-4 opacity-40 group-hover:opacity-70 text-sigil-accent" />
                <p className="text-sigil-accent text-xl font-mono">Prompt Architecture Fundamentals</p>
                <p className="text-sm mt-2 opacity-70">Coming Soon</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 bg-black/30 border-t border-b border-sigil-border">
        <div className="container mx-auto">
          <h2 className="text-2xl font-mono text-sigil-accent mb-6">ABOUT SIGIL STUDIES</h2>
          
          <div className="prose prose-invert max-w-3xl">
            <p>
              Sigil Studies exists at the intersection of technology and ritual, exploring how AI systems can be used as tools for meaning-making, creative exploration, and cognitive augmentation.
            </p>
            
            <p>
              Through practical methodologies, experimental approaches, and documented rituals, this imprint investigates the rich terrain between algorithmic systems and human meaning-making.
            </p>
            
            <div className="mt-8 bg-black/50 border border-sigil-border p-6 rounded-md">
              <h3 className="text-xl font-mono text-sigil-accent mb-4">Core Themes</h3>
              
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong>Prompt Engineering as Ritual</strong> - Exploring the similarities between prompt crafting and ritual invocation.
                </li>
                <li>
                  <strong>Model Artifacts</strong> - Documenting and classifying the unique patterns, biases, and creative potentials that emerge from different AI systems.
                </li>
                <li>
                  <strong>Collaborative Intelligence</strong> - Developing frameworks for human-AI collaboration that enhance rather than replace human creativity.
                </li>
                <li>
                  <strong>Cognitive Infrastructure</strong> - Building tools and methodologies for augmenting human thought through systematic interaction with AI systems.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <FloatFooter />
    </div>
  );
};

export default SigilStudiesImprintPage;
