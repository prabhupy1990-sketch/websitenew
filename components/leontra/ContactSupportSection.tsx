import React from 'react';

const ContactSupportSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="contact-support">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Part: Get in touch */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-up">
            <div className="mb-4">
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs">
                GET IN TOUCH
              </span>
            </div>
            <h3 className="serif text-4xl md:text-5xl font-bold text-[#001c51] leading-tight">
              We are connected all time to help your business! Seamlessly connected to support your business - anytime, anywhere.
            </h3>
          </div>
          <div className="lg:pl-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <p className="text-slate-600 text-lg leading-relaxed">
              We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. Our team is ready to assist you with any inquiries or support needs you may have.
            </p>
          </div>
        </div>

        {/* Content Part: Image and Form */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Support Image */}
          <div className="relative group animate-fade-up" style={{ animationDelay: '400ms' }}>
            <div className="absolute -inset-4 bg-slate-50 rounded-3xl -z-10 transition-all duration-500 group-hover:bg-blue-50/50"></div>
            <img 
              loading="lazy" 
              src="https://leontra.com/wp-content/uploads/2025/06/portrait-happy-smiling-cheerful-support-phone-operator-headset-isolated-white-wall-scaled.jpg" 
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Support Team" 
            />
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: '600ms' }}>
            <h3 className="serif text-4xl font-bold text-[#001c51] mb-8">Need Help!</h3>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="First Name*" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Last Name*" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="email" 
                    placeholder="Business Email ID*" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Organization*" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone*" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Country*" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <textarea 
                  placeholder="Additional Information" 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg h-32 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                ></textarea>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    I confirm, I have read and agree to sharing my information and Leontra’s 
                    <a href="#" className="text-blue-600 font-bold ml-1 hover:underline">Privacy Policy</a>
                  </span>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    I would like to receive updates from Leontra.
                  </span>
                </label>
              </div>

              <button 
                type="submit" 
                className="bg-[#001c51] text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-blue-900 transition-all shadow-xl hover:shadow-blue-200 active:scale-95"
              >
                SEND A MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupportSection;