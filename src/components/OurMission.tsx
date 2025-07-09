import React from 'react';
import { motion } from 'framer-motion';

const OurMission: React.FC = () => {
  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-64 bg-white rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.4)'
                }}
                animate={{ 
                  boxShadow: [
                    '0 25px 50px -12px rgba(59, 130, 246, 0.5)',
                    '0 25px 50px -12px rgba(168, 85, 247, 0.5)',
                    '0 25px 50px -12px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-30"></div>

                <div className="relative z-10 flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <div className="text-2xl">👤</div>
                    </div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto"></div>
                  </div>

                  <motion.div
                    className="flex flex-col items-center"
                    animate={{ scale: [1.0, 1.1, 1.0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </motion.div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <div className="text-2xl">👤</div>
                    </div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-nunito font-bold text-blue-600 mb-8">
              Our Mission
            </h2>

            <div className="space-y-6">
              <p className="text-2xl font-nunito font-semibold text-blue-600 mb-6">
                Our mission is simple:
              </p>
              
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 shadow-lg relative overflow-hidden mb-6">
                <p className="text-xl md:text-2xl font-poppins text-blue-700 font-medium leading-relaxed">
                  To make reuniting with your lost belongings <span className="font-bold text-purple-600">easy, human, and fast.</span>
                </p>
              </div>

              <p className="text-lg font-poppins text-blue-700 leading-relaxed">
                We don't just help people find things — we help restore <span className="font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">peace of mind</span>.
              </p>
              
              <p className="text-lg font-poppins text-blue-700 leading-relaxed">
                Using simple, intuitive technology, we connect finders and seekers within seconds — while protecting privacy and building trust.
              </p>

              <p className="text-lg font-poppins text-blue-600 font-semibold leading-relaxed">
                Even small reunions matter. Because sometimes, getting something back feels like getting your day back.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;