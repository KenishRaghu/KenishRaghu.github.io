
import React from 'react';
import { Shield, Lock, Eye, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400 font-mono">
          ABOUT ME
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Shield className="w-16 h-16 text-cyan-400" />
                  <div className="absolute -top-2 -right-2">
                    <Lock className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">SECURITY ARCHITECT & DEFENDER</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a cybersecurity professional with over 2+ years of hands-on experience at Akamai Technologies, 
                  specializing in cloud security architecture, threat mitigation, and advanced security implementations. 
                  Currently pursuing my Master's in Computer Science at Northeastern University to deepen my expertise 
                  in emerging security technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My passion lies in building robust security frameworks that protect digital assets while enabling 
                  seamless user experiences. I thrive on analyzing complex attack patterns, implementing zero-day 
                  vulnerability mitigations, and developing innovative security solutions.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Eye className="w-6 h-6 text-blue-400 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold">Threat Detection</h4>
                    <p className="text-gray-400 text-sm">Advanced monitoring & analysis</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Shield className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold">Security Architecture</h4>
                    <p className="text-gray-400 text-sm">Cloud & enterprise security design</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                  <div>
                    <h4 className="text-white font-semibold">Incident Response</h4>
                    <p className="text-gray-400 text-sm">Rapid threat mitigation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                <Shield className="w-4 h-4" />
                <span>Available for Security Roles: May - Dec 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
