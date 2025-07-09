import React from 'react';
import { motion } from 'framer-motion';

const OurStory: React.FC = () => {
  return (
    <section className="py-20 bg-mint-50 relative overflow-hidden">
      {/* Decorative leafy texture in corners */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-sage-500">
          <path d="M20,50 Q30,20 50,30 Q70,40 80,20 Q90,30 70,50 Q60,70 50,60 Q40,50 30,70 Q20,60 20,50 Z" fill="currentColor" />
          <path d="M10,30 Q20,10 40,20 Q60,30 70,10 Q80,20 60,40 Q50,60 40,50 Q30,40 20,60 Q10,50 10,30 Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-sage-500">
          <path d="M80,50 Q70,20 50,30 Q30,40 20,20 Q10,30 30,50 Q40,70 50,60 Q60,50 70,70 Q80,60 80,50 Z" fill="currentColor" />
          <path d="M90,70 Q80,50 60,60 Q40,70 30,50 Q20,60 40,80 Q50,90 60,80 Q70,70 80,90 Q90,80 90,70 Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual Storyboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
              {/* Single minimalist illustration scene */}
              <div className="relative h-64 flex items-center justify-center">
                {/* Background scene */}
                <div className="absolute inset-0 bg-gradient-to-b from-mint-50 to-sage-100 rounded-xl opacity-50"></div>
                
                {/* Campus setting - Clean illustration without floating elements */}
                <div className="relative z-10 w-full flex items-center justify-center">
                  {/* Simple illustration: Student on bench with phone, another approaching with ID */}
                  <div className="flex items-center space-x-8">
                    {/* Student sitting on bench with found phone */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mb-3 shadow-sm">
                        <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center">
                          <div className="w-6 h-4 bg-gray-700 rounded-sm"></div>
                        </div>
                      </div>
                      <p className="text-xs font-poppins text-teal-600 font-medium">Found phone</p>
                    </div>

                    {/* Connecting element - simple path */}
                    <div className="flex-1 mx-4">
                      <div className="h-px bg-sage-500 w-16 relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-sage-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Student approaching with ID */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-3 shadow-sm">
                        <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center">
                          <div className="w-4 h-3 bg-teal-500 rounded-sm"></div>
                        </div>
                      </div>
                      <p className="text-xs font-poppins text-teal-600 font-medium">Lost ID card</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Content */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-nunito font-bold text-primary-600 mb-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Story
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-secondary-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.h2>

            <div className="space-y-6">
              <motion.p
                className="text-lg font-poppins text-primary-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Lost & Found was founded in 2023 by two university students who knew exactly how it felt to lose something important. One of us lost her ID card just before an exam. The other found a phone on campus but had no idea how to return it. In those stressful moments, we asked ourselves:
              </motion.p>

              <motion.blockquote
                className="text-xl font-poppins text-secondary-600 italic relative pl-6 my-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-secondary-500 rounded-full"></div>
                "Why isn't there a simple way to reconnect lost items with their rightful people?"
              </motion.blockquote>

              <motion.p
                className="text-lg font-poppins text-primary-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                What began as a college side project is now a purpose-led platform helping people across campuses and cities rediscover not just their belongings — but also <span className="font-semibold text-sage-600 bg-mint-50 px-2 py-1 rounded">trust, kindness, and a little bit of hope</span>.
              </motion.p>

              <motion.p
                className="text-lg font-poppins text-primary-600 font-semibold leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                We didn't build a startup. We built a <span className="text-sage-600 bg-mint-50 px-2 py-1 rounded">quiet helping hand</span> — one that shows up when you need it most.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;