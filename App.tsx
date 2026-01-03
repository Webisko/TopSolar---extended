import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import Home from './pages/Home';

// Placeholder pages for routing demonstration
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-20 container mx-auto px-6 md:px-12 text-center min-h-[60vh]">
    <h1 className="text-4xl font-bold text-ts-blue mb-4">{title}</h1>
    <p className="text-gray-600 mb-8">Esta sección está en construcción. Vuelve pronto.</p>
    <a href="#/" className="text-ts-orange font-bold hover:underline">Volver al Inicio</a>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Home />} /> {/* For this demo, reuse Home since it's SPA-like */}
            <Route path="/instalaciones" element={<PlaceholderPage title="Nuestras Instalaciones" />} />
            <Route path="/nosotros" element={<PlaceholderPage title="Sobre Nosotros" />} />
            <Route path="/contacto" element={<Home />} /> {/* Contact is on Home */}
            <Route path="/faq" element={<PlaceholderPage title="Preguntas Frecuentes" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
        <FloatingWidget />
      </div>
    </Router>
  );
};

export default App;