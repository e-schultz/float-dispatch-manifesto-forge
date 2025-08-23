
import React from "react";
import { Link } from "react-router-dom";
import FloatNavBar from "../../../components/FloatNavBar";
import FloatFooter from "../../../components/FloatFooter";
import ImprintHeader from "../../../components/ImprintHeader";

const ActivateIndex = () => {
  const sampleDispatches = [
    {
      title: "Digital Rights Horizons",
      slug: "digital-rights-horizons",
      date: "2025-04-25",
      description: "Exploring the future of digital rights and privacy in an interconnected world."
    },
    {
      title: "Tech Commons Framework",
      slug: "tech-commons",
      date: "2025-05-01", 
      description: "Building sustainable technology commons for collective ownership and governance."
    },
    {
      title: "Post-Platform Communities",
      slug: "post-platform-communities",
      date: "2025-04-18",
      description: "Imagining community structures beyond centralized platform capitalism."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <ImprintHeader 
        imprint="activate"
        title="ACTIVATE"
        subtitle="Digital activism, tech commons, community futures, critical analysis, and tactical toolkits"
      />
      
      {/* About Section */}
      <section className="py-12 px-4 border-b border-activate-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-mono text-activate-accent mb-6">Mission</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              ACTIVATE explores how technology can be used for social change, examining digital activism, 
              tech commons, community futures, and critical analysis of power structures in the digital age.
            </p>
            <p className="mb-6">
              We provide tactical toolkits for activists, analyze emerging forms of digital governance, 
              and imagine post-platform futures that prioritize community autonomy and collective ownership.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="border border-activate-border rounded p-4">
                <h3 className="font-mono text-activate-accent mb-2">Digital Rights</h3>
                <p className="text-sm opacity-90">Privacy, surveillance resistance, and digital autonomy frameworks.</p>
              </div>
              <div className="border border-activate-border rounded p-4">
                <h3 className="font-mono text-activate-accent mb-2">Tech Commons</h3>
                <p className="text-sm opacity-90">Collective ownership models and community-governed technology.</p>
              </div>
              <div className="border border-activate-border rounded p-4">
                <h3 className="font-mono text-activate-accent mb-2">Community Futures</h3>
                <p className="text-sm opacity-90">Post-platform organizing and decentralized coordination tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispatches */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold font-mono text-activate-accent mb-8">Recent Dispatches</h2>
          <div className="space-y-6">
            {sampleDispatches.map((dispatch, index) => (
              <div key={dispatch.slug} className="border border-activate-border rounded-md p-6 hover:border-activate-accent transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold font-mono text-activate-accent">{dispatch.title}</h3>
                  <span className="text-sm opacity-70 font-mono">{dispatch.date}</span>
                </div>
                <p className="text-sm opacity-90 mb-4">{dispatch.description}</p>
                <div className="text-xs font-mono opacity-70">
                  float.dispatch::activate::{String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg opacity-80 mb-4">More dispatches coming soon...</p>
            <Link to="/subscribe" className="text-activate-accent hover:underline font-mono">
              Subscribe for updates
            </Link>
          </div>
        </div>
      </section>
      
      <FloatFooter />
    </div>
  );
};

export default ActivateIndex;
