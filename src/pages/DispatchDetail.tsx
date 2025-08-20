import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ImprintHeader from "@/components/ImprintHeader";
import FloatNavBar from "@/components/FloatNavBar";
import FloatFooter from "@/components/FloatFooter";
import { ArrowLeft, Clock, Tag, Calendar, FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useDispatch, useImprint } from '@/hooks/useData';

const DispatchDetail = () => {
  const { imprint: imprintSlug, slug } = useParams<{ imprint: string; slug: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch(slug || '');
  const imprint = useImprint(dispatch?.imprint || '');
  
  if (!dispatch) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-mono mb-4">404</h1>
        <p className="text-xl mb-8">Dispatch not found</p>
        <Link to="/dispatches" className="text-blue-400 hover:underline">
          View all dispatches
        </Link>
      </div>
    );
  }

  if (!imprint) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Imprint configuration error</p>
      </div>
    );
  }
  
  // Determine if content exists and has structure
  const hasContent = dispatch.content && (
    dispatch.content.sections?.length > 0 || 
    dispatch.content.introduction ||
    dispatch.content.bridges?.length > 0
  );
  
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <ImprintHeader
        imprint={dispatch.imprint}
        title={dispatch.title}
        subtitle={dispatch.subtitle || dispatch.description}
        issueNumber={dispatch.issueNumber}
        date={dispatch.date}
      />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate(`/imprints/${dispatch.imprint}`)}
            className={`mb-8 ${imprint.colors.accent} hover:text-white`}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {imprint.displayName}
          </Button>
          
          {/* Article metadata */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar className="h-4 w-4" />
              <span>{dispatch.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FileText className="h-4 w-4" />
              <span>{dispatch.size}</span>
            </div>
            {dispatch.content?.metadata?.readTime && (
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-4 w-4" />
                <span>{dispatch.content.metadata.readTime} read</span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {dispatch.tags.map((tag: string) => (
              <span
                key={tag}
                className={`px-3 py-1 bg-black/50 ${imprint.colors.border} border rounded-full text-xs ${imprint.colors.accent}`}
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <Separator className={`my-8 ${imprint.colors.border}`} />
          
          {/* Main content */}
          <div className="prose prose-invert max-w-none">
            {/* Show description as intro if no other content */}
            {!hasContent ? (
              <div className="text-center py-12">
                <p className="text-xl mb-8 text-gray-300">{dispatch.description}</p>
                <Card className={`${imprint.colors.border} border bg-black/40 max-w-2xl mx-auto`}>
                  <CardContent className="pt-6">
                    <p className="text-lg mb-4">This dispatch is coming soon.</p>
                    <p className="text-sm text-gray-400">
                      The full content for this dispatch is currently being prepared. 
                      Check back soon for the complete article.
                    </p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <>
                {/* Introduction */}
                {dispatch.content.introduction && (
                  <p className="text-xl leading-relaxed mb-8 text-gray-200">
                    {dispatch.content.introduction}
                  </p>
                )}
                
                {/* Quote (for continuity bridges style) */}
                {dispatch.content.quote && (
                  <div className={`bg-black/40 border ${imprint.colors.border} p-6 rounded-md mb-8`}>
                    <p className="text-xl italic mb-4">
                      "{dispatch.content.quote}"
                    </p>
                    {dispatch.tags && (
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Tag className="h-4 w-4" />
                        <span>#{dispatch.tags.join(' #')}</span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Bridges (for continuity-bridges) */}
                {dispatch.content.bridges?.map((bridge: any) => (
                  <Card key={bridge.id} className={`bg-black/40 border ${imprint.colors.border} mb-6`}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <h3 className={`text-xl font-mono ${imprint.colors.accent}`}>{bridge.id}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Calendar className="h-4 w-4" />
                          <span>{bridge.timestamp}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-md font-mono mb-2">{bridge.title}</h4>
                        <p className="text-sm text-gray-200">{bridge.description}</p>
                      </div>
                      {bridge.activeThreads && (
                        <div className="grid gap-2 text-xs text-gray-300">
                          <div className="flex gap-2">
                            <span className={`font-mono ${imprint.colors.accent}`}>Active Threads:</span>
                            <span>{bridge.activeThreads.join(', ')}</span>
                          </div>
                          {bridge.contextMarkers && (
                            <div className="flex gap-2">
                              <span className={`font-mono ${imprint.colors.accent}`}>Context Markers:</span>
                              <span>{bridge.contextMarkers.join(', ')}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
                
                {/* Regular sections */}
                {dispatch.content.sections?.map((section: any, index: number) => (
                  <section key={index} className="mb-12">
                    <h2 className={`text-2xl font-mono ${imprint.colors.accent} mb-6`}>
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
                            <span className={`${imprint.colors.accent} mt-1`}>
                              {bullet.startsWith('✅') ? '' : '▸'}
                            </span>
                            <span className="text-gray-200">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {section.code && (
                      <Card className={`bg-black/60 border ${imprint.colors.border} mb-6`}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <span className={`text-xs ${imprint.colors.accent} font-mono`}>
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
                      <blockquote className={`border-l-4 ${imprint.colors.border} pl-6 my-8 italic`}>
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
                
                {/* Conclusion */}
                {dispatch.content.conclusion && (
                  <section className="mb-12">
                    <h2 className={`text-2xl font-mono ${imprint.colors.accent} mb-6`}>
                      Conclusion
                    </h2>
                    <p className="text-gray-200 leading-relaxed mb-6">
                      {dispatch.content.conclusion}
                    </p>
                    
                    {dispatch.content.coda && (
                      <p className="text-sm text-gray-400 italic mt-8">
                        {dispatch.content.coda}
                      </p>
                    )}
                  </section>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      
      <FloatFooter />
    </div>
  );
};

export default DispatchDetail;