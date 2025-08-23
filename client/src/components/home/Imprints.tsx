
import React from "react";
import { Grid3X3 } from 'lucide-react';
import { useImprints } from '@/hooks/useData';

const Imprints = () => {
  const imprints = useImprints();
  
  return (
    <section className="py-16 px-4 bg-gray-950">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Grid3X3 className="h-5 w-5" />
          <h2 className="text-2xl font-bold font-mono">Imprints</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {imprints.map((imprint) => (
            <div 
              key={imprint.id}
              className={`${imprint.colors.border} rounded-md p-6 ${imprint.colors.bg}`}
            >
              <h3 className={`text-xl font-bold ${imprint.colors.accent} mb-2 font-mono`}>
                {imprint.displayName}
              </h3>
              <p className="text-sm opacity-90 mb-4">
                {imprint.description}
              </p>
              <div className="text-xs font-mono opacity-70">
                {imprint.tags.join(' • ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Imprints;
