import { useState } from 'react';
import { COMPETENCIES } from '../data';
import { Competency } from '../types';
import { Home, Briefcase, Activity, Scissors, Dumbbell, X, Play, ArrowRight, Shield } from 'lucide-react';

interface BentoGridProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export default function BentoGrid({ onSelectServiceForConsult }: BentoGridProps) {
  const [selectedComp, setSelectedComp] = useState<Competency | null>(null);

  // Map icon strings to Lucide elements
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-heritage-gold' };
    switch (iconName) {
      case 'home':
        return <Home {...props} />;
      case 'work':
        return <Briefcase {...props} />;
      case 'medical_services':
        return <Activity {...props} />;
      case 'spa':
        return <Scissors {...props} />;
      case 'fitness_center':
        return <Dumbbell {...props} />;
      default:
        return <Home {...props} />;
    }
  };

  const handleEnquiry = (title: string) => {
    setSelectedComp(null);
    onSelectServiceForConsult(title);
    
    // Smooth scroll down to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const contactRect = contactSection.getBoundingClientRect().top;
      const targetPosition = contactRect - bodyRect - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="competencies" className="py-24 md:py-32 bg-black/40 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans text-xs font-black text-heritage-gold uppercase tracking-[0.25em]">
            // MASTERY & TECHNICAL SPECS
          </span>
          <h2 className="font-sans text-4xl md:text-6xl font-black text-on-primary uppercase tracking-tighter">
            OUR CORE <span className="text-stroke-white italic">COMPETENCIES</span>
          </h2>
          <div className="h-1 w-24 bg-heritage-gold mx-auto mt-6" />
          <p className="font-sans text-sm text-on-primary-container max-w-lg mx-auto font-light leading-relaxed">
            Discover tailored architectural layouts designed with raw structural safety, ergonomic logic, and customized modern premium details. Click on any sector to view comprehensive technical specifications.
          </p>
        </div>

        {/* Bento Grid: 12-column layout on desktop, responsive stack below */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px] md:auto-rows-[430px]">
          
          {/* 1. Home Interior (Span-8) */}
          <div
            onClick={() => setSelectedComp(COMPETENCIES[0])}
            className="md:col-span-8 relative overflow-hidden rounded-none group cursor-pointer border border-white/10 transition-all duration-300 hover:border-heritage-gold"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-deep-obsidian via-deep-obsidian/30 to-transparent opacity-90 z-10" />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Luxurious traditional-modern residential space"
              src={COMPETENCIES[0].image}
            />
            
            {/* Hover Indicator */}
            <div className="absolute top-6 right-6 bg-deep-obsidian backdrop-blur-md px-3 py-1.5 rounded-none border border-heritage-gold text-[10px] uppercase font-sans tracking-widest font-black text-heritage-gold opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center gap-1">
              <Play className="w-2 h-2 fill-heritage-gold" /> Specs
            </div>

            <div className="absolute bottom-0 left-0 p-8 md:p-10 space-y-3 z-20">
              <span className="inline-flex items-center gap-1.5 text-xs text-heritage-gold font-sans font-black uppercase tracking-widest">
                <Home className="w-3.5 h-3.5 animate-pulse" /> SECTOR LEADER
              </span>
              <h3 className="font-sans text-2xl md:text-4xl text-on-primary uppercase font-black tracking-tight">
                {COMPETENCIES[0].title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-on-primary-container/95 max-w-lg font-light leading-relaxed">
                Tailored residential solutions merging custom traditional Bangladeshi teak materials with clean modern architectural comfort.
              </p>
            </div>
          </div>

          {/* 2. Office space (Span-4) */}
          <div
            onClick={() => setSelectedComp(COMPETENCIES[1])}
            className="md:col-span-4 relative overflow-hidden rounded-none group cursor-pointer border border-white/10 transition-all duration-300 hover:border-heritage-gold"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-deep-obsidian via-deep-obsidian/45 to-transparent opacity-90 z-10" />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Sleek glass high-end corporate layout"
              src={COMPETENCIES[1].image}
            />
            {/* Hover Indicator */}
            <div className="absolute top-6 right-6 bg-deep-obsidian backdrop-blur-md px-3 py-1.5 rounded-none border border-heritage-gold text-[10px] uppercase font-sans tracking-widest font-black text-heritage-gold opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center gap-1">
              <Play className="w-2 h-2 fill-heritage-gold" /> Specs
            </div>
            <div className="absolute bottom-0 left-0 p-8 z-20 space-y-2">
              <span className="inline-flex items-center gap-1 text-xs text-heritage-gold font-sans font-black uppercase tracking-widest">
                <Briefcase className="w-3.5 h-3.5" /> HIGH CORPORATE
              </span>
              <h3 className="font-sans text-xl md:text-2xl text-on-primary uppercase font-black tracking-tight">
                {COMPETENCIES[1].title}
              </h3>
              <p className="font-sans text-xs text-on-primary-container/95 font-light leading-relaxed">
                Dynamic workspace systems maximizing comfort, spatial layouts, and prestigious identity.
              </p>
            </div>
          </div>

          {/* 3. Hospital Interior (Span-4) */}
          <div
            onClick={() => setSelectedComp(COMPETENCIES[2])}
            className="md:col-span-4 relative overflow-hidden rounded-none group cursor-pointer border border-white/10 transition-all duration-300 hover:border-heritage-gold"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-deep-obsidian via-deep-obsidian/45 to-transparent opacity-90 z-10" />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Calming clean sterile medical ward room"
              src={COMPETENCIES[2].image}
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-heritage-gold font-sans font-black uppercase tracking-widest">
                <Activity className="w-3.5 h-3.5" /> MEDICAL SAFE
              </span>
              <h3 className="font-sans text-xl md:text-2xl text-on-primary uppercase font-black tracking-tight">
                {COMPETENCIES[2].title}
              </h3>
              <p className="font-sans text-xs text-on-primary-container/95 font-light leading-relaxed">
                Sterilization systems combined with natural therapy colors for clinical brilliance.
              </p>
            </div>
          </div>

          {/* 4. Parlour Design (Span-4) */}
          <div
            onClick={() => setSelectedComp(COMPETENCIES[3])}
            className="md:col-span-4 relative overflow-hidden rounded-none group cursor-pointer border border-white/10 transition-all duration-300 hover:border-heritage-gold"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-deep-obsidian via-deep-obsidian/45 to-transparent opacity-90 z-10" />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Glamourous salon with gold linings"
              src={COMPETENCIES[3].image}
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-heritage-gold font-sans font-black uppercase tracking-widest">
                <Scissors className="w-3.5 h-3.5" /> RETAIL GLAMOUR
              </span>
              <h3 className="font-sans text-xl md:text-2xl text-on-primary uppercase font-black tracking-tight">
                {COMPETENCIES[3].title}
              </h3>
              <p className="font-sans text-xs text-on-primary-container/95 font-light leading-relaxed">
                Exquisite retail templates configured with flawless mirror sets and ambient warmth.
              </p>
            </div>
          </div>

          {/* 5. Gym (Span-4) */}
          <div
            onClick={() => setSelectedComp(COMPETENCIES[4])}
            className="md:col-span-4 relative overflow-hidden rounded-none group cursor-pointer border border-white/10 transition-all duration-300 hover:border-heritage-gold"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-deep-obsidian via-deep-obsidian/45 to-transparent opacity-90 z-10" />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Industrial dynamic gym setup"
              src={COMPETENCIES[4].image}
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-heritage-gold font-sans font-black uppercase tracking-widest">
                <Dumbbell className="w-3.5 h-3.5" /> HIGH IMPACT
              </span>
              <h3 className="font-sans text-xl md:text-2xl text-on-primary uppercase font-black tracking-tight">
                {COMPETENCIES[4].title}
              </h3>
              <p className="font-sans text-xs text-on-primary-container/95 font-light leading-relaxed">
                Dynamic layout designs utilizing multi-core acoustics, high ventilation, and heavy floor rubber armor.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Specification Detail modal */}
      {selectedComp && (
        <div className="fixed inset-0 z-50 bg-[#0C0C0C]/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-deep-obsidian border-2 border-white/10 w-full max-w-2xl rounded-none shadow-2xl relative overflow-hidden my-auto animate-zoom-in max-h-[90vh] flex flex-col">
            
            {/* Header Block in Modal */}
            <div className="flex justify-between items-center bg-white/[0.02] border-b border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3">
                {renderIcon(selectedComp.icon)}
                <div>
                  <span className="text-[10px] tracking-[0.25em] font-sans font-black text-heritage-gold uppercase block">// SPECIFICATIONS MANUAL</span>
                  <h3 className="font-sans text-2xl text-on-primary font-black uppercase tracking-tight">
                    {selectedComp.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedComp(null)}
                className="text-on-primary/60 hover:text-heritage-gold transition-colors p-2"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Body in Modal Scrolling */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
              <div className="aspect-video w-full rounded-none overflow-hidden border border-white/10 relative shadow-inner">
                <img className="object-cover w-full h-full" src={selectedComp.image} alt={selectedComp.title} />
                <div className="absolute bottom-4 left-4 bg-[#0C0C0C] px-3 py-1 text-[10px] text-heritage-gold border border-heritage-gold rounded-none inline-flex items-center gap-1 font-black uppercase tracking-widest">
                  <Shield className="w-3.5 h-3.5" /> ENGINEER LOGS APPROVED
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-sans text-xs font-black text-heritage-gold uppercase tracking-widest">
                  DEPLOYMENT ARCHITECTURE & METHODOLOGY
                </h4>
                <p className="font-sans text-sm text-on-primary-container/90 leading-relaxed font-light">
                  {selectedComp.details}
                </p>
              </div>

              {/* Technical keySpecs */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="font-sans text-xs font-black text-heritage-gold uppercase tracking-widest">
                  GUARANTEED STRUCTURAL CHECKPOINTS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {selectedComp.keySpecs.map((spec, idx) => (
                    <div key={idx} className="flex gap-2.5 items-center bg-white/[0.01] p-3 rounded-none border border-white/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-heritage-gold shrink-0" />
                      <span className="font-sans text-xs text-on-primary/95 font-semibold leading-none">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Enquiry Footer in Modal */}
            <div className="bg-white/[0.02] border-t border-white/10 p-6 md:p-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <span className="block text-[10px] text-on-primary-container uppercase font-black tracking-widest">// SERVICE EXCLUSIVE</span>
                <span className="block text-xs text-on-primary font-light">Includes raw materials, structural design & site engineer logs</span>
              </div>
              <button
                onClick={() => handleEnquiry(selectedComp.title)}
                className="w-full sm:w-auto bg-heritage-gold text-deep-obsidian font-sans text-xs tracking-widest font-black uppercase px-8 py-3.5 rounded-none transition-all hover:bg-white inline-flex items-center justify-center gap-2 cursor-pointer border border-heritage-gold"
              >
                Inquire Solution
                <ArrowRight className="w-4 h-4 text-deep-obsidian" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
