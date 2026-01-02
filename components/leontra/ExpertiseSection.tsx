import React from 'react';

const ExpertiseSection: React.FC = () => {
  const expertises = [
    { title: 'Cloud Transformation', desc: 'Modernize and migrate IT infrastructure through advanced cloud technologies for agility and cost-efficiency.' },
    { title: 'Cybersecurity Services', desc: 'Comprehensive solutions designed to protect, detect, and respond to threats proactively.' },
    { title: 'SAP Full-Suite Services', desc: 'End-to-end solutions that streamline operations, enhance decision-making, and foster growth.' },
    { title: 'IT Solutions', desc: 'Streamline operations, enhance customer experiences, and drive sustainable growth.' },
    { title: 'Product Engineering', desc: 'Designing, developing, and maintaining software products that deliver lasting value.' },
    { title: 'Sustainability Solutions', desc: 'Integrate sustainability into core business practices to improve environmental impact.' }
  ];

  return (
    <section className="py-24 bg-[#003d73] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-5xl font-black mb-6">World-Class Solutions</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:bg-white hover:text-[#003d73] transition-all group duration-500 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-bl-full group-hover:bg-blue-600/20 transition-colors"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
              <p className="opacity-70 mb-8 leading-relaxed group-hover:opacity-100 relative z-10">{item.desc}</p>
              <a href="#" className="inline-flex items-center font-bold uppercase text-xs tracking-widest border-b-2 border-blue-500 pb-1 group-hover:border-[#003d73] transition-colors relative z-10">
                Know More
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;