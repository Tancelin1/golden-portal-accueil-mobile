
import React from 'react';
import { X, Star, MapPin, Building, TreePine, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CityCardsProps {
  onCitySelect?: (cityName: string) => void;
}

const CityCards = ({ onCitySelect }: CityCardsProps) => {
  const navigate = useNavigate();

  const cities = [
    {
      name: 'Wazemmes',
      icon: <X className="w-8 h-8 text-red-600" strokeWidth={4} />,
      bgColor: 'bg-orange-200'
    },
    {
      name: 'Gare Lille Flandres',
      icon: <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />,
      bgColor: 'bg-yellow-200'
    },
    {
      name: 'Vieux Lille',
      icon: <Building className="w-8 h-8 text-blue-600" />,
      bgColor: 'bg-blue-200'
    },
    {
      name: 'Citadelle',
      icon: <TreePine className="w-8 h-8 text-green-600" />,
      bgColor: 'bg-green-200'
    },
    {
      name: 'Grand Place',
      icon: <Landmark className="w-8 h-8 text-purple-600" />,
      bgColor: 'bg-purple-200'
    },
    {
      name: 'Euralille',
      icon: <MapPin className="w-8 h-8 text-indigo-600" />,
      bgColor: 'bg-indigo-200'
    }
  ];

  const handleCityChoice = (cityName: string) => {
    if (onCitySelect) {
      onCitySelect(cityName);
    } else {
      // Navigate to guidance page for the selected city
      navigate('/guidance');
    }
  };

  const handleCityInfo = (cityName: string) => {
    navigate('/info-point');
  };

  return (
    <div className="mb-4">
      <div className="flex space-x-3 overflow-x-auto">
        {cities.map((city, index) => (
          <div key={index} className={`${city.bgColor} rounded-lg p-4 min-w-[140px] flex-shrink-0 border-2 border-gray-300`}>
            <div className="flex justify-center mb-2">
              {city.icon}
            </div>
            <h3 className="text-center text-black font-semibold text-sm mb-3">
              {city.name}
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => handleCityChoice(city.name)}
                className="w-full bg-black text-white py-1 px-3 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors"
              >
                choisir
              </button>
              <button 
                onClick={() => handleCityInfo(city.name)}
                className="w-full bg-white text-black py-1 px-3 rounded-full text-xs font-medium border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCards;
