
import React from "react";
import { Link } from "react-router-dom";
import FloatNavBar from "../../../components/FloatNavBar";
import FloatFooter from "../../../components/FloatFooter";
import ImprintHeader from "../../../components/ImprintHeader";

const InterfacePoeticsIndex = () => {
  const sampleDispatches = [
    {
      title: "Friction as Feature",
      slug: "friction-as-feature",
      date: "2025-04-12",
      description: "Exploring how intentional friction in interfaces can create more meaningful user experiences."
    },
    {
      title: "Beyond Atomic Design",
      slug: "beyond-atomic-design",
      date: "2025-04-30",
      description: "Rethinking component systems and design methodologies for complex applications."
    },
    {
      title: "Ambient Interfaces",
      slug: "ambient-interfaces",
      date: "2025-05-03",
      description: "Designing subtle, contextual interfaces that fade into the background when not needed."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <ImprintHeader 
        imprint="interface-poetics"
        title="INTERFACE POETICS"
        subtitle="UX design, component systems, interaction patterns, and ambient interface explorations"
      />
      
      {/* About Section */}
      <section className="py-12 px-4 border-b border-interface-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-mono text-interface-accent mb-6">Aesthetic</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              INTERFACE POETICS explores the poetry of human-computer interaction, examining how design 
              decisions shape user behavior, emotional responses, and cognitive load.
            </p>
            <p className="mb-6">
              We investigate interaction patterns, component architectures, and the subtle art of creating 
              interfaces that feel both powerful and effortless. Our focus is on the intersection of 
              functionality and aesthetics in digital experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="border border-interface-border rounded p-4">
                <h3 className="font-mono text-interface-accent mb-2">Interaction Design</h3>
                <p className="text-sm opacity-90">Micro-interactions, animation principles, and user flow optimization.</p>
              </div>
              <div className="border border-interface-border rounded p-4">
                <h3 className="font-mono text-interface-accent mb-2">Component Systems</h3>
                <p className="text-sm opacity-90">Design systems, reusable patterns, and scalable UI architectures.</p>
              </div>
              <div className="border border-interface-border rounded p-4">
                <h3 className="font-mono text-interface-accent mb-2">Ambient UX</h3>
                <p className="text-sm opacity-90">Contextual interfaces, progressive disclosure, and adaptive design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispatches */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-mono text-interface-accent mb-8">Recent Dispatches</h2>
          <div className="space-y-6">
            {sampleDispatches.map((dispatch, index) => (
              <div key={dispatch.slug} className="border border-interface-border rounded-md p-6 hover:border-interface-accent transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold font-mono text-interface-accent">{dispatch.title}</h3>
                  <span className="text-sm opacity-70 font-mono">{dispatch.date}</span>
                </div>
                <p className="text-sm opacity-90 mb-4">{dispatch.description}</p>
                <div className="text-xs font-mono opacity-70">
                  float.dispatch::interface::{String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg opacity-80 mb-4">More dispatches coming soon...</p>
            <Link to="/subscribe" className="text-interface-accent hover:underline font-mono">
              Subscribe for updates
            </Link>
          </div>
        </div>
      </section>
      
      <FloatFooter />
    </div>
  );
};

export default InterfacePoeticsIndex;
