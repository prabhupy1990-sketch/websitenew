
import React from 'react';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-blue-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Deep Sector Knowledge</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Industries We Transform</h3>
          <p className="text-blue-100/60 leading-relaxed">
            Our multi-disciplinary teams bring deep domain expertise to help clients outperform in rapidly changing sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-blue-900/30">
          {INDUSTRIES.map((industry) => (
            <div key={industry.name} className="relative group overflow-hidden h-96 bg-blue-950">
              <img 
                src={industry.imageUrl} 
                alt={industry.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent">
                <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">{industry.name}</h4>
                <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-300">
                  <p className="text-sm text-blue-100/70 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Solving complex challenges for market leaders in the {industry.name.toLowerCase()} space.
                  </p>
                </div>
                <div className="w-12 h-1 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
