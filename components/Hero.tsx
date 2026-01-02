
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -skew-x-12 transform translate-x-1/4 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-950 leading-tight mb-8">
            Bridging the gap between <span className="serif italic font-normal text-blue-500">vision</span> and <span className="text-blue-900">reality</span>.
          </h1>
          <p className="text-xl text-blue-800/70 mb-10 max-w-lg leading-relaxed">
            Leontra Global is a premier strategic advisory firm helping world-class leaders drive sustainable growth and navigate complex transformations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-900 text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-blue-800 shadow-xl shadow-blue-100 transition-all">
              Explore Services
            </button>
            <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 font-bold uppercase tracking-widest hover:bg-blue-900 hover:text-white transition-all">
              View Case Studies
            </button>
          </div>
          
          <div className="mt-16 flex items-center space-x-8 text-blue-200">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-900">500+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400">Global Clients</span>
            </div>
            <div className="w-px h-10 bg-blue-100"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-900">12</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400">Global Offices</span>
            </div>
            <div className="w-px h-10 bg-blue-100"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-900">$2.5B+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400">Capital Raised</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
              alt="Consulting Excellence" 
              className="w-full object-cover h-[600px]"
            />
          </div>
          {/* Accent Box */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-900/10 backdrop-blur-3xl rounded-2xl border border-white p-8 flex flex-col justify-end shadow-2xl">
             <div className="bg-white p-5 rounded-lg shadow-xl">
                <p className="text-sm font-bold text-blue-900">Strategic Impact</p>
                <div className="h-1 bg-blue-50 mt-2">
                  <div className="h-full bg-blue-600 w-3/4"></div>
                </div>
                <p className="text-[10px] text-blue-400 mt-2 uppercase font-bold tracking-tighter">Growth Optimization Index</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
