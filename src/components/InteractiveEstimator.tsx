import { useState, useEffect } from 'react';
import { Coins, Layers, Ruler, Building2, Check, ArrowRight, Sparkles } from 'lucide-react';

interface EstimatorProps {
  onApplyEstimate: (data: { type: string; area: number; material: string; cost: string }) => void;
}

export default function InteractiveEstimator({ onApplyEstimate }: EstimatorProps) {
  const [spaceType, setSpaceType] = useState<string>('Apartment Interior');
  const [areaSize, setAreaSize] = useState<number>(1500);
  const [materialPreset, setMaterialPreset] = useState<string>('Burmese Teak Elite');
  const [projectEstimate, setProjectEstimate] = useState<{ min: number; max: number; desc: string }>({ min: 0, max: 0, desc: '' });

  // Space config factors
  const spaceConfigs = [
    { label: 'Apartment Interior', id: 'Apartment Interior', basePerSqFt: 1200 },
    { label: 'Corporate Office HQ', id: 'Corporate Office HQ', basePerSqFt: 1800 },
    { label: 'Beauty Parlour / Retail', id: 'Beauty Parlour / Retail', basePerSqFt: 2200 },
    { label: 'Clinic / Medical Ward', id: 'Clinic / Medical Ward', basePerSqFt: 2500 },
    { label: 'Premium Gym Layout', id: 'Premium Gym Layout', basePerSqFt: 2000 },
  ];

  // Material setup multipliers
  const materialPresets = [
    { label: 'Standard Premium', id: 'Standard Premium', multiplier: 1.0, info: 'Local seasoned wood, standard false ceilings, indirect spotlighting, ambient grade-A vinyl & local tiles.' },
    { label: 'Burmese Teak Elite', id: 'Burmese Teak Elite', multiplier: 1.6, info: 'Solid Burmese Teak custom carpentry, high-gloss polyurethane lacquers, Italian aggregate composites, automated dimming circuits.' },
    { label: 'Ultra-Luxe Italian Marble', id: 'Ultra-Luxe Italian Marble', multiplier: 2.3, info: 'Full Statuttario Marble slabs, raw golden steel accents, bespoke smart home security integration, premium custom sound-dampening ceiling panels.' },
  ];

  // Dynamically compute cost estimation
  useEffect(() => {
    const spaceObj = spaceConfigs.find((s) => s.id === spaceType) || spaceConfigs[0];
    const matObj = materialPresets.find((m) => m.id === materialPreset) || materialPresets[0];

    const costCore = spaceObj.basePerSqFt * areaSize * matObj.multiplier;
    const minCost = Math.round(costCore * 0.9);
    const maxCost = Math.round(costCore * 1.15);

    setProjectEstimate({
      min: minCost,
      max: maxCost,
      desc: matObj.info,
    });
  }, [spaceType, areaSize, materialPreset]);

  const handleApply = () => {
    const formattedCost = `BDT ${(projectEstimate.min / 100000).toFixed(1)}L - ${(projectEstimate.max / 100000).toFixed(1)} Lakhs`;
    onApplyEstimate({
      type: spaceType,
      area: areaSize,
      material: materialPreset,
      cost: formattedCost,
    });

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
    <section id="estimator" className="py-24 md:py-32 bg-black/45 relative border-t border-white/5">
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-heritage-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans text-xs font-black text-heritage-gold uppercase tracking-[0.25em] block">// LIVE BUDGET BUILDER</span>
          <h2 className="font-sans text-4xl md:text-6xl font-black text-on-primary uppercase tracking-tighter">
            ESTIMATE <span className="text-stroke-white italic">CALCULATOR</span>
          </h2>
          <div className="h-1 w-24 bg-heritage-gold mx-auto mt-6" />
          <p className="font-sans text-sm text-on-primary-container max-w-lg mx-auto font-light leading-relaxed">
            Construct initial cost models and preview architectural specifications for your elite project instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Input Panel */}
          <div className="lg:col-span-7 bg-white/[0.01]/[0.02] border border-white/10 p-8 rounded-none space-y-8">
            
            {/* 1. Space Type Selection */}
            <div className="space-y-3">
              <label className="font-sans text-xs font-black text-heritage-gold uppercase tracking-widest flex items-center gap-1.5 leading-none">
                <Building2 className="w-4 h-4 text-heritage-gold" />
                1. Select Structural Space Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {spaceConfigs.map((space) => (
                  <button
                    key={space.id}
                    onClick={() => setSpaceType(space.id)}
                    className={`text-left p-4 rounded-none text-xs font-black tracking-widest uppercase transition-all flex items-center justify-between cursor-pointer border ${
                      spaceType === space.id
                        ? 'bg-heritage-gold text-deep-obsidian border-heritage-gold'
                        : 'bg-white/[0.01] border-white/10 text-on-primary-container hover:border-white/30'
                    }`}
                  >
                    <span>{space.label}</span>
                    {spaceType === space.id && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Slider Total Area Size */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex justify-between items-center leading-none">
                <label className="font-sans text-xs font-black text-heritage-gold uppercase tracking-widest flex items-center gap-1.5">
                  <Ruler className="w-4 h-4 text-heritage-gold" />
                  2. Area Size Size
                </label>
                <span className="text-xs font-sans font-black text-on-primary bg-white/10 rounded-none px-3 py-1.5 tracking-wider">
                  {areaSize.toLocaleString()} SQFT
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="8000"
                step="50"
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-none appearance-none cursor-pointer accent-heritage-gold"
              />
              <div className="flex justify-between text-[10px] text-on-primary-container font-medium uppercase font-sans tracking-wider">
                <span>Min: 300 SQFT</span>
                <span>Average: 2,500 SQFT</span>
                <span>Max: 8,000 SQFT</span>
              </div>
            </div>

            {/* 3. Materials Grade selection */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <label className="font-sans text-xs font-black text-heritage-gold uppercase tracking-widest flex items-center gap-1.5 leading-none">
                <Layers className="w-4 h-4 text-heritage-gold" />
                3. Choose Material Excellence Tier
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {materialPresets.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setMaterialPreset(mat.id)}
                    className={`text-center p-4 rounded-none text-xs font-black tracking-widest uppercase transition-all cursor-pointer border ${
                      materialPreset === mat.id
                        ? 'bg-heritage-gold text-deep-obsidian border-heritage-gold'
                        : 'bg-white/[0.01] border-white/10 text-on-primary-container hover:border-white/30'
                    }`}
                  >
                    {mat.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Projection Output */}
          <div className="lg:col-span-5 bg-white/[0.01]/[0.03] border border-heritage-gold p-8 rounded-none flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Ambient Background Accent inside the Card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-heritage-gold/10 rounded-none blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-heritage-gold animate-pulse" />
                <span className="text-[10px] tracking-[0.25em] font-sans font-black text-heritage-gold uppercase">
                  // LIVE BUDGET ESTIMATION
                </span>
              </div>

              {/* Price range display */}
              <div className="space-y-1">
                <span className="text-[10px] text-on-primary-container uppercase tracking-widest block font-bold">
                  Estimated Total Turnkey Price Range
                </span>
                <p className="font-sans text-3xl md:text-4xl text-on-primary font-black tracking-tight uppercase">
                  BDT {(projectEstimate.min / 100000).toFixed(1)}L - {(projectEstimate.max / 100000).toFixed(1)}L <br />
                  <span className="text-[10px] text-on-primary-container font-sans tracking-widest font-black block mt-1 uppercase text-heritage-gold/80">
                    equivalent to ~ ${(projectEstimate.min / 115000 * 100000).toFixed(0)} - ${(projectEstimate.max / 115000 * 100000).toFixed(0)} USD
                  </span>
                </p>
              </div>

              {/* Material configuration details */}
              <div className="space-y-2 bg-black/60 p-4 rounded-none border border-white/10">
                <span className="text-[9px] uppercase tracking-wider text-heritage-gold block font-black">
                  Material Grade Breakdown: {materialPreset}
                </span>
                <p className="text-xs text-on-primary/95 leading-relaxed font-light">
                  {projectEstimate.desc}
                </p>
              </div>

              {/* System includes info list */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] uppercase tracking-widest text-on-primary-container block font-black leading-none">
                  Included Project Deliverables
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-on-primary-container font-light">
                  <span className="flex items-center gap-2">✔ BNBC Safety Clearance</span>
                  <span className="flex items-center gap-2">✔ CAD Space layouts</span>
                  <span className="flex items-center gap-2">✔ Materials Logistics</span>
                  <span className="flex items-center gap-2">✔ Fixed Handover terms</span>
                </div>
              </div>

            </div>

            {/* Bottom Form Import Action */}
            <div className="pt-8 border-t border-white/10 relative z-10">
              <button
                onClick={handleApply}
                className="w-full bg-heritage-gold text-deep-obsidian hover:bg-white tracking-widest font-black font-sans text-xs uppercase py-4 rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer border border-heritage-gold"
              >
                Apply To Consultation Ticket
                <ArrowRight className="w-4 h-4 text-deep-obsidian" />
              </button>
              <span className="block text-center text-[9px] text-on-primary-container/80 mt-2.5 font-bold uppercase tracking-wider leading-none">
                // Calculated budget will be populated below
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
