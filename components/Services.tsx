import React from 'react';
import { Target, TrendingUp, UserCheck, Layout, Heart, ClipboardCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Competitive Analysis",
      description: "We don't just look at websites. We reverse-engineer your competitors' sales playbooks, pricing models, and talent strategies to expose their weaknesses."
    },
    {
      icon: <Layout className="w-8 h-8 text-white" />,
      title: "Org Structure Design",
      description: "Redesigning your hierarchy for speed and accountability. We eliminate silos that stifle information flow and decision making."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: "C-Level Coaching",
      description: "Executive mentorship to align the C-Suite. We turn managers into leaders and founders into CEOs who can scale."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Marketing & Sales Alignment",
      description: "Building a unified revenue engine. We fix the handoff processes, incentives, and messaging that cause friction between teams."
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Company Culture",
      description: "Culture is operating system, not perks. We codify your values into hiring, firing, and promotion frameworks."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-white" />,
      title: "HR Systems & Processes",
      description: "Scalable people operations. From onboarding to performance reviews, we build systems that retain top talent."
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-3">The Solution</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-serif mb-6">Comprehensive Business Transformation</h3>
          <p className="text-slate-300 text-lg">
            We don't offer piecemeal advice. We offer a holistic system to unstuck your business and restart the growth engine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-sm border border-slate-700/50 hover:bg-slate-800 transition-colors group">
              <div className="w-14 h-14 bg-brand-blue rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};