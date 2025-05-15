
import React from "react";
import FloatNavBar from "../components/FloatNavBar";
import FloatFooter from "../components/FloatFooter";
import Hero from "../components/home/Hero";
import FeaturedDispatches from "../components/home/FeaturedDispatches";
import TemporalAwareness from "../components/home/TemporalAwareness";
import Imprints from "../components/home/Imprints";
import RitualReflections from "../components/home/RitualReflections";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <Hero />
      <FeaturedDispatches />
      <TemporalAwareness />
      <Imprints />
      <RitualReflections />
      
      <FloatFooter />
    </div>
  );
};

export default Index;
