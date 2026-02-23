
import React from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <img
            src="/images/logo.png"
            alt="OYJEN Capital Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="text-xl font-semibold tracking-tight uppercase text-slate-900">OYJEN <span className="text-emerald-600">Capital</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">Process</a>
          <a href="#industries" className="hover:text-emerald-600 transition-colors">Industries</a>
          <a href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</a>
          <button className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Partner With Us
          </button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 shadow-lg">
          <a href="#services" className="text-lg text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#how-it-works" className="text-lg text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#industries" className="text-lg text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Industries</a>
          <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-lg">Partner With Us</button>
        </div>
      )}
    </nav>
  );
};
