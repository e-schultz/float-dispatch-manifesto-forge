
import React from "react";
import FloatNavBar from "../components/FloatNavBar";
import FloatFooter from "../components/FloatFooter";
import Hero from "../components/home/Hero";
import FeaturedDispatches from "../components/home/FeaturedDispatches";
import TemporalAwareness from "../components/home/TemporalAwareness";
import Imprints from "../components/home/Imprints";
import RitualReflections from "../components/home/RitualReflections";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <Hero />
      <FeaturedDispatches />
      <TemporalAwareness />
      <Imprints />
      <RitualReflections />
      
      <section className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold font-mono mb-4">Project Changelog</h2>
          <p className="max-w-2xl mx-auto mb-6 opacity-80">
            Track the evolution of FLOAT with our project changelog. Document changes, improvements, and milestones.
          </p>
          <Button asChild variant="outline" className="border-sigil-border">
            <Link to="/changelog">View Changelog</Link>
          </Button>
        </div>
      </section>
      
      <FloatFooter />
    </div>
  );
};

export default Index;
