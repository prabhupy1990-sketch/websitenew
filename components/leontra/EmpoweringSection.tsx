import React from 'react';

const EmpoweringSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="relative z-10 animate-fade-up">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-[3px] bg-[#001c51]"></div>
              <span className="text-[#001c51] font-bold uppercase tracking-[0.2em] text-[15px]">
                WE ARE LEONTRA TECHNOLOGIES
              </span>
            </div>

            <h2 className="serif text-5xl md:text-6xl font-bold text-[#001c51] mb-10 leading-tight">
              Empowering Businesses <br /> Everywhere
            </h2>

            <div className="space-y-8 max-w-xl">
              <p className="text-slate-600 text-[19px] leading-relaxed">
                <strong className="text-slate-800">At Leontra, we deliver innovative IT solutions and strategic consulting services to drive business growth and transformation.</strong> With expertise across diverse industries, we empower businesses through cutting-edge technology and tailored solutions that meet evolving market demands.
              </p>
              
              <p className="text-slate-600 text-[19px] leading-relaxed">
                <strong className="text-slate-800">Partner with us to build resilience, embrace innovation, and achieve sustainable success in today's dynamic business environment.</strong>
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden lg:block"></div>
            <img 
              src="https://leontra.com/wp-content/uploads/2025/06/smiley-woman-desk-pointing-tablet-leontra-scaled.png" 
              alt="Empowering businesses" 
              className="w-full h-full object-cover rounded-2xl grayscale opacity-90 transition-all duration-700 hover:grayscale-0"
            />
            {/* Decorative dots background */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 pointer-events-none">
              <div className="grid grid-cols-8 gap-4">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#001c51] rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringSection;