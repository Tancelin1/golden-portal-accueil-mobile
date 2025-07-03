
import React from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeMessage from '@/components/WelcomeMessage';
import ConceptSection from '@/components/ConceptSection';
import CityCards from '@/components/CityCards';
import BottomSection from '@/components/BottomSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCitySelect = (cityName: string) => {
    navigate(`/city-details/${cityName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-4 max-w-md">
        <WelcomeMessage />
        <ConceptSection />
        <CityCards onCitySelect={handleCitySelect} />
        <BottomSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
