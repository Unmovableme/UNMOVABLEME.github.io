import React from 'react';
import { Star, Users, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Star,
      title: 'Business Angel e Advisor per startup innovative',
      description: 'Supporto su raccolta capitali, governance e strategia di crescita.',
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      icon: BookOpen,
      title: 'Docente e formatore',
      description: 'Corsi su fundraising, finanza e innovazione per professionisti e imprese.',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Users,
      title: 'Commercialista e consulente aziendale',
      description: 'Oltre 25 anni di esperienza in consulenza fiscale, societaria e di bilancio.',
      color: 'bg-green-100 text-green-700'
    }
  ];

  return (
    <section id="esperienze" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Esperienze rilevanti</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${exp.color} flex-shrink-0`}>
                    <exp.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;