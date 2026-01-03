import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, X, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex flex-col gap-3 animate-fade-in-up mb-2">
           <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 bg-white text-gray-800 px-4 py-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors w-max"
          >
            <span className="font-medium text-sm">Llamar</span>
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <Phone className="w-5 h-5" />
            </div>
          </a>
          
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 bg-white text-gray-800 px-4 py-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors w-max"
          >
            <span className="font-medium text-sm">Email</span>
             <div className="bg-blue-100 p-2 rounded-full text-ts-blue">
              <Mail className="w-5 h-5" />
            </div>
          </a>

          <a 
            href="#"
            className="flex items-center gap-3 bg-white text-gray-800 px-4 py-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors w-max"
          >
             <span className="font-medium text-sm">Telegram</span>
             <div className="bg-sky-100 p-2 rounded-full text-sky-500">
              <MessageCircle className="w-5 h-5" />
            </div>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-gray-700 rotate-90' : 'bg-ts-orange hover:bg-ts-orange-hover animate-pulse-slow'}`}
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageSquare className="text-white w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingWidget;