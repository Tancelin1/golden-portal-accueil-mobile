
import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className="bg-yellow-400 rounded-lg p-4 mb-4 shadow-lg">
      <div className="flex items-center justify-center space-x-2">
        <h1 className="text-xl font-bold text-black">
          Hello there!
        </h1>
        <span className="text-black text-xl">👋</span>
      </div>
    </div>
  );
};

export default WelcomeMessage;
