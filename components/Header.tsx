import React, { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const dropdownMenus: Record<string, any> = {
    'About Us': {
      type: 'list',
      items: [
        'Who we are',
        'Culture of Excellence',
        'Leadership Team',
        'Partners',
        'Corporate Social Responsibility & ESG'
      ]
    },
    'Services': {
      type: 'mega',
      columns: [
        ['IT Solutions', 'Enterprise Development', 'Product Engineering', 'App Modernization'],
        ['Strategic Consulting', 'SAP Full-Suite Services', 'Sustainability Solutions', 'Risk Management'],
        ['Cloud Transformation', 'Cybersecurity Services', 'Data Center & Cloud Services', 'DevOps Strategy'],
        ['Application Development', 'Digital Transformation', 'Emerging Technologies', 'Managed IT Services']
      ]
    },
    'Industries': {
      type: 'mega',
      columns: [
        ['BFS', 'Automotives', 'Consumer Packaged Goods', 'Banking & Financial Services'],
        ['Insurance', 'Energy & Utilities', 'Education Publishing', 'Healthcare & Life Sciences'],
        ['Manufacturing', 'Life Sciences', 'Media & Entertainment', 'Food & Beverages'],
        ['Retail', 'Oil & Gas', 'Travel & Hospitality']
      ]
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo Section */}
        <a href="/" className="flex items-center space-x-3 group shrink-0">
          <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                <path d="M50 15 L75 28 L50 41 L25 28 Z" fill="#2d7abf" />
                <path d="M25 28 L50 41 L50 67 L25 54 Z" fill="#1d61a0" />
                <path d="M50 41 L75 28 L75 54 L50 67 Z" fill="#144d82" />
                <path d="M75 42 L100 55 L75 68 L50 55 Z" fill="#2d7abf" opacity="0.8" />
                <path d="M50 55 L75 68 L75 94 L50 81 Z" fill="#1d61a0" opacity="0.8" />
                <path d="M75 68 L100 55 L100 81 L75 94 Z" fill="#144d82" opacity="0.8" />
                <path d="M25 42 L50 55 L25 68 L0 55 Z" fill="#2d7abf" opacity="0.9" />
                <path d="M0 55 L25 68 L25 94 L0 81 Z" fill="#1d61a0" opacity="0.9" />
                <path d="M25 68 L50 55 L50 81 L25 94 Z" fill="#144d82" opacity="0.9" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-[#003d73] leading-none uppercase">
              LEONTRA
            </span>
            <span className="text-lg font-extrabold tracking-tight text-[#003d73] leading-none uppercase">
              TECHNOLOGIES
            </span>
            <span className="text-[8px] font-medium text-[#003d73]/60 uppercase tracking-widest mt-0.5">
              Elevating Business Beyond
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10 h-16">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.label}
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href={item.path}
                className={`flex items-center text-[15px] font-bold transition-all duration-300 h-full relative ${
                  item.label === 'Home' ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'
                }`}
              >
                {item.label}
                {dropdownMenus[item.label] && (
                  <svg className={`w-4 h-4 ml-1 mt-0.5 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {/* Active Indicator Line on Top Level */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeDropdown === item.label ? 'w-full' : 'w-0'}`}></span>
              </a>

              {/* Centered Dropdown/Mega Menu Wrapper */}
              {dropdownMenus[item.label] && activeDropdown === item.label && (
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2 ${
                    dropdownMenus[item.label].type === 'mega' ? 'w-[90vw] max-w-[1000px]' : 'w-[280px]'
                  }`}
                >
                  <div 
                    className="bg-white shadow-2xl border-t border-slate-50 overflow-hidden animate-fade-up"
                    style={{ borderBottom: '4px solid #2176c1' }}
                  >
                    {dropdownMenus[item.label].type === 'mega' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 p-10">
                        {dropdownMenus[item.label].columns.map((column: string[], colIdx: number) => (
                          <div key={colIdx} className="flex flex-col space-y-1">
                            {column.map((subItem, idx) => (
                              <a 
                                key={idx} 
                                href="#" 
                                className="group flex items-center py-4 text-[14px] font-medium transition-all duration-300 border-b border-slate-100 last:border-0 hover:bg-slate-50 text-slate-700 hover:text-blue-600 hover:pl-4"
                              >
                                <span className="h-0.5 bg-blue-600 transition-all duration-300 w-0 opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:mr-2"></span>
                                {subItem}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-2">
                        {dropdownMenus[item.label].items.map((subItem: string, idx: number) => (
                          <a 
                            key={idx} 
                            href="#" 
                            className="group flex items-center px-8 py-4 text-[15px] font-medium transition-all duration-300 border-b border-slate-50 last:border-0 hover:bg-slate-50 text-slate-700 hover:text-blue-600 hover:pl-10"
                          >
                            <span className="h-0.5 bg-blue-600 transition-all duration-300 w-0 opacity-0 group-hover:opacity-100 group-hover:w-5 group-hover:mr-3"></span>
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search and Contact Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="text-slate-800 hover:text-blue-600 transition-all duration-300 hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <a 
            href="#contact" 
            className="bg-[#2176c1] text-white px-8 py-3 rounded-lg text-sm font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
          >
            Contact US
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#003d73] p-2 transition-transform duration-200 active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl animate-fade-up border-t border-slate-50">
          <nav className="flex flex-col p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <button 
                  className="w-full text-lg font-bold text-slate-900 flex justify-between items-center py-2 transition-colors hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  {dropdownMenus[item.label] && (
                    <svg className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {dropdownMenus[item.label] && activeDropdown === item.label && (
                  <div className="bg-slate-50 mt-2 rounded-lg py-2 overflow-hidden animate-fade-up">
                    {dropdownMenus[item.label].type === 'mega' ? (
                      dropdownMenus[item.label].columns.flat().map((subItem: string, idx: number) => (
                        <a 
                          key={idx} 
                          href="#" 
                          className="block px-6 py-3 text-sm font-medium text-slate-700 border-b border-slate-100 last:border-0 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem}
                        </a>
                      ))
                    ) : (
                      dropdownMenus[item.label].items.map((subItem: string, idx: number) => (
                        <a 
                          key={idx} 
                          href="#" 
                          className="block px-6 py-3 text-sm font-medium text-slate-700 border-b border-slate-100 last:border-0 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem}
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              <button className="flex-1 bg-[#2176c1] text-white py-4 rounded-lg font-bold shadow-lg active:scale-95 transition-transform">
                Contact US
              </button>
              <button className="p-4 bg-slate-50 rounded-lg text-slate-800 active:scale-90 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;