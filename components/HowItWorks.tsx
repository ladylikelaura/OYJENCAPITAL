
import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { title: "Discovery", desc: "Deep alignment on investor risk profiles and high-impact objectives." },
    { title: "Market Intelligence", desc: "Applying local expertise to integrate cultural and economic nuances." },
    { title: "Due Diligence", desc: "Vetting through rigorous institutional and governance frameworks." },
    { title: "Structuring", desc: "Designing vehicles that optimize for both ROI and measurable impact." },
    { title: "Partnership", desc: "Active management and continuous accountability for scaled growth." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-20">
          <p className="text-emerald-600 font-medium tracking-[0.3em] uppercase text-xs mb-4">The OYJEN Way</p>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">A Measured Approach To Value Creation</h2>
        </div>

        <div className="relative">
          {/* Timeline track */}
          <div className="absolute top-0 left-8 md:left-0 md:top-[32px] md:w-full h-full md:h-px bg-slate-200 md:-translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className={`reveal reveal-delay-${idx} flex flex-row md:flex-col items-start md:items-center gap-6 group`}>
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-emerald-600/20 flex items-center justify-center text-2xl font-bold text-slate-900 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 shadow-sm group-hover:shadow-emerald-200/50">
                    {idx + 1}
                  </div>
                </div>
                
                <div className="md:text-center mt-2">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-[220px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
