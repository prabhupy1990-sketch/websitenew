import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Strategic Consulting',
    description: 'In today’s rapidly shifting business landscape, having the right talent and strategic direction is essential. Leontra’s Workforce Solutions are designed to help organizations adapt, scale, and lead by combining Strategic Consulting with Resource Augmentation—delivering both strategic clarity and operational execution through a single, seamless service.',
    image: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-05-scaled.png',
    illustration: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-09-1-scaled.png'
  },
  {
    title: 'Product Engineering',
    description: 'Leontra supports organizations in designing, developing, and maintaining software products that deliver lasting value. Our product engineering services cover the entire lifecycle—from concept and design to deployment and ongoing support.',
    image: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-03-scaled.png',
    illustration: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-07-scaled.png'
  },
  {
    title: 'SAP Full-Suite Services',
    description: 'In today’s dynamic business environment, organizations require robust, integrated systems to drive efficiency and innovation. Leontra’s SAP Full-Suite Services offer end-to-end solutions that streamline operations, enhance decision-making, and foster growth.',
    image: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-02-scaled.png',
    illustration: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-04-1-scaled.png.webp'
  },
  {
    title: 'Enterprise Development',
    description: 'In today’s rapidly evolving digital landscape, businesses require robust, scalable, and integrated solutions to stay competitive. Leontra’s Enterprise Development services are designed to address complex business challenges, streamline operations, and drive innovation through custom software solutions.',
    image: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-01-1-scaled.png.webp',
    illustration: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-06-scaled.png'
  },
  {
    title: 'Sustainability Solutions',
    description: 'Leontra helps organizations integrate sustainability into their core business practices. Our solutions enable companies to measure, manage, and improve their environmental and social impact.',
    image: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-09-scaled.png',
    illustration: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-05-1-scaled.png.webp'
  },
  {
    title: 'Application Development',
    description: 'In today’s fast-paced digital environment, businesses require custom software solutions that align closely with their goals and workflows. Leontra’s application development services focus on delivering scalable, secure, and high-performance software tailored to meet unique business needs.',
    image: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-04-2-scaled.png.webp',
    illustration: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-08-scaled.png'
  },
  {
    title: 'IT Solutions',
    description: 'In an era where digital agility defines success, Leontra stands as your strategic partner in navigating the complexities of technological evolution. Our comprehensive IT solutions are designed to streamline operations, enhance customer experiences, and drive sustainable growth.',
    image: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-11-scaled.png',
    illustration: 'https://leontra.com/wp-content/uploads/2025/06/Website-Images-03-1-scaled.png.webp'
  }
];

const ExpertiseSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative bg-white py-32 overflow-hidden min-h-[750px] flex items-center group border-b border-slate-100">
      
      {/* Side Navigation Arrows */}
      <div className="absolute inset-y-0 left-6 flex items-center z-30">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-slate-200/90 flex items-center justify-center text-red-500 hover:bg-slate-300 transition-all shadow-md transform hover:scale-110 active:scale-95"
          aria-label="Previous slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-6 flex items-center z-30">
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-slate-200/90 flex items-center justify-center text-red-500 hover:bg-slate-300 transition-all shadow-md transform hover:scale-110 active:scale-95"
          aria-label="Next slide"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="container mx-auto px-12 md:px-24 relative">
        
        {/* Giant Background Header */}
        <h2 className="absolute -top-16 left-12 text-8xl md:text-9xl font-black text-[#001c51] uppercase tracking-tighter opacity-[0.03] select-none pointer-events-none">
          OUR EXPERTISE
        </h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Column */}
          <div className="relative z-10" key={`text-${current}`}>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 leading-tight animate-fade-up">
              {slides[current].title}
            </h3>
            <p className="text-slate-500 text-xl leading-relaxed max-w-xl mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {slides[current].description}
            </p>
            <button className="bg-[#00095e] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-blue-900 transition-all shadow-2xl hover:shadow-blue-200 active:scale-95 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              KNOW MORE
            </button>
          </div>

          {/* Image Composite Column */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center lg:justify-end" key={`image-${current}`}>
            {/* Background Illustration/Graphic */}
            <div className="absolute -top-10 -right-10 w-[100%] h-[100%] pointer-events-none opacity-90 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <img 
                src={slides[current].illustration} 
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Foreground Subject Image */}
            <div className="relative z-20 w-full h-full flex items-end justify-center lg:justify-end pr-0 lg:pr-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <img 
                src={slides[current].image} 
                alt={slides[current].title}
                className="h-[115%] w-auto object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)] translate-y-16"
              />
            </div>
          </div>
        </div>

        {/* Minimal Navigation Pagination Dots */}
        <div className="flex justify-start space-x-3 mt-16 ml-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === idx ? 'w-10 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-blue-400'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSlider;