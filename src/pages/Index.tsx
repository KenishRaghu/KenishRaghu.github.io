
import React from 'react';
import MatrixBackground from '../components/MatrixBackground';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <EducationSection />
        <ExperienceSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
