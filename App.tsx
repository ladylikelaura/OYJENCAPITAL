
import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Industries } from './components/Industries';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen soft-gradient-bg selection:bg-emerald-600/20">
      {/* Particle Effect Layer */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-shimmer opacity-100"></div>
        <div className="absolute inset-0 gradient-beam opacity-100"></div>
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            top: '10%',
            left: '20%'
          }}
        ></div>
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]"
          style={{
            transform: `translate(-${scrollY * 0.05}px, ${scrollY * 0.1}px)`,
            bottom: '10%',
            right: '10%'
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TrustIndicators />
          <Services />
          <HowItWorks />
          <Industries />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
