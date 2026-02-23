
import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/images/logo.png"
                alt="OYJEN Capital Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold tracking-tight uppercase text-slate-900">OYJEN <span className="text-emerald-600">Capital</span></span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8">
              Building generational prosperity through purpose-driven investments. Rooted in Africa, connected to the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-600 transition-all shadow-sm">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-600 transition-all shadow-sm">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-600 transition-all shadow-sm">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Regional Hubs</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>
                <strong className="text-slate-900 block mb-1 uppercase text-xs tracking-widest">North America</strong>
                Washington D.C. / New York
              </li>
              <li>
                <strong className="text-slate-900 block mb-1 uppercase text-xs tracking-widest">West Africa</strong>
                Lagos / Ibadan / Abuja
              </li>
              <li>
                <strong className="text-slate-900 block mb-1 uppercase text-xs tracking-widest">Regional Office</strong>
                Nairobi, Kenya
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Advisory Services</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Industrial Zones</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Investment Criteria</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Impact Reporting</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Partnership Model</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Insights</h4>
            <p className="text-slate-500 text-sm mb-4">Stay informed on African investment trends.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-emerald-600 transition-colors shadow-sm"
              />
              <button className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs">
            © 2026 OYJEN Capital. All rights reserved. Registered Investment Advisor.
          </p>
          <div className="flex gap-8 text-xs text-slate-400 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
            <a href="#" className="hover:text-slate-900">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
