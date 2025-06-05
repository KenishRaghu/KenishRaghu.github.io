
import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Computer Science",
      location: "Boston, Massachusetts",
      period: "Sept 2024 – May 2026 (Expected)",
      status: "In Progress"
    },
    {
      institution: "BMS College Of Engineering",
      degree: "Bachelor of Engineering, Computer Science",
      location: "Bengaluru, India",
      period: "Aug 2018 – Jul 2022",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl font-bold text-yellow-400 font-mono relative z-10">
              ACADEMIC CREDENTIALS
            </h2>
            
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-start mb-4">
                <GraduationCap className="w-8 h-8 text-yellow-400 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-lg text-yellow-400 font-semibold mb-3">{edu.institution}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold">
                      {edu.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
