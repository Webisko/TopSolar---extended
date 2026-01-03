import { NavItem, ServicePackage, Testimonial, FaqItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Instalaciones', path: '/instalaciones' },
  { label: 'Sobre Nosotros', path: '/nosotros' },
  { label: 'Contacto', path: '/contacto' },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    name: "Sistema Básico",
    description: "Ideal para casas pequeñas",
    power: "3-5 kW",
    production: "5.000-8.000 kWh/año",
    panels: "6-10 paneles (450W+)",
    price: "Desde 3.000€",
    features: [
      "Inversor 3-5 kW incluido",
      "Garantía 12 años producto",
      "Ideal casas 80-120m²",
      "Monitorización app"
    ]
  },
  {
    name: "Sistema Estándar",
    description: "La opción más equilibrada para familias",
    power: "6-8 kW",
    production: "10.000-13.000 kWh/año",
    panels: "12-16 paneles (500W+)",
    price: "Desde 8.000€",
    recommended: true,
    features: [
      "Inversor Híbrido 6-8 kW",
      "Batería opcional ready",
      "Garantía 15 años producto",
      "Ideal casas 120-200m²"
    ]
  },
  {
    name: "Sistema Premium",
    description: "Máxima producción e independencia",
    power: "10-15 kW",
    production: "15.000-20.000+ kWh/año",
    panels: "20-30 paneles premium",
    price: "Consultar",
    features: [
      "Inversor Híbrido 10-15 kW",
      "Cargador VE incluido",
      "Garantía 20 años producto",
      "Ideal villas y alto consumo"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carmen M.",
    location: "Salobreña",
    text: "En dos días teníamos los paneles instalados y funcionando. Ahora en verano, con el aire acondicionado a tope, ¡la factura es casi cero! Increíble.",
    rating: 5,
    installData: "Sistema 6kW | Ahorro: 85%"
  },
  {
    name: "José Luis R.",
    location: "Granada",
    text: "Profesionales, puntuales y precio justo. Me explicaron todo claramente. Llevo 6 meses y ya he notado el ahorro. Muy recomendable.",
    rating: 5,
    installData: "Sistema 8kW + Batería | Ahorro: 92%"
  },
  {
    name: "Antonio P.",
    location: "Nerja",
    text: "Tengo una casa rural de alquiler turístico. Los paneles fueron la mejor inversión. Los huéspedes valoran mucho que sea energía limpia.",
    rating: 5,
    installData: "Sistema 10kW | Ahorro: 88%"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Cuánto se tarda en instalar paneles solares?",
    answer: "Entre 1 y 2 días laborables para una instalación residencial estándar. Incluye montaje, conexión y legalización."
  },
  {
    question: "¿Qué pasa en días nublados o de noche?",
    answer: "Los paneles generan electricidad incluso con nubes. De noche, usas la red eléctrica o tu batería si la tienes."
  },
  {
    question: "¿Necesito permisos o licencias?",
    answer: "Sí, pero nosotros nos encargamos de toda la tramitación: licencia de obras, legalización eléctrica y registro."
  },
  {
    question: "¿Es rentable en mi casa?",
    answer: "En Andalucía, con 300+ días de sol, casi siempre sí. La amortización suele estar entre 5 y 7 años."
  },
  {
    question: "¿Ofrecen financiación?",
    answer: "Sí, trabajamos con varias entidades financieras para ofrecerte pagos cómodos."
  }
];

export const CONTACT_INFO = {
  phone: "+34 664 480 778",
  email: "info@topsolar.es",
  telegram: "@topsolar_andalucia",
  address: "Motril, Granada, Andalucía"
};