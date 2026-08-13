import React, { useState } from 'react';
import { Heart, Music, VolumeX, Menu, X, Share2, Sparkles } from 'lucide-react';
import { romanticSynth } from '../utils/romanticSynth';

interface NavbarProps {
  onTriggerBurst: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTriggerBurst }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const toggleAudio = () => {
    const active = romanticSynth.toggle();
    setIsPlaying(active);
    if (active) {
      onTriggerBurst();
    }
  };

  const handleShare = () => {
    const text = "Toobuu Jaan ❤️ - Meri Choti Si Duniya: " + window.location.href;
    if (navigator.share) {
      navigator.share({
        title: 'Toobuu Jaan ❤️',
        text: 'A Special Gift For You - Fahad Raza',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const navLinks = [
    { name: 'Kahani', href: '#story' },
    { name: 'Journey', href: '#journey' },
    { name: 'Memories', href: '#photos' },
    { name: 'Message', href: '#letter' },
    { name: 'Promise', href: '#promise' },
    { name: 'Surprise', href: '#final' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-blue-500/10 transition-all">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent group"
          onClick={onTriggerBurst}
        >
          <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse group-hover:scale-125 transition-transform" />
          <span>Toobuu Jaan</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Music Toggle */}
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              isPlaying
                ? 'bg-blue-600/30 border-blue-400 text-blue-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] animate-pulse'
                : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
            }`}
            title={isPlaying ? 'Pause Ambient Music' : 'Play Romantic Melody'}
          >
            {isPlaying ? (
              <>
                <Music className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span>Music ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Music OFF</span>
              </>
            )}
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900/60 border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all"
            title="Share with Toobuu"
          >
            <Share2 className="w-3.5 h-3.5 text-blue-400" />
            <span>{isCopied ? 'Link Copied!' : 'Share'}</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-blue-500/20 px-6 py-4 flex flex-col gap-3 text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 text-sm hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-xs text-blue-400 hover:underline"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isCopied ? 'Link Copied to Clipboard!' : 'Share Web Link'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
