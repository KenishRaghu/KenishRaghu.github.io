
import React from 'react';
import { Shield, Code, Globe, Database, Lock, Eye, Zap, Server } from 'lucide-react';

const SkillsSection = () => {
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
        <h2 className="text-4xl font-bold text-center mb-16 text-red-400 font-mono">
          SKILLS & EXPERTISE
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-red-400/20 rounded-lg p-6 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-xl font-bold text-white font-mono">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block bg-gray-800/70 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 border border-gray-700 hover:border-red-400/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-400/20 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-red-400 mb-4 font-mono">SECURITY CERTIFICATIONS & CONTINUOUS LEARNING</h3>
            <p className="text-gray-300 leading-relaxed">
              Continuously expanding expertise through hands-on experience, academic research, and staying current 
              with emerging threats and security technologies. Committed to pursuing advanced security certifications 
              including CISSP, CEH, and cloud security specializations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
