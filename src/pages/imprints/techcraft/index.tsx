
import React from "react";
import { Link } from "react-router-dom";
import FloatNavBar from "../../../components/FloatNavBar";
import FloatFooter from "../../../components/FloatFooter";
import ImprintHeader from "../../../components/ImprintHeader";

const TechCraftIndex = () => {
  const sampleDispatches = [
    {
      title: "Reactive Patterns in Modern Systems",
      slug: "reactive-patterns",
      date: "2025-05-02",
      description: "Deep dive into reactive programming patterns and their application in distributed systems."
    },
    {
      title: "API Design Philosophy",
      slug: "api-design-philosophy", 
      date: "2025-04-15",
      description: "Exploring the principles behind creating intuitive, maintainable, and scalable APIs."
    },
    {
      title: "System Boundaries and Abstractions",
      slug: "system-boundaries",
      date: "2025-04-28",
      description: "How to define clear boundaries between system components for better modularity."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <ImprintHeader 
        imprint="techcraft"
        title="TECHCRAFT"
        subtitle="Technical deep dives, system architecture, code philosophy essays, and architectural critiques"
      />
      
      {/* About Section */}
      <section className="py-12 px-4 border-b border-techcraft-border bg-techcraft-DEFAULT/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-mono text-techcraft-accent mb-6">Philosophy</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              TECHCRAFT explores the craft of technology beyond frameworks and trends. We focus on 
              timeless principles, architectural patterns, and the philosophy behind building systems that last.
            </p>
            <p className="mb-6">
              Our approach emphasizes understanding over implementation, patterns over libraries, 
              and principles over practices. We examine the deeper questions of software architecture, 
              system design, and the art of writing maintainable code.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="border border-techcraft-border rounded p-4 bg-black/50">
                <h3 className="font-mono text-techcraft-accent mb-2">Architecture</h3>
                <p className="text-sm opacity-90">System design patterns, microservices, and distributed architectures.</p>
              </div>
              <div className="border border-techcraft-border rounded p-4 bg-black/50">
                <h3 className="font-mono text-techcraft-accent mb-2">Code Philosophy</h3>
                <p className="text-sm opacity-90">Clean code principles, refactoring strategies, and design patterns.</p>
              </div>
              <div className="border border-techcraft-border rounded p-4 bg-black/50">
                <h3 className="font-mono text-techcraft-accent mb-2">API Design</h3>
                <p className="text-sm opacity-90">RESTful services, GraphQL, and contract-first development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispatches */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-mono text-techcraft-accent mb-8">Recent Dispatches</h2>
          <div className="space-y-6">
            {sampleDispatches.map((dispatch, index) => (
              <div key={dispatch.slug} className="border border-techcraft-border rounded-md p-6 hover:border-techcraft-accent transition-colors bg-techcraft-DEFAULT/20">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold font-mono text-techcraft-accent">{dispatch.title}</h3>
                  <span className="text-sm opacity-70 font-mono">{dispatch.date}</span>
                </div>
                <p className="text-sm opacity-90 mb-4">{dispatch.description}</p>
                <div className="text-xs font-mono opacity-70">
                  float.dispatch::techcraft::{String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg opacity-80 mb-4">More dispatches coming soon...</p>
            <Link to="/subscribe" className="text-techcraft-accent hover:underline font-mono">
              Subscribe for updates
            </Link>
          </div>
        </div>
      </section>
      
      <FloatFooter />
    </div>
  );
};

export default TechCraftIndex;
