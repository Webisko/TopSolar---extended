import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Sun, Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 md:bg-transparent md:text-white py-4'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <Sun className={`w-8 h-8 ${scrolled ? 'text-ts-orange' : 'text-ts-orange'}`} />
          <div className="flex flex-col">
            <span className={`text-2xl font-heading font-bold leading-none ${scrolled ? 'text-ts-blue' : 'text-ts-blue md:text-white'}`}>
              TopSolar
            </span>
            <span className={`text-[10px] tracking-widest uppercase ${scrolled ? 'text-gray-500' : 'text-gray-500 md:text-gray-200'}`}>
              Andalucía
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `font-medium text-sm hover:text-ts-orange transition-colors ${
                  isActive ? 'text-ts-orange' : (scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white')
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+34664480778" className={`flex items-center gap-2 font-bold ${scrolled ? 'text-ts-blue' : 'text-white'}`}>
            <Phone className="w-4 h-4" />
            664 480 778
          </a>
          <button 
             onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-ts-orange hover:bg-ts-orange-hover text-white px-6 py-2.5 rounded-full font-bold shadow-md transition-transform hover:scale-105"
          >
            Presupuesto Gratis
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className={`w-7 h-7 ${scrolled ? 'text-gray-800' : 'text-gray-800 md:text-white'}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-4 animate-fade-in-down">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `block py-2 text-lg font-medium border-b border-gray-50 ${isActive ? 'text-ts-orange' : 'text-gray-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href="tel:+34664480778" className="flex items-center gap-2 text-ts-blue font-bold py-2">
            <Phone className="w-5 h-5" />
            Llamar ahora
          </a>
          <button 
             onClick={() => {
               setIsOpen(false);
               document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'});
             }}
             className="bg-ts-orange text-white w-full py-3 rounded-lg font-bold shadow-md"
          >
            Presupuesto Gratis
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;