import React, { useState, useEffect } from 'react';
import { Shield, Code, Globe, Database, Lock, Eye, Zap, Server } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [skillProgress, setSkillProgress] = useState<{[key: string]: number}>({});
  
  useEffect(() => {
    setAnimate(true);
    
    // Initialize all skills with 0 progress
    const initialProgress: {[key: string]: number} = {};
    skillCategories.forEach(category => {
      category.skills.forEach(skill => {
        initialProgress[skill] = 0;
      });
    });
    setSkillProgress(initialProgress);
    
    // Animate progress bars
    const timer = setTimeout(() => {
      const finalProgress: {[key: string]: number} = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          finalProgress[skill] = Math.floor(70 + Math.random() * 30); // Random value between 70-100
        });
      });
      setSkillProgress(finalProgress);
    }, 400);
    
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      icon: Shield,
      title: "Cybersecurity & Threat Defense",
      shortTitle: "Security",
      skills: [
        "DDoS Mitigation", "Akamai WAF Policy Management", "Bot Manager Premier", 
        "Edge DNS Security", "API Security", "SIEM Integration", "SOC Operations",
        "Vulnerability Management", "Cloud Security Architecture", "Zero-Day Mitigation",
        "ISO 27001 Compliance", "Network Security Assessments"
      ]
    },
    {
      icon: Eye,
      title: "Threat Intelligence & Analysis",
      shortTitle: "Analysis",
      skills: [
        "Traffic Analysis & Log Review", "Packet Capture Analysis", "WireShark",
        "BurpSuite", "Penetration Testing", "Security Monitoring", "Incident Response",
        "Attack Pattern Analysis", "Threat Hunting", "OSINT", "Malware Analysis",
        "Digital Forensics"
      ]
    },
    {
      icon: Lock,
      title: "Security Tools & Technologies",
      shortTitle: "Tools",
      skills: [
        "Akamai Security Suite", "SIEM Platforms", "Security Orchestration",
        "Firewall Management", "IDS/IPS", "Endpoint Security", "Identity Management",
        "Encryption Technologies", "PKI", "Security Automation", "Risk Assessment"
      ]
    },
    {
      icon: Code,
      title: "Secure Development",
      shortTitle: "Dev",
      skills: [
        "Java", "Python", "C/C++", "JavaScript", "Secure Coding Practices",
        "Application Security Testing", "OWASP Top 10", "Code Review",
        "Security Testing Frameworks", "DevSecOps", "Security by Design"
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-red-400 font-mono relative overflow-hidden">
          <span className="relative z-10">
            <span className="block sm:hidden">SKILLS</span>
            <span className="hidden sm:block">SKILLS & EXPERTISE</span>
          </span>
        </h2>
        
        {/* Category Tabs - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <button 
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`
                flex flex-col sm:flex-row items-center justify-center sm:justify-start 
                px-2 sm:px-4 md:px-5 py-2 sm:py-3 rounded-lg transition-all duration-300
                text-xs sm:text-sm md:text-base
                ${activeCategory === index 
                  ? 'bg-red-400/20 border border-red-400/50 text-red-400' 
                  : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-red-400/30 hover:text-red-300'
                }
              `}
            >
              <category.icon className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-0 sm:mr-2 ${
                activeCategory === index ? 'text-red-400' : 'text-gray-400'
              }`} />
              <span className="font-medium text-center sm:text-left leading-tight">
                <span className="hidden md:inline">{category.title}</span>
                <span className="md:hidden">{category.shortTitle}</span>
              </span>
            </button>
          ))}
        </div>
        
        {/* Active Category Content */}
        <div className={`bg-gray-900/50 backdrop-blur-sm border border-red-400/20 rounded-lg p-4 sm:p-6 md:p-8 hover:border-red-400/40 transition-all duration-300 ${
          animate ? 'animate-fade-in' : 'opacity-0'
        }`}>
          {/* Category Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
            <div className="bg-black/50 p-2 sm:p-3 rounded-lg border border-red-400/30 mb-3 sm:mb-0 sm:mr-4">
              {React.createElement(skillCategories[activeCategory].icon, { 
                className: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-red-400" 
              })}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-mono leading-tight">
              <span className="hidden sm:block">{skillCategories[activeCategory].title}</span>
              <span className="sm:hidden">{skillCategories[activeCategory].shortTitle}</span>
            </h3>
          </div>
          
          {/* Skills Grid - Enhanced Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-3 sm:p-4 hover:border-red-400/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm sm:text-base leading-tight pr-2">{skill}</span>
                  <span className="text-red-400 text-xs sm:text-sm font-mono whitespace-nowrap">
                    {skillProgress[skill] || 0}%
                  </span>
                </div>
                <Progress 
                  value={skillProgress[skill] || 0}
                  className="h-1.5 sm:h-2 bg-gray-700" 
                  indicatorClassName="bg-gradient-to-r from-red-600 to-red-400" 
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications Section - Enhanced Responsive */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-400/20 rounded-lg p-4 sm:p-6 md:p-8 max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-red-400 mb-3 sm:mb-4 md:mb-6 font-mono leading-tight">
              <span className="hidden sm:block">SECURITY CERTIFICATIONS & CONTINUOUS LEARNING</span>
              <span className="sm:hidden">CERTIFICATIONS & LEARNING</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              <span className="hidden md:block">
                Continuously expanding expertise through hands-on experience, academic research, and staying current 
                with emerging threats and security technologies. Committed to pursuing advanced security certifications 
                to strengthen my cybersecurity knowledge and capabilities.
              </span>
              <span className="md:hidden">
                Expanding expertise through hands-on experience and pursuing advanced security certifications 
                to strengthen cybersecurity knowledge and capabilities.
              </span>
            </p>
            
            {/* Certification Badges - Responsive */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              <div className="bg-gray-800/70 rounded-full px-3 sm:px-4 py-2 border border-red-400/20 text-white text-xs sm:text-sm flex items-center justify-center sm:justify-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse flex-shrink-0"></div>
                <span className="whitespace-nowrap">In Progress: CompTIA Security+</span>
              </div>
              <div className="bg-gray-800/70 rounded-full px-3 sm:px-4 py-2 border border-red-400/20 text-white text-xs sm:text-sm flex items-center justify-center sm:justify-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></div>
                <span className="whitespace-nowrap">Planned: CEH</span>
              </div>
              <div className="bg-gray-800/70 rounded-full px-3 sm:px-4 py-2 border border-red-400/20 text-white text-xs sm:text-sm flex items-center justify-center sm:justify-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></div>
                <span className="whitespace-nowrap">Planned: CISSP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;