import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-3">The Solution</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-serif mb-6">Comprehensive Business Transformation</h3>
          <p className="text-slate-300 text-lg">
            We don't offer piecemeal advice. We offer a holistic system to unstuck your business and restart the growth engine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`}
              className="group relative flex flex-col h-full bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 hover:border-brand-gold/30"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.heroImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-brand-gold transition-colors">{service.title}</h4>
                
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow text-sm">
                  {service.shortDesc}
                </p>
                
                <div className="flex items-center text-brand-gold font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};