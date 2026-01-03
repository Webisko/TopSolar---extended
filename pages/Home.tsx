import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import { FAQ_ITEMS } from '../constants';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Calculator />
      <Benefits />
      <Services />
      
      {/* Process Timeline Section (Simplified for Home) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Tu Camino Hacia la Independencia</h2>
            <p className="text-gray-600">Simple, rápido y profesional</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
             {[
               {step: "01", title: "Consulta", desc: "Analizamos tu consumo y tejado."},
               {step: "02", title: "Diseño", desc: "Propuesta personalizada en 24h."},
               {step: "03", title: "Instalación", desc: "Montaje en 1-2 días por expertos."},
               {step: "04", title: "Ahorro", desc: "Disfruta de energía limpia y barata."}
             ].map((item, i) => (
               <div key={i} className="relative p-6 border-l-4 border-ts-orange bg-gray-50 rounded-r-xl">
                  <span className="text-4xl font-bold text-gray-200 absolute top-2 right-4">{item.step}</span>
                  <h3 className="text-xl font-bold text-ts-blue mb-2 relative z-10">{item.title}</h3>
                  <p className="text-sm text-gray-600 relative z-10">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-gray-800 mb-10 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <details key={idx} className="group bg-white rounded-lg shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-700 list-none group-open:text-ts-orange transition-colors">
                  {item.question}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent group-open:border-gray-100">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-ts-orange to-red-500 text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
           <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">¡Oferta Especial Andalucía!</h2>
           <p className="text-xl mb-8 opacity-90">Descuento del 10% en tu primera instalación + Estudio gratuito</p>
           <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-white text-ts-orange font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
           >
             Solicitar Presupuesto Gratis
           </button>
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default Home;