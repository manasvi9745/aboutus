import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const plane = planeRef.current;
    
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

    // Paper plane animation
    if (plane) {
      gsap.set(plane, { x: -100, y: 100, rotation: -45 });
      
      gsap.to(plane, {
        x: window.innerWidth + 100,
        y: -100,
        rotation: 15,
        duration: 12,
        ease: "none",
        repeat: -1,
        delay: 2
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const headlineText = "Where Lost Meets Found";
  const letters = headlineText.split('');

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    float: {
      y: [0, -6, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const characterVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      className="hero relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#4f46e5] to-[#7B61FF]"
      style={{ height: '100vh' }}
    >
      {/* Paper Plane */}
      <motion.div
        ref={planeRef}
        className="absolute z-20 text-cyan-300 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
      >
        <Send size={24} />
      </motion.div>

      {/* Left Character - Boy */}
      <motion.div
        className="absolute left-8 md:left-16 lg:left-24 bottom-0 z-10"
        variants={characterVariants}
        initial="initial"
        animate={["animate", "float"]}
        style={{ animationDelay: '0.5s' }}
      >
        <div className="relative">
          {/* Character Illustration */}
          <div className="w-32 h-40 md:w-40 md:h-48 lg:w-48 lg:h-56 relative">
            {/* Body */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-24 md:w-20 md:h-28 bg-blue-400 rounded-t-full"></div>
            
            {/* Head */}
            <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-yellow-200 rounded-full border-2 border-white shadow-lg">
              {/* Eyes */}
              <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-black rounded-full"></div>
              {/* Smile */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-full"></div>
            </div>
            
            {/* Arms */}
            <div className="absolute bottom-16 md:bottom-20 left-2 w-3 h-8 md:w-4 md:h-10 bg-blue-400 rounded-full transform rotate-12"></div>
            <div className="absolute bottom-16 md:bottom-20 right-2 w-3 h-8 md:w-4 md:h-10 bg-blue-400 rounded-full transform -rotate-12"></div>
            
            {/* Legs */}
            <div className="absolute bottom-0 left-4 w-3 h-12 md:w-4 md:h-14 bg-gray-600 rounded-full"></div>
            <div className="absolute bottom-0 right-4 w-3 h-12 md:w-4 md:h-14 bg-gray-600 rounded-full"></div>
          </div>
          
          {/* Shadow */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black/20 rounded-full blur-sm"></div>
        </div>
      </motion.div>

      {/* Right Character - Girl */}
      <motion.div
        className="absolute right-8 md:right-16 lg:right-24 bottom-0 z-10"
        variants={characterVariants}
        initial="initial"
        animate={["animate", "float"]}
        style={{ animationDelay: '0.7s' }}
      >
        <div className="relative">
          {/* Character Illustration */}
          <div className="w-32 h-40 md:w-40 md:h-48 lg:w-48 lg:h-56 relative">
            {/* Body */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-24 md:w-20 md:h-28 bg-purple-400 rounded-t-full"></div>
            
            {/* Head */}
            <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-yellow-200 rounded-full border-2 border-white shadow-lg">
              {/* Eyes */}
              <div className="absolute top-3 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute top-3 right-2 w-1.5 h-1.5 bg-black rounded-full"></div>
              {/* Smile */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-full"></div>
            </div>
            
            {/* Hair */}
            <div className="absolute bottom-24 md:bottom-28 left-1/2 transform -translate-x-1/2 w-14 h-8 md:w-16 md:h-10 bg-amber-800 rounded-t-full"></div>
            
            {/* Arms */}
            <div className="absolute bottom-16 md:bottom-20 left-2 w-3 h-8 md:w-4 md:h-10 bg-purple-400 rounded-full transform rotate-12"></div>
            <div className="absolute bottom-16 md:bottom-20 right-2 w-3 h-8 md:w-4 md:h-10 bg-purple-400 rounded-full transform -rotate-12"></div>
            
            {/* Legs */}
            <div className="absolute bottom-0 left-4 w-3 h-12 md:w-4 md:h-14 bg-gray-600 rounded-full"></div>
            <div className="absolute bottom-0 right-4 w-3 h-12 md:w-4 md:h-14 bg-gray-600 rounded-full"></div>
          </div>
          
          {/* Shadow */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black/20 rounded-full blur-sm"></div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Animated Headline */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-nunito font-bold text-white leading-tight">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="initial"
                animate={["animate", "float"]}
                transition={{
                  delay: 0.8 + index * 0.05,
                  duration: 0.6
                }}
                className="inline-block"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 8px rgba(156, 232, 225, 0.8)",
                  transition: { duration: 0.2 }
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
        </div>
        
        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-poppins text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          Helping people reunite with what matters
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-[#5B7CFA] to-[#7B61FF] text-white font-nunito font-bold rounded-xl text-lg transition-all duration-300 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 25px rgba(123, 97, 255, 0.5)",
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          Join Our Community
        </motion.button>

        {/* Scroll Cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-white/70" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;