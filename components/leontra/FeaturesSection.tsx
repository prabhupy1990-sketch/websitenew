import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="flex items-center space-x-2 mb-4">
               <div className="w-10 h-[2px] bg-blue-600"></div>
               <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#003d73] leading-tight">
              We are the leading company for <span className="text-blue-600">enhancing</span> and <span className="text-blue-600">optimizing</span> your deals.
            </h2>
          </div>
          <div className="lg:pl-12">
            <div className="p-8 bg-slate-50 rounded-2xl border-l-4 border-blue-600">
              <p className="text-slate-700 text-xl leading-relaxed font-medium">
                Leontra merges innovation with excellence to revolutionize IT and consulting services, delivering business outcomes through global expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;