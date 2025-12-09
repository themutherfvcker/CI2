import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-16 items-center">
          
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 w-24 h-24 bg-brand-gold/20 rounded-full blur-xl"></div>
               <img 
                src="https://picsum.photos/600/600" 
                alt="Executive team planning" 
                className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded shadow-xl max-w-xs hidden md:block">
                <p className="text-brand-blue font-bold text-lg mb-1">"The best investment we made."</p>
                <p className="text-slate-500 text-sm">- CEO, Tech Logistics Corp</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              Our Methodology: The Unstuck Framework
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We don't guess. We diagnose. Our proprietary framework has been refined over a decade of working with companies ranging from $10M to $500M in revenue.
            </p>

            <ul className="space-y-6">
              {[
                { title: "Deep-Dive Audit", desc: "A 2-week forensic analysis of your financials, culture, and market position." },
                { title: "Strategic Realignment", desc: "Redefining the North Star metric and aligning the org chart to support it." },
                { title: "Execution Sprint", desc: "90-day implementation cycles to fix broken processes and quick-win revenue opportunities." },
                { title: "Long-Term Calibration", desc: "Quarterly check-ins to ensure the new systems hold under pressure." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <CheckCircle2 className="flex-shrink-0 text-brand-gold mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};