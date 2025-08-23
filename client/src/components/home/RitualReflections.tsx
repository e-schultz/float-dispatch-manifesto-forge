
import React from "react";
import SigilToss from "../SigilToss";

const RitualReflections = () => {
  return (
    <section className="py-16 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-mono mb-6">Ritual Reflections</h2>
          <p className="text-lg opacity-90 mb-8">
            Pause. Consider. Respond. The ritual sigil {"{∴}"} invites a moment of reflection at key points in the text.
          </p>
          <div className="flex justify-center gap-6">
            <div className="p-6 border border-sigil-border rounded-md">
              <p className="mb-4">
                "Trust is not about control but about resilience in the face of necessary vulnerability." 
                <SigilToss 
                  prompt="How do you balance trust and vulnerability in your own systems?"
                  theme="oracle-crosstalk"
                />
              </p>
              <div className="text-xs opacity-70">
                from FLOAT vs AI Gaslighting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RitualReflections;
