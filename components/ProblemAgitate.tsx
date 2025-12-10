import React from 'react';
import { AlertTriangle, TrendingDown, Users, Target } from 'lucide-react';

export const ProblemAgitate: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif leading-tight">
              Feeling stuck while competitors are growing — at your expense.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Do you feel like you should be growing faster but you can't seem to fix what's broken? Tried new sales, new marketing, new leadership — and things are still stuck?
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              You know that <strong>what got you here may not get you there</strong>, but you just haven't found the formula to shift gears while keeping your essence intact.
            </p>
            <div className="border-l-4 border-brand-gold pl-6 py-4 bg-yellow-50/50 rounded-r-lg">
              <p className="text-slate-800 italic font-medium">
                "Every day you wait to restructure is a day you fund your competitor's growth."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <AgitationCard 
              icon={<TrendingDown size={32} className="text-red-500" />}
              title="Revenue Plateau"
              description="Year-over-year growth has flattened to single digits, despite increased effort and spend."
            />
            <AgitationCard 
              icon={<Users size={32} className="text-blue-500" />}
              title="Culture Drift"
              description="Your culture has evolved by accident, not design. Misalignment is quietly slowing down decision-making."
            />
            <AgitationCard 
              icon={<Target size={32} className="text-orange-500" />}
              title="Sales Accountability Gap"
              description="Targets are missed and excuses are abundant. The team lacks the rigorous ownership needed to hit the number."
            />
            <AgitationCard 
              icon={<AlertTriangle size={32} className="text-yellow-500" />}
              title="Operational Drag"
              description="Existing workflows have become a time-suck. Delivery efficiency is dropping, signaling that your current systems won't support the next phase of scale."
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