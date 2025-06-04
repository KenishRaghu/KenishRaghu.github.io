
import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Shield, Code, ChevronDown, ChevronUp } from 'lucide-react';

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  const experiences = [
    {
      company: "Akamai Technologies",
      role: "Security Architect",
      location: "Bengaluru, India",
      period: "Feb 2022 – Aug 2024",
      icon: Shield,
      achievements: [
        "Deployed and optimized Akamai's Cloud Security Suite, enhancing WAF and Bot Manager Premier to reduce OWASP vulnerabilities and improve threat detection accuracy by 70%",
        "Conducted threat intelligence and monitoring using SIEM, analyzing web endpoint traffic to detect and mitigate risks, achieving an 80% reduction in response time",
        "Developed real-time threat mitigation strategies, analyzing attack patterns to prevent bot attacks and volumetric traffic surges, reducing security incidents by 60% via 300+ security policy configurations",
        "Led integration of advanced cloud security solutions including Bot Manager Premier (Web & Mobile), WAF, SIEM, and Edge DNS",
        "Designed and implemented custom security policies and firewall signatures, mitigating zero-day vulnerabilities and contributing to ISO 27001 compliance"
      ]
    },
    {
      company: "Rx Digi Health Platform Pvt. Ltd",
      role: "Software Developer Intern",
      location: "Bengaluru, India",
      period: "Jan 2021 – May 2021",
      icon: Code,
      achievements: [
        "Designed and deployed the Rx Digi Health Homepage using Angular and JavaScript, delivering a responsive UI with seamless cross-device compatibility",
        "Developed RESTful APIs with Node.js and Flask, enhancing data flow and optimizing communication between front-end and back-end components",
        "Optimized database performance for MySQL and MongoDB, improving query efficiency by 30% through indexing and query tuning",
        "Automated CI/CD pipelines using Linux shell scripting and JIRA, reducing manual effort and deployment time by 70%",
        "Integrated data visualization tools using R and Tailwind CSS, creating interactive dashboards"
      ]
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-400 font-mono relative overflow-hidden">
          <span className="relative z-10">WORK EXPERIENCE</span>
          <span className="absolute top-1/2 left-0 w-full h-0.5 bg-green-400/30"></span>
          <span className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-green-400 animate-pulse"></span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`bg-gray-900/50 backdrop-blur-sm border border-green-400/20 rounded-lg hover:border-green-400/50 transition-all duration-300 shadow-lg shadow-green-900/20 ${
                animate ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start mb-4 md:mb-0">
                    <div className="bg-black/50 p-3 rounded-lg border border-green-400/30 mr-4">
                      <exp.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <h4 className="text-xl text-green-400 font-semibold mb-2">{exp.company}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {expandedIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-green-400 animate-pulse" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-green-400" />
                    )}
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="space-y-3 mt-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1 flex-shrink-0">▶</span>
                        <span className="text-gray-300 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center space-x-2 py-1 px-3 rounded-full border border-green-400/30 text-green-400 text-sm">
            <Shield className="w-4 h-4" />
            <span>Security roles from May - Dec 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
