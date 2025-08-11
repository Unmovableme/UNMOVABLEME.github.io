import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: 'FundOps: un nuovo modello per la raccolta capitali in startup',
      excerpt: 'Scopri come ottimizzare i processi di fundraising con metodologie operative innovative e data-driven.',
      date: '15 Gen 2025',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Prima del SAFE c\'è il soft-commitment',
      excerpt: 'L\'importanza di costruire consenso e fiducia negli investitori prima della formalizzazione degli accordi.',
      date: '8 Gen 2025',
      readTime: '7 min',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Open Innovation e Corporate Venture Building: creare valore condiviso',
      excerpt: 'Come le aziende possono innovare attraverso partnership strategiche con startup e modelli di crescita condivisi.',
      date: '2 Gen 2025',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Dal mio blog</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Approfondimenti su finanza, innovazione e crescita aziendale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <button className="text-blue-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-200">
                    Leggi di più
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;