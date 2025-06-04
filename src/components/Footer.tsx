
import React from 'react';
import { Shield, Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black/80 border-t border-green-400/20 py-8">
      <div className="absolute right-6 bottom-20 md:bottom-24">
        <button 
          onClick={scrollToTop} 
          className="group bg-gray-900 p-3 rounded-full border border-green-400/30 shadow-lg hover:bg-gray-800 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <span className="absolute -inset-1 bg-green-400/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <ChevronUp className="w-6 h-6 text-green-400 relative" />
          </div>
        </button>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-6 w-6 text-green-400 mr-2" />
            <span className="text-lg font-bold text-white font-mono">
              <span className="text-green-400">K</span>ENISH <span className="text-green-400">R</span>AGHU
            </span>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/KenishRaghu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kenishraghu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:raghu.ke@northeastern.edu" 
              className="text-gray-400 hover:text-green-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© {currentYear} Kenish Raghu. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <span className="group relative">
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-green-400 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">CISSP</span>
                Security Certifications
              </span>
              <span className="group relative">
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-green-400 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Boston, MA
                </span>
                Location
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
