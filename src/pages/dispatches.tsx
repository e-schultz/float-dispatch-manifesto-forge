
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import DispatchCard from "../components/DispatchCard";
import { Grid3X3 } from 'lucide-react';
import { useDispatches } from '@/hooks/useData';

const DispatchesPage = () => {
  const dispatches = useDispatches();
  
  return (
    <MainLayout>
      <header className="w-full py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-mono mb-4">ALL DISPATCHES</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Browse the complete collection of FLOAT.DISPATCH articles across all imprints.
          </p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-8">
          <Grid3X3 className="h-5 w-5" />
          <h2 className="text-2xl font-bold font-mono">Latest Dispatches</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dispatches.map((dispatch) => (
            <DispatchCard
              key={dispatch.id}
              title={dispatch.title}
              description={dispatch.description}
              date={dispatch.date}
              imprint={dispatch.imprint as any}
              slug={dispatch.slug}
              tags={dispatch.tags}
              size={dispatch.size}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default DispatchesPage;
