import React from 'react';
import { Heart, MessageCircleHeart, Sparkles } from 'lucide-react';
import { STORY_PARAGRAPHS } from '../data/content';

interface StorySectionProps {
  onHeartClick: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onHeartClick }) => {
  return (
    <section id="story" className="py-24 px-4 relative bg-slate-950/60 border-y border-blue-500/10">
      <div className="max-w-4xl mx-auto">
        {/* Title Block */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            <span>Hamari Kahani</span>
            <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-pulse" />
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Sirf 20 din... lekin yaadein bohat zyada.
          </p>
        </div>

        {/* Story Card */}
        <div className="relative rounded-3xl bg-slate-900/80 border border-blue-500/20 p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm overflow-hidden">
          {/* Subtle Corner Accent */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed sm:leading-loose">
            {STORY_PARAGRAPHS.map((item) => (
              <p
                key={item.id}
                dangerouslySetInnerHTML={{ __html: item.text }}
                className="transition-colors hover:text-white"
              />
            ))}
          </div>

          {/* Interactive Heart Button inside Card */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs text-blue-400">
              <MessageCircleHeart className="w-4 h-4 text-blue-400" />
              <span>Dedicated with love by Fahad</span>
            </div>
            <button
              onClick={onHeartClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-medium hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Send Heart To Toobuu ❤️</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
