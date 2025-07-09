import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OurValues: React.FC = () => {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      title: 'Compassion',
      description: 'We understand that behind every lost item is a story. Whether it\'s sentimental or essential, we treat every report with care — because it means something to someone.',
      background: '#F1FDF4',
      illustration: (
        <div className="relative w-32 h-32 mx-auto">
          <motion.div
            className="absolute inset-0 bg-sage-200 rounded-full flex items-center justify-center"
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
                <div className="w-6 h-4 bg-sage-500 rounded-sm shadow-md"></div>
              </motion.div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm">👤</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute inset-0 border-4 border-sage-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ filter: 'blur(1px)' }}
          />
        </div>
      )
    },
    {
      title: 'Connection',
      description: 'We don\'t just connect items. We connect people. Lost & Found builds small bridges between strangers who want to help — and in doing so, creates a more connected, kind community.',
      background: '#DFF1E6',
      illustration: (
        <div className="relative w-32 h-32 mx-auto">
          <motion.div
            className="absolute inset-0 bg-teal-200 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="relative">
              {/* Map pins */}
              <motion.div
                className="absolute -left-8 -top-4 w-4 h-4 bg-sage-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute right-4 top-2 w-4 h-4 bg-sage-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              
              {/* Connecting line */}
              <motion.svg
                className="w-16 h-8 text-sage-600"
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
              
              {/* Smile icons */}
              <motion.div
                className="absolute -left-10 -top-6 text-xs"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                😊
              </motion.div>
              <motion.div
                className="absolute right-2 -top-2 text-xs"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                😊
              </motion.div>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      title: 'Simplicity',
      description: 'In stressful moments, you don\'t need friction. Our interface is built to be clean, fast, and invisible — so the tech gets out of your way, and help comes right in.',
      background: '#E6F5ED',
      illustration: (
        <div className="relative w-32 h-32 mx-auto">
          <motion.div
            className="absolute inset-0 bg-sage-200 rounded-2xl flex items-center justify-center shadow-lg"
            animate={{ 
              rotateY: [0, 5, -5, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {/* Mobile UI mockup */}
            <div className="w-20 h-28 bg-white rounded-lg shadow-inner p-2">
              {/* Header */}
              <div className="w-full h-2 bg-sage-500 rounded-full mb-2"></div>
              
              {/* Content */}
              <div className="space-y-1">
                <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-1 bg-gray-200 rounded"></div>
              </div>
              
              {/* One button action */}
              <motion.div
                className="w-full h-4 bg-sage-500 rounded mt-3 flex items-center justify-center"
                animate={{ backgroundColor: ['#84AE92', '#5A827E', '#84AE92'] }}
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
          
          {/* Sparklines */}
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-2"
            animate={{ 
              rotate: [0, -360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            ✨
          </motion.div>
        </div>
      )
    }
  ];

  // Auto-rotate values every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [values.length]);

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
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-teal-600 mb-4">
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-primary-600 mb-4">
            Our Values
          </h2>
          <p className="text-xl font-poppins text-primary-700">
            Three principles that guide everything we do
          </p>
        </motion.div>

        {/* Value Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeValue}
              className="rounded-2xl shadow-xl overflow-hidden"
              style={{ backgroundColor: values[activeValue].background }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Illustration */}
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {values[activeValue].illustration}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-nunito font-bold text-teal-600 mb-4">
                    <h3 className="text-2xl md:text-3xl font-nunito font-bold text-primary-600 mb-4">
                      {values[activeValue].title}
                    </h3>
                    <p className="text-lg font-poppins text-primary-700 leading-relaxed">
                      {values[activeValue].description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveValue(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeValue === index 
                    ? 'bg-sage-500 scale-125' 
                    : 'bg-sage-200 hover:bg-sage-300'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-xs mx-auto">
            <div className="w-full bg-sage-100 rounded-full h-1">
              <motion.div
                className="bg-sage-500 h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: "linear" }}
                key={activeValue}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;