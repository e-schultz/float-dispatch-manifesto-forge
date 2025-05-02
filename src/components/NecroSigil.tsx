
"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Square, Link2 } from 'lucide-react'

interface NecroSigilProps {
  title: string;
  relatedContent: Array<{
    title: string;
    href: string;
    date?: string;
    imprint?: string;
  }>;
  theme?: "oracle-crosstalk" | "techcraft" | "activate" | "interface-poetics";
  size?: "sm" | "md" | "lg";
}

export default function NecroSigil({
  title,
  relatedContent,
  theme = "oracle-crosstalk",
  size = "md"
}: NecroSigilProps) {
  const [open, setOpen] = useState(false);
  
  // Theme-specific styling
  const themeStyles = {
    "oracle-crosstalk": {
      bg: "bg-black",
      text: "text-white",
      accent: "border-sigil-accent",
      icon: "text-sigil-light",
      hover: "hover:text-sigil-light"
    },
    "techcraft": {
      bg: "bg-techcraft-DEFAULT",
      text: "text-white",
      accent: "border-techcraft-accent",
      icon: "text-techcraft-light",
      hover: "hover:text-techcraft-light"
    },
    "activate": {
      bg: "bg-black",
      text: "text-white",
      accent: "border-activate-accent",
      icon: "text-activate-accent",
      hover: "hover:text-activate-accent"
    },
    "interface-poetics": {
      bg: "bg-black",
      text: "text-white",
      accent: "border-interface-accent",
      icon: "text-interface-accent",
      hover: "hover:text-interface-accent"
    }
  };
  
  const styles = themeStyles[theme];
  
  // Size variations
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };
  
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`inline-flex items-center justify-center ${sizeClasses[size]} font-mono ${styles.hover} transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`}
        aria-label={`View related content: ${title}`}
      >
        <span className="sr-only">Necro Sigil</span>
        <span className="mr-1">{"{⊡}"}</span>
      </button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent 
          className={`${styles.bg} ${styles.text} font-mono border ${styles.accent} max-w-md`}
        >
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg">
              <Square className={`h-4 w-4 ${styles.icon}`} />
              <span>Related Content</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <h3 className={`text-base ${styles.icon}`}>{title}</h3>
            
            <ul className="space-y-3">
              {relatedContent.map((item, index) => (
                <li key={index} className="border-l pl-3 py-1">
                  <a 
                    href={item.href} 
                    className="flex flex-col hover:underline"
                  >
                    <span className="flex items-center gap-1">
                      <Link2 className="h-3 w-3" />
                      <span>{item.title}</span>
                    </span>
                    {(item.date || item.imprint) && (
                      <span className="text-xs opacity-70 mt-1">
                        {item.date && `${item.date} • `}
                        {item.imprint}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="text-xs opacity-70 mt-4">
              necroForm:: content-connection
              <br />
              ritualType:: memory-trace
              <br />
              dispatch::float.dispatch
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
