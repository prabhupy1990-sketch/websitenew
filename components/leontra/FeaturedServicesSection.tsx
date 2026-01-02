import React from 'react';

const FeaturedServicesSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#f7f9fb]">
      {/* Background with faded architectural image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://leontra.com/wp-content/uploads/2020/11/bg-1.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-[0.07] grayscale"
        />
        <div className="absolute inset-0 bg-[#f7f9fb]/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle with decorative lines */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-[2px] bg-[#001c51]"></div>
            <span className="text-[#001c51] font-black uppercase tracking-[0.2em] text-sm">
              Featured Services
            </span>
            <div className="w-12 h-[2px] bg-blue-500"></div>
          </div>

          {/* Main Title - Serif font */}
          <h2 className="serif text-5xl md:text-6xl font-bold text-[#001c51] mb-10 leading-tight">
            We help to get Solutions!
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            We specialize in delivering tailored IT strategies, cutting-edge 
            technology solutions, and comprehensive consulting services to 
            empower businesses in achieving their goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;