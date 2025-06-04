
import React from 'react';
import { Shield, Lock, Eye, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-400 font-mono">
          ABOUT ME
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-400/20 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Profile Image Section */}
              <div className="text-center">
                <div className="relative inline-block">
                  <img 
                    src="/lovable-uploads/61e2dec6-a1bb-4ad9-8286-df80df90773d.png" 
                    alt="Kenish Raghu - Security Architect"
                    className="w-80 h-80 rounded-full object-cover border-4 border-green-400/30 shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4">
                    <Shield className="w-12 h-12 text-green-400 bg-gray-900 rounded-full p-2" />
                  </div>
                  <div className="absolute -bottom-4 -left-4">
                    <Lock className="w-10 h-10 text-cyan-400 bg-gray-900 rounded-full p-2" />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-mono">KENISH RAGHU</h3>
                  <p className="text-green-400 font-semibold text-lg">SECURITY ARCHITECT & DEFENDER</p>
                </div>
              </div>
              
              {/* Content Section */}
              <div>
                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    I'm a cybersecurity professional with over 2+ years of hands-on experience at Akamai Technologies, 
                    specializing in cloud security architecture, threat mitigation, and advanced security implementations. 
                    Currently pursuing my Master's in Computer Science at Northeastern University to deepen my expertise 
                    in emerging security technologies.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    My passion lies in building robust security frameworks that protect digital assets while enabling 
                    seamless user experiences. I thrive on analyzing complex attack patterns, implementing zero-day 
                    vulnerability mitigations, and developing innovative security solutions.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors">
                    <Eye className="w-6 h-6 text-blue-400 mr-3" />
                    <div>
                      <h4 className="text-white font-semibold">Threat Detection</h4>
                      <p className="text-gray-400 text-sm">Advanced monitoring & analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <div>
                      <h4 className="text-white font-semibold">Security Architecture</h4>
                      <p className="text-gray-400 text-sm">Cloud & enterprise security design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors">
                    <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                    <div>
                      <h4 className="text-white font-semibold">Incident Response</h4>
                      <p className="text-gray-400 text-sm">Rapid threat mitigation</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
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
