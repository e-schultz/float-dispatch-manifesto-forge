import { useState, useEffect } from 'react';
import siteData from '@/data/site.json';
import imprintsData from '@/data/imprints.json';
import dispatchesData from '@/data/dispatches.json';
import navigationData from '@/data/navigation.json';

export interface Imprint {
  id: string;
  name: string;
  displayName: string;
  description: string;
  shortDescription: string;
  tags: string[];
  colors: {
    bg: string;
    bgSolid: string;
    border: string;
    accent: string;
    accentHex: string;
  };
  icon: string;
}

export interface Dispatch {
  id: string;
  title: string;
  description: string;
  date: string;
  imprint: string;
  slug: string;
  tags: string[];
  size: string;
  featured: boolean;
  issueNumber?: number;
  subtitle?: string;
  content?: any;
}

export interface SiteData {
  title: string;
  tagline: string;
  hero: {
    title: string;
    titleAccent: string;
    description: string;
    primaryCTA: {
      text: string;
      link: string;
      icon: string;
    };
    secondaryCTA: {
      text: string;
      link: string;
      icon: string;
    };
  };
  changelog: {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
  footer: {
    copyright: string;
    tagline: string;
    links: Array<{ text: string; href: string; }>;
  };
}

// Site data hook
export function useSiteData(): SiteData {
  return siteData as SiteData;
}

// Imprints hook
export function useImprints(): Imprint[] {
  return imprintsData.imprints as Imprint[];
}

// Single imprint hook
export function useImprint(id: string): Imprint | undefined {
  const imprints = useImprints();
  return imprints.find(imprint => imprint.id === id);
}

// All dispatches hook
export function useDispatches(): Dispatch[] {
  return dispatchesData.dispatches as Dispatch[];
}

// Featured dispatches hook
export function useFeaturedDispatches(): Dispatch[] {
  const dispatches = useDispatches();
  return dispatches.filter(d => d.featured);
}

// Dispatches by imprint hook
export function useDispatchesByImprint(imprintId: string): Dispatch[] {
  const dispatches = useDispatches();
  return dispatches.filter(d => d.imprint === imprintId);
}

// Single dispatch hook
export function useDispatch(slug: string): Dispatch | undefined {
  const dispatches = useDispatches();
  return dispatches.find(d => d.slug === slug);
}

// Navigation hook
export function useNavigation() {
  return navigationData;
}

// Recent dispatches hook (for homepage)
export function useRecentDispatches(limit: number = 3): Dispatch[] {
  const dispatches = useDispatches();
  return dispatches
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}