import React from 'react';
import { Heart, Plane, MapPin } from 'lucide-react';

interface PromiseSectionProps {
  onHeartClick: () => void;
}

export const PromiseSection: React.FC<PromiseSectionProps> = ({ onHeartClick }) => {
  return (
    <section id="promise" className="py-28 px-4 text-center relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 via-slate-950 to-slate-950 border-y border-blue-500/20">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Pulsing Blue Heart */}
        <div 
          onClick={onHeartClick}
          className="text-7xl sm:text-8xl mb-8 cursor-pointer select-none inline-block hover:scale-125 transition-transform animate-heartbeat"
          title="Click for heart burst!"
        >
          💙
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 tracking-tight bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
          Karachi Se Punjab Tak...
        </h2>

        {/* Flight Trajectory Route Banner */}
        <div className="max-w-md mx-auto my-8 p-4 rounded-full bg-slate-900/90 border border-blue-500/30 flex items-center justify-between px-8 text-sm font-semibold text-slate-200 shadow-[0_0_25px_rgba(37,99,235,0.2)]">
          <div className="flex items-center gap-1.5 text-blue-300">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Punjab</span>
          </div>

          <div className="flex-1 mx-4 relative flex items-center justify-center">
            <div className="w-full border-b-2 border-dashed border-blue-500/40" />
            <Plane className="w-5 h-5 text-blue-400 absolute animate-pulse" />
          </div>

          <div className="flex items-center gap-1.5 text-blue-300">
            <MapPin className="w-4 h-4 text-sky-400" />
            <span>Karachi</span>
          </div>
        </div>

        {/* Text Paragraphs */}
        <div className="space-y-6 text-slate-200 text-lg sm:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
          <p className="text-slate-300">
            Fasla sirf shehron ka hai, dilon ka nahi.
          </p>

          <p className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-100">
            <strong>
              Tum Karachi mein ho aur main Punjab mein, lekin tum mere dil ke bohat qareeb ho.
            </strong>
          </p>

          <p className="text-blue-300 text-xl sm:text-2xl pt-2">
            Aur haan Toobuu Jaan...
          </p>

          <p className="text-2xl sm:text-4xl font-extrabold text-white pt-2 bg-gradient-to-r from-blue-300 via-white to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <span>Main tumhare liye Karachi aaunga. ✈️❤️</span>
          </p>
        </div>
      </div>
    </section>
  );
};
