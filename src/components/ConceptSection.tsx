
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
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.number} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-white border-2 border-gray-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">{step.number}</span>
            </div>
            <p className="text-black text-sm leading-relaxed pt-1">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConceptSection;
