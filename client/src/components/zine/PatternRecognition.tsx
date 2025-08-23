import React from "react";

interface ComplimentArchiveItem {
  profanity: string;
  translation: string;
}

interface PatternRecognitionProps {
  title: string;
  description: string;
  complimentArchive: ComplimentArchiveItem[];
}

const PatternRecognition: React.FC<PatternRecognitionProps> = ({
  title,
  description,
  complimentArchive
}) => {
  return (
    <section className="bg-pattern-recognition p-6 my-8 border-l-4 border-sigil-accent">
      <h3 className="text-lg font-mono text-sigil-light mb-4">PATTERN: {title}</h3>
      <p className="text-sigil-light/80 mb-6">{description}</p>
      
      <div className="grid gap-4">
        {complimentArchive.map((item, index) => (
          <div 
            key={index}
            className="p-4 border border-dashed border-sigil-dim hover:border-sigil-light hover:bg-sigil-light/5 hover:translate-x-2 transition-all duration-300 compliment-hover"
          >
            <span className="text-sigil-error font-bold">"{item.profanity}"</span>
            <span className="block mt-2 text-sigil-accent italic text-sm">
              = "{item.translation}"
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatternRecognition;