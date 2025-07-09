import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

interface SplashIntroProps {
  onComplete: () => void;
}

const SplashIntro: React.FC<SplashIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const timer = setTimeout(() => {
      if (prefersReducedMotion) {
        onComplete();
      } else {
        setIsVisible(false);
      }
    }, prefersReducedMotion ? 1000 : 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleExitComplete = () => {
    onComplete();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center animated-gradient-bg"
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            y: '-100vh', 
            opacity: 0,
            transition: { duration: 1, ease: 'easeInOut' }
          }}
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5B7CFA] via-[#6D6EFA] to-[#7B61FF] animate-gradient-x"></div>
          
          {/* Lottie Animation */}
          <motion.div
            className="w-40 md:w-56 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-40 md:h-56 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="text-6xl md:text-8xl">🔍</div>
            </div>
          </motion.div>

          {/* Main Text */}
          <motion.h1
            className="text-4xl md:text-6xl font-nunito font-bold text-white text-center px-4"
            style={{ 
              textShadow: '0 0 12px #00FFFF, 0 0 24px #00FFFF',
              filter: 'drop-shadow(0 0 12px #00FFFF)'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hello there, we are Reunify
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashIntro;