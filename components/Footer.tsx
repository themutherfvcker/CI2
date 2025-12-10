import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 text-white mb-4 group">
              <Logo className="w-8 h-8 text-brand-gold" dark={true} />
              <span className="text-xl font-light">Competitive<span className="font-bold">Intelligence</span></span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Helping stuck mid-market and enterprise companies unlock their next stage of growth through rigorous analysis and structural optimization.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/competitive-analysis" className="hover:text-brand-gold transition-colors">Competitive Analysis</Link></li>
              <li><Link to="/services/c-level-coaching" className="hover:text-brand-gold transition-colors">C-Level Coaching</Link></li>
              <li><Link to="/services/org-structure" className="hover:text-brand-gold transition-colors">Org Structure</Link></li>
              <li><Link to="/services/culture" className="hover:text-brand-gold transition-colors">Culture Transformation</Link></li>
              <li><Link to="/services/marketing" className="hover:text-brand-gold transition-colors">Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/#methodology" className="hover:text-brand-gold transition-colors">Methodology</Link></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><Link to="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
          <p className="text-xs">© {new Date().getFullYear()} Competitive Intelligence. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};