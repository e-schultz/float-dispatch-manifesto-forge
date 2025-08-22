
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from 'lucide-react';
import { useSiteData, useImprints } from '@/hooks/useData';

const Hero = () => {
  const siteData = useSiteData();
  const imprints = useImprints();
  
  return (
    <section className="relative w-full py-20 border-b border-border">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="font-bold font-mono mb-4">
            {siteData.hero.title}
            <span className="text-sigil-accent">{siteData.hero.titleAccent}</span>
          </h1>
          <p className="text-xl opacity-90 mb-6">
            {siteData.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to={siteData.hero.primaryCTA.link} 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>{siteData.hero.primaryCTA.text}</span>
            </Link>
            <Link 
              to={siteData.hero.secondaryCTA.link} 
              className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-md hover:bg-muted/10 transition-colors"
            >
              <span>{siteData.hero.secondaryCTA.text}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {imprints.slice(0, 5).map(imprint => (
            <div 
              key={imprint.id}
              className={`aspect-square ${imprint.id === 'techcraft' ? 'bg-techcraft-DEFAULT' : 'bg-black'} ${imprint.colors.border} rounded-md flex items-center justify-center`}
            >
              <span className={`${imprint.colors.accent} font-mono text-xl`}>
                {imprint.displayName.split(' ')[0].toUpperCase().slice(0, 9)}
              </span>
            </div>
          ))}
          <div className="aspect-square bg-background border border-border rounded-md flex items-center justify-center">
            <span className="text-foreground font-mono text-xl opacity-50">FLOAT</span>
          </div>
        </div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
