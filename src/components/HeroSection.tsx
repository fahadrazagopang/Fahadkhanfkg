import React from 'react';
import { Heart, MapPin, Sparkles, Plane } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onHeartClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onHeartClick }) => {
  return (
    <section className="min-h-screen relative flex items-center justify-center text-center px-4 pt-20 pb-12 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-sky-500/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>A Special Gift For You</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-4 bg-gradient-to-br from-white via-blue-200 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(37,99,235,0.3)]">
          Toobuu Jaan
        </h1>

        {/* Subtitle */}
        <h2 
          className="text-2xl sm:text-4xl font-semibold text-blue-100/90 mb-6 flex items-center justify-center gap-3 cursor-pointer select-none group"
          onClick={onHeartClick}
        >
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 fill-red-500 animate-pulse group-hover:scale-125 transition-transform" />
          <span>Meri Choti Si Duniya</span>
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 fill-red-500 animate-pulse group-hover:scale-125 transition-transform" />
        </h2>

        {/* Location & Time Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-xs sm:text-sm text-slate-300">
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Punjab </span>
            <Plane className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>Karachi</span>
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-blue-300 font-medium">
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>20 Deno Ka Safeer</span>
          </span>
        </div>

        {/* Main Urdu Description */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Kuch kahaniyan saalon mein nahi,
          <br className="hidden sm:inline" />
          sirf ek mulaqat mein shuru ho jati hain...
          <br />
          <strong className="text-blue-300 font-semibold">
            Aur meri kahani tumse shuru hui.
          </strong>
        </p>

        {/* Call to Action Button */}
        <a
          href="#story"
          onClick={onExploreClick}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-blue-500/60 bg-blue-600/10 text-white font-medium text-base hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.25)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] hover:-translate-y-1"
        >
          <span>Hamari Kahani Dekho</span>
          <span className="text-xl group-hover:translate-y-1 transition-transform">↓</span>
        </a>
      </div>
    </section>
  );
};
