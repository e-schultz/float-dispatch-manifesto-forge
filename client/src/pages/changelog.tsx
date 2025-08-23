
import React from "react";
import FloatNavBar from "../components/FloatNavBar";
import FloatFooter from "../components/FloatFooter";
import Changelog from "../components/changelog/Changelog";
import { Helmet } from "react-helmet"; // Note: Would need to install this dependency if not present

const ChangelogPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Add page metadata for better SEO */}
      <Helmet>
        <title>FLOAT Project Changelog</title>
        <meta name="description" content="Track changes, improvements, and milestones in the FLOAT project" />
      </Helmet>
      
      <FloatNavBar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold font-mono mb-8" id="main-heading">FLOAT Project Changelog</h1>
          <p className="text-lg opacity-80 mb-8">
            Track changes, improvements, and milestones in the FLOAT project. Mark items as complete
            as you implement each change.
          </p>
          <Changelog />
          
          {/* Auto-added accessibility improvement entry */}
          <div className="hidden">
            {/* This hidden div contains a script that will automatically add a changelog entry */}
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  try {
                    // Check if this entry already exists
                    const existingEntries = JSON.parse(localStorage.getItem('float-changelog') || '[]');
                    const entryExists = existingEntries.some(entry => 
                      entry.description && entry.description.includes('Improved typography contrast'));
                    
                    if (!entryExists) {
                      // Create new entry
                      const newEntry = {
                        id: 'a11y-' + Date.now(),
                        description: 'Improved typography contrast on Continuity Bridges page to fix black-on-black text accessibility issues',
                        completed: true,
                        timestamp: new Date().toISOString()
                      };
                      
                      // Add to localStorage
                      const updatedEntries = [newEntry, ...existingEntries];
                      localStorage.setItem('float-changelog', JSON.stringify(updatedEntries));
                      
                      // Optional: Trigger UI refresh if component is already mounted
                      if (window.dispatchEvent) {
                        window.dispatchEvent(new Event('storage'));
                      }
                    }
                  } catch (error) {
                    console.error('Error adding accessibility changelog entry:', error);
                  }
                `
              }}
            />
          </div>
        </div>
      </main>
      
      <FloatFooter />
    </div>
  );
};

export default ChangelogPage;
