
import React from 'react';
import { Shield, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Shield className="w-20 h-20 text-green-400 animate-pulse" />
              <div className="absolute inset-0 w-20 h-20 border-2 border-green-400 rounded-full animate-ping opacity-30"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            KENISH RAGHU
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-mono animate-fade-in">
            Security Architect & Software Developer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in">
            Cybersecurity expert with 2+ years at Akamai Technologies, specializing in cloud security, 
            threat mitigation, and full-stack development. Currently pursuing MS in Computer Science at Northeastern University.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="tel:8573528912" className="flex items-center text-green-400 hover:text-green-300 transition-colors">
              <span className="mr-2">📞</span>
              (857) 352-8912
            </a>
            <a href="mailto:raghu.ke@northeastern.edu" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              raghu.ke@northeastern.edu
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://linkedin.com/in/kenishraghu" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://kenishraghu.github.io" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors">
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
