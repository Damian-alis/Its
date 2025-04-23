import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Search, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <span className="text-teal-600 font-bold text-2xl">InfoSalud</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="nav-link">
              {t.home}
            </NavLink>
            <NavLink to="/tipos" className="nav-link">
              {t.types}
            </NavLink>
            <NavLink to="/prevencion" className="nav-link">
              {t.prevention}
            </NavLink>
            <NavLink to="/sintomas" className="nav-link">
              {t.symptoms}
            </NavLink>
            <NavLink to="/tratamientos" className="nav-link">
              {t.treatments}
            </NavLink>
            <NavLink to="/mitos-y-realidades" className="nav-link">
              {t.mythsAndFacts}
            </NavLink>
            <NavLink to="/recursos" className="nav-link">
              {t.resources}
            </NavLink>
            <NavLink to="/cuestionario" className="nav-link">
              {t.quiz}
            </NavLink>
          </div>

          {/* Actions */}
          <div className="flex items-center">
            <button 
              onClick={toggleSearch}
              className="p-2 text-gray-700 hover:text-teal-600 transition-colors"
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              <Search size={20} />
            </button>
            <button 
              onClick={toggleLanguage}
              className="p-2 ml-2 text-gray-700 hover:text-teal-600 transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={20} />
              <span className="ml-1 hidden md:inline">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button 
              onClick={toggleMenu}
              className="ml-2 p-2 text-gray-700 hover:text-teal-600 transition-colors md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 px-2 absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300">
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-teal-600"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300">
            <div className="flex flex-col space-y-4 p-4">
              <NavLink to="/" className="mobile-nav-link" onClick={toggleMenu}>
                {t.home}
              </NavLink>
              <NavLink to="/tipos" className="mobile-nav-link" onClick={toggleMenu}>
                {t.types}
              </NavLink>
              <NavLink to="/prevencion" className="mobile-nav-link" onClick={toggleMenu}>
                {t.prevention}
              </NavLink>
              <NavLink to="/sintomas" className="mobile-nav-link" onClick={toggleMenu}>
                {t.symptoms}
              </NavLink>
              <NavLink to="/tratamientos" className="mobile-nav-link" onClick={toggleMenu}>
                {t.treatments}
              </NavLink>
              <NavLink to="/mitos-y-realidades" className="mobile-nav-link" onClick={toggleMenu}>
                {t.mythsAndFacts}
              </NavLink>
              <NavLink to="/recursos" className="mobile-nav-link" onClick={toggleMenu}>
                {t.resources}
              </NavLink>
              <NavLink to="/cuestionario" className="mobile-nav-link" onClick={toggleMenu}>
                {t.quiz}
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;