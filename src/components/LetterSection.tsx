import React, { useState } from 'react';
import { LETTER_CONTENT } from '../data/content';
import { Heart, Copy, Check, Send, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface LetterSectionProps {
  onHeartClick: () => void;
}

export const LetterSection: React.FC<LetterSectionProps> = ({ onHeartClick }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const fullLetterText = `Meri Toobuu Jaan ❤️\n\n${LETTER_CONTENT.paragraphs.join('\n\n')}\n\n${LETTER_CONTENT.highlightPromise}\n\n${LETTER_CONTENT.afterPromise.join('\n\n')}\n\n${LETTER_CONTENT.signature}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullLetterText);
    setIsCopied(true);
    onHeartClick();
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(fullLetterText);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
    onHeartClick();
  };

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(fullLetterText);
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      onHeartClick();
    }
  };

  return (
    <section id="letter" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            <span>{LETTER_CONTENT.title}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {LETTER_CONTENT.subtitle}
          </p>
        </div>

        {/* Letter Glass Card */}
        <div className="relative rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-blue-500/20 p-8 sm:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.6)] backdrop-blur-md">
          {/* Top Decorative Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block">
                  Love Letter
                </span>
                <span className="text-xs text-slate-400">
                  From Punjab To Karachi
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleSpeech}
                className="p-2.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500 transition-all"
                title={isSpeaking ? 'Stop Reading' : 'Listen To Letter'}
              >
                {isSpeaking ? (
                  <VolumeX className="w-4 h-4 text-pink-500 animate-pulse" />
                ) : (
                  <Volume2 className="w-4 h-4 text-blue-400" />
                )}
              </button>
              <button
                onClick={handleCopy}
                className="p-2.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500 transition-all"
                title="Copy Letter Text"
              >
                {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Letter Salutation */}
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6">
            {LETTER_CONTENT.salutation}
          </h3>

          {/* Paragraphs */}
          <div className="space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed sm:leading-loose">
            {LETTER_CONTENT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Prominent Blue Highlighted Promise */}
            <div className="my-8 p-6 rounded-2xl bg-blue-950/80 border-l-4 border-blue-500 shadow-inner">
              <p className="text-xl sm:text-2xl font-bold text-blue-300 tracking-wide text-center">
                {LETTER_CONTENT.highlightPromise}
              </p>
            </div>

            {LETTER_CONTENT.afterPromise.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {/* Signature */}
            <p className="pt-6 text-xl font-bold text-blue-300 text-right">
              {LETTER_CONTENT.signature}
            </p>
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Written with pure love for Toobuu Jaan</span>
            </span>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Send Letter on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
