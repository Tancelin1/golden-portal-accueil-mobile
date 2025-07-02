
import React from 'react';
import { Compass, Circle, Cloud } from 'lucide-react';

const ProjectSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Choisis ton easter egg",
      description: "Parmi ceux listés dans notre collection magique",
      icon: <Circle className="w-8 h-8 text-blue-500" />
    },
    {
      number: 2,
      title: "Guide-toi avec la boussole",
      description: "Utilise notre boussole interactive pour te diriger",
      icon: <Compass className="w-8 h-8 text-blue-500" />
    },
    {
      number: 3,
      title: "Traverse le portail AR",
      description: "Entre dans la réalité augmentée et récupère ton trésor",
      icon: <Cloud className="w-8 h-8 text-blue-500" />
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Comment ça marche ?
      </h2>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500 hover-scale"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  {step.icon}
                  <h3 className="font-semibold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSteps;
