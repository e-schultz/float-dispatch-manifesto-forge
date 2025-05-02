
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function FloatNavBar() {
  return (
    <nav className="bg-black border-b border-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-mono font-bold text-xl">
          FLOAT.
          <span className="text-sigil-accent">DISPATCH</span>
        </Link>
        
        <div className="hidden md:flex space-x-6 font-mono text-sm">
          <Link to="/imprints/techcraft" className="text-techcraft-accent hover:underline">
            TECHCRAFT
          </Link>
          <Link to="/imprints/sigil-studies" className="text-sigil-accent hover:underline">
            SIGIL STUDIES
          </Link>
          <Link to="/imprints/activate" className="text-activate-accent hover:underline">
            ACTIVATE
          </Link>
          <Link to="/imprints/interface-poetics" className="text-interface-accent hover:underline">
            INTERFACE POETICS
          </Link>
        </div>
        
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white border-l border-gray-800 p-0">
            <div className="flex flex-col gap-4 p-6">
              <Link to="/" className="font-mono font-bold text-xl">
                FLOAT.
                <span className="text-sigil-accent">DISPATCH</span>
              </Link>
              
              <div className="flex flex-col space-y-4 font-mono">
                <Link to="/imprints/techcraft" className="text-techcraft-accent hover:underline p-2 border-l border-techcraft-border">
                  TECHCRAFT
                </Link>
                <Link to="/imprints/sigil-studies" className="text-sigil-accent hover:underline p-2 border-l border-sigil-border">
                  SIGIL STUDIES
                </Link>
                <Link to="/imprints/activate" className="text-activate-accent hover:underline p-2 border-l border-activate-border">
                  ACTIVATE
                </Link>
                <Link to="/imprints/interface-poetics" className="text-interface-accent hover:underline p-2 border-l border-interface-border">
                  INTERFACE POETICS
                </Link>
                
                <div className="pt-4 mt-4 border-t border-gray-800">
                  <Link to="/about" className="block p-2 hover:bg-white/5">About</Link>
                  <Link to="/subscribe" className="block p-2 hover:bg-white/5">Subscribe</Link>
                  <Link to="/contact" className="block p-2 hover:bg-white/5">Contact</Link>
                </div>
              </div>
              
              <div className="mt-auto pt-4 text-xs opacity-70 font-mono">
                float.dispatch::2025
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
