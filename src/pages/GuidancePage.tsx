
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const GuidancePage = () => {
  const navigate = useNavigate();
  const [currentGuide, setCurrentGuide] = useState<'hot' | 'cold'>('hot');

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
                  <div className="text-6xl text-white transform rotate-45">↗</div>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="text-center mt-8">
              <div className="bg-white rounded-full px-6 py-3 inline-block">
                <span className="text-black font-bold">35m, continue !</span>
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
                  <div className="text-6xl text-white">↑</div>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="text-center mt-8">
              <div className="bg-white rounded-full px-6 py-3 inline-block">
                <span className="text-black font-bold">150m, trop loin !</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Switch buttons for demo */}
      <div className="p-4 flex justify-center space-x-4">
        <button
          onClick={() => setCurrentGuide('hot')}
          className={`px-4 py-2 rounded-full font-bold ${
            currentGuide === 'hot' ? 'bg-orange-500 text-white' : 'bg-white text-black'
          }`}
        >
          Chaud
        </button>
        <button
          onClick={() => setCurrentGuide('cold')}
          className={`px-4 py-2 rounded-full font-bold ${
            currentGuide === 'cold' ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
        >
          Froid
        </button>
        <button
          onClick={() => navigate('/ar-scene')}
          className="bg-green-500 text-white px-4 py-2 rounded-full font-bold"
        >
          Arrivé sur place
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
