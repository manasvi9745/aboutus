import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface Blip {
  id: number;
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

const RadarBackground: React.FC = () => {
  const radarRef = useRef<SVGSVGElement>(null);
  const wedgeRef = useRef<SVGGElement>(null);
  const radarGroupRef = useRef<SVGGElement>(null);
  const [blips, setBlips] = useState<Blip[]>([]);
  const blipIdRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Render static SVG without animations
      return;
    }

    // Initialize blips
    const initialBlips: Blip[] = [];
    for (let i = 0; i < 6; i++) {
      initialBlips.push({
        id: blipIdRef.current++,
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: 0,
        opacity: 0
      });
    }
    setBlips(initialBlips);

    // Start radar rotation
    if (wedgeRef.current) {
      gsap.set(wedgeRef.current, { transformOrigin: '50% 50%' });
      gsap.to(wedgeRef.current, {
        rotation: 360,
        duration: 6,
        ease: 'none',
        repeat: -1
      });
    }

    // Blip animation interval
    const blipInterval = setInterval(() => {
      setBlips(currentBlips => {
        const newBlips = [...currentBlips];
        const randomIndex = Math.floor(Math.random() * newBlips.length);
        const blip = newBlips[randomIndex];
        
        // Reset position
        blip.x = Math.random() * 100;
        blip.y = Math.random() * 100;
        
        // Animate blip
        gsap.timeline()
          .to(blip, {
            scale: 1.8,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
          })
          .to(blip, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in'
          });
        
        return newBlips;
      });
    }, 1200);

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!radarGroupRef.current) return;
      
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const x = (e.clientX - cx) * 0.03;
      const y = (e.clientY - cy) * 0.03;
      
      gsap.to(radarGroupRef.current, {
        x,
        y,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    // Throttled mouse move
    let rafId: number;
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleMouseMove(e);
        rafId = 0;
      });
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      clearInterval(blipInterval);
      window.removeEventListener('mousemove', throttledMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <svg
        ref={radarRef}
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Radar sweep gradient */}
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A0C5AE" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#A0C5AE" stopOpacity="0" />
          </linearGradient>
          
          {/* Mask for radar circles */}
          <mask id="radarMask">
            <rect width="100" height="100" fill="black" />
            <circle cx="50" cy="50" r="45" fill="white" stroke="none" />
            <circle cx="50" cy="50" r="65" fill="none" stroke="white" strokeWidth="0.5" />
          </mask>
          
          {/* Radar sweep wedge path (30° arc) */}
          <path
            id="wedgePath"
            d="M 50 50 L 50 5 A 45 45 0 0 1 72.99 27.5 Z"
            fill="url(#radarGradient)"
          />
        </defs>

        <g ref={radarGroupRef} style={{ willChange: 'transform' }}>
          {/* Radar circles */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#41615C"
            strokeWidth="0.3"
            opacity="0.35"
          />
          <circle
            cx="50"
            cy="50"
            r="65"
            fill="none"
            stroke="#41615C"
            strokeWidth="0.3"
            opacity="0.35"
          />

          {/* Rotating radar sweep */}
          <g ref={wedgeRef} mask="url(#radarMask)" className="radar-glow">
            <use href="#wedgePath" />
          </g>

          {/* Blips */}
          {blips.map((blip) => (
            <circle
              key={blip.id}
              cx={blip.x}
              cy={blip.y}
              r="3"
              fill="#84AE92"
              opacity={blip.opacity}
              transform={`scale(${blip.scale})`}
              style={{ transformOrigin: `${blip.x}% ${blip.y}%` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default RadarBackground;