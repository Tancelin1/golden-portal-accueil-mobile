
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

const InfoPointPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-purple-400 to-pink-400 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-4 max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => navigate('/ar-scene')} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white font-bold text-lg">Info Point</h1>
          <button onClick={() => navigate('/')} className="text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          {/* Red Point Icon */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                <X className="w-8 h-8 text-red-600" strokeWidth={6} />
              </div>
              <div className="absolute -top-2 -right-2 bg-pink-400 rounded-full p-1">
                <X className="w-4 h-4 text-red-600" strokeWidth={4} />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black text-center mb-4">RED POINT</h2>

          <div className="space-y-4 text-gray-700">
            <p>Lorem ipsum dolor sit amet consectetur. Risus ut duis elementum volutpat enim imperdiet dolor scelerisque. Tincidunt elit vestibulum pretium ullamcorper pellentesque.</p>
            
            <p>Ut massa diam augue mattis at quis quam. Ut sed lacus donec semper enim. Dignissim nulla facilisis augue interdum pretium. Diam nascetur ipsum rhoncus nisl non fermentum.</p>
            
            <p>Ut sed lacus donec semper enim. Dignissim nulla facilisis augue interdum pretium. Diam nascetur ipsum rhoncus nisl non fermentum.</p>
          </div>
        </div>
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

export default InfoPointPage;
