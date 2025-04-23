import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LanguageProvider } from '../context/LanguageContext';

const MainLayout: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar scrolled={scrolled} />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default MainLayout;