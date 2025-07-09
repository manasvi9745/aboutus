import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashIntroProps {
  onComplete: () => void;
}

const SplashIntro: React.FC<SplashIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const timer = setTimeout(() => {
      if (prefersReducedMotion) {
        // Skip animations, remove instantly after 1s
        onComplete();
      } else {
        // Start exit animation after 2.5s
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
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: '#6B4F3B' }}
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            y: '-100vh', 
            opacity: 0,
            transition: { duration: 1, ease: 'easeInOut' }
          }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-nunito font-bold text-white text-center px-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello there, we are Lost & Found
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashIntro;