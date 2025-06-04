
import React from 'react';
import { Image, BarChart3, Calendar, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Image Processing Application",
      tech: "Java, Swing, MVC, Command Pattern",
      period: "Sept 2024 – Dec 2024",
      icon: Image,
      description: [
        "Developed an MVC-based image processing app, optimizing algorithms and multi-threading for improved efficiency",
        "Designed a Swing-based GUI and integrated Command/Factory patterns to enhance user engagement",
        "Expanded support for JPG, PNG, and PPM formats, boosting compatibility and performance by 80%",
        "Introduced script-based and interactive modes, improving automation by 25%"
      ]
    },
    {
      title: "Data Pipeline Optimization",
      tech: "Data Analysis, ETL, Data Modeling & Visualization",
      period: "Sept 2024 – Dec 2024",
      icon: BarChart3,
      description: [
        "Developed an end-to-end data pipeline using R and SQL, managing ETL processes to improve data integrity and optimize SQL queries, achieving a 40% performance improvement",
        "Designed an optimized relational database schema, improving data retrieval by 35%",
        "Automated reporting workflows using R Markdown and Shiny, reducing manual tasks by 45%",
        "Integrated SQL and R for seamless data extraction, transformation, and aggregation",
        "Collaborated with cross-functional teams to align data architecture with business needs"
      ]
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-purple-400 font-mono">
          PROJECT DEPLOYMENTS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start mb-4">
                <project.icon className="w-8 h-8 text-purple-400 mr-3 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-purple-400 font-semibold mb-2">{project.tech}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.period}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
