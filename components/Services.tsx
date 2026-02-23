
import React from 'react';
import { LineChart, Briefcase, Factory, Landmark } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: LineChart,
      title: "Investment Structuring & Advisory",
      desc: "Bespoke entry strategies for U.S., Asian, and diaspora investors looking to navigate African market complexities with precision."
    },
    {
      icon: Briefcase,
      title: "Blended-Finance Vehicles",
      desc: "Innovative fund management strategies that synthesize development impact with competitive commercial returns."
    },
    {
      icon: Factory,
      title: "Industrial & Knowledge Zones",
      desc: "Development of scalable innovation ecosystems, exemplified by the flagship Ibadan Knowledge & Industrial Zone."
    },
    {
      icon: Landmark,
      title: "Strategic Policy Advisory",
      desc: "Providing rigorous governance and capital support frameworks to governments and multilateral development partners."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-emerald-600 font-medium tracking-[0.3em] uppercase text-xs mb-4">Core Competencies</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Premium Advisory For Modern African Growth</h2>
          </div>
          <p className="text-slate-600 text-lg max-w-sm">
            Institutional-grade strategies engineered for long-term industrial stability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className={`reveal reveal-delay-${idx} group relative p-10 rounded-3xl bg-white border border-slate-200 hover:border-emerald-600 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] overflow-hidden`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-500">
                <service.icon className="w-8 h-8 text-emerald-600" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                {service.desc}
              </p>

              <div className="flex items-center gap-3 text-emerald-600 text-sm font-bold opacity-0 group-hover:opacity-100 translate-x-[-15px] group-hover:translate-x-0 transition-all duration-500">
                Explore Advisory Framework <span className="text-lg transition-transform group-hover:translate-x-1">&rarr;</span>
              </div>

              {/* Decorative Card Background Visual */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
