
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-blue-50/30 border-y border-blue-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-4">Global Reach</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-blue-950 mb-8 leading-tight">
              Ready to redefine your <span className="serif italic font-normal text-blue-400">future</span>?
            </h3>
            <p className="text-blue-800/60 text-lg mb-12 leading-relaxed">
              Connect with our global advisors to explore how our strategic solutions can transform your organization's trajectory.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 uppercase text-xs tracking-widest mb-1">Global Headquarters</h4>
                  <p className="text-blue-800/60 text-sm">One Financial Plaza, Floor 42<br />London, EC2V 6JP, United Kingdom</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 uppercase text-xs tracking-widest mb-1">General Inquiries</h4>
                  <p className="text-blue-800/60 text-sm">connect@leontraglobal.com<br />+44 (0) 20 7123 4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-10 rounded-2xl shadow-2xl border border-blue-50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-blue-50/30 border-b-2 border-blue-100 py-3 px-1 focus:border-blue-600 outline-none transition-colors text-blue-900" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-blue-50/30 border-b-2 border-blue-100 py-3 px-1 focus:border-blue-600 outline-none transition-colors text-blue-900" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">Corporate Email</label>
                <input type="email" className="w-full bg-blue-50/30 border-b-2 border-blue-100 py-3 px-1 focus:border-blue-600 outline-none transition-colors text-blue-900" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">Interest Area</label>
                <select className="w-full bg-blue-50/30 border-b-2 border-blue-100 py-3 px-1 focus:border-blue-600 outline-none transition-colors text-blue-900 appearance-none">
                  <option>Strategic Advisory</option>
                  <option>M&A Services</option>
                  <option>Global Expansion</option>
                  <option>Digital Strategy</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">Message</label>
                <textarea className="w-full bg-blue-50/30 border-b-2 border-blue-100 py-3 px-1 focus:border-blue-600 outline-none transition-colors h-24 text-blue-900" />
              </div>
              <button className="w-full bg-blue-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-blue-600 shadow-xl shadow-blue-100 transition-all">
                Initiate Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
