import React from 'react';

const Footer: React.FC = () => {
  const industriesColumn1 = [
    { name: 'Automotive Industry', url: 'https://leontra.com/service/automotive-industry/' },
    { name: 'Education Publishing', url: 'https://leontra.com/service/education-publishing/' },
    { name: 'Life Sciences Industry', url: 'https://leontra.com/service/life-sciences-industry/' },
  ];

  const industriesColumn2 = [
    { name: 'Banking & Financial Services', url: 'https://leontra.com/service/banking-and-financial-services/' },
    { name: 'Healthcare & Life Sciences', url: 'https://leontra.com/service/healthcare-life-sciences/' },
    { name: 'Manufacturing', url: 'https://leontra.com/service/manufacturing/' },
  ];

  const industriesColumn3 = [
    { name: 'Consumer Packaged Goods', url: 'https://leontra.com/service/consumer-packaged-goods/' },
    { name: 'Insurance', url: 'https://leontra.com/service/insurance/' },
    { name: 'Travel & Hospitality', url: 'https://leontra.com/service/travel-and-hospitality/' },
  ];

  const industriesColumn4 = [
    { name: 'Energy & Utilities', url: 'https://leontra.com/service/energy-and-utilities/' },
    { name: 'Food & Beverages Industry', url: 'https://leontra.com/service/food-and-beverages-industry/' },
    { name: 'Oil & Gas Industry', url: 'https://leontra.com/service/oil-gas-industry/' },
  ];

  const industriesColumn5 = [
    { name: 'BFSI Industry', url: 'https://leontra.com/service/bfsi-industry/' },
    { name: 'Media & Entertainment', url: 'https://leontra.com/service/media-and-entertainment/' },
    { name: 'Retail', url: 'https://leontra.com/service/retail/' },
  ];

  const socialIcons = [
    { name: 'facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', url: 'https://www.facebook.com/leontratechnologies' },
    { name: 'twitter', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z', url: 'https://x.com/leontratech?t=lTeNjz7MCh3dSGy3Nb-nXQ&s=09' },
    { name: 'youtube', icon: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02V8.48L15.45 11.75z', url: 'https://youtube.com/@leontratechnologies?si=fqd_d_eJ3cS9RCZQ' },
    { name: 'pinterest', icon: 'M12 2C6.48 2 2 6.48 2 12c0 4.25 2.67 7.87 6.4 9.27-.1-.8-.19-2.01.04-2.88.2-.79 1.32-5.59 1.32-5.59s-.34-.68-.34-1.68c0-1.58.91-2.76 2.06-2.76 1.03 0 1.52.77 1.52 1.7 0 .97-.61 2.42-.93 3.77-.28 1.18.59 2.14 1.75 2.14 2.1 0 3.71-2.22 3.71-5.42 0-2.84-2.04-4.82-4.94-4.82-3.37 0-5.34 2.53-5.34 5.14 0 1.02.39 2.11.88 2.7.1.12.11.22.08.33l-.32 1.33c-.05.21-.17.26-.4.15-1.5-.7-2.43-2.9-2.43-4.66 0-3.79 2.76-7.27 7.94-7.27 4.16 0 7.4 2.97 7.4 6.93 0 4.14-2.61 7.47-6.22 7.47-1.22 0-2.36-.63-2.75-1.38 0 0-.6 2.29-.75 2.85-.27 1.04-1 2.34-1.49 3.14 1.15.34 2.35.53 3.6.53 5.52 0 10-4.48 10-10S17.52 2 12 2z', url: 'https://pin.it/7kpeCyAz5' },
    { name: 'linkedin', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2', url: 'https://www.linkedin.com/company/leontra-technologies/' },
    { name: 'instagram', icon: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z M17.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z', url: 'https://www.instagram.com/leontratechnologies?igsh=YzljYTk1ODg3Zg==' }
  ];

  return (
    <footer className="relative bg-[#050b3a] text-white pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Quick Links Section */}
        <div className="flex flex-col md:flex-row mb-16 gap-8">
          <div className="md:w-1/6">
            <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">Quick Links:</h3>
          </div>
          <div className="md:w-5/6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-10">
              {/* Column 1 */}
              <div className="flex flex-col space-y-4">
                {industriesColumn1.map((link) => (
                  <a key={link.name} href={link.url} className="text-slate-300 hover:text-white transition-colors text-[14px] leading-tight font-medium hover:underline">
                    {link.name}
                  </a>
                ))}
              </div>
              {/* Column 2 */}
              <div className="flex flex-col space-y-4">
                {industriesColumn2.map((link) => (
                  <a key={link.name} href={link.url} className="text-slate-300 hover:text-white transition-colors text-[14px] leading-tight font-medium hover:underline">
                    {link.name}
                  </a>
                ))}
              </div>
              {/* Column 3 */}
              <div className="flex flex-col space-y-4">
                {industriesColumn3.map((link) => (
                  <a key={link.name} href={link.url} className="text-slate-300 hover:text-white transition-colors text-[14px] leading-tight font-medium hover:underline">
                    {link.name}
                  </a>
                ))}
              </div>
              {/* Column 4 */}
              <div className="flex flex-col space-y-4">
                {industriesColumn4.map((link) => (
                  <a key={link.name} href={link.url} className="text-slate-300 hover:text-white transition-colors text-[14px] leading-tight font-medium hover:underline">
                    {link.name}
                  </a>
                ))}
              </div>
              {/* Column 5 */}
              <div className="flex flex-col space-y-4">
                {industriesColumn5.map((link) => (
                  <a key={link.name} href={link.url} className="text-slate-300 hover:text-white transition-colors text-[14px] leading-tight font-medium hover:underline">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Logo and Certification Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16">
          <div className="flex-shrink-0">
            <img 
              src="https://leontra.com/wp-content/uploads/2025/06/footer-Logo-01.png" 
              alt="Leontra Footer Logo" 
              className="h-16 md:h-20 object-contain grayscale brightness-200"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <img 
              src="https://leontra.com/wp-content/uploads/2025/06/ISO-Logos-01-scaled.png" 
              alt="ISO 9001:2015" 
              className="h-16 md:h-20 object-contain opacity-80" 
            />
            <img 
              src="https://leontra.com/wp-content/uploads/2025/06/ISO-Logos-02-scaled.png" 
              alt="ISO 27001" 
              className="h-16 md:h-20 object-contain opacity-80" 
            />
            <img 
              src="https://leontra.com/wp-content/uploads/2025/07/DUNS-Registered-Seal-01-1024x871.png" 
              alt="DUN & BRADSTREET" 
              className="h-16 md:h-20 object-contain opacity-80" 
            />
          </div>
        </div>

        {/* Bottom Bar: Legal & Social */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1 text-slate-400 text-[12px] font-bold uppercase tracking-widest">
              <a href="https://leontra.com/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>/</span>
              <a href="https://leontra.com/terms-and-conditions/" className="hover:text-white transition-colors">Terms & Conditions</a>
              <span>/</span>
              <a href="https://leontra.com/payment-policy/" className="hover:text-white transition-colors">Payment Policy</a>
              <span>/</span>
              <a href="https://leontra.com/cookie-policy/" className="hover:text-white transition-colors">Cookie Policy</a>
              <span>/</span>
              <a href="https://leontra.com/social-media-policy/" className="hover:text-white transition-colors">Social Media Policy</a>
            </div>
            <p className="text-slate-400 text-sm font-medium">
              Copyright © 2025 Leontra. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialIcons.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#050b3a] transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
        <div className="relative group cursor-pointer">
          {/* Badge */}
          <div className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white z-10">
            1
          </div>
          {/* Chat Bubble with Text */}
          <div className="absolute bottom-full right-0 mb-4 bg-white text-[#050b3a] px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-black text-sm pointer-events-none after:content-[''] after:absolute after:top-full after:right-4 after:border-8 after:border-transparent after:border-t-white">
            We Are Here!
          </div>
          {/* Main Button */}
          <div className="w-16 h-16 bg-[#00d084] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338c1.47.851 3.179 1.338 5 1.338 5.523 0 10-4.477 10-10S17.523 2 12 2z m0 14c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z m-3-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z m6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Accessibility Widget (Floating Left) */}
      <div className="fixed bottom-6 left-6 z-[9999]">
        <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;