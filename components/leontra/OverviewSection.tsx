import React from 'react';

const OverviewSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Column 1: Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src="https://leontra.com/wp-content/uploads/2025/06/smiley-woman-desk-pointing-tablet-leontra-scaled.png" 
              alt="Consultant explaining strategy" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Column 2: Text Content */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">OVERVIEW</span>
              <h3 className="text-4xl font-extrabold text-[#003d73] leading-tight mb-6">
                Modernization Services Focused on Business Outcomes
              </h3>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                In the current market landscape, businesses are challenged with a dual agenda—controlling costs while simultaneously pursuing modernization, innovation, and superior customer experiences to remain agile and digitally competitive.
              </p>
              <p>
                To meet these opposing yet interconnected goals, organizations need a strategic approach to technology that supports both optimization and transformation.
              </p>
              <p>
                We specialize in Modernization Engineering, helping our clients accelerate growth driven by modernization initiatives. Through a strong network of technology and industry partners, we co-create solutions tailored to their dual needs.
              </p>
              <p>
                From Cloud and Data to Business Automation, Microsoft Dynamics, Managed Services, and Digital Contact Centers, our outcome-driven Digital and Modernization Engineering services deliver measurable impact—blending cost efficiency with innovation to drive enterprise evolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;