import React from 'react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Tailored Solutions',
      description: "At Leontra, we understand that each company is unique. That's why we create custom staffing solutions to match your specific needs, organizational culture, and business goals.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="4" r="2" />
          <circle cx="12" cy="20" r="2" />
          <circle cx="4" cy="12" r="2" />
          <circle cx="20" cy="12" r="2" />
          <path d="M12 6v3M12 15v3M6 12h3M15 12h3" />
        </svg>
      )
    },
    {
      title: 'Expertise Across Industries',
      description: 'Our team has experience in sourcing top talent for both technical and non-technical roles across diverse sectors, making us a versatile partner for businesses in various industries.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 11l-3 3-1.5-1.5" />
        </svg>
      )
    },
    {
      title: 'Client-Centric Approach',
      description: 'We prioritize building strong, long-term partnerships with our clients. Our commitment to understanding and addressing each client’s unique challenges enables us to deliver services that exceed expectations.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <circle cx="19" cy="11" r="3" />
          <path d="M19 8v1M19 13v1M16.5 11h1M21 11h1" />
        </svg>
      )
    },
    {
      title: 'Commitment to Excellence',
      description: 'Excellence is at the heart of everything we do. From client interactions to candidate selection, we are dedicated to maintaining high standards that foster trust and success.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4M7 10l3 3 7-7" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-slate-100 overflow-hidden">
      {/* Background architectural image - Increased opacity for visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://leontra.com/wp-content/uploads/2020/12/bg-content-09.jpg" 
          alt="Background Architecture" 
          className="w-full h-full object-cover opacity-80 grayscale transition-opacity duration-1000"
        />
        {/* Lighter grey-themed overlay to allow the image to show through clearly */}
        <div className="absolute inset-0 bg-slate-100/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="serif text-5xl md:text-6xl font-bold text-[#001c51] mb-8 uppercase tracking-tight drop-shadow-sm">
            WHY CHOOSE US
          </h2>
          <p className="text-slate-900 text-lg md:text-xl font-bold max-w-4xl mx-auto leading-relaxed">
            We are your strategic partner in sourcing top-tier IT talent and building a resilient, tech-driven workforce designed to accelerate your digital transformation goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20 max-w-6xl mx-auto">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex space-x-6 animate-fade-up" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="text-[#001c51] shrink-0 pt-1">
                {reason.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-extrabold text-[#001c51] drop-shadow-sm">
                  {reason.title}
                </h3>
                <p className="text-slate-800 text-[17px] leading-relaxed font-semibold">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;