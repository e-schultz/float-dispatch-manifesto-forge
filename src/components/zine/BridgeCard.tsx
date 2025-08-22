import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface BoundaryTranslator {
  systemA: string;
  boundary: string;
  systemB: string;
}

interface BridgeCardProps {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: string;
  boundaryTranslator?: BoundaryTranslator;
  errorMessage?: string;
  explanation?: string;
  outputStyles?: Array<{
    type: string;
    description: string;
    highlighted?: boolean;
  }>;
}

const BridgeCard: React.FC<BridgeCardProps> = ({
  id,
  title,
  description,
  timestamp,
  type,
  boundaryTranslator,
  errorMessage,
  explanation,
  outputStyles
}) => {
  return (
    <Card className="bg-black/40 border-sigil-dim mb-6 relative overflow-hidden bridge-card">
      {/* Bridge number label */}
      <div className="absolute -top-3 left-4 bg-black px-2 text-xs text-sigil-boundary font-mono">
        {id}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-mono text-sigil-boundary">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-sigil-dim">
            <Calendar className="h-4 w-4" />
            <span>{timestamp}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-sigil-light/80">{description}</p>
        
        {/* Boundary Translator */}
        {boundaryTranslator && (
          <div className="flex items-center justify-around p-4 border-2 border-sigil-boundary bg-boundary-glow/10">
            <div className="px-3 py-2 border border-sigil-light text-center">
              <div className="font-mono text-sm">{boundaryTranslator.systemA}</div>
              <div className="text-xs text-sigil-dim">System A</div>
            </div>
            <div className="text-sigil-accent text-2xl">→</div>
            <div className="px-3 py-2 border border-sigil-boundary text-center text-sigil-boundary">
              <div className="font-mono text-sm">{boundaryTranslator.boundary}</div>
              <div className="text-xs">Translation</div>
            </div>
            <div className="text-sigil-accent text-2xl">→</div>
            <div className="px-3 py-2 border border-sigil-light text-center">
              <div className="font-mono text-sm">{boundaryTranslator.systemB}</div>
              <div className="text-xs text-sigil-dim">System B</div>
            </div>
          </div>
        )}
        
        {/* Error State */}
        {errorMessage && (
          <div className="bg-error-state border border-sigil-error p-4 font-mono relative overflow-hidden">
            <div className="absolute top-1 right-2 text-sigil-error text-xs opacity-70">
              NUMPY_ERROR::INTENTIONAL
            </div>
            <code className="text-sm">{errorMessage}</code>
            {explanation && (
              <p className="mt-3 text-sm text-sigil-light">{explanation}</p>
            )}
          </div>
        )}
        
        {/* Output Styles */}
        {outputStyles && (
          <div className="space-y-2">
            {outputStyles.map((style, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 p-2 ${
                  style.highlighted 
                    ? 'bg-sigil-accent/20 border border-sigil-accent' 
                    : 'border border-sigil-dim'
                }`}
              >
                <span className="text-sm">✓</span>
                <span className="font-mono text-sm">{style.type}</span>
                <span className="text-xs text-sigil-dim">→</span>
                <span className={`text-sm ${
                  style.highlighted ? 'text-sigil-accent font-bold' : 'text-sigil-light/80'
                }`}>
                  {style.description}
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BridgeCard;