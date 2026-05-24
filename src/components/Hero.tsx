import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const handleScroll = (id: string) => {
    onScrollToSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Absolute Background with Overlays for maximum text contrast and depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-obsidian/85 via-deep-obsidian/75 to-deep-obsidian z-10" />
        <img
          alt="Elite Interior Background"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
          src="https://lh3.googleusercontent.com/aida/ADBb0uhrT1d7RmyotzJKT-btG8eJprDWo96aiKVifjJKlQaAz8-H4AFrENqMVkIlAFEKuSEdeDaeoaWpFvVFbhV77nT1nknQ7vo3_A0-AaJHcM9agV-b9RBGd9Sg-X1z03W96hNkwCxoavD235LBBPIX6eHIkV4WazXcSWJnYfo6AajnAR1PkQr1ONyxArobu-pfBnYuofE63vQ4CL_kCaaJeyTqU-4_i9oLaXoM9QOeYNUg-cotXqSdMbwPEOI"
        />
      </div>

      <div className="relative z-20 text-center px-6 md:px-16 max-w-4xl mx-auto space-y-8 pt-20">
        <div className="inline-flex items-center gap-2 border-y border-heritage-gold/30 py-2 px-4 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-heritage-gold" />
          <span className="font-sans text-xs font-semibold tracking-[0.3em] text-heritage-gold uppercase">
            Luxury Redefined
          </span>
          <Sparkles className="w-3.5 h-3.5 text-heritage-gold" />
        </div>

        {/* Large Watermark */}
        <div className="absolute -top-12 md:-top-24 right-0 text-[180px] md:text-[320px] font-black text-white/[0.02] leading-none pointer-events-none select-none tracking-tighter uppercase font-sans">
          RAW
        </div>

        <h1 className="font-sans text-[56px] md:text-[110px] uppercase font-black leading-[0.85] text-on-primary tracking-tighter drop-shadow-md text-center">
          Pure <br />
          <span className="text-stroke-white italic">Elite</span> <br />
          <span className="flex items-center justify-center gap-4 flex-wrap">
            Spaces <span className="text-base md:text-xl tracking-normal text-heritage-gold normal-case font-medium italic select-none">// Vol. 26</span>
          </span>
        </h1>

        <p className="font-sans text-base md:text-lg text-on-primary-container max-w-2xl mx-auto leading-relaxed font-light">
          Transforming spaces with rich Bangladeshi heritage & global excellence. We design, manage, and engineer tailored architectural masterpieces that resonate with soul and premium sophistication.
        </p>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => handleScroll('contact')}
            className="w-full sm:w-auto bg-heritage-gold text-deep-obsidian px-8 py-4.5 rounded text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(197,160,89,0.4)] cursor-pointer"
          >
            CONSULT OUR EXPERTS
            <ArrowRight className="w-4 h-4 text-deep-obsidian" />
          </button>
          
          <button
            onClick={() => handleScroll('projects')}
            className="w-full sm:w-auto border border-muted-bronze px-8 py-4.5 rounded text-xs font-bold uppercase tracking-widest text-on-primary transition-all duration-300 hover:bg-white/5 hover:border-heritage-gold cursor-pointer"
          >
            VIEW PORTFOLIO
          </button>
        </div>
      </div>

      {/* Bounce scroll down helper */}
      <button
        onClick={() => handleScroll('approach')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-1 hover:text-heritage-gold transition-colors z-20 cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase font-sans tracking-[0.22em] text-heritage-gold">EXPLORE</span>
        <ChevronDown className="w-6 h-6 text-heritage-gold" />
      </button>
    </section>
  );
}
