import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Psychology Student',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      story: 'Lost my laptop with my entire thesis on it. Posted on Lost & Found and got it back in 3 hours. The person who found it even bought me coffee!',
      item: 'MacBook Pro',
      timeToRecover: '3 hours',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Engineering Student',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      story: 'My wallet fell out during a campus event. The app sent alerts to everyone nearby, and someone found it before I even realized it was missing.',
      item: 'Leather Wallet',
      timeToRecover: '45 minutes',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Art Student',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      story: 'Someone found my AirPods and used the flyer feature to post them around campus. Such a thoughtful community we have here!',
      item: 'AirPods Pro',
      timeToRecover: '1 day',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Business Student',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      story: 'The location tracking feature is incredible. I was able to retrace my steps and find exactly where I left my textbooks.',
      item: 'Chemistry Textbooks',
      timeToRecover: '2 hours',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-primary-600 mb-4">
            Hope Found Again
          </h2>
          <p className="text-xl font-poppins text-primary-700 max-w-3xl mx-auto">
            Real stories from real people who found more than just their belongings
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-mint-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="text-sage-500" size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-mint-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="text-sage-500" size={24} />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-mint-50 to-white p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* User Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-sage-200"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl font-poppins text-primary-700 mb-6 leading-relaxed italic">
                      "{testimonials[currentIndex].story}"
                    </blockquote>

                    {/* User Info */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="font-nunito font-bold text-primary-600 text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="font-poppins text-secondary-500 text-sm">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>

                      {/* Recovery Stats */}
                      <div className="mt-4 md:mt-0 flex gap-4">
                        <div className="bg-secondary-200 px-3 py-1 rounded-full">
                          <span className="text-xs font-nunito font-semibold text-secondary-700">
                            {testimonials[currentIndex].item}
                          </span>
                        </div>
                        <div className="bg-primary-200 px-3 py-1 rounded-full">
                          <span className="text-xs font-nunito font-semibold text-primary-700">
                            Recovered in {testimonials[currentIndex].timeToRecover}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-sage-500 scale-125' 
                    : 'bg-sage-200 hover:bg-sage-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;