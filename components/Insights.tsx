
import React from 'react';
import { INSIGHTS } from '../constants';

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-4">Market Intelligence</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-blue-950">Perspective & Vision</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {INSIGHTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[16/10] rounded-xl shadow-lg border border-blue-50">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-xl">
                    {post.category}
                  </span>
                </div>
              </div>
              <time className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3 block">{post.date}</time>
              <h4 className="text-xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors leading-snug">
                {post.title}
              </h4>
              <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-blue-900 group-hover:text-blue-600 group-hover:translate-x-2 transition-all">
                Access Intelligence
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
