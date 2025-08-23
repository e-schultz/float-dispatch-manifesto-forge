import React from "react";

interface CyberpunkHeaderProps {
  title: string;
  subtitle?: string;
  certification?: string;
}

const CyberpunkHeader: React.FC<CyberpunkHeaderProps> = ({
  title,
  subtitle,
  certification
}) => {
  return (
    <header className="relative text-center p-8 border-b-2 border-sigil-light overflow-hidden">
      {/* Terminal Scanlines Effect */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none z-10" />
      
      <h1 className="font-mono text-3xl md:text-5xl text-sigil-light animate-glitch relative z-20">
        {title}
      </h1>
      
      {certification && (
        <div className="inline-block px-4 py-2 my-4 border-2 border-sigil-accent text-sigil-accent animate-pulse">
          {certification}
        </div>
      )}
      
      {subtitle && (
        <p className="text-lg text-sigil-light/80 mt-4 relative z-20">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default CyberpunkHeader;