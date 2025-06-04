
import React from 'react';
import { Shield, Code, Globe, Database } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Security",
      skills: [
        "DDoS Mitigation", "Akamai WAF", "Bot Manager Premier", "Edge DNS",
        "API Security", "SIEM Integration", "Vulnerability Management", "Cloud Security",
        "Traffic Analysis", "Incident Response", "WireShark", "BurpSuite", "Penetration Testing"
      ]
    },
    {
      icon: Code,
      title: "Programming",
      skills: [
        "Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS", "R",
        "Object-Oriented Programming", "JUnit Testing"
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: [
        "Angular", "React", "Node.js", "Flask", "Tailwind CSS",
        "REST APIs", "MySQL", "NoSQL", "AWS", "Linux", "JIRA"
      ]
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-400 font-mono">
          TECHNICAL ARSENAL
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-green-400/20 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white font-mono">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block bg-gray-800/70 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 border border-gray-700 hover:border-green-400/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
