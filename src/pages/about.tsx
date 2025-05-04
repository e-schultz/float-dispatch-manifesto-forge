
import React from "react";
import FloatNavBar from "../components/FloatNavBar";
import FloatFooter from "../components/FloatFooter";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <header className="w-full py-12 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-mono mb-4">ABOUT FLOAT.DISPATCH</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            A publishing house exploring the theme of 'chaos made coherent' through curated collections.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <p className="text-xl">
            FLOAT.DISPATCH is a publishing house and framework for exploring the theme of 'chaos made coherent' through curated collections of works across technology, philosophy, and art.
          </p>
          
          <h2 className="text-2xl font-mono mt-8 mb-4">Our Approach</h2>
          
          <p>
            We believe in creating a neuroqueer ritual publishing system that preserves sacred incoherence while providing accessible interfaces. Our content resists premature coherence while creating meaningful connections across disciplines.
          </p>
          
          <p>
            Content is organized into distinct "imprints" that function as thematic containers, each with its own visual language, editorial focus, and community of practice.
          </p>
          
          <h2 className="text-2xl font-mono mt-8 mb-4">Core Values</h2>
          
          <ul>
            <li>Resistance to premature containerization</li>
            <li>Sacred incoherence as methodology</li>
            <li>Cross-context resonance</li>
            <li>Necessary friction as feature</li>
            <li>Contact before container</li>
          </ul>
          
          <p>
            This is a placeholder page that will be expanded with more information about FLOAT.DISPATCH, its origins, and its mission.
          </p>
        </div>
      </main>
      
      <FloatFooter />
    </div>
  );
};

export default AboutPage;
