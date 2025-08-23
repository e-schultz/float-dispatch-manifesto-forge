import React from "react";

interface MethodologySectionProps {
  title: string;
  quote: string;
  description: string;
}

const MethodologySection: React.FC<MethodologySectionProps> = ({
  title,
  quote,
  description
}) => {
  return (
    <section className="bg-methodology-gradient p-8 my-12 border-t border-b border-sigil-boundary">
      <h2 className="text-2xl font-mono text-sigil-boundary mb-6">{title}</h2>
      
      <div className="ultra-think p-6 my-8 text-center text-lg text-sigil-light bg-ultra-think">
        "{quote}"
      </div>
      
      <p className="text-sigil-light/80 leading-relaxed">{description}</p>
    </section>
  );
};

export default MethodologySection;