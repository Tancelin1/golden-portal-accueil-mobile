
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDistanceTracking } from '../hooks/useDistanceTracking';

const GuidancePage = () => {
  const navigate = useNavigate();
  const { cityName } = useParams();
  const distanceData = useDistanceTracking(cityName || 'wazemmes');

  // Convertir la direction en rotation CSS
  const getArrowRotation = (direction: number) => {
    return `rotate(${direction}deg)`;
  };

  // Déterminer le message selon la distance
  const getDistanceMessage = () => {
    if (distanceData.distance < 50) {
      return "Vous y êtes presque !";
    } else if (distanceData.distance < 100) {
      return `${distanceData.formattedDistance}, continue !`;
    } else if (distanceData.distance < 500) {
      return `${distanceData.formattedDistance}, tu te rapproches !`;
    } else {
      return `${distanceData.formattedDistance}, trop loin !`;
    }
  };

  const currentGuide = distanceData.distance < 500 ? 'hot' : 'cold';

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 via-blue-300 to-blue-500 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-4 max-w-md space-x-4">
        {/* Hot Guide */}
        <div className={`${currentGuide === 'hot' ? 'block' : 'hidden'} h-full`}>
          <div className="bg-pink-300 rounded-lg p-4 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => navigate('/')} className="text-black">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2">
                <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold">RED POINT</span>
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">Chaud !</span>
              </div>
            </div>

            {/* Compass Arrow */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                  <div 
                    className="text-6xl text-white transition-transform duration-500"
                    style={{ transform: getArrowRotation(distanceData.direction) }}
                  >
                    ↑
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="text-center mt-8">
              <div className="bg-white rounded-full px-6 py-3 inline-block">
                <span className="text-black font-bold">{getDistanceMessage()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cold Guide */}
        <div className={`${currentGuide === 'cold' ? 'block' : 'hidden'} h-full`}>
          <div className="bg-blue-300 rounded-lg p-4 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => navigate('/')} className="text-black">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2">
                <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold">RED POINT</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">Froid !</span>
              </div>
            </div>

            {/* Compass Arrow */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                  <div 
                    className="text-6xl text-white transition-transform duration-500"
                    style={{ transform: getArrowRotation(distanceData.direction) }}
                  >
                    ↑
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="text-center mt-8">
              <div className="bg-white rounded-full px-6 py-3 inline-block">
                <span className="text-black font-bold">{getDistanceMessage()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo buttons - remove in production */}
      <div className="p-4 flex justify-center space-x-4">
        <div className="bg-white rounded-full px-4 py-2">
          <span className="text-black text-sm">
            Distance: {distanceData.formattedDistance} | Mode: {currentGuide === 'hot' ? 'Chaud' : 'Froid'}
          </span>
        </div>
        <button
          onClick={() => navigate('/ar-scene')}
          className="bg-green-500 text-white px-4 py-2 rounded-full font-bold"
          disabled={distanceData.distance > 50}
        >
          {distanceData.distance > 50 ? 'Rapprochez-vous' : 'Arrivé sur place'}
        </button>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-300">
        <div className="flex">
          <div className="flex-1 p-4 text-center border-r border-gray-300">
            <span className="text-gray-700">☰</span>
          </div>
          <div className="flex-1 p-4 text-center border-r border-gray-300">
            <span className="text-gray-700 font-medium tracking-wider">y n o v . c o m</span>
          </div>
          <div className="flex-1 p-4 text-center">
            <span className="text-gray-700">i</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidancePage;
