import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Zap, ExternalLink, Terminal, Download } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "SECURITY ARCHITECT & DEFENDER";
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    const timer = setInterval(() => {
      if (counter < fullText.length) {
        setTypedText(prev => prev + fullText[counter]);
        setCounter(prev => prev + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setTypedText("");
          setCounter(0);
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <section className="pt-32 pb-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-400 font-mono">
          <span className="relative inline-block">
            ABOUT ME
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-400/50"></span>
          </span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div 
            className={`bg-gray-900/50 backdrop-blur-sm border border-green-400/20 rounded-lg p-8 hover:border-green-400/50 transition-all duration-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Profile Image Section */}
              <div className="text-center">
                <div className="relative inline-block group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full opacity-50 blur-sm group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  
                  <div className="relative">
                    <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
                      <img 
                        src="/lovable-uploads/61e2dec6-a1bb-4ad9-8286-df80df90773d.png" 
                        alt="Kenish Raghu - Security Architect"
                        className="w-full h-full object-cover filter saturate-100 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="absolute -top-4 -right-4 z-10">
                      <div className="relative">
                        <span className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-300 rounded-full opacity-70 blur animate-pulse"></span>
                        <Shield className="relative w-12 h-12 text-green-400 bg-gray-900 rounded-full p-2" />
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 z-10">
                      <div className="relative">
                        <span className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-70 blur animate-pulse"></span>
                        <Lock className="relative w-10 h-10 text-cyan-400 bg-gray-900 rounded-full p-2" />
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-2 right-5 z-10 hidden md:block">
                      <Terminal className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono">KENISH RAGHU</h3>
                    <p className="text-green-400 font-semibold text-lg h-6 font-mono">
                      {typedText}
                      <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-blink"></span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="text-left">
                <div className="mb-8 space-y-6">
                  <p className="text-gray-300 leading-relaxed text-lg relative pl-4 border-l-2 border-green-400/50">
                    I'm a cybersecurity professional with over 2+ years of hands-on experience at Akamai Technologies, 
                    specializing in cloud security architecture, threat mitigation, and advanced security implementations. 
                    Currently pursuing my Master's in Computer Science at Northeastern University to deepen my expertise 
                    in emerging security technologies.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg relative pl-4 border-l-2 border-green-400/50">
                    My passion lies in building robust security frameworks that protect digital assets while enabling 
                    seamless user experiences. I thrive on analyzing complex attack patterns, implementing zero-day 
                    vulnerability mitigations, and developing innovative security solutions.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="group flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors hover:bg-gray-800/70">
                    <div className="relative">
                      <span className="absolute -inset-1 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></span>
                      <Eye className="relative w-6 h-6 text-blue-400 mr-3" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Threat Detection</h4>
                      <p className="text-gray-400 text-sm">Advanced monitoring & analysis</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors hover:bg-gray-800/70">
                    <div className="relative">
                      <span className="absolute -inset-1 bg-green-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></span>
                      <Shield className="relative w-6 h-6 text-green-400 mr-3" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Security Architecture</h4>
                      <p className="text-gray-400 text-sm">Cloud & enterprise security design</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors hover:bg-gray-800/70">
                    <div className="relative">
                      <span className="absolute -inset-1 bg-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></span>
                      <Zap className="relative w-6 h-6 text-yellow-400 mr-3" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Incident Response</h4>
                      <p className="text-gray-400 text-sm">Rapid threat mitigation</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
  <div className="relative group inline-block">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-60 blur transition duration-300 group-hover:opacity-100 group-hover:duration-200"></div>
    <a 
      href="https://drive.google.com/file/d/1Tkora_IU8gBpmxTkeHq3cfd2t4ZdcRQ5/view?usp=sharing" 
      download="Kenish_Raghu_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center space-x-2 bg-gray-900 text-green-400 px-6 py-3 rounded-full text-sm font-semibold border border-green-400/30 hover:bg-gray-800 transition-colors"
    >
      <Download className="w-4 h-4" />
      <span>Download Resume</span>
    </a>
  </div>
                  
                  <div className="inline-flex items-center space-x-2 bg-green-400/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                    <Shield className="w-4 h-4" />
                    <span>Available for Security Roles: May - Dec 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
