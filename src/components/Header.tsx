
import React, { useEffect, useState } from 'react';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Begin menu animation after component mounts
    setTimeout(() => setAnimateMenu(true), 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-green-900/20 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center z-50">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative flex items-center bg-black/80 rounded-full p-2">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
            </div>
            <span className="ml-3 text-lg font-bold text-white">
              <span className="text-green-400">K</span>enish <span className="text-green-400">R</span>aghu
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-1`}>
            {[
              { id: 'about', label: 'About' },
              { id: 'education', label: 'Education' },
              { id: 'experience', label: 'Experience' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-gray-300 hover:text-green-400 transition-all duration-300 ${
                  animateMenu ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <a 
              href="https://github.com/KenishRaghu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative ml-2 px-5 py-2 bg-green-400/10 text-green-400 border border-green-400/30 rounded-full hover:bg-green-400/20 transition-all duration-300 flex items-center"
            >
              <span>GitHub</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 z-50" 
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-green-400" />
            ) : (
              <Menu className="h-6 w-6 text-green-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-3 mt-4 pb-5 border-t border-green-400/20 pt-4">
            {[
              { id: 'about', label: 'About Me' },
              { id: 'education', label: 'Education' },
              { id: 'experience', label: 'Experience' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-green-400/10 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://github.com/KenishRaghu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mx-4 px-4 py-2 bg-green-400/10 text-green-400 border border-green-400/30 rounded-md hover:bg-green-400/20 transition-all duration-300 flex items-center justify-center"
            >
              <span>GitHub</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
