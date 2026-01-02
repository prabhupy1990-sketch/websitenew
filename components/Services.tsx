
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight">
              Expertise across the global business lifecycle.
            </h3>
          </div>
          <div className="pb-2">
            <a href="#all-services" className="group flex items-center text-sm font-bold uppercase tracking-widest text-blue-900 hover:text-blue-600 transition-colors">
              All Services 
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 border border-blue-50 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 flex flex-col h-full bg-blue-50/20"
            >
              <div className="mb-8 text-blue-600">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h4>
              <p className="text-blue-800/60 leading-relaxed text-sm mb-8 flex-grow">
                {service.description}
              </p>
              <a href={`#${service.id}`} className="text-xs font-bold uppercase tracking-widest text-blue-600 flex items-center group-hover:underline">
                Learn More
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
