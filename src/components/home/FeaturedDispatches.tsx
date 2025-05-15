
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import DispatchCard from "../DispatchCard";

const FeaturedDispatches = () => {
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
          <DispatchCard
            title="RFC - Temporal Awareness Instructions"
            description="Framework for enhancing FLOAT's prompt instructions to handle temporal queries by leveraging structured daily summaries in the float_summary_docs collection."
            date="2025-05-15"
            imprint="activate"
            slug="temporal-awareness-rfc"
            tags={["rfc", "temporal-queries", "prompt-instructions"]}
            size="32kb"
          />
          
          <DispatchCard
            title="Systems Thinking for the Soul"
            description="How to Build Content (and Life) That Doesn't Collapse. A ritual shack × systems bard × recursive case study."
            date="2025-05-04"
            imprint="spa"
            slug="systems-thinking"
            tags={["systems", "patterns", "ritual"]}
            size="45kb"
          />
          
          <DispatchCard
            title="Better as a T-Shirt Rule"
            description="Symbolic compression for decision-making. How to distill complex ideas into actionable, memorable forms."
            date="2025-05-03"
            imprint="spa"
            slug="tshirt-rule"
            tags={["rituals", "systems", "knowledge"]}
            size="38kb"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedDispatches;
