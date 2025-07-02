
import React from 'react';

const BottomSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-pink-300 rounded-lg p-4 mb-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-2 left-2 text-black text-lg">✯</div>
        <div className="absolute top-4 right-4 text-black text-lg">✯</div>
        <div className="absolute bottom-8 left-4 text-black text-lg">✯</div>
      </div>
      
      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 100 10" className="w-full h-4 fill-pink-400">
          <path d="M0,5 Q25,0 50,5 T100,5 L100,10 L0,10 Z" />
        </svg>
      </div>
      
      {/* Cloud with text and cute character */}
      <div className="flex items-center justify-center pt-8 pb-4">
        <div className="bg-white rounded-full px-6 py-3 relative">
          <span className="text-black font-bold text-sm">Choisis un</span>
          
          {/* Blue bubble with eyes */}
          <div className="absolute -top-2 -right-4 bg-blue-500 rounded-full w-12 h-8 flex items-center justify-center transform rotate-12">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-white text-xs font-bold ml-1">61.73 x 113.77</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
