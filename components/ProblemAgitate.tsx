import React from 'react';
import { AlertTriangle, TrendingDown, Users, Puzzle } from 'lucide-react';

export const ProblemAgitate: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              Stagnation is a Slow Death
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              It starts subtly. A missed quarter. A key hire quitting. A competitor launching a feature you should have had a year ago.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              For mid-market companies, <strong>"Business as Usual" is the enemy</strong>. While you rely on legacy processes, agile competitors are dismantling your market share piece by piece. Your sales team is blaming marketing, marketing is blaming the product, and the C-Suite is misaligned on the vision.
            </p>
            <div className="border-l-4 border-brand-gold pl-6 py-2 bg-yellow-50/50">
              <p className="text-slate-800 italic font-medium">
                "Every day you wait to restructure is a day you fund your competitor's growth."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <AgitationCard 
              icon={<TrendingDown size={32} className="text-red-500" />}
              title="Revenue Plateau"
              description="Year-over-year growth has flattened to single digits, despite increased spend."
            />
            <AgitationCard 
              icon={<Users size={32} className="text-orange-500" />}
              title="Toxic Culture"
              description="High turnover in key roles and a lack of ownership among middle management."
            />
            <AgitationCard 
              icon={<AlertTriangle size={32} className="text-yellow-500" />}
              title="Sales Friction"
              description="Longer sales cycles and lower close rates. Your value prop isn't landing."
            />
            <AgitationCard 
              icon={<Puzzle size={32} className="text-blue-500" />}
              title="Operational Chaos"
              description="Systems that worked at $10M revenue are breaking at $50M."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const AgitationCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);