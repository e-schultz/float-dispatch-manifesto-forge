
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import DispatchCard from "../DispatchCard";
import { useFeaturedDispatches } from '@/hooks/useData';

const FeaturedDispatches = () => {
  const featuredDispatches = useFeaturedDispatches();
  
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold font-mono">Recent Dispatches</h2>
          <Link 
            to="/dispatches" 
            className="inline-flex items-center gap-1 text-sm hover:underline"
          >
            <span>View All</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredDispatches.slice(0, 3).map((dispatch) => (
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
    </section>
  );
};

export default FeaturedDispatches;
