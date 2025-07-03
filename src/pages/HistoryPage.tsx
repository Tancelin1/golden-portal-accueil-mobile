
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

const HistoryPage = () => {
  const navigate = useNavigate();

  const discoveries = [
    { name: 'Lille - Wazemmes', icon: <X className="w-6 h-6 text-red-600" strokeWidth={4} /> },
    { name: 'Lille - Gare Lille Flandres', icon: <X className="w-6 h-6 text-red-600" strokeWidth={4} /> },
    { name: 'Lille - Fives', icon: <X className="w-6 h-6 text-red-600" strokeWidth={4} /> },
    { name: 'Lille - Lillenium', icon: <X className="w-6 h-6 text-red-600" strokeWidth={4} /> }
  ];

  return (
    <div className="min-h-screen bg-green-500 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-4 max-w-md">
        {/* Header */}
        <div className="bg-green-600 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-white font-bold text-lg">Historique des découvertes</h1>
            <div></div>
          </div>
        </div>

        {/* Discovery List */}
        <div className="space-y-3">
          {discoveries.map((discovery, index) => (
            <div key={index} className="bg-green-400 rounded-lg p-4 border-b-2 border-green-600">
              <div className="flex items-center space-x-3">
                {discovery.icon}
                <span className="text-white font-medium">{discovery.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-green-400 border-t border-green-600">
        <div className="flex">
          <div className="flex-1 p-4 text-center">
            <span className="text-white">☰</span>
          </div>
          <div className="flex-1 p-4 text-center border-x border-green-600">
            <span className="text-white font-medium tracking-wider">y n o v . c o m</span>
          </div>
          <div className="flex-1 p-4 text-center">
            <span className="text-white">i</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
