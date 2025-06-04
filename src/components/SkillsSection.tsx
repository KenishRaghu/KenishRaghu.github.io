
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
      skills: [
        "Akamai Security Suite", "SIEM Platforms", "Security Orchestration",
        "Firewall Management", "IDS/IPS", "Endpoint Security", "Identity Management",
        "Encryption Technologies", "PKI", "Security Automation", "Risk Assessment"
      ]
    },
    {
      icon: Code,
      title: "Secure Development",
      skills: [
        "Java", "Python", "C/C++", "JavaScript", "Secure Coding Practices",
        "Application Security Testing", "OWASP Top 10", "Code Review",
        "Security Testing Frameworks", "DevSecOps", "Security by Design"
      ]
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-red-400 font-mono relative overflow-hidden">
          <span className="relative z-10">SKILLS & EXPERTISE</span>
          <span className="absolute top-1/2 left-0 w-full h-0.5 bg-red-400/30"></span>
          <span className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-red-400 animate-pulse"></span>
        </h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {skillCategories.map((category, index) => (
            <button 
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`
                flex items-center px-5 py-3 rounded-lg transition-all duration-300
                ${activeCategory === index 
                  ? 'bg-red-400/20 border border-red-400/50 text-red-400' 
                  : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-red-400/30 hover:text-red-300'
                }
              `}
            >
              <category.icon className={`w-5 h-5 mr-2 ${activeCategory === index ? 'text-red-400' : 'text-gray-400'}`} />
              <span className="font-medium hidden sm:inline">{category.title}</span>
              <span className="font-medium sm:hidden">
                {category.title.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
        
        {/* Active Category Content */}
        <div className={`bg-gray-900/50 backdrop-blur-sm border border-red-400/20 rounded-lg p-8 hover:border-red-400/40 transition-all duration-300 ${
          animate ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="flex items-center mb-8">
            <div className="bg-black/50 p-3 rounded-lg border border-red-400/30 mr-4">
              {React.createElement(skillCategories[activeCategory].icon, { className: "w-10 h-10 text-red-400" })}
            </div>
            <h3 className="text-2xl font-bold text-white font-mono">
              {skillCategories[activeCategory].title}
            </h3>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-red-400/30 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">{skill}</span>
                  <span className="text-red-400 text-sm font-mono">{skillProgress[skill] || 0}%</span>
                </div>
                <Progress 
                  value={skillProgress[skill] || 0}
                  className="h-2 bg-gray-700" 
                  indicatorClassName="bg-gradient-to-r from-red-600 to-red-400" 
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-400/20 rounded-lg p-6 max-w-4xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-xl font-bold text-red-400 mb-4 font-mono">SECURITY CERTIFICATIONS & CONTINUOUS LEARNING</h3>
            <p className="text-gray-300 leading-relaxed">
              Continuously expanding expertise through hands-on experience, academic research, and staying current 
              with emerging threats and security technologies. Committed to pursuing advanced security certifications 
              including CISSP, CEH, and cloud security specializations.
            </p>
            
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="bg-gray-800/70 rounded-full px-4 py-2 border border-red-400/20 text-white text-sm flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                In Progress: CISSP
              </div>
              <div className="bg-gray-800/70 rounded-full px-4 py-2 border border-red-400/20 text-white text-sm flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                In Progress: AWS Security Speciality
              </div>
              <div className="bg-gray-800/70 rounded-full px-4 py-2 border border-red-400/20 text-white text-sm flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                Planned: CEH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
