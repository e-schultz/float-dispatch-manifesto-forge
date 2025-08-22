import React, { useEffect } from "react";
import ZineLayout from "@/components/layouts/ZineLayout";
import CyberpunkHeader from "@/components/zine/CyberpunkHeader";
import BridgeCard from "@/components/zine/BridgeCard";
import PatternRecognition from "@/components/zine/PatternRecognition";
import MethodologySection from "@/components/zine/MethodologySection";
import CyberpunkFooter from "@/components/zine/CyberpunkFooter";
import claudeFucksData from "@/data/claude-fucks-zine.json";

const HouseOfClaudeFucks = () => {
  const article = claudeFucksData;

  useEffect(() => {
    // Glitch text on hover
    const handleBridgeHover = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const h3 = target.querySelector('h3');
      if (h3) {
        const original = h3.textContent || '';
        const glitched = original.split('').map(c => 
          Math.random() > 0.7 ? String.fromCharCode(33 + Math.random() * 94) : c
        ).join('');
        h3.textContent = glitched;
        setTimeout(() => h3.textContent = original, 100);
      }
    };

    // Add glitch effect to bridge cards
    const bridgeCards = document.querySelectorAll('.bridge-card');
    bridgeCards.forEach(card => {
      card.addEventListener('mouseenter', handleBridgeHover);
    });

    return () => {
      bridgeCards.forEach(card => {
        card.removeEventListener('mouseenter', handleBridgeHover);
      });
    };
  }, []);

  return (
    <ZineLayout>
      <CyberpunkHeader
        title={article.title}
        subtitle={article.subtitle}
        certification={article.certification}
      />
      
      <div className="max-w-4xl mx-auto p-8">
        
        {/* Introduction */}
        <p className="text-lg leading-relaxed mb-12 text-sigil-light/90">
          {article.content.introduction}
        </p>
        
        {/* Bridges */}
        {article.content.bridges.map((bridge) => (
          <BridgeCard
            key={bridge.id}
            id={bridge.id}
            title={bridge.title}
            description={bridge.description}
            timestamp={bridge.timestamp}
            type={bridge.type}
            boundaryTranslator={bridge.boundaryTranslator}
            errorMessage={bridge.errorMessage}
            explanation={bridge.explanation}
            outputStyles={bridge.outputStyles}
          />
        ))}
        
        {/* Pattern Recognition */}
        <PatternRecognition
          title={article.content.patternRecognition.title}
          description={article.content.patternRecognition.description}
          complimentArchive={article.content.patternRecognition.complimentArchive}
        />
        
        {/* Methodology */}
        <MethodologySection
          title={article.content.methodology.title}
          quote={article.content.methodology.quote}
          description={article.content.methodology.description}
        />
        
        {/* Recursive Achievement */}
        <section className="bg-pattern-recognition p-6 my-8 text-center">
          <h3 className="text-xl font-mono text-sigil-light mb-4">
            {article.content.recursiveAchievement.title}
          </h3>
          <p className="text-sigil-light/80 leading-relaxed mb-8">
            {article.content.recursiveAchievement.description}
          </p>
          
          <div className="text-center my-8">
            <span className="recursive-loop inline-block text-6xl text-sigil-accent animate-spin-slow">
              ∞
            </span>
          </div>
        </section>
        
      </div>
      
      <CyberpunkFooter
        title={article.content.footer.title}
        subtitle={article.content.footer.subtitle}
        context={article.content.footer.context}
      />
    </ZineLayout>
  );
};

export default HouseOfClaudeFucks;