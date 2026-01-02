
import React, { useState } from 'react';
import { getStrategyAdvice } from '../services/geminiService';

const StrategyAdvisor: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse('');
    const advice = await getStrategyAdvice(prompt);
    setResponse(advice);
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-blue-100">
          <div className="bg-blue-900 text-white p-12 md:w-1/3 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6 border border-white/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Strategy Advisor</h3>
              <p className="text-blue-100/70 text-sm leading-relaxed">
                Leverage instant strategic insights powered by our proprietary intelligence model and Gemini reasoning.
              </p>
            </div>
            <div className="relative z-10 mt-8 text-[10px] uppercase tracking-widest text-blue-400 font-bold">
              Leontra Intelligent Systems v2.4
            </div>
          </div>
          
          <div className="p-12 md:w-2/3">
            <h4 className="text-lg font-bold text-blue-950 mb-6">Ask our Strategic Intelligence</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., What are the top 3 growth strategies for a series B SaaS company in the current economic climate?"
                className="w-full h-32 p-4 bg-blue-50/50 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-blue-900 placeholder:text-blue-300"
              />
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className={`w-full py-4 font-bold uppercase tracking-widest text-sm shadow-lg transition-all ${
                  isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200 hover:shadow-blue-300'
                } text-white rounded-lg`}
              >
                {isLoading ? 'Synthesizing Data...' : 'Generate Advisory Report'}
              </button>
            </form>

            {response && (
              <div className="mt-8 animate-fade-up">
                <h5 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 flex items-center">
                   <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                   AI Consultant Output
                </h5>
                <div className="p-6 bg-blue-50/50 border-l-4 border-blue-600 text-blue-900 text-sm leading-relaxed whitespace-pre-wrap rounded-r-lg">
                  {response}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyAdvisor;
