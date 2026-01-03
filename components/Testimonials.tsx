import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-ts-blue relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-blue-100 text-lg">Más de 300 familias ya disfrutan de energía solar en Andalucía</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-xl relative">
              <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12" />
              
              <div className="flex gap-1 text-ts-gold mb-6">
                {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>

              <p className="text-gray-700 italic font-serif-accent mb-6 leading-relaxed">
                "{item.text}"
              </p>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                     {/* Using abstract avatar placeholders */}
                     <img src={`https://picsum.photos/100/100?random=${idx + 10}`} alt="Avatar" className="w-full h-full object-cover grayscale opacity-70" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <span className="text-sm text-ts-blue font-semibold">{item.location}</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-500 bg-gray-50 inline-block px-2 py-1 rounded">
                  {item.installData}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;