import React from 'react';
import { TIMELINE_ITEMS } from '../data/content';

export const TimelineSection: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3">
            Humari Choti Si Journey
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Ek mulaqat se shuru hone wali kahani.
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative pl-8 sm:pl-12 border-l-2 border-blue-600/80 space-y-12">
          {TIMELINE_ITEMS.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Glowing Dot Milestone */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 border-4 border-slate-950 shadow-[0_0_20px_#2563eb] flex items-center justify-center group-hover:scale-125 transition-transform" />

              {/* Card Content */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)]">
                {item.dateBadge && (
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    {item.dateBadge}
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2 flex items-center gap-2">
                  <span>{item.title}</span>
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
