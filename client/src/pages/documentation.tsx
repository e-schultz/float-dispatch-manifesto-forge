
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import CodeBlock from "@/components/ui/code-block";
import { Book, Code, Palette, Zap, Settings, Users } from "lucide-react";

const DocumentationPage = () => {
  return (
    <MainLayout>
      <header className="w-full py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="font-bold font-mono mb-4">DOCUMENTATION</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Comprehensive guide to FLOAT.DISPATCH architecture, features, and development practices.
          </p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Quick Navigation */}
          <nav className="mb-12 p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-mono mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <a href="#project-overview" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Book className="h-4 w-4" />
                Project Overview
              </a>
              <a href="#architecture" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Code className="h-4 w-4" />
                Architecture
              </a>
              <a href="#design-system" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Palette className="h-4 w-4" />
                Design System
              </a>
              <a href="#features" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Zap className="h-4 w-4" />
                Features
              </a>
              <a href="#development" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Settings className="h-4 w-4" />
                Development
              </a>
              <a href="#contributing" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Users className="h-4 w-4" />
                Contributing
              </a>
            </div>
          </nav>

          {/* Project Overview */}
          <section id="project-overview" className="mb-16">
            <h2 className="text-3xl font-mono mb-6">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-4">
                FLOAT.DISPATCH is a publishing house and framework exploring 'chaos made coherent' through curated collections across technology, philosophy, and art.
              </p>
              
              <h3 className="text-xl font-mono mt-8 mb-4">Core Principles</h3>
              <ul className="space-y-2">
                <li>• Resistance to premature containerization</li>
                <li>• Sacred incoherence as methodology</li>
                <li>• Cross-context resonance</li>
                <li>• Necessary friction as feature</li>
                <li>• Contact before container</li>
              </ul>

              <h3 className="text-xl font-mono mt-8 mb-4">Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-mono text-lg mb-2">Frontend</h4>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>React 18 + TypeScript</li>
                    <li>Vite build tool</li>
                    <li>React Router DOM</li>
                    <li>@tanstack/react-query</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-lg mb-2">Styling & UI</h4>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>Tailwind CSS</li>
                    <li>Shadcn/UI components</li>
                    <li>Lucide React icons</li>
                    <li>Custom color system</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section id="architecture" className="mb-16">
            <h2 className="text-3xl font-mono mb-6">Architecture</h2>
            
            <h3 className="text-xl font-mono mb-4">Project Structure</h3>
            <CodeBlock
              language="bash"
              filename="Project Structure"
              showLineNumbers={false}
            >
{`src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/UI base components
│   ├── changelog/       # Changelog functionality
│   ├── home/           # Homepage sections
│   └── *.tsx           # Global components
├── pages/              # Route components
│   ├── imprints/       # Imprint-specific pages
│   └── *.tsx           # Main pages
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
└── main.tsx           # Application entry point`}
            </CodeBlock>

            <h3 className="text-xl font-mono mb-4">Component Guidelines</h3>
            <ul className="space-y-2 mb-6">
              <li>• Keep components under 50 lines when possible</li>
              <li>• Use TypeScript interfaces for all props</li>
              <li>• Implement React.memo for performance-critical components</li>
              <li>• Follow single responsibility principle</li>
              <li>• Prefer composition over inheritance</li>
            </ul>
          </section>

          {/* Design System */}
          <section id="design-system" className="mb-16">
            <h2 className="text-3xl font-mono mb-6">Design System</h2>
            
            <h3 className="text-xl font-mono mb-4">Color Palette</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="p-4 bg-techcraft rounded-lg border border-techcraft-border">
                  <h4 className="font-mono text-techcraft-accent mb-2">TechCraft</h4>
                  <p className="text-sm opacity-80">Deep blue with electric accents</p>
                  <div className="flex gap-2 mt-2">
                    <div className="w-6 h-6 bg-techcraft rounded"></div>
                    <div className="w-6 h-6 bg-techcraft-accent rounded"></div>
                    <div className="w-6 h-6 bg-techcraft-light rounded"></div>
                  </div>
                </div>
                
                <div className="p-4 bg-sigil rounded-lg border border-sigil-border">
                  <h4 className="font-mono text-sigil-accent mb-2">Sigil Studies</h4>
                  <p className="text-sm opacity-80">Black with magenta accents</p>
                  <div className="flex gap-2 mt-2">
                    <div className="w-6 h-6 bg-sigil rounded"></div>
                    <div className="w-6 h-6 bg-sigil-accent rounded"></div>
                    <div className="w-6 h-6 bg-sigil-light rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-activate rounded-lg border border-activate-border">
                  <h4 className="font-mono text-activate-accent mb-2">Activate</h4>
                  <p className="text-sm opacity-80">Black with neon green accents</p>
                  <div className="flex gap-2 mt-2">
                    <div className="w-6 h-6 bg-activate rounded"></div>
                    <div className="w-6 h-6 bg-activate-accent rounded"></div>
                  </div>
                </div>
                
                <div className="p-4 bg-interface rounded-lg border border-interface-border">
                  <h4 className="font-mono text-interface-accent mb-2">Interface</h4>
                  <p className="text-sm opacity-80">Black with purple accents</p>
                  <div className="flex gap-2 mt-2">
                    <div className="w-6 h-6 bg-interface rounded"></div>
                    <div className="w-6 h-6 bg-interface-accent rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-mono mb-4">Typography</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-mono text-lg mb-2">Headings</h4>
                <p className="text-sm opacity-80 mb-2">Monospace font for technical aesthetic</p>
                <div className="font-mono text-2xl">Sample Heading Text</div>
              </div>
              <div>
                <h4 className="font-mono text-lg mb-2">Body Text</h4>
                <p className="text-sm opacity-80 mb-2">System font stack for readability</p>
                <p>Sample body text with good readability and contrast.</p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16">
            <h2 className="text-3xl font-mono mb-6">Features</h2>
            
            <div className="grid gap-6">
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-mono mb-3">Changelog System</h3>
                <p className="mb-3">Interactive project changelog with completion tracking:</p>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• JSON-based storage in localStorage</li>
                  <li>• Automatic entry creation for major changes</li>
                  <li>• Manual entry addition with timestamps</li>
                  <li>• Completion status tracking</li>
                  <li>• Toast notifications for user feedback</li>
                </ul>
              </div>
              
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-mono mb-3">Multi-Imprint System</h3>
                <p className="mb-3">Content organized into thematic containers:</p>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• Distinct visual languages per imprint</li>
                  <li>• Editorial focus areas</li>
                  <li>• Cross-imprint content discovery</li>
                  <li>• Consistent navigation patterns</li>
                </ul>
              </div>
              
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-mono mb-3">Accessibility & Performance</h3>
                <p className="mb-3">Built with web standards and best practices:</p>
                <ul className="text-sm space-y-1 opacity-80">
                  <li>• WCAG 2.1 AA compliance</li>
                  <li>• Semantic HTML structure</li>
                  <li>• Keyboard navigation support</li>
                  <li>• Optimized loading performance</li>
                  <li>• Responsive design patterns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Development */}
          <section id="development" className="mb-16">
            <h2 className="text-3xl font-mono mb-6">Development</h2>
            
            <h3 className="text-xl font-mono mb-4">Getting Started</h3>
            <CodeBlock
              language="bash"
              filename="setup.sh"
              caption="Development setup commands"
            >
{`# Clone and setup
git clone <repository-url>
cd float-dispatch
npm install

# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview build
npm run lint         # Run linting`}
            </CodeBlock>

            <h3 className="text-xl font-mono mb-4">Code Standards</h3>
            <ul className="space-y-2 mb-6">
              <li>• Use TypeScript for all new code</li>
              <li>• Follow ESLint configuration</li>
              <li>• Implement proper error boundaries</li>
              <li>• Write descriptive commit messages</li>
              <li>• Add changelog entries for significant changes</li>
            </ul>

            <h3 className="text-xl font-mono mb-4">Adding New Content</h3>
            <ol className="space-y-2">
              <li>1. Create page component in appropriate imprint directory</li>
              <li>2. Add route to App.tsx</li>
              <li>3. Update dispatch listings</li>
              <li>4. Add changelog entry</li>
              <li>5. Test accessibility and performance</li>
            </ol>
          </section>

          {/* Contributing */}
          <section id="contributing" className="mb-16">
            <h2 className="text-3xl font-mono mb-6">Contributing</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-mono mb-3">Contribution Process</h3>
                <ol className="space-y-2">
                  <li>1. Fork the repository</li>
                  <li>2. Create a feature branch</li>
                  <li>3. Make changes with proper documentation</li>
                  <li>4. Add changelog entries</li>
                  <li>5. Test thoroughly</li>
                  <li>6. Submit pull request</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-mono mb-3">Code Review Guidelines</h3>
                <ul className="space-y-2">
                  <li>• Ensure accessibility standards</li>
                  <li>• Verify responsive design</li>
                  <li>• Check performance impact</li>
                  <li>• Validate TypeScript types</li>
                  <li>• Test changelog functionality</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default DocumentationPage;
