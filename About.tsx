import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Approccio pragmatico',
      description: 'Soluzioni concrete e misurabili per ogni sfida aziendale'
    },
    {
      icon: Lightbulb,
      title: 'Innovazione continua',
      description: 'Strategie all\'avanguardia per restare competitivi'
    },
    {
      icon: Users,
      title: 'Personalizzazione totale',
      description: 'Ogni soluzione è studiata su misura per il tuo business'
    }
  ];

  return (
    <section id="chi-sono" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Chi sono</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ho sviluppato la mia esperienza professionale unendo competenze di finanza aziendale, 
                strategia e governance con un approccio orientato all'innovazione.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Collaboro con imprenditori e manager per progettare e implementare soluzioni che 
                accelerano la crescita, migliorano la solidità finanziaria e preparano le aziende 
                a interagire con investitori e mercati.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Il mio approccio è <strong>pragmatico</strong>, <strong>misurabile</strong> e 
                sempre <strong>personalizzato</strong>.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Business consultation" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                  <feature.icon size={32} className="text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;