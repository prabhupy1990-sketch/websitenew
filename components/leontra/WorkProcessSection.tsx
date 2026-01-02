import React from 'react';

const WorkProcessSection: React.FC = () => {
  return (
    <>
      {/* Section: What Sets Us Apart (Work Process) */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-8">
              <div className="ct-heading">
                <div className="mb-4">
                  <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">
                    WORK PROCESS
                  </span>
                </div>
                <h3 className="serif text-5xl font-bold text-[#001c51] leading-tight flex flex-wrap gap-x-3">
                  {["What", "Sets", "Us", "Apart"].map((word, i) => (
                    <span key={i} className="animate-fade-up inline-block" style={{ animationDelay: `${i * 150}ms` }}>
                      {word}
                    </span>
                  ))}
                </h3>
              </div>

              <div className="space-y-10">
                <div className="animate-fade-up" style={{ animationDelay: '600ms' }}>
                  <h5 className="text-xl font-bold text-[#001c51] mb-3">1. Precision-Engineered IT Talent Solutions</h5>
                  <div className="desc">
                    <p className="text-slate-500 leading-relaxed text-lg">
                      At <strong className="text-[#001c51]">Leontra</strong>, we develop customized talent mapping blueprints that align with your unique technical goals, ensuring you have the right IT expertise to power your innovation journey.
                    </p>
                  </div>
                </div>

                <div className="animate-fade-up" style={{ animationDelay: '750ms' }}>
                  <h5 className="text-xl font-bold text-[#001c51] mb-3">2. End-to-End Tech Domain Specialists</h5>
                  <div className="desc">
                    <p className="text-slate-500 leading-relaxed text-lg">
                      With specialization across cloud ecosystems, AI-driven solutions, cybersecurity frameworks, and data-driven technologies, we connect you with talent capable of tackling the most complex IT challenges.
                    </p>
                  </div>
                </div>

                <div className="animate-fade-up" style={{ animationDelay: '900ms' }}>
                  <h5 className="text-xl font-bold text-[#001c51] mb-3">3. Transformative Tech Partnerships</h5>
                  <div className="desc">
                    <p className="text-slate-500 leading-relaxed text-lg">
                      Our client-aligned staffing models and innovative IT hiring strategies focus on driving scalable digital transformation and fostering long-term technology synergies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '1100ms' }}>
              <div className="ct-image-single">
                <img 
                  loading="lazy" 
                  src="https://leontra.com/wp-content/uploads/2025/06/leontra-technologies-Logos-10-scaled.png" 
                  className="w-full max-w-[600px] h-auto object-contain transition-transform duration-700 hover:scale-105" 
                  alt="Leontra Tech Logos" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcessSection;