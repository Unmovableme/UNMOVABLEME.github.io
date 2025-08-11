import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Abilito crescita e innovazione nei processi di{' '}
                  <span className="text-blue-700">finanza</span>,{' '}
                  <span className="text-green-600">impresa</span> e{' '}
                  <span className="text-blue-700">capitale</span>.
                </h1>
                <div className="flex flex-wrap gap-4 text-lg font-semibold text-gray-600">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    Advisor Indipendente
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    Business Angel
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    Commercialista
                  </span>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Sono un Dottore Commercialista, Advisor indipendente e Business Angel.
                Da oltre 25 anni lavoro al fianco di startup, PMI e corporate per costruire 
                modelli di crescita sostenibili e scalabili.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-700 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-all duration-200 font-semibold flex items-center justify-center gap-2 group">
                  Prenota una call
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-semibold">
                  Scopri i servizi
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-blue-100 to-green-100 p-8 flex items-center justify-center">
                <TrendingUp size={120} className="text-blue-700" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;