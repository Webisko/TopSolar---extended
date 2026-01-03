import React from 'react';
import { PiggyBank, Leaf, Home, Zap, Sun } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <PiggyBank className="w-10 h-10 text-ts-blue" />,
      title: "Ahorro Garantizado",
      desc: "Reduce tu factura hasta un 90% desde el primer día. Retorno en 5-7 años."
    },
    {
      icon: <Leaf className="w-10 h-10 text-ts-green" />,
      title: "Energía Limpia",
      desc: "100% renovable y respetuosa con nuestro clima mediterráneo."
    },
    {
      icon: <Home className="w-10 h-10 text-ts-terracotta" />,
      title: "Independencia",
      desc: "Libérate de las subidas de luz. Tu energía, tu control."
    },
    {
      icon: <Zap className="w-10 h-10 text-ts-gold" />,
      title: "Instalación Rápida",
      desc: "Sistema completo instalado en 1-2 días por técnicos certificados."
    },
    {
      icon: <Sun className="w-10 h-10 text-ts-orange" />,
      title: "Clima Ideal",
      desc: "Andalucía tiene 3,000h de sol. Tu tejado es una mina de oro."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            Por Qué Andalucía es Perfecta Para la Energía Solar
          </h2>
          <div className="w-24 h-1 bg-ts-orange mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="group bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;