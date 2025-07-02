
import React from 'react';
import WelcomeMessage from '@/components/WelcomeMessage';
import ProjectSteps from '@/components/ProjectSteps';
import CityCarousel from '@/components/CityCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4 py-6 max-w-md">
        <WelcomeMessage />
        <ProjectSteps />
        <CityCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
