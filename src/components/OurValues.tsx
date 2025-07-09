import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const OurValues: React.FC = () => {
  const [activeValue, setActiveValue] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      title: 'Compassion',
      description: 'We understand that behind every lost item is a story. Whether it\'s sentimental or essential, we treat every report with care — because it means something to someone.',
      background: 'from-blue-100 to-blue-200',
      illustration: (
        <div className="relative w-32 h-32 mx-auto">
          <motion.div
            className="absolute inset-0 bg-blue-200 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              className="flex items-center space-x-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm">👤</span>
              </div>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <div className="w-6 h-4 bg-blue-500 rounded-sm shadow-md"></div>
              </motion.div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm">👤</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )
    },
    {
      title: 'Connection',
      description: 'We don\'t just connect items. We connect people. Lost & Found builds small bridges between strangers who want to help — creating a more connected, kind community.',
      background: 'from-purple-100 to-purple-200',
      illustration: (
        <div className="relative w-32 h-32 mx-auto">
          <motion.div
            className="absolute inset-0 bg-purple-200 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="relative">
              <motion.div
                className="absolute -left-8 -top-4 w-4 h-4 bg-purple-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute right-4 top-2 w-4 h-4 bg-purple-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              
              <motion.svg
                className="w-16 h-8 text-purple-600"
                viewBox="0 0 64 32"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.path
                  d="M8 16 Q32 8 56 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [0, -8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      title: 'Simplicity',
      description: 'In stressful moments, you don\'t need friction. Our interface is built to be clean, fast, and invisible — so the tech gets out of your way, and help comes right in.',
      background: 'from-white to-blue-50',
      illustration: (
        <div className="relative w-32 h-32 mx-auto">
          <motion.div
            className="absolute inset-0 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg"
            animate={{ 
              rotateY: [0, 5, -5, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-20 h-28 bg-white rounded-lg shadow-inner p-2">
              <div className="w-full h-2 bg-blue-500 rounded-full mb-2"></div>
              <div className="space-y-1">
                <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-1 bg-gray-200 rounded"></div>
              </div>
              <motion.div
                className="w-full h-4 bg-blue-500 rounded mt-3 flex items-center justify-center"
                animate={{ backgroundColor: ['#3B82F6', '#8B5CF6', '#3B82F6'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-1 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return;

    // Reset and animate progress bar
    gsap.set(progressBar, { width: '0%' });
    gsap.to(progressBar, {
      width: '100%',
      duration: 6,
      ease: 'none'
    });

    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeValue]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-blue-600 mb-4">
            Our Values
          </h2>
          <p className="text-xl font-poppins text-blue-700">
            Three principles that guide everything we do
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeValue}
              className={`rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br ${values[activeValue].background} backdrop-blur`}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {values[activeValue].illustration}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-nunito font-bold text-blue-600 mb-4">
                      {values[activeValue].title}
                    </h3>
                    <p className="text-lg font-poppins text-blue-700 leading-relaxed">
                      {values[activeValue].description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Manual Control Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveValue(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeValue === index 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-blue-200 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-xs mx-auto">
            <div className="w-full bg-gray-100 rounded-full h-1">
              <div
                ref={progressBarRef}
                className="bg-purple-500 h-1 rounded-full"
                style={{ width: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;