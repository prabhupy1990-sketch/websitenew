import React from 'react';

const HistorySection: React.FC = () => {
  const historyItems = [
    { 
      year: '2010', 
      title: 'Started business', 
      desc: 'We partner with you to enable your technology so you focus on your organization’s mission leverage our talent.', 
      img: 'https://leontra.com/wp-content/uploads/2020/11/intime-01.jpg' 
    },
    { 
      year: '2012', 
      title: 'Survival during wartime', 
      desc: 'A People Ops leader who is committed to the growth and development of leaders.', 
      img: 'https://leontra.com/wp-content/uploads/2020/11/intime-04.jpg' 
    },
    { 
      year: '2016', 
      title: 'Crisis and opportunity', 
      desc: 'Our support works around the clock to ensure your work is secure and monitored safely.', 
      img: 'https://leontra.com/wp-content/uploads/2020/11/intime-07.jpg' 
    },
    { 
      year: '2017', 
      title: '50+ Branches', 
      desc: 'We cross industries and provide services to almost every business either as a co-managed or supplemental asset.', 
      img: 'https://leontra.com/wp-content/uploads/2020/11/team-06.jpg' 
    },
    { 
      year: '2019', 
      title: '100+ Branches', 
      desc: 'Whether providing consulting expertise on a specific vendor technology, strategizing on IT budget, providing a security.', 
      img: 'https://leontra.com/wp-content/uploads/2020/11/team-08.jpg' 
    },
    { 
      year: '2021', 
      title: 'Get Award', 
      desc: 'Our people are held to the highest level accountability to ensure you are always satisfied with your results.', 
      img: 'https://leontra.com/wp-content/uploads/2020/11/team-07.jpg' 
    },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
           <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">Our Journey</span>
           <h2 className="text-4xl md:text-5xl font-black text-[#003d73]">Company History</h2>
        </div>
        
        <div className="flex overflow-x-auto pb-10 space-x-8 scrollbar-hide snap-x cursor-grab active:cursor-grabbing">
          {historyItems.map((item, idx) => (
            <div key={idx} className="min-w-[320px] md:min-w-[400px] snap-center group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-slate-100">
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-6 left-6 bg-blue-600 text-white px-5 py-1.5 rounded-full font-black text-sm shadow-lg">
                    {item.year}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-[#003d73] mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;