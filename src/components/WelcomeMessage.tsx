
import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className="bg-yellow-400 rounded-lg p-6 mb-6 shadow-lg animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        🎉 Bienvenue dans l'aventure !
      </h1>
      <p className="text-gray-700 text-lg">
        Prépare-toi à vivre une expérience unique de chasse aux easter eggs en réalité augmentée !
      </p>
    </div>
  );
};

export default WelcomeMessage;
