import React from 'react';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="bg-[#050b3a] py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-24 max-w-6xl mx-auto">
          {/* Our Mission */}
          <div className="flex flex-col items-center text-center space-y-4 animate-fade-up">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="50" cy="50" r="35" strokeWidth="4" />
                <circle cx="50" cy="50" r="20" strokeWidth="4" />
                <circle cx="50" cy="50" r="6" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Our Mission</h3>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed font-medium max-w-md">
              We empower enterprises to thrive in a dynamic digital world by delivering cutting-edge IT consulting, scalable technology solutions, and resilient operations.
            </p>
          </div>

          {/* Our Vision */}
          <div className="flex flex-col items-center text-center space-y-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="w-16 h-16 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M15 50 Q50 15 85 50 Q50 85 15 50 Z" strokeWidth="4" />
                <circle cx="50" cy="50" r="12" strokeWidth="4" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Our Vision</h3>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed font-medium max-w-md">
              To be the most trusted global partner, transforming businesses through sustainable, secure, and future-ready digital innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;