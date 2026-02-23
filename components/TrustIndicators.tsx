
import React from 'react';
import { ShieldCheck, Globe, Users, Briefcase } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const indicators = [
    { icon: ShieldCheck, title: "15+ Years Experience", desc: "International development & policy" },
    { icon: Globe, title: "U.S. Partnerships", desc: "Development finance credentials" },
    { icon: Users, title: "Trusted Networks", desc: "Institutional African relationships" },
    { icon: Briefcase, title: "Commerce Diplomacy", desc: "Unique strategic positioning" }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-emerald-600 font-medium tracking-[0.3em] uppercase text-xs mb-4">Our Foundations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">Built on credibility, integrity, and <br className="hidden md:block" /> deep institutional experience.</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, idx) => (
            <div key={idx} className={`reveal reveal-delay-${idx} flex flex-col items-center text-center group`}>
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-emerald-600/50 group-hover:bg-emerald-50 shadow-sm group-hover:shadow-emerald-200/40">
                <item.icon className="w-6 h-6 text-slate-500 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
