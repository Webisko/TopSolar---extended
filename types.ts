export interface NavItem {
  label: string;
  path: string;
}

export interface ServicePackage {
  name: string;
  description: string;
  power: string;
  production: string;
  panels: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  installData: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CalculatorState {
  billAmount: number;
  houseType: 'small' | 'medium' | 'large';
  location: string;
}

export interface CalculationResult {
  annualSavings: number;
  roiYears: number;
  co2Saved: number;
  treesPlanted: number;
  systemSize: number;
}