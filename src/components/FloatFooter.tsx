
import React from "react";
import Link from "next/link";

export default function FloatFooter() {
  return (
    <footer className="bg-black text-white py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono text-sm mb-4 md:mb-0">
            float.dispatch::2025
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/imprints" className="hover:underline">Imprints</Link>
            <Link href="/subscribe" className="hover:underline">Subscribe</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-mono text-techcraft-accent mb-2">TECHCRAFT</h3>
            <ul className="space-y-1 opacity-80">
              <li><Link href="/imprints/techcraft/reactive-patterns" className="hover:underline">Reactive Patterns</Link></li>
              <li><Link href="/imprints/techcraft/api-design-philosophy" className="hover:underline">API Design Philosophy</Link></li>
              <li><Link href="/imprints/techcraft/system-boundaries" className="hover:underline">System Boundaries</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-sigil-accent mb-2">SIGIL STUDIES</h3>
            <ul className="space-y-1 opacity-80">
              <li><Link href="/imprints/sigil-studies/oracle-crosstalk" className="hover:underline">Oracle Crosstalk</Link></li>
              <li><Link href="/imprints/sigil-studies/prompt-architecture" className="hover:underline">Prompt Architecture</Link></li>
              <li><Link href="/imprints/sigil-studies/model-artifacts" className="hover:underline">Model Artifacts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-activate-accent mb-2">ACTIVATE</h3>
            <ul className="space-y-1 opacity-80">
              <li><Link href="/imprints/activate/digital-rights" className="hover:underline">Digital Rights</Link></li>
              <li><Link href="/imprints/activate/tech-commons" className="hover:underline">Tech Commons</Link></li>
              <li><Link href="/imprints/activate/post-platform" className="hover:underline">Post-Platform</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-interface-accent mb-2">INTERFACE POETICS</h3>
            <ul className="space-y-1 opacity-80">
              <li><Link href="/imprints/interface-poetics/friction-feature" className="hover:underline">Friction as Feature</Link></li>
              <li><Link href="/imprints/interface-poetics/beyond-atomic" className="hover:underline">Beyond Atomic Design</Link></li>
              <li><Link href="/imprints/interface-poetics/ambient" className="hover:underline">Ambient Interfaces</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-xs opacity-70">
          <p>FLOAT.DISPATCH is a publishing house exploring chaos made coherent through curated collections of works across technology, philosophy, and ritual.</p>
        </div>
      </div>
    </footer>
  );
}
