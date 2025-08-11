import React from 'react';
import { Briefcase, TrendingUp, Lightbulb, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Advisory strategico',
      description: 'Definizione di piani di crescita, gestione delle operazioni straordinarie, M&A e corporate governance.',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Fundraising & Capital Markets',
      description: 'Strutturazione di campagne di raccolta capitali, equity crowdfunding, strumenti finanziari partecipativi (SFP), SAFE agreement.',
      color: 'green'
    },
    {
      icon: Lightbulb,
      title: 'Open Innovation e Corporate Venture Building',
      description: 'Progettazione e gestione di programmi di innovazione, startup studio e modelli di crescita condivisi.',
      color: 'purple'
    },
    {
      icon: GraduationCap,
      title: 'Mentorship e formazione',
      description: 'Percorsi dedicati a founder, team e professionisti per sviluppare competenze chiave e mindset imprenditoriale.',
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    green: 'bg-green-500 hover:bg-green-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    orange: 'bg-orange-500 hover:bg-orange-600'
  };

  return (
    <section id="servizi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Servizi</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporto strategico e operativo per far crescere il tuo business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white transition-colors duration-200 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;