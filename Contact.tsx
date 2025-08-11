import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contatti" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contattami</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Per informazioni, collaborazioni o per discutere il tuo progetto, puoi contattarmi tramite il form qui sotto o prenotare direttamente una call.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Invia un messaggio</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="la.tua@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Descrivi il tuo progetto o le tue esigenze..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-all duration-200 font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Invia messaggio
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informazioni di contatto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail size={24} className="text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:hello@imment.it" className="text-blue-700 hover:underline">
                        hello@imment.it
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone size={24} className="text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefono</h4>
                      <p className="text-gray-600">Disponibile su appuntamento</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Linkedin size={24} className="text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">LinkedIn</h4>
                      <a href="#" className="text-blue-700 hover:underline">
                        Collegati su LinkedIn
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <MapPin size={24} className="text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Ubicazione</h4>
                      <p className="text-gray-600">Roma, Italia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">Prenota una call</h3>
                <p className="mb-6">
                  Vuoi discutere direttamente del tuo progetto? Prenota una call gratuita di 30 minuti.
                </p>
                <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-2">
                  <Phone size={18} />
                  Prenota ora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;