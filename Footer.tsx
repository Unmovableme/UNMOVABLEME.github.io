import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Alessandro Immobile Molaro</h3>
              <p className="text-gray-300">
                Advisor Indipendente, Business Angel e Commercialista specializzato in crescita aziendale e innovazione.
              </p>
              <div className="flex gap-4">
                <a href="mailto:hello@imment.it" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                  <Phone size={20} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Servizi</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#servizi" className="hover:text-white transition-colors">Advisory strategico</a></li>
                <li><a href="#servizi" className="hover:text-white transition-colors">Fundraising & Capital Markets</a></li>
                <li><a href="#servizi" className="hover:text-white transition-colors">Open Innovation</a></li>
                <li><a href="#servizi" className="hover:text-white transition-colors">Mentorship</a></li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Menu</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#chi-sono" className="hover:text-white transition-colors">Chi sono</a></li>
                <li><a href="#competenze" className="hover:text-white transition-colors">Competenze</a></li>
                <li><a href="#esperienze" className="hover:text-white transition-colors">Esperienze</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contatti" className="hover:text-white transition-colors">Contatti</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Alessandro Immobile Molaro. Tutti i diritti riservati.
              </p>
              <div className="flex gap-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-white transition-colors">Note Legali</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;