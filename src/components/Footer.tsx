import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-4 text-center border-t border-slate-900 bg-slate-950 text-slate-500 text-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 font-medium text-slate-400">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 inline animate-pulse" />
          <span>for</span>
          <strong className="text-blue-300">Toobuu Jaan</strong>
          <span>by</span>
          <strong className="text-blue-400">Fahad Raza</strong>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs text-slate-400 hover:text-blue-400 transition-colors py-1.5 px-3 rounded-full bg-slate-900 border border-slate-800"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
