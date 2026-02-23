
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto rounded-3xl p-12 md:p-20 bg-emerald-600 relative overflow-hidden flex flex-col items-center text-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-950/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
          Ready to Forge a Global Legacy?
        </h2>
        
        <p className="text-emerald-50 text-xl max-w-2xl mb-12 relative z-10">
          Join OYJEN Capital in building generational prosperity through purpose-driven, institutional-grade investments in African markets.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg relative z-10">
          <button className="flex-1 px-8 py-5 bg-slate-950 text-white font-bold rounded-xl hover:bg-slate-900 transition-all hover:scale-105 active:scale-95 shadow-xl">
            Schedule Consultation
          </button>
          <button className="flex-1 px-8 py-5 bg-white text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
            Request Deck
          </button>
        </div>
        
        <p className="mt-10 text-emerald-100/70 text-sm font-medium">
          Trusted pathways to invest and operate successfully in African markets.
        </p>
      </div>
    </section>
  );
};
