
import React from 'react';
import { Mail, Linkedin, ExternalLink, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-12 h-12 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-mono">SECURE. DEVELOP. INNOVATE.</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Available for exciting opportunities from May - Dec 2025. 
            Let's build secure and innovative solutions together.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:raghu.ke@northeastern.edu" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
            <a href="https://linkedin.com/in/kenishraghu" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="https://kenishraghu.github.io" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <ExternalLink className="w-5 h-5 mr-2" />
              Portfolio
            </a>
          </div>
          <div className="text-gray-500 text-sm">
            <p>&copy; 2024 Kenish Raghu. All rights reserved.</p>
            <p className="mt-2">Availability: May - Dec 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
