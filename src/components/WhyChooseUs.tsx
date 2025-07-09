import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, FileText, MapPin, Clock } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const underlineRef = useRef<HTMLSpanElement>(null);

  const features = [
    {
      title: 'Smart Alerts',
      description: 'Location-based notifications reach the right people at the right time',
      icon: Bell,
      mockupContent: (
        <div className="bg-blue-100 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <Bell className="text-blue-600 mr-2" size={20} />
            <span className="font-semibold text-blue-600">Alert Sent!</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-sm text-blue-700">📱 iPhone 13 Pro found near Library</p>
            <p className="text-xs text-blue-500 mt-1">Sent to 47 nearby users</p>
          </div>
        </div>
      )
    },
    {
      title: 'Instant Flyers',
      description: 'Generate professional flyers with QR codes in seconds',
      icon: FileText,
      mockupContent: (
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <FileText className="text-purple-600 mr-2" size={20} />
            <span className="font-semibold text-purple-600">Flyer Ready!</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm border-2 border-dashed border-purple-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <p className="font-bold text-sm">LOST PHONE</p>
              <div className="w-8 h-8 bg-gray-200 rounded mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Location Tracking',
      description: 'Precise location data helps reunite items with owners faster',
      icon: MapPin,
      mockupContent: (
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <MapPin className="text-blue-600 mr-2" size={20} />
            <span className="font-semibold text-blue-600">Location Pinned</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="h-20 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
              <MapPin className="text-blue-600" size={24} />
            </div>
            <p className="text-xs text-blue-700">Central Library, 2nd Floor</p>
          </div>
        </div>
      )
    },
    {
      title: 'Quick Reunions',
      description: 'Most items are returned within 24 hours of being reported',
      icon: Clock,
      mockupContent: (
        <div className="bg-purple-100 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <Clock className="text-purple-600 mr-2" size={20} />
            <span className="font-semibold text-purple-600">Reunited!</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-700">Success!</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                2.5 hours
              </span>
            </div>
            <p className="text-xs text-purple-500 mt-1">Faster than average!</p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    const underline = underlineRef.current;
    if (!underline) return;

    const activeElement = document.querySelector(`[data-feature="${activeFeature}"]`);
    if (!activeElement) return;

    const rect = activeElement.getBoundingClientRect();
    const containerRect = activeElement.parentElement?.getBoundingClientRect();
    
    if (containerRect) {
      underline.style.width = `${rect.width}px`;
      underline.style.left = `${rect.left - containerRect.left}px`;
    }
  }, [activeFeature]);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-blue-600 mb-4">
            Why Choose Lost & Found?
          </h2>
          <p className="text-xl font-poppins text-blue-700 max-w-3xl mx-auto">
            Features designed to make losing something a little less stressful
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6 relative">
            <motion.span
              ref={underlineRef}
              className="absolute bottom-0 h-0.5 bg-purple-500 transition-all duration-300"
              layoutId="underline"
            />
            
            {features.map((feature, index) => (
              <motion.div
                key={index}
                data-feature={index}
                className={`p-6 rounded-xl transition-all duration-500 cursor-pointer ${
                  activeFeature === index 
                    ? 'bg-blue-50 text-blue-900 transform translateX-1' 
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setActiveFeature(index)}
                animate={{
                  backgroundColor: activeFeature === index ? '#EFF6FF' : '#FFFFFF',
                  x: activeFeature === index ? 4 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className={`p-3 rounded-lg transition-all duration-500 ${
                      activeFeature === index ? 'bg-blue-500' : 'bg-blue-100'
                    }`}
                    animate={{
                      backgroundColor: activeFeature === index ? '#3B82F6' : '#DBEAFE',
                      scale: activeFeature === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon 
                      className={`transition-colors duration-500 ${
                        activeFeature === index ? 'text-white' : 'text-blue-600'
                      }`} 
                      size={24} 
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-nunito font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-poppins text-blue-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <motion.div 
                className="w-80 h-96 bg-gray-900 rounded-3xl p-2"
                style={{
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
                }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(139, 92, 246, 0.4)',
                    '0 0 40px rgba(139, 92, 246, 0.6)',
                    '0 0 30px rgba(139, 92, 246, 0.4)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="bg-blue-500 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="text-white font-semibold text-sm">Lost & Found</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-4 h-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeature}
                        layoutId="screen"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        {features[activeFeature].mockupContent}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;