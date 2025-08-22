import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  children: string;
  language?: string;
  caption?: string;
  filename?: string;
  showLineNumbers?: boolean;
  copyable?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  language = 'text',
  caption,
  filename,
  showLineNumbers = true,
  copyable = true 
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const customStyle = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: 'hsl(var(--muted))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '0.5rem',
      margin: 0,
    },
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: 'transparent',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      fontSize: '0.875rem',
      lineHeight: '1.5',
    }
  };

  return (
    <div className="relative group">
      {(filename || caption) && (
        <div className="flex items-center justify-between bg-muted/50 px-4 py-2 border border-b-0 border-border rounded-t-lg">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="font-mono text-sm text-muted-foreground">{filename}</span>
            )}
            {language && (
              <span className="inline-block px-2 py-1 text-xs font-mono bg-accent/20 text-accent-foreground rounded">
                {language}
              </span>
            )}
          </div>
          {caption && (
            <span className="text-xs text-muted-foreground">{caption}</span>
          )}
        </div>
      )}
      
      <div className="relative">
        {copyable && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        )}
        
        <SyntaxHighlighter
          language={language}
          style={customStyle}
          showLineNumbers={showLineNumbers}
          wrapLines={true}
          customStyle={{
            background: 'hsl(var(--muted))',
            border: '1px solid hsl(var(--border))',
            borderRadius: filename || caption ? '0 0 0.5rem 0.5rem' : '0.5rem',
            margin: 0,
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;