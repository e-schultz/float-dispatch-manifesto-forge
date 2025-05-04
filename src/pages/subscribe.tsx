
import React from "react";
import FloatNavBar from "../components/FloatNavBar";
import FloatFooter from "../components/FloatFooter";

const SubscribePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <header className="w-full py-12 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-mono mb-4">SUBSCRIBE</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Join the FLOAT.DISPATCH community to receive updates on new content and events.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block font-mono text-sm mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block font-mono text-sm mb-2">Preferred Imprints</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="techcraft" className="mr-2" />
                  <label htmlFor="techcraft" className="text-techcraft-accent">TECHCRAFT</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="sigil" className="mr-2" />
                  <label htmlFor="sigil" className="text-sigil-accent">SIGIL STUDIES</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="activate" className="mr-2" />
                  <label htmlFor="activate" className="text-activate-accent">ACTIVATE</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="interface" className="mr-2" />
                  <label htmlFor="interface" className="text-interface-accent">INTERFACE POETICS</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="spa" className="mr-2" />
                  <label htmlFor="spa" className="text-purple-400">SPA</label>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-600 text-white font-mono py-2 px-4 rounded-md transition-colors"
            >
              Subscribe to FLOAT.DISPATCH
            </button>
            
            <p className="text-xs opacity-70 text-center">
              This is a placeholder form. Subscription functionality will be implemented in the future.
            </p>
          </form>
        </div>
      </main>
      
      <FloatFooter />
    </div>
  );
};

export default SubscribePage;
