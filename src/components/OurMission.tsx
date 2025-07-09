import React from 'react';
import { motion } from 'framer-motion';

const OurMission: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-mint-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main illustration container */}
              <motion.div
                className="w-80 h-64 bg-white rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden"
                animate={{ 
                  boxShadow: [
                    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    '0 25px 50px -12px rgba(132, 174, 146, 0.3)',
                    '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-mint-50 to-teal-50 opacity-30"></div>

                {/* Two users on phones illustration */}
                <div className="relative z-10 flex items-center justify-center space-x-8">
                  {/* User 1 - Lost item reporter */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <div className="w-8 h-8 bg-sage-200 rounded-full flex items-center justify-center">
                        <div className="w-4 h-6 bg-gray-700 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-sage-500 rounded-full mx-auto"></div>
                  </div>

                  {/* Connection indicator */}
                  <motion.div
                    className="flex flex-col items-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* User 2 - Finder */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <div className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center">
                        <div className="w-4 h-6 bg-gray-700 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
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
              Our Mission
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
                className="text-2xl font-nunito font-semibold text-primary-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our mission is simple:
              </motion.p>
              
              <motion.div
                className="bg-gradient-to-r from-secondary-100 to-secondary-200 rounded-2xl p-6 shadow-lg relative overflow-hidden mb-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-xl md:text-2xl font-poppins text-teal-600 font-medium leading-relaxed">
                  To make reuniting with your lost belongings <span className="font-bold text-secondary-600">easy, human, and fast.</span>
                </p>
              </motion.div>

              <motion.p
                className="text-lg font-poppins text-primary-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                We don't just help people find things — we help restore <span className="font-semibold text-sage-600 bg-mint-50 px-2 py-1 rounded">peace of mind</span>.
              </motion.p>
              
              <motion.p
                className="text-lg font-poppins text-primary-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Using simple, intuitive technology, we connect finders and seekers within seconds — while protecting privacy and building trust.
              </motion.p>

              <motion.p
                className="text-lg font-poppins text-primary-600 font-semibold leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Even small reunions matter. Because sometimes, getting something back feels like getting your day back.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;