import React, { useState, useEffect } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedHeading({ text, className = '', style }: AnimatedHeadingProps) {
  const [isAnimated, setIsAnimated] = useState(false);
  const charDelay = 30; // 30ms
  const initialDelay = 200; // 200ms initial delay
  const transitionDuration = 500; // 500ms

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');
  const lineLength = lines[0]?.length || 0;

  return (
    <h1
      className={className}
      style={{
        letterSpacing: '-0.04em',
        ...style,
      }}
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => {
            const staggerDelay =
              lineIndex * lineLength * charDelay + charIndex * charDelay;

            return (
              <span
                key={charIndex}
                className="inline-block"
                style={{
                  opacity: isAnimated ? 1 : 0,
                  transform: isAnimated ? 'translateX(0)' : 'translateX(-18px)',
                  transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
                  transitionDelay: `${staggerDelay}ms`,
                  willChange: 'opacity, transform',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
