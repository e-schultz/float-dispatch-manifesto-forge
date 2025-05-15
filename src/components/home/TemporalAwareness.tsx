
import React from "react";

const TemporalAwareness = () => {
  return (
    <section className="py-16 px-4 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-2xl font-bold font-mono">RFC - Temporal Awareness Instructions</h2>
          <span className="px-2 py-0.5 bg-amber-900/30 text-amber-300 rounded text-xs">DRAFT</span>
        </div>
        
        <div className="border border-gray-800 rounded-lg p-6 bg-black/50">
          <div className="flex flex-wrap gap-2 mb-4 text-xs font-mono">
            <span className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full">uid: temporal_awareness_rfc_20250515</span>
            <span className="px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full">timestamp: 2025-05-15-04:15</span>
            <span className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full">ctx: temporal_query_enhancement</span>
            <span className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded-full">persona: Sysop</span>
          </div>
          
          <p className="text-lg mb-6">
            Framework for enhancing FLOAT's prompt instructions to handle temporal queries by leveraging structured daily summaries in the float_summary_docs collection.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Problem Statement</h3>
              <p className="opacity-90">
                Current FLOAT prompts lack explicit instructions for handling time-based queries, resulting in inefficient searching across collections when users ask about recent activities, achievements, or created artifacts.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Proposed Solution</h3>
              <p className="opacity-90">
                Temporal Awareness Instructions that prioritize checking float_summary_docs collection first for daily summaries, using metadata tags to narrow results, and extracting relevant information based on query intent.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Implementation Example</h3>
              <p className="opacity-90">
                Step-by-step process for handling a query like 'What did I do yesterday with FLOAT?' by calculating the date, finding the appropriate summary, and extracting project-specific information.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              <div className="px-3 py-1 bg-gray-900 rounded-md">
                <span className="opacity-70">Review by</span>
                <span className="block text-amber-400">2025-05-22</span>
              </div>
              
              <div className="px-3 py-1 bg-gray-900 rounded-md">
                <span className="opacity-70">Priority</span>
                <span className="block text-yellow-400">Medium</span>
              </div>
              
              <div className="px-3 py-1 bg-gray-900 rounded-md">
                <span className="opacity-70">Status</span>
                <span className="block text-blue-400">Needs Review</span>
              </div>
              
              <div className="px-3 py-1 bg-gray-900 rounded-md">
                <span className="opacity-70">Related Bridge</span>
                <span className="block text-purple-400">CB-20250515-0230-S8W7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemporalAwareness;
