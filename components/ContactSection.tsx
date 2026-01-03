import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
              Hablemos de Tu Proyecto
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Solicita tu presupuesto gratuito hoy. Te respondemos en menos de 24 horas con un estudio personalizado.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-ts-orange">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Llámanos</h4>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-lg text-gray-700 hover:text-ts-blue transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-sm text-gray-500">Lunes a Viernes, 9:00 - 19:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-ts-blue">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Escríbenos</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg text-gray-700 hover:text-ts-blue transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                  <p className="text-sm text-gray-500">Respuesta en menos de 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-ts-green">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Zona de Servicio</h4>
                  <p className="text-gray-700">Radio de 150km desde Motril</p>
                  <p className="text-sm text-gray-500">Granada, Málaga, Costa Tropical, Almería (Sur)</p>
                </div>
              </div>
            </div>

            {/* Static Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
               <img src="https://picsum.photos/600/400?grayscale&blur=2" className="w-full h-full object-cover opacity-50" alt="Map background" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-lg shadow-lg text-center">
                    <MapPin className="w-8 h-8 text-ts-orange mx-auto mb-2" />
                    <p className="font-bold text-ts-blue">Base en Motril</p>
                    <p className="text-xs text-gray-500">Servicio a toda la costa y el interior</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
             <div className="bg-ts-orange/10 border border-ts-orange/20 rounded-lg p-4 mb-6">
                <p className="text-ts-orange text-sm font-bold flex items-center gap-2">
                   <Clock className="w-4 h-4" /> 
                   Oferta Especial: Estudio energético gratuito incluido
                </p>
             </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo *</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ts-blue outline-none" placeholder="Juan Pérez" required />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Teléfono *</label>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ts-blue outline-none" placeholder="600 000 000" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email *</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ts-blue outline-none" placeholder="juan@ejemplo.com" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Ubicación</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ts-blue outline-none">
                  <option>Motril</option>
                  <option>Granada</option>
                  <option>Málaga</option>
                  <option>Almuñécar / Salobreña</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Factura de luz mensual aprox.</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ts-blue outline-none">
                  <option>Menos de 50€</option>
                  <option>50€ - 100€</option>
                  <option>100€ - 200€</option>
                  <option>Más de 200€</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Mensaje (Opcional)</label>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ts-blue outline-none h-24" placeholder="¿Tienes alguna duda específica?"></textarea>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input type="checkbox" id="privacy" className="mt-1" required />
                <label htmlFor="privacy" className="text-sm text-gray-500">
                  Acepto la política de privacidad y el tratamiento de mis datos para recibir el presupuesto. *
                </label>
              </div>

              <button type="submit" className="w-full bg-ts-orange hover:bg-ts-orange-hover text-white font-bold py-4 rounded-lg shadow-lg transition-transform active:scale-95 mt-4">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;