import React, { useState, useEffect, useRef } from 'react';

const CountUp: React.FC<{ end: number; duration?: number; suffix?: string; startTrigger: boolean }> = ({ end, duration = 2000, suffix = '', startTrigger }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startTrigger) return;

    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function: easeOutExpo
      const easedProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const currentCount = Math.floor(easedProgress * end);
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, startTrigger]);

  return <>{count}{suffix}</>;
};

const CounterSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const counters = [
    { value: 1, suffix: 'K', title: ['SESSION', 'COMPLETED'] },
    { value: 14, suffix: '+', title: ['COUNTRY', 'OPERATION'] },
    { value: 20, suffix: '+', title: ['EXPERT', 'CONSULTANTS'] },
    { value: 100, suffix: '%', title: ['HAPPY', 'CLIENTS'] },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-[#003d73] via-[#001c51] to-[#040b3a] overflow-hidden"
    >
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#1e3a8a', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <path d="M0 100 L100 0 L100 100 Z" fill="url(#grad1)" />
          <circle cx="10%" cy="10%" r="20" fill="white" fillOpacity="0.05" />
          <circle cx="90%" cy="90%" r="30" fill="white" fillOpacity="0.03" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, idx) => (
            <div 
              key={idx} 
              className="bg-[#070c2e]/60 backdrop-blur-md p-12 flex flex-col items-center justify-center text-center shadow-2xl border border-white/5 transition-all duration-500 hover:-translate-y-3 hover:bg-[#0a1244]/80 hover:border-blue-500/30 group animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center justify-center mb-6 space-x-3">
                <div className="grid grid-cols-3 gap-1.5 transition-transform duration-500 group-hover:scale-125">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-cyan-400"></div>
                  ))}
                </div>
                
                <div className="flex items-baseline">
                  <span className="text-5xl font-black text-white tracking-tight">
                    <CountUp end={counter.value} startTrigger={isVisible} />
                  </span>
                  <span className="text-3xl font-bold text-blue-400 ml-1.5 group-hover:text-cyan-400 transition-colors">
                    {counter.suffix}
                  </span>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                {counter.title.map((line, lIdx) => (
                  <span 
                    key={lIdx} 
                    className="text-[14px] font-extrabold text-white/80 tracking-[0.2em] uppercase leading-tight transition-colors group-hover:text-white"
                  >
                    {line}
                  </span>
                ))}
              </div>

              <div className="mt-8 w-8 h-1 bg-blue-500/30 transition-all duration-500 group-hover:w-20 group-hover:bg-cyan-400"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;