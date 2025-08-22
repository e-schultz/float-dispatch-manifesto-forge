import React from 'react';
import FloatNavBar from '@/components/FloatNavBar';
import FloatFooter from '@/components/FloatFooter';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatNavBar />
      <main className={className}>
        {children}
      </main>
      <FloatFooter />
    </div>
  );
};

export default MainLayout;