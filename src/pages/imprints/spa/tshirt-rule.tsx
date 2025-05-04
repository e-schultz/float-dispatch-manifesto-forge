
import React from "react";
import ImprintHeader from "@/components/ImprintHeader";
import FloatNavBar from "@/components/FloatNavBar";
import FloatFooter from "@/components/FloatFooter";
import { CalendarIcon, TagIcon } from "lucide-react";

const TshirtRulePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FloatNavBar />
      
      <ImprintHeader
        imprint="spa"
        title="Better as a T-Shirt Rule"
        subtitle="Symbolic compression for decision-making"
        issueNumber={2}
        date="2025-05-03"
      />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <section className="mb-12">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Doctrine Fragments and Symbolic Compression</h2>
            
            <div className="bg-black/40 border border-purple-900 p-6 rounded-md mb-8">
              <p className="text-xl italic mb-4">
                "We call it the 'Better as a T-Shirt Rule.' If it's not clear enough to put on a shirt, it's not distilled."
              </p>
              <div className="flex items-center gap-2 text-sm opacity-70">
                <TagIcon className="h-4 w-4" />
                <span>#summary #tshirtrule</span>
              </div>
            </div>
            
            <p>
              The "Better as a T-Shirt Rule" is a powerful concept for distilling complex ideas into actionable, memorable forms. 
              When an idea can be compressed clearly enough to fit on a t-shirt, it's reached a level of clarity that makes it 
              immediately useful as a decision-making tool.
            </p>
            
            <p>
              These doctrine fragments become part of what we call "The Wardrobe of the Mind" - a collection of symbolic 
              compression tools that you can easily access and apply to different situations. Just as you select clothing 
              appropriate for the weather or occasion, you can select mental models appropriate for the problem at hand.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Note Necromancy: Reviving Knowledge</h2>
            
            <p>
              Connected to the T-Shirt Rule is a ritual practice we call "Note Necromancy" - the recurring ritual for 
              reviving lost fragments and weaving them into emergent knowledge forms. This practice allows old ideas to 
              gain new life and relevance through recontextualization.
            </p>
            
            <div className="bg-black/40 border border-purple-900 p-6 rounded-md my-8">
              <h3 className="font-mono text-purple-400 mb-2">The Note Necromancy Ritual</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Resurface 3 random doctrine fragments tagged 'ritualwear'</li>
                <li>Recontextualize for current workflow</li>
                <li>Cast into a float note or highlight</li>
              </ol>
              <div className="flex items-center gap-2 text-sm mt-4 opacity-70">
                <CalendarIcon className="h-4 w-4" />
                <span>Automated daily at 8:00 AM</span>
              </div>
            </div>
            
            <p>
              By systematically bringing old ideas back into focus, we create a living knowledge system that evolves 
              over time. The ritual nature of this practice ensures that valuable insights aren't lost to the digital 
              graveyard of forgotten notes.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Implementing Ritual Knowledge Systems</h2>
            
            <p>
              The practical application of these concepts involves creating structures that support ritual knowledge 
              practices. Using tools like Contentlayer with Next.js, we can build systems that automate parts of our 
              knowledge workflows:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Define clear content models for different knowledge artifacts (notes, highlights, rituals)</li>
              <li>Create automation triggers that surface content at the right time</li>
              <li>Build accessibility into the system from the ground up</li>
              <li>Implement fallback rendering options for performance</li>
            </ul>
            
            <p>
              The goal isn't to create a perfect system, but rather a flexible one that can adapt to your evolving 
              practice. Just as a well-worn t-shirt becomes more comfortable over time, your knowledge system should 
              become more attuned to your needs through continued use.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-mono text-purple-400 mb-4">Further Exploration</h2>
            
            <p>
              This article represents just one small piece of a larger knowledge practice methodology. To continue 
              exploring these concepts, consider starting your own ritual of note-taking and reflection, focusing on 
              distilling complex ideas into simple, actionable forms.
            </p>
            
            <div className="bg-black/40 border border-purple-900 p-6 rounded-md mt-8">
              <p className="italic">
                "If it's not clear enough to put on a shirt, keep refining it until it is."
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <FloatFooter />
    </div>
  );
};

export default TshirtRulePage;
