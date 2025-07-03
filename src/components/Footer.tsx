
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Info } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMenuClick = (route: string) => {
    navigate(route);
    setShowDropdown(false);
  };

  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="flex">
        {/* Menu section */}
        <div className="flex-1 relative border-r border-gray-300">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full p-4 flex justify-center items-center hover:bg-gray-50 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          
          {showDropdown && (
            <div className="absolute bottom-full left-0 right-0 bg-white rounded-t-lg shadow-lg border border-gray-200 py-2 z-10">
              <button onClick={() => handleMenuClick('/')} className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left">Accueil</button>
              <button onClick={() => handleMenuClick('/city-selection')} className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left">Choix de ville</button>
              <button onClick={() => handleMenuClick('/history')} className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left">Historique</button>
              <button onClick={() => handleMenuClick('/no-points')} className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left">Aucun point</button>
            </div>
          )}
        </div>

        {/* Ynov.com text with more spacing */}
        <div className="flex-1 border-r border-gray-300 flex items-center justify-center p-6">
          <span className="text-gray-700 font-medium text-lg tracking-wider">y n o v . c o m</span>
        </div>

        {/* Information button */}
        <div className="flex-1 flex items-center justify-center p-4">
          <button 
            onClick={() => navigate('/info-point')}
            className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold hover:bg-blue-600 transition-colors"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
