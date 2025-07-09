import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RadarBackground from './RadarBackground';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="hero relative overflow-hidden flex items-center justify-center"
      style={{ 
        height: '100vh',
        perspective: '1000px',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}
    >
      {/* Radar Background */}
      <RadarBackground />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #4361ee 0%, transparent 70%)',
            top: '20%',
            left: '20%'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #4cc9f0 0%, transparent 70%)',
            bottom: '20%',
            right: '20%'
          }}
        />
      </div>

      {/* Title and Subtitle */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-nunito font-bold bg-gradient-to-r from-teal-500 to-sage-500 bg-clip-text text-transparent mb-6 leading-tight text-center">
          Where Lost <span className="text-sage-500">Meets</span> Found
        </h1>
        
        <p className="text-xl md:text-2xl font-poppins text-teal-600 leading-relaxed text-center max-w-4xl">
          Connecting communities through compassion, one lost item at a time.
          We're building a world where losing something doesn't mean losing hope.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;