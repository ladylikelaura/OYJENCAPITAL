
import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "OYJEN provided the bridge we needed to navigate West African regulatory landscapes with confidence. Their integrity is unmatched.",
      author: "Marcus Thorne",
      title: "Managing Director",
      org: "Global Frontier Funds",
      loc: "London"
    },
    {
      quote: "As a diaspora founder, finding a partner that understands both Silicon Valley and Lagos is rare. OYJEN is that partner.",
      author: "Chinelo Okoro",
      title: "CEO",
      org: "AfriGrid Systems",
      loc: "San Francisco"
    },
    {
      quote: "Their commitment to commerce diplomacy has facilitated key U.S.-Nigeria trade relations that previously seemed impossible.",
      author: "Hon. James Miller",
      title: "Senior Trade Advisor",
      org: "DPI Agency",
      loc: "Washington D.C."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-medium tracking-[0.3em] uppercase text-xs mb-4">Social Proof</p>
          <h2 className="text-4xl font-bold text-slate-900">Trusted By Leaders Across Continents</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-emerald-600/20 transition-all hover:shadow-md">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-emerald-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.author}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">{t.title}, {t.org}</p>
                  <p className="text-emerald-600 text-[10px] font-bold mt-0.5">{t.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
