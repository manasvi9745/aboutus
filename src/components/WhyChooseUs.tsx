import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, FileText, MapPin, Clock } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Smart Alerts',
      description: 'Location-based notifications reach the right people at the right time',
      icon: Bell,
      mockupContent: (
        <div className="bg-sage-100 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <Bell className="text-sage-600 mr-2" size={20} />
            <span className="font-semibold text-teal-600">Alert Sent!</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-sm text-teal-700">📱 iPhone 13 Pro found near Library</p>
            <p className="text-xs text-sage-500 mt-1">Sent to 47 nearby users</p>
          </div>
        </div>
      )
    },
    {
      title: 'Instant Flyers',
      description: 'Generate professional flyers with QR codes in seconds',
      icon: FileText,
      mockupContent: (
        <div className="bg-teal-50 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <FileText className="text-teal-600 mr-2" size={20} />
            <span className="font-semibold text-teal-600">Flyer Ready!</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm border-2 border-dashed border-teal-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
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
        <div className="bg-sage-50 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <MapPin className="text-sage-600 mr-2" size={20} />
            <span className="font-semibold text-teal-600">Location Pinned</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="h-20 bg-sage-100 rounded-lg flex items-center justify-center mb-2">
              <MapPin className="text-sage-600" size={24} />
            </div>
            <p className="text-xs text-teal-700">Central Library, 2nd Floor</p>
          </div>
        </div>
      )
    },
    {
      title: 'Quick Reunions',
      description: 'Most items are returned within 24 hours of being reported',
      icon: Clock,
      mockupContent: (
        <div className="bg-mint-100 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <Clock className="text-teal-600 mr-2" size={20} />
            <span className="font-semibold text-teal-600">Reunited!</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-teal-700">Success!</span>
              <span className="text-xs bg-sage-100 text-sage-700 px-2 py-1 rounded-full">
                2.5 hours
              </span>
            </div>
            <p className="text-xs text-sage-500 mt-1">Faster than average!</p>
          </div>
        </div>
      )
    }
  ];

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-teal-600 mb-4">
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-primary-600 mb-4">
            Why Choose Lost & Found?
          </h2>
          <p className="text-xl font-poppins text-primary-700 max-w-3xl mx-auto">
            Features designed to make losing something a little less stressful
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl transition-all duration-500 ${
                  activeFeature === index 
                    ? 'bg-sage-100 border-2 border-sage-400 shadow-lg scale-105' 
                    : 'bg-gray-50 border-2 border-transparent'
                }`}
                animate={{
                  scale: activeFeature === index ? 1.05 : 1,
                  backgroundColor: activeFeature === index ? '#EBF3ED' : '#F9FAFB'
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className={`p-3 rounded-lg transition-all duration-500 ${
                      activeFeature === index ? 'bg-sage-500' : 'bg-sage-200'
                    }`}
                    animate={{
                      backgroundColor: activeFeature === index ? '#84AE92' : '#C3DBC9',
                      scale: activeFeature === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon 
                      className={`transition-colors duration-500 ${
                        activeFeature === index ? 'text-white' : 'text-sage-600'
                      }`} 
                      size={24} 
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-nunito font-semibold text-teal-600 mb-2">
                    <h3 className="text-xl font-nunito font-semibold text-primary-600 mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-poppins text-primary-700">
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
              <div className="w-80 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Phone Header */}
                  <div className="bg-sage-500 px-4 py-3 flex items-center justify-between">
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

                  {/* Dynamic Content */}
                  <div className="p-4 h-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeature}
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
              </div>

              {/* Progress Indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      activeFeature === index ? 'bg-sage-500 scale-125' : 'bg-sage-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;