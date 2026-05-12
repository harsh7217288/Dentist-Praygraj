import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronsLeftRight } from 'lucide-react';

interface CompareSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  applyFilterToBefore?: boolean;
}

export function CompareSlider({ beforeImage, afterImage, title, description, applyFilterToBefore }: CompareSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6"
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 group select-none">
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt="After treatment" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          draggable={false}
        />
        
        {/* Before Image (Foreground, clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
        >
          <img 
            src={beforeImage} 
            alt="Before treatment" 
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={applyFilterToBefore ? { filter: 'sepia(0.5) brightness(0.85) hue-rotate(-15deg)' } : {}}
            referrerPolicy="no-referrer"
            draggable={false}
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-100 transition-transform group-hover:scale-110">
            <ChevronsLeftRight className="w-5 h-5 text-blue-600" />
          </div>
        </div>

        {/* Invisible Range Input for Accessibility and Touch */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
          aria-label="Compare before and after images"
        />

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-slate-900/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide pointer-events-none transition-opacity">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide pointer-events-none transition-opacity">
          After
        </div>
      </div>

      <div className="text-center px-4">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function BeforeAfter() {
  const cases = [
    {
      title: 'Dental Crowns & Bridges',
      description: 'Restored missing and damaged front teeth with custom-matched ceramic crowns, giving the patient a complete and natural-looking smile.',
      // Replace these URLs with the actual paths to your uploaded images
      // Example: If you put the images in the 'public' folder, use '/before-image.jpg'
      beforeImage: '../before.png', // Placeholder - replace with your before image
      afterImage: '../after.png',  // Placeholder - replace with your after image
      applyFilterToBefore: true, // Set this to false when using your real before/after images
    },
    {
      title: 'Deep Scaling & Polishing',
      description: 'Comprehensive removal of plaque and tartar buildup, improving both gum health and the natural aesthetics of the teeth.',
      beforeImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000',
      afterImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000',
      applyFilterToBefore: true,
    }
  ];

  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Real Results</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Transforming Smiles Daily
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Don't just take our word for it. Slide to see the actual transformations we've achieved for our patients at Elite Dental Clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {cases.map((c, index) => (
            <div key={index}>
              <CompareSlider
                title={c.title}
                description={c.description}
                beforeImage={c.beforeImage}
                afterImage={c.afterImage}
                applyFilterToBefore={c.applyFilterToBefore}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
