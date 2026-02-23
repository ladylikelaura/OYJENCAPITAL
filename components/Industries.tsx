
import React from 'react';

export const Industries: React.FC = () => {
  const industries = [
    {
      title: "Agriculture",
      image: "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=800",
      desc: "Sustainable food systems and high-yield agri-tech infrastructure."
    },
    {
      title: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      desc: "Industrial capacity and local value-add production chains."
    },
    {
      title: "Infrastructure",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      desc: "Essential digital and physical systems for modern economies."
    },
    {
      title: "Tech & Innovation",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      desc: "Building the digital backbone of the continent's knowledge economy."
    }
  ];

  return (
    <section id="industries" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-16">
          <p className="text-emerald-600 font-medium tracking-[0.3em] uppercase text-xs mb-4">Priority Sectors</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">High-Impact Growth Corridors</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <div key={idx} className={`reveal reveal-delay-${idx} group relative h-[500px] overflow-hidden rounded-3xl bg-slate-100 border border-slate-200 shadow-sm transition-all duration-700`}>
              <img 
                src={industry.image} 
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-90 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{industry.title}</h3>
                <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                  {industry.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Strategic Portfolio</span>
                  <span className="text-xl text-white transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
