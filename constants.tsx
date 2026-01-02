
import React from 'react';
import { NavItem, Service, Industry, Insight } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '#about' },
  { label: 'Services', path: '#services' },
  { label: 'Industries', path: '#industries' },
  { label: 'Careers', path: '#careers' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Strategy & Growth',
    description: 'We help organizations identify new opportunities and develop actionable strategies to drive sustainable growth.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    id: '2',
    title: 'Digital Transformation',
    description: 'Navigating the complex digital landscape with cutting-edge technology integration and operational efficiency.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    id: '3',
    title: 'Investment Advisory',
    description: 'Expert guidance on capital allocation, M&A, and portfolio optimization for high-impact results.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: '4',
    title: 'Operational Excellence',
    description: 'Streamlining processes and organizational structures to maximize performance and profitability.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.187 1 1 0 00-.479.814V21H21v-5.11a1 1 0 00-.572-.862z',
  },
];

export const INDUSTRIES: Industry[] = [
  { name: 'Financial Services', imageUrl: 'https://picsum.photos/seed/finance/800/600' },
  { name: 'Technology & Media', imageUrl: 'https://picsum.photos/seed/tech/800/600' },
  { name: 'Healthcare & Life Sciences', imageUrl: 'https://picsum.photos/seed/health/800/600' },
  { name: 'Energy & Infrastructure', imageUrl: 'https://picsum.photos/seed/energy/800/600' },
];

export const INSIGHTS: Insight[] = [
  {
    id: '1',
    title: 'The Future of Global Capital Markets in 2025',
    category: 'Market Trends',
    date: 'Oct 24, 2024',
    imageUrl: 'https://picsum.photos/seed/market/600/400',
  },
  {
    id: '2',
    title: 'Integrating AI in Enterprise Operations',
    category: 'Technology',
    date: 'Nov 12, 2024',
    imageUrl: 'https://picsum.photos/seed/ai/600/400',
  },
  {
    id: '3',
    title: 'Sustainable Infrastructure: Investing for the Planet',
    category: 'Sustainability',
    date: 'Dec 05, 2024',
    imageUrl: 'https://picsum.photos/seed/green/600/400',
  },
];
