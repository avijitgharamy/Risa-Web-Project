import React, { useState } from 'react';
import { Compass, Send, Check, PhoneCall, Home, Search, MessageSquare, Briefcase } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Footer({ onNavigate, activeSection }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setIsSubscribed(false);
    }, 3000);
  };

  const handleNavClick = (id: string) => {
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const targetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Footer Main */}
      <footer className="bg-deep-obsidian py-16 border-t border-white/10 text-on-primary">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Column 1: Logo & brand description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Compass className="text-heritage-gold w-6 h-6" />
                <span className="font-sans text-lg tracking-[0.2em] text-heritage-gold font-black uppercase">
                  ELITE SPACES
                </span>
              </div>
              <p className="font-sans text-xs text-on-primary-container leading-relaxed font-light">
                Bangladeshi Heritage, Global Modernism. Premium Interior solutions and structural engineering execution excellence since 2011. Registered with Risa Engineering & Consultancy Ltd.
              </p>
            </div>

            {/* Column 2: Quick links */}
            <div className="space-y-4">
              <h4 className="font-sans text-xs font-black uppercase tracking-widest text-on-primary">
                // QUICK DIRECTORY
              </h4>
              <ul className="space-y-2.5 font-sans text-xs text-on-primary-container/90 font-light uppercase tracking-wider">
                <li>
                  <button onClick={() => handleNavClick('home')} className="hover:text-heritage-gold transition-colors cursor-pointer text-left font-semibold">
                    Home Portfolio
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('competencies')} className="hover:text-heritage-gold transition-colors cursor-pointer text-left font-semibold">
                    Interior Solutions
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('projects')} className="hover:text-heritage-gold transition-colors cursor-pointer text-left font-semibold">
                    Transformations Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('estimator')} className="hover:text-heritage-gold transition-colors cursor-pointer text-left font-semibold">
                    Budget Estimator
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Corporate Info & Support */}
            <div className="space-y-4">
              <h4 className="font-sans text-xs font-black uppercase tracking-widest text-on-primary">
                // COMPLIANCE & SAFETY
              </h4>
              <ul className="space-y-2.5 font-sans text-xs text-on-primary-container/90 font-light">
                <li>
                  <span className="block text-on-primary-container font-mono text-[10px] uppercase tracking-wider font-semibold">
                    BNBC Standardized Compliance
                  </span>
                </li>
                <li>
                  <span className="block text-on-primary-container font-mono text-[10px] uppercase tracking-wider font-semibold">
                    DIT / RAJUK Layout Clearances
                  </span>
                </li>
                <li>
                  <span className="block text-on-primary-container font-mono text-[10px] uppercase tracking-wider font-semibold">
                    25-Year Custom Structure Warranty
                  </span>
                </li>
                <li>
                  <span className="block text-on-primary-container font-mono text-[10px] uppercase tracking-wider font-semibold">
                    Hotline: +8801712345678
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter capture */}
            <div className="space-y-4">
              <h4 className="font-sans text-xs font-black uppercase tracking-widest text-on-primary">
                // DISPATCH BULLETIN
              </h4>
              <p className="font-sans text-xs text-on-primary-container leading-relaxed font-light">
                Sign up to receive case studies, design catalogues and exclusive marble news.
              </p>
              
              {isSubscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-heritage-gold font-sans font-black uppercase mt-2 animate-zoom-in leading-none">
                  <Check className="w-4 h-4 text-heritage-gold" />
                  Subscription Recorded!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex border-b border-white/20 items-center pt-1.5 focus-within:border-heritage-gold transition-colors">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your Business Email"
                    className="bg-transparent border-none focus:ring-0 text-xs w-full py-2 placeholder:text-white/25 text-on-primary outline-none"
                  />
                  <button type="submit" className="text-heritage-gold hover:text-white transition-colors cursor-pointer p-1" aria-label="Subscribe">
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>

          <div className="mt-16 text-center border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-on-primary-container text-xs font-light gap-4">
            <p className="font-mono uppercase text-[10px] tracking-widest text-on-primary-container/80">© 2026 Elite Interior & Engineering by Risa Engineering Ltd. All Rights Reserved.</p>
            <p className="font-mono text-[10px] uppercase opacity-95 text-heritage-gold font-black tracking-[0.2em]">
              DHAKA | CHITTAGONG | MANHATTAN
            </p>
          </div>
        </div>
      </footer>

      {/* FIXED Bottom Navigation Bar on Mobile devices (Hidden on desktop md) */}
      <nav className="fixed bottom-0 left-0 w-full md:hidden z-40 bg-deep-obsidian/95 backdrop-blur-md border-t border-[#FFFFFF]/15 shadow-2xl rounded-none py-3.5">
        <div className="flex justify-around items-center">
          <button
            onClick={() => handleNavClick('home')}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
              activeSection === 'home' ? 'text-heritage-gold scale-105' : 'text-on-primary-container'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[9px] font-sans font-black tracking-widest leading-none uppercase">Home</span>
          </button>
          
          <button
            onClick={() => handleNavClick('competencies')}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
              activeSection === 'competencies' ? 'text-heritage-gold scale-105' : 'text-on-primary-container'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-[9px] font-sans font-black tracking-widest leading-none uppercase">Interior</span>
          </button>
          
          <button
            onClick={() => handleNavClick('projects')}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
              activeSection === 'projects' ? 'text-heritage-gold scale-105' : 'text-on-primary-container'
            }`}
          >
            <Compass className="w-5 h-5" />
            <span className="text-[9px] font-sans font-black tracking-widest leading-none uppercase">Work</span>
          </button>
          
          <button
            onClick={() => handleNavClick('estimator')}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
              activeSection === 'estimator' ? 'text-heritage-gold scale-105' : 'text-on-primary-container'
            }`}
          >
            <Search className="w-5 h-5" />
            <span className="text-[9px] font-sans font-black tracking-widest leading-none uppercase">Estimate</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
              activeSection === 'contact' ? 'text-heritage-gold scale-105' : 'text-on-primary-container'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-[9px] font-sans font-black tracking-widest leading-none uppercase">Chat</span>
          </button>
        </div>
      </nav>

      {/* Floating CTA Widget (Bottom right) */}
      <a
        href="https://wa.me/8801712345678"
        target="_blank"
        rel="referrer"
        className="fixed bottom-20 md:bottom-10 right-6 z-40 bg-heritage-gold text-deep-obsidian p-4 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] transition-all hover:scale-105 active:scale-95 group inline-flex items-center justify-center border-2 border-white"
        title="Direct WhatsApp Consultation"
      >
        <MessageSquare className="w-6 h-6 stroke-black stroke-[2.5px]" />
        
        {/* Floating Help bubble tooltip on hover */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-deep-obsidian text-heritage-gold px-4 py-2.5 text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border-2 border-white rounded-none duration-300 pointer-events-none shadow-2xl uppercase tracking-widest hidden sm:inline">
          Consult Now
        </span>
      </a>
    </>
  );
}
