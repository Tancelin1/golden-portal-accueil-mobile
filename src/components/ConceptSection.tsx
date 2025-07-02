
import React from 'react';

const ConceptSection = () => {
  const steps = [
    {
      number: 1,
      title: "Choisis un easter egg parmi ceux listés"
    },
    {
      number: 2,
      title: "Aide-toi de la boussole pour te guider"
    },
    {
      number: 3,
      title: "Traverse le portail en réalité augmentée et récupère l'easter egg"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 mb-4 border-2 border-gray-300">
      <h2 className="text-center text-lg font-bold text-black mb-4">
        &lt;&lt;&lt; Le concept &gt;&gt;&gt;
      </h2>
      
      {/* Tableau avec bordures */}
      <div className="border-2 border-gray-400 rounded-lg overflow-hidden">
        <table className="w-full">
          <tbody>
            {steps.map((step, index) => (
              <tr key={step.number} className={index < steps.length - 1 ? "border-b-2 border-gray-400" : ""}>
                <td className="w-12 p-3 text-center border-r-2 border-gray-400 bg-gray-50">
                  <span className="text-black font-bold text-lg">{step.number}</span>
                </td>
                <td className="p-3">
                  <p className="text-black text-sm leading-relaxed">{step.title}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConceptSection;
