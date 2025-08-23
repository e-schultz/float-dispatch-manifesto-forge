
import React from "react";
import { Link } from "react-router-dom";
import FloatNavBar from "../../../components/FloatNavBar";
import FloatFooter from "../../../components/FloatFooter";
import ImprintHeader from "../../../components/ImprintHeader";
import { useDispatchesByImprint } from '@/hooks/useData';

const TechCraftIndex = () => {
  const techcraftDispatches = useDispatchesByImprint('techcraft');

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
            {techcraftDispatches.map((dispatch, index) => (
              <Link 
                key={dispatch.slug} 
                to={`/imprints/techcraft/${dispatch.slug}`}
                className="block"
              >
                <div className="border border-techcraft-border rounded-md p-6 hover:border-techcraft-accent transition-colors bg-techcraft-DEFAULT/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold font-mono text-techcraft-accent">{dispatch.title}</h3>
                    <span className="text-sm opacity-70 font-mono">{dispatch.date}</span>
                  </div>
                  <p className="text-sm opacity-90 mb-4">{dispatch.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-mono opacity-70">
                      float.dispatch::techcraft::{String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex gap-2">
                      {dispatch.tags?.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-techcraft-DEFAULT/50 border border-techcraft-border rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {techcraftDispatches.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <p className="mb-4">No TechCraft dispatches published yet.</p>
            </div>
          )}
          
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
