import React, { useEffect, useState, useCallback, useImperativeHandle, forwardRef } from 'react';

export interface FloatingHeartsRef {
  triggerBurst: (count?: number) => void;
}

interface FloatingHeartItem {
  id: string;
  symbol: string;
  left: number;
  duration: number;
  scale: number;
}

export const FloatingHearts = forwardRef<FloatingHeartsRef>((_, ref) => {
  const [hearts, setHearts] = useState<FloatingHeartItem[]>([]);

  const addHeart = useCallback((extraLeft?: number) => {
    const symbols = ['❤️', '💙', '💖', '💙', '✨', '💕'];
    const newHeart: FloatingHeartItem = {
      id: `${Date.now()}-${Math.random()}`,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: extraLeft !== undefined ? extraLeft : Math.random() * 95,
      duration: 5 + Math.random() * 5,
      scale: 0.8 + Math.random() * 0.8,
    };

    setHearts((prev) => [...prev.slice(-30), newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, newHeart.duration * 1000);
  }, []);

  const triggerBurst = useCallback((count = 15) => {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        addHeart(Math.random() * 95);
      }, i * 80);
    }
  }, [addHeart]);

  useImperativeHandle(ref, () => ({
    triggerBurst,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      addHeart();
    }, 1200);
    return () => clearInterval(interval);
  }, [addHeart]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-[-40px] text-2xl select-none"
          style={{
            left: `${heart.left}%`,
            animation: `floatUpAnim ${heart.duration}s linear forwards`,
            transform: `scale(${heart.scale})`,
          }}
        >
          {heart.symbol}
        </div>
      ))}
    </div>
  );
});

FloatingHearts.displayName = 'FloatingHearts';
