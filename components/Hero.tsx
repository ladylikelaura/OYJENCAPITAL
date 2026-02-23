
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col items-start text-left">
          <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            Africa's Bridge to Global Capital
          </div>

          <h1 className="reveal reveal-delay-1 text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900">
            Connecting Africa to  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Global Opportunities</span>
          </h1>

          <p className="reveal reveal-delay-2 text-slate-600 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            Helping institutional investors, and forward-thinking governments to high-impact opportunities across Africa's strategic industrial corridors.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.3)] hover:bg-emerald-700 active:scale-95 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Opportunities <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>

            <button className="px-8 py-4 border border-slate-200 hover:border-slate-400 text-slate-900 rounded-full font-semibold transition-all duration-300 bg-white shadow-sm active:scale-95 w-full sm:w-auto">
              Request Investment Deck
            </button>
          </div>

          <div className="reveal reveal-delay-3 mt-16 flex flex-col items-start">
            <div className="text-slate-400 text-sm font-medium uppercase tracking-[0.2em] mb-2">Target Launch Portfolio</div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">$10M+ Pilot 2026</div>
          </div>
        </div>

        {/* Right Side: Visual Asset */}
        <div className="reveal reveal-delay-2 flex-1 relative w-full max-w-2xl lg:max-w-none">
          <div className="relative aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200"
              alt="Africa Industrial Growth"
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Floating Card for Added Depth */}
          <div className="absolute -bottom-6 -left-6 md:-left-12 p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 max-w-[240px] hidden sm:block reveal reveal-delay-3">
            <div className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-2">Impact Highlight</div>
            <p className="text-slate-800 text-sm leading-relaxed font-medium">
              Developing scalable innovation ecosystems in strategic regional hubs.
            </p>
          </div>

          {/* Abstract background shapes behind image */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Abstract Architectural Shapes (Visuals) */}
      <div className="absolute left-[-10%] bottom-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0f172a" d="M44.7,-76.4C58.1,-69.2,69.5,-57.4,77.3,-43.8C85.1,-30.2,89.2,-15.1,88.7,-0.3C88.2,14.5,83,29,74.7,41.9C66.4,54.8,55,66.1,41.5,73.1C28,80.1,14,82.8,-0.5,83.7C-15,84.5,-30,83.5,-43.3,76.4C-56.6,69.4,-68.2,56.3,-75.6,41.5C-83,26.7,-86.2,10.1,-84.9,-5.8C-83.6,-21.7,-77.8,-36.8,-68.6,-49.4C-59.4,-62,-46.8,-72.1,-33.2,-79.1C-19.6,-86.1,-9.8,-90,2.4,-94.1C14.6,-98.2,29.3,-102.5,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="absolute right-[-5%] top-1/4 opacity-[0.05] pointer-events-none hidden lg:block">
        <svg width="600" height="600" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="300" stroke="#0f172a" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="250" stroke="#0f172a" strokeWidth="0.5" strokeDasharray="10 20" />
          <path d="M400 100 V700 M100 400 H700" stroke="#0f172a" strokeWidth="0.5" strokeDasharray="5 5" />
          <path d="M400 50C350 70 300 120 280 180C260 240 290 300 250 350C210 400 150 420 120 480C90 540 100 620 150 680C200 740 280 750 350 720C420 690 480 620 540 600C600 580 680 600 720 550C760 500 740 420 710 350C680 280 620 230 580 180C540 130 480 80 400 50Z" stroke="#0f172a" strokeWidth="1" strokeDasharray="10 10" className="animate-pulse" />
        </svg>
      </div>
    </section>
  );
};
