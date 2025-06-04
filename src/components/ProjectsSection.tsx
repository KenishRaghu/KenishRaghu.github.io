
import React from 'react';
import { Shield, Lock, Eye, Database, Brain, Code2, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const securityProjects = [
    {
      title: "Brute-Force Password Analyzer",
      tech: "Python, Security Testing",
      icon: Lock,
      type: "Security Tool",
      description: "Advanced password security analysis tool for testing authentication mechanisms and identifying vulnerabilities in password-based systems.",
      repo: "Brute-Force-Password"
    },
    {
      title: "Key-Logger Detection System", 
      tech: "Python, Malware Analysis",
      icon: Eye,
      type: "Security Research",
      description: "Comprehensive keylogger detection and analysis system for identifying and mitigating unauthorized keystroke monitoring threats.",
      repo: "Key-Logger"
    },
    {
      title: "CTI Dashboard",
      tech: "JavaScript, Threat Intelligence",
      icon: Shield,
      type: "Cyber Threat Intelligence",
      description: "Real-time cyber threat intelligence dashboard for monitoring, analyzing, and visualizing security threats and attack patterns.",
      repo: "cti-dashboard"
    },
    {
      title: "Network Security Analysis",
      tech: "Python, Network Protocols",
      icon: Database,
      type: "Network Security",
      description: "Advanced network traffic analysis and security monitoring system for detecting anomalous patterns and potential threats.",
      repo: "Networks"
    }
  ];

  const developmentProjects = [
    {
      title: "Image Processing Security App",
      tech: "Java, Swing, MVC, Command Pattern",
      icon: Code2,
      type: "Application Security",
      description: "Secure image processing application with advanced algorithms, multi-threading optimization, and robust security implementations for file handling.",
      repo: "Image-Processing"
    },
    {
      title: "Face Recognition Security System",
      tech: "Python, Computer Vision, ML",
      icon: Brain,
      type: "Biometric Security",
      description: "Advanced facial recognition system with security-focused implementation for access control and identity verification.",
      repo: "FaceRecognition"
    },
    {
      title: "Database Security Management",
      tech: "R, SQL, Data Analysis",
      icon: Database,
      type: "Data Security",
      description: "Comprehensive database security analysis and optimization system with ETL processes and secure data handling practices.",
      repo: "DBMS-R--2"
    },
    {
      title: "AI Security Applications",
      tech: "Python, Jupyter, Machine Learning",
      icon: Brain,
      type: "AI Security",
      description: "Machine learning applications focused on cybersecurity, including threat detection, anomaly analysis, and predictive security modeling.",
      repo: "AI-Programs"
    }
  ];

  const ProjectCard = ({ project, category }: { project: any, category: string }) => (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-green-400/20 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start">
          <project.icon className="w-8 h-8 text-green-400 mr-3 mt-1" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <a 
                href={`https://github.com/KenishRaghu/${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-block px-2 py-1 bg-green-400/20 text-green-400 rounded text-xs font-semibold">
                {project.type}
              </span>
            </div>
            <p className="text-green-400 font-semibold mb-3">{project.tech}</p>
          </div>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
    </div>
  );

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-400 font-mono">
          PROJECTS
        </h2>
        
        {/* Security Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-red-400 font-mono">
            SECURITY & THREAT ANALYSIS
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {securityProjects.map((project, index) => (
              <ProjectCard key={index} project={project} category="security" />
            ))}
          </div>
        </div>

        {/* Development Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-400 font-mono">
            SECURE APPLICATION DEVELOPMENT
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {developmentProjects.map((project, index) => (
              <ProjectCard key={index} project={project} category="development" />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/KenishRaghu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
