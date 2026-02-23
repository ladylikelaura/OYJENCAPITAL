
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "What makes African markets viable now?",
      a: "Structural shifts in demography, rapid urbanization, and the African Continental Free Trade Area (AfCFTA) are creating unprecedented scales of demand in industrial and technological sectors."
    },
    {
      q: "How does OYJEN de-risk investments?",
      a: "We utilize local governance frameworks, deep political intelligence, and blended-finance structures to mitigate currency volatility and regulatory ambiguity for our partners."
    },
    {
      q: "What is commerce diplomacy?",
      a: "It is our methodology of leveraging public policy relationships and international diplomacy to secure stable, mutually beneficial investment environments for global capital."
    },
    {
      q: "What are your typical ticket sizes?",
      a: "Our pilot portfolio focuses on high-impact projects ranging from $500k to $10M, though we advise on much larger institutional capital allocations."
    },
    {
      q: "How do you ensure transparency?",
      a: "We operate under international compliance standards, providing quarterly reporting on both financial returns and ESG-aligned impact metrics."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-medium tracking-[0.3em] uppercase text-xs mb-4">Information Center</p>
          <h2 className="text-4xl font-bold text-slate-900">Investor Inquiries</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900">{faq.q}</span>
                {openIdx === idx ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48 py-6' : 'max-h-0'}`}>
                <p className="text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
