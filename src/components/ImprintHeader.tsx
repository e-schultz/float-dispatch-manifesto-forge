
import React from "react"
import Link from "next/link"
import { ChevronRight } from 'lucide-react'

interface ImprintHeaderProps {
  imprint: "techcraft" | "sigil-studies" | "activate" | "interface-poetics";
  title: string;
  subtitle?: string;
  issueNumber?: number;
  date?: string;
}

export default function ImprintHeader({
  imprint,
  title,
  subtitle,
  issueNumber,
  date
}: ImprintHeaderProps) {
  // Imprint-specific styling
  const imprintStyles = {
    "techcraft": {
      bg: "bg-techcraft-DEFAULT",
      text: "text-techcraft-accent",
      border: "border-techcraft-border"
    },
    "sigil-studies": {
      bg: "bg-black",
      text: "text-sigil-accent",
      border: "border-sigil-border"
    },
    "activate": {
      bg: "bg-black",
      text: "text-activate-accent",
      border: "border-activate-border"
    },
    "interface-poetics": {
      bg: "bg-black",
      text: "text-interface-accent",
      border: "border-interface-border"
    }
  };
  
  const styles = imprintStyles[imprint];
  
  // Format imprint name for display
  const formatImprintName = (name: string) => {
    switch(name) {
      case "techcraft": return "TECHCRAFT";
      case "sigil-studies": return "SIGIL STUDIES";
      case "activate": return "ACTIVATE";
      case "interface-poetics": return "INTERFACE POETICS";
      default: return name.toUpperCase();
    }
  };
  
  return (
    <header className={`${styles.bg} text-white w-full py-8 border-b ${styles.border}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 text-sm mb-2 font-mono">
          <Link href="/" className="hover:underline">float.dispatch</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/imprints/${imprint}`} className={`${styles.text} hover:underline`}>
            {formatImprintName(imprint)}
          </Link>
          {issueNumber && (
            <>
              <ChevronRight className="h-3 w-3" />
              <span>DISPATCH {String(issueNumber).padStart(2, '0')}</span>
            </>
          )}
        </div>
        
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-mono ${styles.text} mt-4`}>
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl mt-2 font-mono opacity-80">{subtitle}</p>
        )}
        
        {date && (
          <div className="mt-4 text-sm opacity-70 font-mono">
            {date}
          </div>
        )}
      </div>
    </header>
  );
}
