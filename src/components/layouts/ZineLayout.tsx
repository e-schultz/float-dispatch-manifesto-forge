import React, { useEffect } from 'react';
import FloatNavBar from '@/components/FloatNavBar';
import FloatFooter from '@/components/FloatFooter';

interface ZineLayoutProps {
  children: React.ReactNode;
}

const ZineLayout: React.FC<ZineLayoutProps> = ({ children }) => {
  useEffect(() => {
    // Terminal cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.createElement('div');
      cursor.style.position = 'fixed';
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.style.width = '2px';
      cursor.style.height = '20px';
      cursor.style.background = 'hsl(var(--sigil-light))';
      cursor.style.pointerEvents = 'none';
      cursor.style.opacity = '0.5';
      cursor.style.zIndex = '9999';
      document.body.appendChild(cursor);
      
      setTimeout(() => {
        cursor.style.opacity = '0';
        setTimeout(() => cursor.remove(), 500);
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-sigil-light font-mono cursor-crosshair relative">
      {/* Skip link for accessibility */}
      <a 
        href="#main" 
        className="skip-link"
      >
        Skip to main content
      </a>
      
      {/* Scanlines overlay */}
      <div className="fixed inset-0 bg-scanlines pointer-events-none z-40" />
      
      <FloatNavBar />
      
      <main id="main" className="relative z-30">
        {children}
      </main>
      
      <FloatFooter />
    </div>
  );
};

export default ZineLayout;