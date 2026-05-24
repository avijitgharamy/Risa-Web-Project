import { Quote, ShieldCheck, Compass, HeartHandshake } from 'lucide-react';

export default function Approach() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Structural Safety First',
      description: 'Under the core guidance of Risa Engineering, we conduct full load-distribution checks, fire-proofing and seismic validations before doing a single aesthetic installation.',
    },
    {
      icon: Compass,
      title: 'Tailored Sophistication',
      description: 'We believe each project is an customized portrait. We select exclusive marbles, curated solid teak wood and high-performance architectural systems.',
    },
    {
      icon: HeartHandshake,
      title: 'Turnkey Client Trust',
      description: 'We handle everything from initial material importation, custom carpentry building, lighting grids orchestration to complete handover.',
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-32 bg-deep-obsidian relative overflow-hidden">
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-heritage-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Mission Content */}
          <div className="space-y-10">
            <div>
              <span className="font-sans text-xs font-black text-heritage-gold tracking-[0.25em] uppercase">// OUR METHODOLOGY</span>
              <h2 className="mt-4 font-sans text-4xl md:text-6xl font-black leading-[0.9] text-on-primary uppercase tracking-tighter">
                ELEGANCE THROUGH <span className="text-stroke-white block italic">RAW PRECISION</span>
              </h2>
            </div>

            <p className="font-sans text-base text-on-primary-container leading-relaxed font-light">
              At Risa Engineering & Consultancy Ltd, our approach revolves around delivering top-notch engineering and construction solutions through innovation, sustainability, and collaboration. We prioritize understanding our clients' unique lifestyle desires, designing bespoke spaces that reflect elite structural safety and luxury aesthetics.
            </p>

            {/* Micro value items */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              {values.map((v, idx) => {
                const IconComp = v.icon;
                return (
                  <div key={idx} className="flex gap-4 group">
                    <div className="bg-white/5 p-3 rounded-none border border-white/10 group-hover:bg-heritage-gold transition-colors duration-300 h-fit self-start">
                      <IconComp className="w-5 h-5 text-heritage-gold group-hover:text-deep-obsidian transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm uppercase tracking-wider text-on-primary font-black group-hover:text-heritage-gold transition-colors">
                        {v.title}
                      </h4>
                      <p className="font-sans text-sm text-on-primary-container/80 mt-1 font-light leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Structural stats counter block */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-2 group p-6 bg-white/[0.01] border border-white/10 rounded-none transition-all hover:bg-white/[0.04]">
                <span className="font-sans text-5xl text-stroke-lime font-black tracking-tighter block uppercase">
                  100+
                </span>
                <p className="font-sans text-[10px] text-on-primary-container uppercase tracking-widest font-black">
                  Projects Completed
                </p>
              </div>
              <div className="space-y-2 group p-6 bg-white/[0.01] border border-white/10 rounded-none transition-all hover:bg-white/[0.04]">
                <span className="font-sans text-5xl text-stroke-lime font-black tracking-tighter block uppercase">
                  15+
                </span>
                <p className="font-sans text-[10px] text-on-primary-container uppercase tracking-widest font-black">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Image with Glassmorphism Quotation Card */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-none border border-white/15 shadow-2xl relative group">
              <div className="absolute inset-0 bg-deep-obsidian/30 group-hover:bg-transparent transition-all duration-700 z-10" />
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                alt="Sophisticated luxury architectural masterpiece"
                src="https://lh3.googleusercontent.com/aida/ADBb0uiN6UXcSaUxu21m7DHH3SsA5rIPt3ok86pBvKk5-gwkEqSF36Qtuf0vFAVGa3n8_kktPtws39HFc0dcj0zxdTYpejBsXp0QLfT4tZ8rwprFRPr3yt0AYT-8JT22mqavhfzU8q7-2mSUEyFF8zNgqByxKjgFzkUhpamGt1M5rk7Wyyxv7GUHiVvWisaVAcX_VcKSN1jboTNdDgw3WvlFfv_knKx0qy92QOsuYjlWCSsz4_h32wJQprW-j8A"
              />
            </div>

            {/* Overlap Quotation Card */}
            <div className="absolute -bottom-10 -left-6 md:-left-10 bg-[#0C0C0C] p-8 max-w-xs rounded-none border border-white/15 shadow-2 transition-all duration-300 hover:border-heritage-gold hidden sm:block animate-fade-in">
              <Quote className="text-heritage-gold w-8 h-8 mb-4 rotate-180 opacity-85" />
              <p className="font-sans text-xs uppercase tracking-wide font-medium text-on-primary/80 leading-relaxed">
                "Architecture should speak of its time and place, but yearn for timelessness."
              </p>
              <div className="mt-4 border-t border-white/10 pt-3">
                <span className="font-sans text-[9px] tracking-[0.2em] text-heritage-gold uppercase font-black">
                  RISA DESIGN SYSTEM
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
