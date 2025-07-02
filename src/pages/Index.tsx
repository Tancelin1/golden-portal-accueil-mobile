
import React from 'react';
import WelcomeMessage from '@/components/WelcomeMessage';
import ConceptSection from '@/components/ConceptSection';
import CityCards from '@/components/CityCards';
import BottomSection from '@/components/BottomSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-4 max-w-md">
        <WelcomeMessage />
        <ConceptSection />
        <CityCards />
        <BottomSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
