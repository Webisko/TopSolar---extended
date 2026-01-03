import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2537] text-white pt-16 pb-8 border-t-4 border-ts-orange">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sun className="w-8 h-8 text-ts-orange" />
              <span className="text-2xl font-heading font-bold text-white">TopSolar</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu experto en energía solar en Andalucía. Más de 300 instalaciones en Granada, Málaga y Costa Tropical. Energía limpia, ahorro garantizado.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ts-orange transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ts-orange transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ts-orange transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-ts-gold">Servicios</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><NavLink to="/servicios" className="hover:text-white transition-colors">Instalación de paneles</NavLink></li>
              <li><NavLink to="/servicios" className="hover:text-white transition-colors">Baterías solares</NavLink></li>
              <li><NavLink to="/servicios" className="hover:text-white transition-colors">Cargadores V.E.</NavLink></li>
              <li><NavLink to="/servicios" className="hover:text-white transition-colors">Mantenimiento</NavLink></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-ts-gold">Enlaces Útiles</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#calculadora" className="hover:text-white transition-colors">Calculadora de Ahorro</a></li>
              <li><NavLink to="/instalaciones" className="hover:text-white transition-colors">Proyectos Realizados</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-white transition-colors">Preguntas Frecuentes</NavLink></li>
              <li><NavLink to="/legal" className="hover:text-white transition-colors">Política de Privacidad</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-ts-gold">Contacto</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-ts-orange mt-0.5" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-ts-orange mt-0.5" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ts-orange mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2025 TopSolar. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Política de Cookies</a>
          </div>
          <p>Instalador Autorizado Andalucía</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;