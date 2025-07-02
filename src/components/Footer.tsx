
import React, { useState } from 'react';
import { Cloud } from 'lucide-react';

const Footer = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <footer className="bg-white border-t border-gray-200 mt-8">
      <div className="p-4">
        {/* Cloud button with easter egg */}
        <div className="flex justify-center mb-4">
          <button className="relative bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg hover-scale transition-all duration-300">
            <Cloud className="w-5 h-5" />
            <span className="font-medium">Choisis ton easter egg</span>
            {/* Cute bubble with eyes */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center shadow-md animate-bounce">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </button>
        </div>

        {/* Navigation bar */}
        <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3 shadow-inner">
          {/* Dropdown menu */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex flex-col items-center space-y-1 p-2 rounded hover:bg-white transition-colors"
            >
              <div className="w-5 h-0.5 bg-gray-600"></div>
              <div className="w-5 h-0.5 bg-gray-600"></div>
              <div className="w-5 h-0.5 bg-gray-600"></div>
            </button>
            
            {showDropdown && (
              <div className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px] z-10">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Accueil</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Easter Eggs</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Villes</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profil</a>
              </div>
            )}
          </div>

          {/* Ynov.com text */}
          <div className="text-center">
            <span className="text-gray-600 font-medium">ynov.com</span>
          </div>

          {/* Information button */}
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold hover:bg-blue-600 transition-colors cursor-pointer">
            i
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
