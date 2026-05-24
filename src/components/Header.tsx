import { useState, useEffect } from 'react';
import { Menu, X, Compass, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Interior Solution', id: 'competencies' },
    { label: 'Projects', id: 'projects' },
    { label: 'Approach', id: 'approach' },
    { label: 'Estimator', id: 'estimator' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-deep-obsidian/90 backdrop-blur-md py-4 border-b border-heritage-gold/10 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-16 w-full max-w-[1280px] mx-auto">
          {/* Logo Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <Compass className="text-heritage-gold w-8 h-8 transition-transform duration-500 group-hover:rotate-180" />
            <div>
              <span className="block font-sans text-xl tracking-tighter text-on-primary font-black group-hover:text-heritage-gold transition-colors uppercase">
                ELITE SPACES
              </span>
              <span className="block text-[9px] tracking-[0.25em] uppercase text-on-primary-container font-sans font-black text-heritage-gold/80">
                Risa Engineering
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {/* Status dot inspired by raw typography template */}
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[10px] text-heritage-gold uppercase tracking-widest select-none mr-2">
              <span className="w-1.5 h-1.5 bg-heritage-gold rounded-full animate-pulse" />
              Inquiry_Open
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-xs uppercase tracking-widest transition-all duration-300 hover:text-heritage-gold cursor-pointer relative py-2 ${
                  activeSection === item.id
                    ? 'text-heritage-gold font-black'
                    : 'text-on-primary/70'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-heritage-gold" />
                )}
              </button>
            ))}
            <a
              href="https://wa.me/8801712345678"
              target="_blank"
              rel="referrer"
              className="bg-heritage-gold text-deep-obsidian px-6 py-2.5 rounded-none text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-white flex items-center gap-2 border border-heritage-gold"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              CONSULT
            </a>
          </nav>

          {/* Mobile Menu Action */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-on-primary hover:text-heritage-gold transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-deep-obsidian/98 backdrop-blur-xl flex flex-col justify-center items-center md:hidden animate-fade-in">
          <nav className="flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-xl uppercase tracking-widest transition-all duration-300 ${
                  activeSection === item.id ? 'text-heritage-gold font-black scale-105' : 'text-on-primary/75 font-semibold'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/8801712345678"
              target="_blank"
              rel="referrer"
              className="bg-heritage-gold text-deep-obsidian px-10 py-4 rounded-none text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-white inline-flex items-center gap-2 mx-auto border border-heritage-gold mt-4"
            >
              <PhoneCall className="w-4 h-4" />
              Direct Consult
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
