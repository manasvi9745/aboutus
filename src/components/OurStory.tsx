import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurStory: React.FC = () => {
  const underlineRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const underline = underlineRef.current;
    const illustration = illustrationRef.current;

    if (underline) {
      gsap.fromTo(underline, 
        { width: 0 },
        {
          width: '100%',
          duration: 1.2,
          scrollTrigger: {
            trigger: underline,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (illustration) {
      gsap.fromTo(illustration,
        { x: -30, opacity: 0.8 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: illustration,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Illustration */}
          <motion.div
            ref={illustrationRef}
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-64 bg-white rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden"
                animate={{ 
                  boxShadow: [
                    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    '0 25px 50px -12px rgba(91, 124, 250, 0.3)',
                    '0 25px 50px -12px rgba(123, 97, 255, 0.3)',
                    '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30"></div>

                <div className="relative z-10 flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <div className="text-2xl">👤</div>
                    </div>
                    <div className="text-xs font-poppins text-blue-600">Student with phone</div>
                  </div>

                  <motion.div
                    className="flex flex-col items-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-xl">🤝</div>
                    </div>
                  </motion.div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <div className="text-2xl">👤</div>
                    </div>
                    <div className="text-xs font-poppins text-purple-600">Owner found</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-nunito font-bold text-blue-600 mb-8 relative">
              Our Story
              <div
                ref={underlineRef}
                className="absolute bottom-0 left-0 h-1 bg-purple-500 rounded-full"
                style={{ width: 0 }}
              />
            </h2>

            <div className="space-y-6">
              <motion.p
                className="text-lg font-poppins text-blue-700 leading-relaxed"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Lost & Found was founded in 2023 by two university students who knew exactly how it felt to lose something important. One of us lost her ID card just before an exam. The other found a phone on campus but had no idea how to return it.
              </motion.p>

              <motion.blockquote
                className="text-xl font-poppins text-purple-600 italic relative pl-6 my-8 border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                "Why isn't there a simple way to reconnect lost items with their rightful people?"
              </motion.blockquote>

              <motion.p
                className="text-lg font-poppins text-blue-700 leading-relaxed"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                What began as a college side project is now a purpose-led platform helping people across campuses and cities rediscover not just their belongings — but also <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">trust, kindness, and hope</span>.
              </motion.p>

              <motion.p
                className="text-lg font-poppins text-blue-600 font-semibold leading-relaxed"
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                We didn't build a startup. We built a <span className="text-purple-600 bg-purple-50 px-2 py-1 rounded">quiet helping hand</span> — one that shows up when you need it most.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;