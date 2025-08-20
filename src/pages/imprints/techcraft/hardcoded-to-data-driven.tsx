import React from "react";
import { useNavigate } from "react-router-dom";
import ImprintHeader from "@/components/ImprintHeader";
import FloatNavBar from "@/components/FloatNavBar";
import FloatFooter from "@/components/FloatFooter";
import { ArrowLeft, Clock, Tag, Code as CodeIcon, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useDispatch } from '@/hooks/useData';

const HardcodedToDataDrivenPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch('hardcoded-to-data-driven');
  
  if (!dispatch || !dispatch.content) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Article not found</p>
      </div>
    );
  }
  
  const { content } = dispatch;
  
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <ImprintHeader
        imprint="techcraft"
        title={dispatch.title}
        subtitle={dispatch.subtitle || ""}
        issueNumber={dispatch.issueNumber}
        date={dispatch.date}
      />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/imprints/techcraft')}
            className="mb-8 text-techcraft-accent hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to TechCraft
          </Button>
          
          {/* Article metadata */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="h-4 w-4" />
              <span>{content.metadata.readTime} read</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Tag className="h-4 w-4" />
              <span>Difficulty: {content.metadata.difficulty}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CodeIcon className="h-4 w-4" />
              <span>Code examples included</span>
            </div>
          </div>
          
          {/* Introduction */}
          <div className="prose prose-invert prose-techcraft max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-gray-200">
              {content.introduction}
            </p>
            
            <Separator className="my-12 border-techcraft-border" />
            
            {/* Article sections */}
            {content.sections.map((section: any, index: number) => (
              <section key={index} className="mb-12">
                <h2 className="text-2xl font-mono text-techcraft-accent mb-6">
                  {section.title}
                </h2>
                
                {section.content && (
                  <p className="mb-6 text-gray-200 leading-relaxed">
                    {section.content}
                  </p>
                )}
                
                {section.bullets && (
                  <ul className="list-none space-y-2 mb-6">
                    {section.bullets.map((bullet: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-techcraft-accent mt-1">
                          {bullet.startsWith('✅') ? '' : '▸'}
                        </span>
                        <span className="text-gray-200">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.code && (
                  <Card className="bg-black/60 border-techcraft-border mb-6">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-techcraft-accent font-mono">
                          {section.code.language}
                        </span>
                        <span className="text-xs text-gray-400">
                          {section.code.caption}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <pre className="overflow-x-auto">
                        <code className="text-sm text-gray-200 font-mono">
                          {section.code.content}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                )}
                
                {section.blockquote && (
                  <blockquote className="border-l-4 border-techcraft-accent pl-6 my-8 italic">
                    <p className="text-xl text-gray-200 mb-2">
                      "{section.blockquote.text}"
                    </p>
                    <cite className="text-sm text-gray-400 not-italic">
                      — {section.blockquote.author}
                    </cite>
                  </blockquote>
                )}
              </section>
            ))}
            
            <Separator className="my-12 border-techcraft-border" />
            
            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-mono text-techcraft-accent mb-6">
                Conclusion
              </h2>
              <p className="text-gray-200 leading-relaxed mb-6">
                {content.conclusion}
              </p>
              
              {content.coda && (
                <p className="text-sm text-gray-400 italic mt-8">
                  {content.coda}
                </p>
              )}
            </section>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              {dispatch.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-techcraft-DEFAULT/50 border border-techcraft-border rounded-full text-xs text-techcraft-accent"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <FloatFooter />
    </div>
  );
};

export default HardcodedToDataDrivenPage;