import React, { useState } from 'react';

const ModernizationToggleSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Column 1: Heading and Image */}
          <div>
            <div className="mb-10">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">OVERVIEW</span>
              <h3 className="text-4xl font-extrabold text-[#003d73] leading-tight mb-8">
                Modernization Services Focused on Business Outcomes
              </h3>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="https://leontra.com/wp-content/uploads/2025/06/smiley-woman-desk-pointing-tablet-leontra-1024x683.png" 
                alt="Digital Modernization" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Column 2: Toggleable Content */}
          <div className="lg:pt-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                In the current market landscape, businesses are challenged with a dual agenda—controlling costs while simultaneously pursuing modernization, innovation, and superior customer experiences to remain agile and digitally competitive.
              </p>
              
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-4 space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    To meet these opposing yet interconnected goals, organizations need a strategic approach to technology that supports both optimization and transformation.
                  </p>
                  <p>
                    We specialize in Modernization Engineering, helping our clients accelerate growth driven by modernization initiatives. Through a strong network of technology and industry partners, we co-create solutions tailored to their dual needs.
                  </p>
                  <p className="font-medium text-blue-900 italic">
                    Our methodology is anchored in Platformation™, a proprietary 16-step framework, and enhanced by a powerful suite of enablers—Lightning Tools, Intelli-Tool, and Harmoni.AI.
                  </p>
                  <p>
                    From Cloud and Data to Business Automation, Microsoft Dynamics, Managed Services, and Digital Contact Centers, our outcome-driven Digital and Modernization Engineering services deliver measurable impact.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-6 flex items-center space-x-2 text-blue-600 font-bold uppercase tracking-widest text-sm hover:text-blue-800 transition-colors"
              >
                <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                <svg 
                  className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernizationToggleSection;