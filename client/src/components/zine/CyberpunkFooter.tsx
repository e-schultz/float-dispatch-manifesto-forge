import React from "react";

interface CyberpunkFooterProps {
  title: string;
  subtitle: string;
  context: string;
}

const CyberpunkFooter: React.FC<CyberpunkFooterProps> = ({
  title,
  subtitle,
  context
}) => {
  return (
    <footer className="text-center p-12 border-t-2 border-sigil-light mt-16">
      <p className="text-xl font-mono text-sigil-light mb-4">{title}</p>
      <p className="text-sigil-dim mb-8">{subtitle}</p>
      <div className="text-center">
        <span className="recursive-loop inline-block text-4xl text-sigil-accent animate-spin-slow">
          ∞
        </span>
      </div>
      <p className="text-sigil-accent mt-8 font-mono text-sm whitespace-pre-line">
        {context}
      </p>
    </footer>
  );
};

export default CyberpunkFooter;