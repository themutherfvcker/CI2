import React from 'react';
import { Check } from 'lucide-react';

export const Methodology: React.FC = () => {
  const phases = [
    {
      phase: "Phase 1",
      number: "01",
      timeline: "Pre-Engagement",
      title: "Discovery",
      desc: "A focused 30-min discovery pinpoints your goals and gaps, then a one-page SoW locks scope, fee, and payment terms so we start crystal-clear.",
      deliverables: [
        "30-min Focused Discovery Call",
        "Gap & Goal Identification",
        "One-Page SoW (Scope & Fee)",
        "Crystal-Clear Alignment"
      ],
      image: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?auto=format&fit=crop&q=80&w=2070" // Focused listening/empathy context
    },
    {
      phase: "Phase 2",
      number: "02",
      timeline: "Days 0-2",
      title: "Leadership Alignment",
      desc: "This finds your biggest gap and fixes it in 90 days —reigniting momentum without draining runway. We run 2 moderated and structured sessions of 2 hours each to minimise disruption to busy schedules - no full-day offsites or fluff. At the end, you will have a 90-plan with full consensus and alignment across you leadership team.",
      deliverables: [
        "2x Structured 2-Hour Sessions",
        "Identification of Primary Blocker",
        "90-Day Strategic Plan Creation",
        "Full Leadership Consensus"
      ],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" // Executives around table/Alignment
    },
    {
      phase: "Phase 3",
      number: "03",
      timeline: "Weeks 2 to 12",
      title: "The Execution Sprint",
      desc: "We begin execution shoulder-to-shoulder with your teams. We track activity and milestones according to our project plan and KPIs weekly. Results pile in, new things break. You see the business in a new light.",
      deliverables: [
        "Shoulder-to-Shoulder Execution",
        "Weekly KPI & Activity Tracking",
        "Milestone Management",
        "Real-time Strategic Calibration"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" // Team collaboration context
    },
    {
      phase: "Phase 4",
      number: "04",
      timeline: "Day 91",
      title: "Results & Next Steps",
      desc: "We present the final results and learnings - the good, the bad and the natural next steps for you to choose the next phase.",
      deliverables: [
        "Final Results Presentation",
        "Key Learnings Review (Good & Bad)",
        "Next Phase Selection",
        "Future Roadmap Recommendations"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" // Data/Charts/Success context
    }
  ];

  return (
    <section id="methodology" className="bg-white text-slate-900">
      {/* Header Section */}
      <div className="pt-24 pb-8 relative overflow-hidden bg-slate-50">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#0a2540" />
           </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-3 block">Our Process</span>
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-8 text-slate-900">The 90-Day Growth Sprint</h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            When growth stalls, this 90-day Growth Sprint moves you forward, building growth momentum and delivering tangible results so you can shift gears into the next phase.
          </p>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
            Whether you’re stuck in a revenue plateau or shifting gears to new phase, this sprint delivers a clear, tactical roadmap to accelerate traction and align your team.
          </p>
        </div>
      </div>

      {/* Process Sections */}
      <div className="flex flex-col">
        {phases.map((item, idx) => (
          <div 
            key={idx} 
            className={`py-16 lg:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Text Column */}
                <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-serif font-bold text-slate-900 opacity-5 select-none">
                      {item.number}
                    </span>
                    <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wide uppercase">
                      {item.timeline}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 border-l-2 border-brand-gold pl-6">
                    {item.desc}
                  </p>

                  <div className={`rounded-lg p-6 border border-slate-200 shadow-sm ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                    <h4 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-4 opacity-80">Deliverables</h4>
                    <ul className="space-y-3">
                      {item.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start text-slate-700">
                          <Check className="w-5 h-5 text-brand-lime mr-3 mt-0.5 flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Column */}
                <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-brand-gold/20 transform translate-x-4 translate-y-4 rounded-lg transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                    <div className="relative rounded-lg overflow-hidden shadow-2xl border border-slate-100 group-hover:shadow-3xl transition-all duration-700 ease-in-out">
                      {/* Removed heavy mix-blend mode to keep it light, just a subtle overlay */}
                      <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none"></div>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom CTA */}
      <div className="py-20 bg-slate-50 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xl md:text-2xl font-serif text-slate-800 italic mb-8">
            "We accomplished more in 90 days with CI than we did in the previous 2 years."
          </p>
          <div className="flex flex-col items-center">
            <span className="font-bold text-brand-gold uppercase tracking-widest text-sm mb-8">— Founder, SaaS FinTech (Sydney)</span>
            <a 
              href="#contact" 
              className="inline-block px-10 py-4 bg-brand-blue hover:bg-slate-800 text-white font-bold rounded-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start Your Sprint
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};