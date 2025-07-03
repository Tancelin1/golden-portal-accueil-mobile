
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NoPointsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-purple-300 to-pink-300 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-4 max-w-md">
        {/* Header */}
        <div className="bg-yellow-400 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="text-black">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-black font-bold text-lg">Hello there! 👋</h1>
            <div></div>
          </div>
        </div>

        {/* Concept Section */}
        <div className="bg-white rounded-lg p-4 mb-4 border-2 border-gray-300">
          <h2 className="text-center text-lg font-bold text-black mb-4">
            &lt;&lt;&lt; Le concept &gt;&gt;&gt;
          </h2>
          
          <div className="border-2 border-gray-400 rounded-lg overflow-hidden mb-4">
            <table className="w-full">
              <tbody>
                <tr className="border-b-2 border-gray-400">
                  <td className="w-12 p-3 text-center border-r-2 border-gray-400 bg-gray-50">
                    <span className="text-black font-bold text-lg">1</span>
                  </td>
                  <td className="p-3">
                    <p className="text-black text-sm">Choisis un easter egg parmi ceux listés</p>
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-400">
                  <td className="w-12 p-3 text-center border-r-2 border-gray-400 bg-gray-50">
                    <span className="text-black font-bold text-lg">2</span>
                  </td>
                  <td className="p-3">
                    <p className="text-black text-sm">Aide-toi de la boussole pour te guider</p>
                  </td>
                </tr>
                <tr>
                  <td className="w-12 p-3 text-center border-r-2 border-gray-400 bg-gray-50">
                    <span className="text-black font-bold text-lg">3</span>
                  </td>
                  <td className="p-3">
                    <p className="text-black text-sm">Traverse le portail en réalité augmentée et récupère l'easter egg</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* No Points Message */}
        <div className="bg-orange-200 rounded-lg p-6 text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-pink-400 rounded-full mx-auto flex items-center justify-center mb-4">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
          
          <p className="text-black font-bold text-lg mb-6">
            Nous n'avons pas encore<br />
            disséminer d'easter eggs<br />
            dans votre ville, mais<br />
            cela ne saurait tarder !
          </p>
          
          <button
            onClick={() => navigate('/')}
            className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
          >
            Actualiser
          </button>
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

export default NoPointsPage;
