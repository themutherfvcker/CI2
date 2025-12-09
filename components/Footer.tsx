import React from 'react';
import { BarChart3, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-4">
              <BarChart3 className="text-brand-gold" size={24} />
              <span className="text-xl font-bold">Competitive<span className="font-light">Intelligence</span></span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Helping stuck mid-market and enterprise companies unlock their next stage of growth through rigorous analysis and structural optimization.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Competitive Analysis</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">C-Level Coaching</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Org Structure</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Culture Transformation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
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