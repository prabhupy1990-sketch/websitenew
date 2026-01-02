import React from 'react';

const StayConnectedSection: React.FC = () => {
  return (
    <section className="bg-[#08114d] py-12 md:py-20 text-white border-t border-slate-100/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center md:text-left">
              Stay connected to get the best of Leontra in your inbox
            </h2>
          </div>
          <div className="shrink-0">
            <a 
              href="#contact" 
              className="inline-block bg-[#2176c1] hover:bg-blue-600 text-white px-14 py-5 text-[16px] font-black uppercase tracking-[0.2em] transition-all shadow-2xl hover:shadow-blue-500/30 active:scale-95 whitespace-nowrap"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnectedSection;