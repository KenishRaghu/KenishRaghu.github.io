
import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Lock, Eye, ChevronDown } from 'lucide-react';

const WelcomeSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const texts = [
    'SECURING DIGITAL FRONTIERS',
    'DEFENDING AGAINST CYBER THREATS',
    'BUILDING SECURE ARCHITECTURES',
    'PROTECTING DIGITAL ASSETS'
  ];

  useEffect(() => {
    const currentFullText = texts[currentIndex];
    
    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        const timer = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentIndex, isTyping, texts]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Welcome Content */}
        <div className="mb-12">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-lg opacity-60 animate-pulse"></div>
            <Shield className="relative w-24 h-24 text-green-400 mx-auto animate-float" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-mono">
            <span className="text-green-400">CYBER</span>
            <span className="text-white">SEC</span>
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8">
            <div className="text-2xl md:text-3xl font-mono text-green-400">
              <span className="inline-block">{'>'}</span>
              <span className="ml-2">{currentText}</span>
              <span className="inline-block w-1 h-8 bg-green-400 ml-1 animate-blink"></span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Welcome to my digital fortress. I'm <span className="text-green-400 font-semibold">Kenish Raghu</span>, 
            a Security Architect dedicated to building impenetrable defenses in the ever-evolving cyber landscape.
          </p>
        </div>

        {/* Interactive Security Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="group bg-gray-900/50 backdrop-blur-sm border border-green-400/20 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 hover:bg-gray-900/70">
            <div className="relative">
              <span className="absolute -inset-1 bg-green-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></span>
              <Terminal className="relative w-12 h-12 text-green-400 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">2+</h3>
            <p className="text-gray-400">Years in Cybersecurity</p>
          </div>
          
          <div className="group bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-900/70">
            <div className="relative">
              <span className="absolute -inset-1 bg-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></span>
              <Lock className="relative w-12 h-12 text-cyan-400 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">50+</h3>
            <p className="text-gray-400">Security Implementations</p>
          </div>
          
          <div className="group bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 hover:bg-gray-900/70">
            <div className="relative">
              <span className="absolute -inset-1 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></span>
              <Eye className="relative w-12 h-12 text-blue-400 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">24/7</h3>
            <p className="text-gray-400">Threat Monitoring</p>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button 
          onClick={scrollToAbout}
          className="group animate-bounce hover:animate-none transition-all duration-300"
          aria-label="Scroll to About section"
        >
          <div className="flex flex-col items-center text-green-400 hover:text-green-300 transition-colors">
            <span className="text-sm font-mono mb-2 opacity-80">EXPLORE MY PROFILE</span>
            <div className="relative">
              <span className="absolute -inset-2 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></span>
              <ChevronDown className="relative w-6 h-6" />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
