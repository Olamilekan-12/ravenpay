import React from 'react';
import type { ReactNode } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
