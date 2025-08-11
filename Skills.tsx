import React from 'react';
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  const skills = [
    'Fundraising e finanza alternativa (SAFE agreement, SFP, equity crowdfunding)',
    'Operazioni societarie, valutazioni aziendali, M&A',
    'Strategia e controllo di gestione',
    'Innovazione digitale e trasformazione della funzione AFC',
    'Investor readiness & cap table design',
    'Project & team management in contesti complessi'
  ];

  return (
    <section id="competenze" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Competenze chiave</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{skill}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Financial planning" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">25+</p>
                <p className="text-sm">Anni di esperienza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;