import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface DispatchCardProps {
  title: string;
  description: string;
  date: string;
  imprint: "techcraft" | "sigil-studies" | "activate" | "interface-poetics" | "spa";
  slug: string;
  tags?: string[];
  size?: string;
}

export default function DispatchCard({
  title,
  description,
  date,
  imprint,
  slug,
  tags = [],
  size = "12kb"
}: DispatchCardProps) {
  // Imprint-specific styling
  const imprintStyles = {
    "techcraft": {
      bg: "bg-techcraft-DEFAULT/90",
      border: "border-techcraft-border",
      accent: "text-techcraft-accent",
      hover: "hover:border-techcraft-accent/70"
    },
    "sigil-studies": {
      bg: "bg-black/90",
      border: "border-sigil-border",
      accent: "text-sigil-accent",
      hover: "hover:border-sigil-accent/70"
    },
    "activate": {
      bg: "bg-black/90",
      border: "border-activate-border",
      accent: "text-activate-accent",
      hover: "hover:border-activate-accent/70"
    },
    "interface-poetics": {
      bg: "bg-black/90",
      border: "border-interface-border",
      accent: "text-interface-accent",
      hover: "hover:border-interface-accent/70"
    },
    "spa": {
      bg: "bg-black/90",
      border: "border-purple-900",
      accent: "text-purple-400",
      hover: "hover:border-purple-400/70"
    }
  };
  
  // Format imprint name for display
  const formatImprintName = (name: string) => {
    switch(name) {
      case "techcraft": return "TECHCRAFT";
      case "sigil-studies": return "SIGIL STUDIES";
      case "activate": return "ACTIVATE";
      case "interface-poetics": return "INTERFACE POETICS";
      case "spa": return "SPA";
      default: return name.toUpperCase();
    }
  };
  
  return (
    <Link to={`/imprints/${imprint}/${slug}`}>
      <Card className={`${imprintStyles[imprint].bg} text-white border ${imprintStyles[imprint].border} transition-all ${imprintStyles[imprint].hover}`}>
        <CardHeader className="pb-2">
          <div className={`text-xs font-mono ${imprintStyles[imprint].accent} mb-2`}>
            {formatImprintName(imprint)}
          </div>
          <h3 className="text-xl font-bold font-mono">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-90">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center text-xs font-mono opacity-70">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            <span>{size}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
