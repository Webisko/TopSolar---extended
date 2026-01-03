import React from 'react';
import { SERVICE_PACKAGES } from '../constants';
import { Check, Battery, Info } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Nuestras Soluciones Solares</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Sistemas adaptados a tus necesidades y presupuesto, todo incluido.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICE_PACKAGES.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border transition-all hover:shadow-2xl ${pkg.recommended ? 'border-ts-orange scale-105 md:-mt-4 z-10' : 'border-gray-100 hover:border-ts-blue'}`}
            >
              {pkg.recommended && (
                <div className="bg-ts-orange text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                  Más Popular
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-6 h-10">{pkg.description}</p>
                
                <div className="text-3xl font-bold text-ts-blue mb-8">{pkg.price}</div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm font-semibold text-gray-700 bg-gray-50 p-3 rounded-lg">
                    <div className="bg-ts-orange/10 p-1.5 rounded text-ts-orange"><Battery className="w-4 h-4" /></div>
                    {pkg.power} Potencia
                  </div>
                  
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      {feature}
                    </div>
                  ))}
                  <div className="flex items-start gap-3 text-gray-600 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    {pkg.panels}
                  </div>
                  <div className="flex items-start gap-3 text-gray-600 text-sm">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    Producción: {pkg.production}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}
                  className={`w-full py-4 rounded-xl font-bold transition-colors ${
                    pkg.recommended 
                      ? 'bg-ts-orange hover:bg-ts-orange-hover text-white shadow-lg' 
                      : 'bg-white border-2 border-ts-blue text-ts-blue hover:bg-ts-blue hover:text-white'
                  }`}
                >
                  {pkg.recommended ? 'Solicitar Presupuesto' : 'Más Información'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm flex items-center justify-center gap-2">
          <Info className="w-4 h-4" />
          Todos los precios incluyen instalación, legalización y puesta en marcha.
        </div>
      </div>
    </section>
  );
};

export default Services;