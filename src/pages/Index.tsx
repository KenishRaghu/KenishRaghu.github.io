
import React from 'react';
import MatrixBackground from '../components/MatrixBackground';
import Header from '../components/Header';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
