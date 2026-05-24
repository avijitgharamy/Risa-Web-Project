import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ChevronLeft, ChevronRight, Eye, Sparkles, MapPin, DollarSign, Ruler, X, ShieldAlert } from 'lucide-react';

export default function Transformations() {
  const [filter, setFilter] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Before-After reveal toggles for each project index
  const [showBefore, setShowBefore] = useState<boolean>(false);

  // Filter projects list
  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  const handleNext = () => {
    setShowBefore(false);
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setShowBefore(false);
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleFilterChange = (category: string) => {
    setFilter(category);
    setActiveIndex(0);
    setShowBefore(false);
  };

  const currentProject = filteredProjects[activeIndex] || PROJECTS[0];

  return (
    <section id="projects" className="py-24 md:py-32 bg-deep-obsidian">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Gallery Title & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-black text-heritage-gold tracking-[0.25em] uppercase">
              // CASE SPECIALIZATION
            </span>
            <h2 className="mt-4 font-sans text-4xl md:text-6xl font-black text-on-primary uppercase tracking-tighter">
              DESIGN <span className="text-stroke-white italic">TRANSFORMATIONS</span>
            </h2>
            <p className="mt-6 font-sans text-sm text-on-primary-container max-w-lg font-light leading-relaxed">
              Discover how we redefine environments across Bangladesh and internationally, blending cultural depth with modern architectural logic. Toggle the Before view to witness our structural excellence.
            </p>
          </div>
          
          {/* Arrow Carousels - Sharp Industrial Style */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center text-heritage-gold hover:bg-heritage-gold hover:text-deep-obsidian transition-all cursor-pointer"
              aria-label="Previous transformation"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center text-heritage-gold hover:bg-heritage-gold hover:text-deep-obsidian transition-all cursor-pointer"
              aria-label="Next transformation"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Navigation Chips */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-white/10">
          {[
            { label: 'All Projects', id: 'all' },
            { label: 'Residential', id: 'residential' },
            { label: 'Corporate HQ', id: 'corporate' },
            { label: 'Commercial/Medical', id: 'hospitality' },
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => handleFilterChange(chip.id)}
              className={`px-5 py-2 rounded-none text-xs font-black uppercase tracking-widest transition-all duration-300 pointer-events-auto cursor-pointer border ${
                filter === chip.id
                  ? 'bg-heritage-gold text-deep-obsidian border-heritage-gold font-black'
                  : 'bg-white/[0.01]/[0.02] border-white/10 text-on-primary/75 hover:border-heritage-gold/50'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Dynamic Showcase Slider Split Content */}
        {filteredProjects.length > 0 ? (
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Box: Active Image with Before/After swipe comparison option */}
            <div className="lg:col-span-7 relative">
              <div className="overflow-hidden rounded-none aspect-video border border-white/10 shadow-2xl relative group bg-black/50">
                <img
                  className="w-full h-full object-cover transition-all duration-700 pointer-events-none"
                  alt={currentProject.title}
                  src={showBefore && currentProject.beforeImage ? currentProject.beforeImage : currentProject.image}
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Live Banner indicating active image state */}
                <div className="absolute top-4 left-4 z-25 bg-[#0C0C0C] backdrop-blur-md px-3 py-1.5 rounded-none border border-heritage-gold text-[10px] tracking-widest uppercase font-black text-heritage-gold flex items-center gap-1.5 shadow">
                  <Sparkles className="w-3 h-3 text-heritage-gold" />
                  {showBefore ? 'Before Transformation' : 'After Execution Luxe'}
                </div>

                {/* Instant toggle action */}
                {currentProject.beforeImage && (
                  <button
                    onClick={() => setShowBefore(!showBefore)}
                    className="absolute bottom-6 right-6 z-25 bg-heritage-gold text-deep-obsidian hover:bg-white px-5 py-2.5 rounded-none text-xs tracking-widest uppercase font-black flex items-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer border border-heritage-gold"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    {showBefore ? 'Show Finished Luxe' : 'See Raw Structure'}
                  </button>
                )}
              </div>

              {/* Toggle guide text */}
              {currentProject.beforeImage && (
                <div className="mt-3.5 flex justify-center text-center">
                  <span className="text-[10px] font-mono text-on-primary-container/80 tracking-widest uppercase font-semibold">
                    // COMPARE CONSTRUCTION PHASES
                  </span>
                </div>
              )}
            </div>

            {/* Right Box: Project Parameters Dashboard */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.25em] font-sans font-black text-heritage-gold uppercase block">
                  // ACTIVE CASE STUDY
                </span>
                <h3 className="font-sans text-2xl md:text-3xl text-on-primary uppercase font-black leading-tight tracking-tight">
                  {currentProject.title}
                </h3>
              </div>

              <p className="font-sans text-sm text-on-primary-container leading-relaxed font-light">
                {currentProject.description}
              </p>

              {/* Custom Properties grid */}
              <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-6">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-on-primary-container block font-black flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-heritage-gold animate-bounce" /> Location
                  </span>
                  <p className="text-xs text-on-primary font-bold leading-tight">
                    {currentProject.location}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-on-primary-container block font-black flex items-center gap-1">
                    <Ruler className="w-3 h-3 text-heritage-gold" /> Total Area
                  </span>
                  <p className="text-xs text-on-primary font-bold leading-tight">
                    {currentProject.size}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-on-primary-container block font-black flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-heritage-gold" /> Budget
                  </span>
                  <p className="text-xs text-on-primary font-bold leading-tight">
                    {currentProject.budget}
                  </p>
                </div>
              </div>

              {/* Highlights components list */}
              <div className="space-y-3">
                <span className="text-[10px] tracking-wider text-on-primary-container block font-black">
                  DELIVERED MILESTONES:
                </span>
                <div className="space-y-2">
                  {currentProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-heritage-gold shrink-0" />
                      <span className="text-xs text-on-primary/90 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons to View details */}
              <div className="pt-4">
                <button
                  onClick={() => setSelectedProject(currentProject)}
                  className="bg-white/5 border border-white/10 hover:border-heritage-gold text-on-primary w-full py-4 text-xs tracking-widest font-black uppercase rounded-none transition-all flex items-center justify-center gap-2 hover:bg-white/10 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-heritage-gold" />
                  View Engineering Specs
                </button>
              </div>

            </div>

          </div>
        ) : (
          <div className="py-12 text-center bg-white/[0.01] rounded-none border border-white/10">
            <p className="text-on-primary-container text-sm">No specialized projects matched this filter.</p>
          </div>
        )}

      </div>

      {/* Engineering Specs Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#0C0C0C]/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-deep-obsidian border-2 border-white/10 w-full max-w-3xl rounded-none shadow-2xl relative overflow-hidden my-auto animate-zoom-in max-h-[90vh] flex flex-col">
            
            {/* Header Block */}
            <div className="flex justify-between items-center bg-white/[0.02] border-b border-white/10 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-heritage-gold" />
                <div>
                  <span className="text-[10px] tracking-[0.25em] font-sans font-black text-heritage-gold uppercase block">// SPECIFICATION SHEET & LOGS</span>
                  <h3 className="font-sans text-2xl text-on-primary font-black uppercase tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-on-primary/60 hover:text-heritage-gold transition-colors p-2"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Body Scrolling */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Left Side: Before Image */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-sans font-black text-on-primary-container flex items-center gap-1.5 leading-none">
                    <ShieldAlert className="w-3.5 h-3.5 text-heritage-gold" strokeWidth={2.5} />
                    Original Raw Layout (Before)
                  </span>
                  <div className="aspect-video rounded-none overflow-hidden border border-white/10">
                    <img className="object-cover w-full h-full grayscale" src={selectedProject.beforeImage || selectedProject.image} alt="Before grid" />
                  </div>
                  <p className="text-[11px] text-on-primary-container font-light leading-relaxed">
                    Unoptimized ceiling heights, poor light-well reflection, unprotected concrete matrices and unmanaged acoustics.
                  </p>
                </div>

                {/* Right Side: After Image */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-sans font-black text-heritage-gold flex items-center gap-1.5 leading-none">
                    <Sparkles className="w-3.5 h-3.5 text-heritage-gold" />
                    Turnkey Refinements (After)
                  </span>
                  <div className="aspect-video rounded-none overflow-hidden border border-heritage-gold/30">
                    <img className="object-cover w-full h-full" src={selectedProject.image} alt="After grid" />
                  </div>
                  <p className="text-[11px] text-on-primary-container font-light leading-relaxed">
                    Installed water-proof teak layouts, indirect multi-zone automated LEDs, state of the art ventilation and acoustic ceiling tiles.
                  </p>
                </div>

              </div>

              {/* Technical features breakdown */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h4 className="font-sans text-xs font-black text-heritage-gold uppercase tracking-widest">
                  Turnkey Engineering Execution Specs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/[0.01] border border-white/10 p-4 rounded-none space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-heritage-gold block font-black">Ceiling & Light Matrix</span>
                    <p className="text-xs text-on-primary/80 font-light">Custom continuous seamless false-ceilings equipped with indirect Osram COB spotlights, automated dimmer control relays and modular channels.</p>
                  </div>
                  <div className="bg-white/[0.01] border border-white/10 p-4 rounded-none space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-heritage-gold block font-black">Woodwork & Framing</span>
                    <p className="text-xs text-on-primary/80 font-light">Precision CNC cut panels using Grade-1 seasoned Burmese Teak wood, polished with environment-friendly anti-scratch PU lacquer coating layers.</p>
                  </div>
                  <div className="bg-white/[0.01] border border-white/10 p-4 rounded-none space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-heritage-gold block font-black">Flooring System</span>
                    <p className="text-xs text-on-primary/80 font-light">High gloss Italian composite marble slabs paired with noise-dampening acoustic sub-floors, engineered to handle residential & corporate wear-and-tear.</p>
                  </div>
                  <div className="bg-white/[0.01] border border-white/10 p-4 rounded-none space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-heritage-gold block font-black">Thermal & Safety Grids</span>
                    <p className="text-xs text-on-primary/80 font-light">Concealed internal fire-retardant wiring ducts, smoke detection sensor placements, and custom low-velocity quiet thermal flow units.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white/[0.02] border-t border-white/10 p-6 md:p-8 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-on-primary-container uppercase font-black tracking-widest block">// RISA COMPLIANCE</span>
                <span className="text-xs text-on-primary font-light">Full compliance to Bangladesh National Building Code (BNBC).</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-heritage-gold hover:bg-white text-deep-obsidian font-sans text-xs tracking-widest font-black uppercase px-8 py-3.5 rounded-none transition-all cursor-pointer border border-heritage-gold"
              >
                CLOSE SPEC LOGS
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
