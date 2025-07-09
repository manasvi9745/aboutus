import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import AuroraCanvas from './AuroraCanvas';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Pin hero section for first 70vh
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: '+=70%',
      pin: true,
      pinSpacing: false
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="hero relative overflow-hidden flex items-center justify-center"
      style={{ height: '100vh' }}
    >
      {/* Aurora Background */}
      <AuroraCanvas />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-nunito font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Where Lost <span className="text-[#9BE8E1]">Meets</span> Found
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl font-poppins text-white/90 leading-relaxed mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Connecting communities through compassion, one lost item at a time.
          We're building a world where losing something doesn't mean losing hope.
        </motion.p>

        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-nunito font-bold rounded-xl text-lg transition-all duration-300 hover:scale-105"
          style={{ 
            boxShadow: '0 0 10px #9BE8E1',
            filter: 'drop-shadow(0 0 10px #9BE8E1)'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 20px #9BE8E1'
          }}
        >
          Join Our Community
        </motion.button>

        {/* Scroll Cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white/70" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;