import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
          We help <span className="text-brand-lime">stuck</span> companies <span className="text-brand-lime line-through decoration-slate-400 decoration-4 opacity-70">grow</span> <span className="text-brand-lime">scale</span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
          You’ve hit a revenue plateau. The strategies that got you here aren't getting you there. 
          We provide the <strong>Competitive Intelligence</strong> and structural overhaul required to break through the ceiling.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact"
            className="inline-flex justify-center items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-sm hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl group"
          >
            Unblock Your Growth
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a 
            href="#problem"
            className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 border border-slate-200 font-semibold rounded-sm hover:bg-slate-50 transition-colors"
          >
            Diagnose the Issue
          </a>
        </div>

      </div>
    </section>
  );
};