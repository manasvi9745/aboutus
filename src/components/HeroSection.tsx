import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ConstellationCanvas from './ConstellationCanvas';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const card1WrapperRef = useRef<HTMLDivElement>(null);
  const card2WrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const card1Wrapper = card1WrapperRef.current;
    const card2Wrapper = card2WrapperRef.current;

    if (!hero || !card1Wrapper || !card2Wrapper) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Fallback: Skip pinning & animations; display cards directly in team grid
      gsap.set([card1Wrapper, card2Wrapper], { 
        opacity: 0,
        display: 'none'
      });
      
      // Show cards directly in team section
      const teamSection = document.getElementById('team');
      if (teamSection) {
        const teamCards = teamSection.querySelectorAll('.team-card-final');
        gsap.set(teamCards, {
          opacity: 1,
          rotateY: 0,
          width: 280,
          height: 380,
          scale: 1
        });
      }
      return;
    }

    // Set initial positions and transforms
    gsap.set(card1Wrapper, {
      x: -120,
      y: -40,
      rotation: 0,
      rotateY: 180,
      scale: 0.9,
      width: 180,
      height: 260,
      transformOrigin: 'center center',
      willChange: 'transform'
    });

    gsap.set(card2Wrapper, {
      x: 130,
      y: 40,
      rotation: 0,
      rotateY: 180,
      scale: 0.9,
      width: 180,
      height: 260,
      transformOrigin: 'center center',
      willChange: 'transform'
    });

    // Drift keyframe animations (±8px vertical, ±4° rotation)
    const driftTl1 = gsap.timeline({ repeat: -1, yoyo: true });
    driftTl1.to(card1Wrapper, {
      y: -40 + 8, // ±8px from base position
      rotation: 4, // ±4° rotation
      duration: 3,
      ease: 'power1.inOut'
    });

    const driftTl2 = gsap.timeline({ repeat: -1, yoyo: true });
    driftTl2.to(card2Wrapper, {
      y: 40 - 8, // ±8px from base position
      rotation: -4, // ±4° rotation
      duration: 3,
      ease: 'power1.inOut'
    });

    // Main scroll-triggered animation
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '+=80%', // Pin for exactly 80% as specified
        pin: true,
        scrub: true,
        onStart: () => {
          // Kill drift animations
          driftTl1.kill();
          driftTl2.kill();
        },
        onLeave: () => {
          // Remove will-change after animation
          gsap.set([card1Wrapper, card2Wrapper], { willChange: 'auto' });
          
          // Re-parent cards to team section ONLY on onLeave
          const teamSection = document.getElementById('team');
          const teamCardsContainer = teamSection?.querySelector('.team-grid');
          
          if (teamCardsContainer && card1Wrapper && card2Wrapper) {
            // Append the exact DOM nodes to team section
            teamCardsContainer.appendChild(card1Wrapper);
            teamCardsContainer.appendChild(card2Wrapper);
            
            // Add classes for team section styling
            card1Wrapper.classList.add('team-card-clone');
            card2Wrapper.classList.add('team-card-clone');
            card1Wrapper.classList.remove('card-wrapper');
            card2Wrapper.classList.remove('card-wrapper');
          }
        }
      }
    });

    // Animation sequence during scroll
    mainTl
      // Phase 1: Stop drift, cards converge to center (x:0 y:0 rotation:0)
      .to([card1Wrapper, card2Wrapper], {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      }, 0)
      
      // Phase 2: Stack vertically with z-index (keep size 180×260px)
      .to(card1Wrapper, {
        y: -15,
        zIndex: 20,
        duration: 0.3,
        ease: 'power2.inOut'
      }, 0.4)
      .to(card2Wrapper, {
        y: 15,
        zIndex: 19,
        duration: 0.3,
        ease: 'power2.inOut'
      }, 0.4)
      
      // Phase 3: Entire hero container slides down +100vh
      .to(hero, {
        y: '100vh',
        duration: 0.3,
        ease: 'power2.in'
      }, 0.7);

    // Cleanup function
    return () => {
      driftTl1?.kill();
      driftTl2?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Abstract radial graphic for card backs
  const AbstractGraphic = ({ variant }: { variant: 1 | 2 }) => (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      {/* Conic gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: variant === 1 
            ? 'conic-gradient(from 0deg at 50% 50%, #4361ee, #4cc9f0, #7209b7, #f72585, #4361ee)'
            : 'conic-gradient(from 180deg at 50% 50%, #06ffa5, #4361ee, #7209b7, #f72585, #06ffa5)',
          opacity: 0.6
        }}
      />
      
      {/* Radial overlay patterns */}
      <div className="absolute inset-0 opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 180 260">
          <defs>
            <radialGradient id={`abstract${variant}`} cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor={variant === 1 ? "#4361ee" : "#06ffa5"} stopOpacity="0.9" />
              <stop offset="40%" stopColor="#4cc9f0" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#7209b7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f72585" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          
          {/* Main radial shapes */}
          <circle cx="90" cy="130" r="70" fill={`url(#abstract${variant})`} />
          <circle cx={variant === 1 ? "50" : "130"} cy="180" r="50" fill={`url(#abstract${variant})`} opacity="0.8" />
          <circle cx={variant === 1 ? "130" : "50"} cy="80" r="45" fill={`url(#abstract${variant})`} opacity="0.7" />
          
          {/* Geometric patterns */}
          <path d="M20,40 Q90,20 160,40 Q130,100 90,130 Q50,100 20,40 Z" fill="#4cc9f0" opacity="0.4" />
          <path d="M40,200 L140,200 L120,240 L60,240 Z" fill="#7209b7" opacity="0.5" />
        </svg>
      </div>
      
      {/* Brand mark on back */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-white text-sm font-bold">L&F</span>
        </div>
      </div>
    </div>
  );

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
      {/* Constellation Background */}
      <ConstellationCanvas />
      
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

      {/* Small Floating Cards - Initially Upside Down (exactly 180×260px) */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        {/* Card 1 Wrapper - Manasvi (Back Side Visible) */}
        <div
          ref={card1WrapperRef}
          className="card-wrapper card1 absolute"
          style={{
            width: '180px',
            height: '260px'
          }}
        >
          <div 
            className="card w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Card Back Face */}
            <div 
              className="card-face card-back absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 25px 50px rgba(67,97,238,0.3)'
              }}
            >
              <AbstractGraphic variant={1} />
            </div>
            
            {/* Card Front Face (hidden initially) */}
            <div 
              className="card-face card-front absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white"
              style={{
                backfaceVisibility: 'hidden',
                boxShadow: '0 25px 50px rgba(67,97,238,0.3)'
              }}
            >
              {/* Front content will be populated when flipped in team section */}
              <div className="p-6 text-center h-full flex flex-col">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Manasvi</h3>
                <p className="text-sm text-blue-600 mb-4">UX & Strategy</p>
                <p className="text-xs text-gray-600 flex-1">Passionate about creating intuitive interfaces.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 Wrapper - Alex (Back Side Visible) */}
        <div
          ref={card2WrapperRef}
          className="card-wrapper card2 absolute"
          style={{
            width: '180px',
            height: '260px'
          }}
        >
          <div 
            className="card w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Card Back Face */}
            <div 
              className="card-face card-back absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                boxShadow: '0 25px 50px rgba(245,87,108,0.3)'
              }}
            >
              <AbstractGraphic variant={2} />
            </div>
            
            {/* Card Front Face (hidden initially) */}
            <div 
              className="card-face card-front absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white"
              style={{
                backfaceVisibility: 'hidden',
                boxShadow: '0 25px 50px rgba(245,87,108,0.3)'
              }}
            >
              {/* Front content will be populated when flipped in team section */}
              <div className="p-6 text-center h-full flex flex-col">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Alex</h3>
                <p className="text-sm text-blue-600 mb-4">Tech & Development</p>
                <p className="text-xs text-gray-600 flex-1">Builds elegant solutions to real problems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;