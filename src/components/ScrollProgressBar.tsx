import { useState, useEffect } from 'react';

interface ScrollProgressBarProps {
  watchKey?: string;
}

export function ScrollProgressBar({ watchKey }: ScrollProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight > 0) {
        const pct = (scrollTop / scrollHeight) * 100;
        setProgress(Math.min(100, Math.max(0, pct)));
      } else {
        setProgress(0);
      }
    };

    // Calculate immediately and also after next paint if content height changed
    updateProgress();
    const timer = setTimeout(updateProgress, 100);

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [watchKey]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[2px] z-50 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-white transition-[width] duration-75 ease-out shadow-[0_0_8px_rgba(255,255,255,0.7)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
