import React, { useState } from 'react';
import { SURPRISE_CONTENT } from '../data/content';
import { Heart, Gift, Sparkles, Send, MessageCircle } from 'lucide-react';

interface FinalSurpriseSectionProps {
  onTriggerBurst: (count?: number) => void;
}

interface LoveNote {
  id: string;
  author: string;
  text: string;
  time: string;
}

export const FinalSurpriseSection: React.FC<FinalSurpriseSectionProps> = ({ onTriggerBurst }) => {
  const [isSurpriseVisible, setIsSurpriseVisible] = useState(false);
  const [notes, setNotes] = useState<LoveNote[]>(() => {
    const saved = localStorage.getItem('toobuu_love_notes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [
      {
        id: 'note-1',
        author: 'Fahad',
        text: 'Toobuu Jaan, meri har dua mein tumhara naam hai. Jaldi milenge Karachi mein! ❤️',
        time: 'Just now',
      },
    ];
  });

  const [newAuthor, setNewAuthor] = useState('Toobuu');
  const [newText, setNewText] = useState('');

  const handleSurpriseToggle = () => {
    const nextState = !isSurpriseVisible;
    setIsSurpriseVisible(nextState);
    if (nextState) {
      onTriggerBurst(25);
    }
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) return;

    const noteItem: LoveNote = {
      id: `note-${Date.now()}`,
      author: newAuthor,
      text: newText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updated = [noteItem, ...notes];
    setNotes(updated);
    localStorage.setItem('toobuu_love_notes', JSON.stringify(updated));
    setNewText('');
    onTriggerBurst(12);
  };

  return (
    <section id="final" className="min-h-screen py-24 px-4 flex flex-col justify-center items-center text-center relative overflow-hidden bg-slate-950">
      <div className="max-w-3xl mx-auto w-full z-10 flex flex-col items-center">
        {/* Heartbeat Emoji */}
        <div 
          onClick={() => onTriggerBurst(15)}
          className="text-7xl sm:text-9xl mb-4 cursor-pointer select-none inline-block hover:scale-125 transition-transform animate-heartbeat"
          title="Touch my heart!"
        >
          ❤️
        </div>

        {/* Big Title */}
        <h1 className="text-5xl sm:text-8xl md:text-9xl font-black tracking-tight mb-2 bg-gradient-to-r from-white via-blue-200 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(37,99,235,0.4)]">
          I LOVE YOU
        </h1>

        {/* Subtitle */}
        <h2 className="text-3xl sm:text-5xl font-bold text-blue-300 mb-6 tracking-wide">
          TOOBUU JAAN 💙
        </h2>

        {/* Narrative tagline */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-xl mx-auto mb-10">
          Tum meri is choti si kahani ka sab se khoobsurat hissa ho.
        </p>

        {/* Surprise Button */}
        <button
          onClick={handleSurpriseToggle}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all duration-300 shadow-[0_0_35px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] hover:-translate-y-1 mb-10"
        >
          <Gift className="w-5 h-5 text-amber-300 animate-bounce" />
          <span>🎁 Apna Surprise Dekho</span>
        </button>

        {/* Surprise Box Reveal */}
        {isSurpriseVisible && (
          <div className="w-full max-w-xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-blue-500/40 shadow-[0_0_50px_rgba(37,99,235,0.3)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-6 duration-500 mb-16">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4">
              {SURPRISE_CONTENT.header}
            </h3>

            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed whitespace-pre-line mb-6">
              {SURPRISE_CONTENT.message}
            </p>

            <p className="text-blue-400 font-bold text-xl">
              {SURPRISE_CONTENT.signoff}
            </p>
          </div>
        )}

        {/* Interactive Memory & Note Board */}
        <div className="w-full max-w-2xl bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 text-left mt-8">
          <div className="flex items-center gap-2 mb-6 text-white font-bold text-xl border-b border-slate-800 pb-4">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span>Our Secret Love Notes Board 💌</span>
          </div>

          <form onSubmit={handleAddNote} className="space-y-3 mb-8">
            <div className="flex gap-2">
              <select
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-blue-300 text-xs font-semibold rounded-xl px-3 py-2.5 focus:outline-none"
              >
                <option value="Toobuu">Toobuu Jaan</option>
                <option value="Fahad">Fahad Raza</option>
              </select>
              <input
                type="text"
                placeholder="Leave a sweet note..."
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-700 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post</span>
              </button>
            </div>
          </form>

          {/* Notes List */}
          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {notes.map((note) => (
              <div
                key={note.id}
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col gap-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-400 flex items-center gap-1">
                    <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                    {note.author}
                  </span>
                  <span className="text-slate-500">{note.time}</span>
                </div>
                <p className="text-slate-200 text-sm">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
