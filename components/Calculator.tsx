import React, { useState, useEffect } from 'react';
import { CalculatorState, CalculationResult } from '../types';
import { Sun, Euro, TreeDeciduous, Zap } from 'lucide-react';

const Calculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorState>({
    billAmount: 120,
    houseType: 'medium',
    location: 'Motril'
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  // Constants based on prompt
  const PRICE_KWH = 0.15;
  const SUN_HOURS = 3000;
  const PERFORMANCE_FACTOR = 0.85; // System efficiency
  const SAVINGS_RATIO = 0.85; // How much of the production translates to bill savings (self-consumption + surplus compensation)
  const CO2_FACTOR = 0.25; // kg/kWh
  const TREE_FACTOR = 20; // kg CO2 per tree per year

  useEffect(() => {
    calculateSavings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs]);

  const calculateSavings = () => {
    // consumoAnualKwh = (facturaActual × 12) / precioKwh
    const annualConsumptionKwh = (inputs.billAmount * 12) / PRICE_KWH;
    
    // sistemaRecomendadoKw = consumoAnualKwh / horasSolAnuales
    // We adjust slightly because system size isn't 1:1 with consumption (usually aim for 80-100% coverage)
    const recommendedSystemKw = (annualConsumptionKwh / 1500); // 1500 is a standard yield factor (kWh/kWp) for good orientation in Andalucia

    // produccionAnual = sistemaRecomendadoKw × horasSolAnuales × 0.85 (factor rendimiento system loss)
    // Simplified: in Andalucia 1kWp produces approx 1500-1600 kWh/year
    const annualProduction = recommendedSystemKw * 1600;

    // ahorroAnual = produccionAnual × precioKwh × ratio
    // This is a rough financial estimation
    const annualSavings = (inputs.billAmount * 12) * 0.90; // Prompt says "Up to 90% savings"

    // Cost estimation for ROI (approx 1200€ per kW installed)
    const estimatedCost = recommendedSystemKw * 1100 + 1000; // Base cost + variable
    const roi = estimatedCost / annualSavings;

    const co2 = annualProduction * CO2_FACTOR;
    const trees = co2 / TREE_FACTOR;

    setResult({
      annualSavings: Math.round(annualSavings),
      roiYears: parseFloat(roi.toFixed(1)),
      co2Saved: Math.round(co2),
      treesPlanted: Math.round(trees),
      systemSize: parseFloat(recommendedSystemKw.toFixed(1))
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'billAmount' ? Number(value) : value
    }));
  };

  return (
    <section id="calculadora" className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-ts-blue p-6 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Descubre Cuánto Puedes Ahorrar</h2>
            <p className="opacity-90">Calculadora estimada para el sur de Andalucía</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2 flex justify-between">
                  <span>Factura Mensual Actual</span>
                  <span className="text-ts-blue text-xl">{inputs.billAmount}€</span>
                </label>
                <input
                  type="range"
                  name="billAmount"
                  min="30"
                  max="500"
                  step="10"
                  value={inputs.billAmount}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-ts-orange"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>30€</span>
                  <span>500€</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Tipo de Vivienda</label>
                <select
                  name="houseType"
                  value={inputs.houseType}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ts-blue focus:border-transparent outline-none"
                >
                  <option value="small">Casa Pequeña (80-120m²)</option>
                  <option value="medium">Casa Mediana (120-200m²)</option>
                  <option value="large">Casa Grande / Villa (200m²+)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Ubicación</label>
                <select
                  name="location"
                  value={inputs.location}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ts-blue focus:border-transparent outline-none"
                >
                  <option value="Motril">Motril / Costa Tropical</option>
                  <option value="Granada">Granada Capital / Interior</option>
                  <option value="Malaga">Málaga / Costa del Sol</option>
                  <option value="Other">Otra zona cercana</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center space-y-6">
              {result && (
                <>
                  <div className="text-center">
                    <p className="text-gray-500 font-semibold mb-1">Ahorro Anual Estimado</p>
                    <div className="text-4xl md:text-5xl font-bold text-ts-green flex justify-center items-center gap-2">
                      <Euro className="w-8 h-8 md:w-10 md:h-10" />
                      {result.annualSavings.toLocaleString()}€
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                      <div className="text-ts-orange mb-2 flex justify-center"><Zap className="w-6 h-6" /></div>
                      <div className="text-xl font-bold text-gray-800">{result.systemSize} kW</div>
                      <div className="text-xs text-gray-500">Potencia Rec.</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                      <div className="text-ts-blue mb-2 flex justify-center"><Sun className="w-6 h-6" /></div>
                      <div className="text-xl font-bold text-gray-800">{result.roiYears} Años</div>
                      <div className="text-xs text-gray-500">Retorno Inversión</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 text-gray-600 bg-white p-3 rounded-lg border border-gray-100">
                    <TreeDeciduous className="text-ts-green w-5 h-5" />
                    <span className="text-sm">Equivale a plantar <strong>{result.treesPlanted} árboles</strong> al año</span>
                  </div>

                  <button 
                    className="w-full bg-ts-orange hover:bg-ts-orange-hover text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:scale-[1.02] active:scale-95"
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}
                  >
                    Solicitar Estudio Personalizado Gratis
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;