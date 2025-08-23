
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import Hero from "../components/home/Hero";
import FeaturedDispatches from "../components/home/FeaturedDispatches";
import TemporalAwareness from "../components/home/TemporalAwareness";
import Imprints from "../components/home/Imprints";
import RitualReflections from "../components/home/RitualReflections";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AuditChangelogEntry from "../components/changelog/AuditChangelogEntry";
import { useSiteData } from '@/hooks/useData';

// Main landing page component
const Index = () => {
  const siteData = useSiteData();
  
  return (
    <MainLayout className="bg-background text-foreground">
      {/* Automatically add audit entry to changelog */}
      <AuditChangelogEntry />
      
      {/* Main content sections */}
      <Hero />
      <FeaturedDispatches />
      <TemporalAwareness />
      <Imprints />
      <RitualReflections />
      
      {/* Changelog section */}
      <section className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold font-mono mb-4">{siteData.changelog.title}</h2>
          <p className="max-w-2xl mx-auto mb-6 opacity-80">
            {siteData.changelog.description}
          </p>
          <Button asChild variant="outline" className="border-border">
            <Link to={siteData.changelog.ctaLink} aria-label="View changelog">
              {siteData.changelog.ctaText}
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

// Export memoized component to prevent unnecessary re-renders
export default React.memo(Index);
