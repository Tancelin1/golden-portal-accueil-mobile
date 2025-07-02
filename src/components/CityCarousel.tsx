
import React, { useState } from 'react';

const CityCarousel = () => {
  const [currentCity, setCurrentCity] = useState(0);
  
  const cities = [
    { name: "Wazemme", description: "Point de départ mystérieux" },
    { name: "Gare Lille Flandres", description: "Hub de transport magique" },
    { name: "Vieux Lille", description: "Quartier historique enchanté" },
    { name: "Citadelle", description: "Forteresse aux secrets cachés" },
    { name: "Euralille", description: "District futuriste" }
  ];

  const nextCity = () => {
    setCurrentCity((prev) => (prev + 1) % cities.length);
  };

  const prevCity = () => {
    setCurrentCity((prev) => (prev - 1 + cities.length) % cities.length);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        🌍 Choisis ta ville
      </h2>
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 text-center min-h-[120px] flex flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {cities[currentCity].name}
          </h3>
          <p className="text-gray-600">
            {cities[currentCity].description}
          </p>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-gray-50">
          <button
            onClick={prevCity}
            className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            ←
          </button>
          
          <div className="flex space-x-2">
            {cities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCity(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentCity ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextCity}
            className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityCarousel;
