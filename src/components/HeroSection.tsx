import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    
    if (!hero) return;

    // Auto-play video
    if (video) {
      video.play().catch(console.log);
    }

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
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-blue-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-nunito font-bold mb-6 leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Where Lost <span className="text-purple-300">Meets</span> Found
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl font-poppins text-white/90 leading-relaxed mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Connecting communities through compassion, one lost item at a time.
          We're building a world where losing something doesn't mean losing hope.
        </motion.p>

        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-nunito font-bold rounded-xl text-lg transition-all duration-300 hover:shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          Join Our Community
        </motion.button>

        {/* Scroll Cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/70" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;