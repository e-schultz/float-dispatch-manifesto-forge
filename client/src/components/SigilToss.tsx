
"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Triangle } from 'lucide-react'

interface SigilTossProps {
  prompt: string;
  theme?: "oracle-crosstalk" | "techcraft" | "activate" | "interface-poetics";
  size?: "sm" | "md" | "lg";
}

export default function SigilToss({ 
  prompt, 
  theme = "oracle-crosstalk", 
  size = "md" 
}: SigilTossProps) {
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
        aria-label={`Open ritual reflection: ${prompt}`}
      >
        <span className="sr-only">Toss Sigil</span>
        <span className="mr-1">{"{∴}"}</span>
      </button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent 
          className={`${styles.bg} ${styles.text} font-mono border ${styles.accent} max-w-md`}
        >
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg">
              <Triangle className={`h-4 w-4 ${styles.icon}`} />
              <span>Ritual Reflection</span>
            </DialogTitle>
            <DialogDescription className={`${styles.text} opacity-90`}>
              Pause. Consider. Respond.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <blockquote className="border-l-2 pl-4 italic">
              {prompt}
            </blockquote>
            
            <div className="text-xs opacity-70 mt-4">
              echoSet:: reflection
              <br />
              ritualForm:: toss-sigil
              <br />
              dispatch::float.dispatch
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
