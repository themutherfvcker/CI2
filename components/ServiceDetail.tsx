import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, Check, Quote, ArrowRight } from 'lucide-react';
import { Contact } from './Contact';
import { SEO } from './SEO';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Competitive Intelligence",
      "url": "https://www.competitiveintelligence.com.au"
    },
    "description": service.shortDesc,
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.solution.features.map((feature) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature.split(':')[0]
        }
      }))
    }
  };

  return (
    <div className="pt-20">
      <SEO 
        title={`${service.title} | Competitive Intelligence`}
        description={service.shortDesc}
        schema={serviceSchema}
      />
      
      {/* Service Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-brand-blue rounded-lg shadow-xl shadow-black/30 border border-slate-700">
              {service.icon}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* The Problem (Agitate) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block">The Problem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
                {service.problem.heading}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {service.problem.text}
              </p>
              
              <div className="bg-slate-50 border-l-4 border-red-500 p-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  {service.agitate.heading}
                </h3>
                <ul className="space-y-3">
                  {service.agitate.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-slate-700">
                      <span className="text-red-500 mr-3 mt-1.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-slate-900 text-white p-10 rounded-lg shadow-2xl relative z-10">
                <Quote size={48} className="text-brand-gold opacity-30 mb-6" />
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-slate-200 mb-6">
                  "{service.agitate.quote}"
                </p>
                <div className="w-16 h-1 bg-brand-gold"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-slate-200 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Our Solution</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              {service.solution.heading}
            </h2>
            <p className="text-lg text-slate-600">
              {service.solution.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.solution.features.map((feature, idx) => {
              const [title, desc] = feature.split(':');
              return (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                        <Check size={18} className="text-brand-gold" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
                      <p className="text-slate-600">{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-bold rounded-sm hover:bg-slate-800 transition-colors shadow-lg">
              Discuss Your Strategy <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Reuse Contact Section */}
      <Contact />
    </div>
  );
};