import { useRef } from 'react';
import { BackgroundStars } from './components/BackgroundStars';
import { FloatingHearts, FloatingHeartsRef } from './components/FloatingHearts';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { TimelineSection } from './components/TimelineSection';
import { PhotosSection } from './components/PhotosSection';
import { LetterSection } from './components/LetterSection';
import { PromiseSection } from './components/PromiseSection';
import { FinalSurpriseSection } from './components/FinalSurpriseSection';
import { Footer } from './components/Footer';

export default function App() {
  const heartsRef = useRef<FloatingHeartsRef>(null);

  const handleTriggerBurst = (count = 15) => {
    heartsRef.current?.triggerBurst(count);
  };

  const handleHeartClick = () => {
    handleTriggerBurst(12);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Dynamic Background Effects */}
      <BackgroundStars />
      <FloatingHearts ref={heartsRef} />

      {/* Navigation Bar */}
      <Navbar onTriggerBurst={() => handleTriggerBurst(10)} />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          onExploreClick={() => handleTriggerBurst(8)}
          onHeartClick={handleHeartClick}
        />
        <StorySection onHeartClick={handleHeartClick} />
        <TimelineSection />
        <PhotosSection onHeartClick={handleHeartClick} />
        <LetterSection onHeartClick={handleHeartClick} />
        <PromiseSection onHeartClick={handleHeartClick} />
        <FinalSurpriseSection onTriggerBurst={handleTriggerBurst} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
