import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Chi sono', href: '#chi-sono' },
    { label: 'Servizi', href: '#servizi' },
    { label: 'Competenze', href: '#competenze' },
    { label: 'Esperienze', href: '#esperienze' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contatti', href: '#contatti' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">
              Alessandro Immobile Molaro
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all duration-200 font-semibold flex items-center gap-2">
              <Phone size={16} />
              Prenota una call
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all duration-200 font-semibold flex items-center gap-2 w-fit">
                <Phone size={16} />
                Prenota una call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;