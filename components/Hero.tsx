import React from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=1" 
          alt="Casa andaluza con paneles solares" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 md:from-black/60 md:to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-white mt-10 md:mt-0">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-block bg-ts-orange/90 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
            Líderes en Andalucía
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            300 Días de Sol al Año <br/>
            <span className="text-ts-gold">Tu Independencia Energética</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl font-sans">
            Ahorra hasta un 90% en tu factura eléctrica. Instalación profesional en 1-2 días en Granada, Málaga y alrededores.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('calculadora')?.scrollIntoView({behavior: 'smooth'})}
              className="flex items-center justify-center gap-2 bg-ts-orange hover:bg-ts-orange-hover text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all transform hover:translate-y-[-2px]"
            >
              <Calculator className="w-5 h-5" />
              Calcular Mi Ahorro
            </button>
            
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-ts-blue text-white font-bold py-4 px-8 rounded-lg transition-all"
            >
              Solicitar Presupuesto
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm font-medium text-gray-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Garantía 25 años
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              300+ Instalaciones
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Técnicos Locales
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          className="w-full h-16 md:h-32 text-white fill-current block"
        >
          <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;