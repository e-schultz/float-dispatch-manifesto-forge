
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
        </div>
      </main>
      
      <FloatFooter />
    </div>
  );
};

export default ChangelogPage;
