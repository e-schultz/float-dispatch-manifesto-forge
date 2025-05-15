
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
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
  );
};

export default Hero;
