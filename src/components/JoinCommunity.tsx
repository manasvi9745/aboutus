import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageCircle, Check, Users } from 'lucide-react';
import { gsap } from 'gsap';

const JoinCommunity: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [userCount] = useState(518);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    const icons = orbit.querySelectorAll('.orbit-icon');
    
    const tl = gsap.timeline({ repeat: -1 });
    
    icons.forEach((icon, index) => {
      const angle = (index * 90) - 90; // Start from top
      const radius = 120;
      
      gsap.set(icon, {
        x: Math.cos(angle * Math.PI / 180) * radius,
        y: Math.sin(angle * Math.PI / 180) * radius,
        transformOrigin: 'center center'
      });
      
      tl.to(icon, {
        rotation: 360,
        duration: 20,
        ease: 'none'
      }, 0);
      
      // Hover scale effect
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { scale: 1.1, duration: 0.3 });
      });
      
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { scale: 1, duration: 0.3 });
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: '#3B82F6' },
    blur: { scale: 1, borderColor: '#D1D5DB' }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="#3B82F6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-blue-600 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl font-poppins text-blue-700 max-w-2xl mx-auto">
            Be part of a movement that's making losing something a little less painful
          </p>

          <motion.div
            className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Users className="text-blue-500 mr-2" size={20} />
            <span className="font-nunito font-semibold text-blue-600">
              You'll be user #{(userCount + 1).toLocaleString()} to join our mission
            </span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-nunito font-semibold text-blue-600 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-xl font-poppins focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your name"
                    variants={inputVariants}
                    animate={focusedField === 'name' ? 'focus' : 'blur'}
                  />
                  {formData.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <Check className="text-green-500" size={20} />
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-nunito font-semibold text-blue-600 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-xl font-poppins focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                    variants={inputVariants}
                    animate={focusedField === 'email' ? 'focus' : 'blur'}
                  />
                  {formData.email.includes('@') && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <Check className="text-green-500" size={20} />
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="relative">
                <label htmlFor="reason" className="block text-sm font-nunito font-semibold text-blue-600 mb-2">
                  Why do you want to join?
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 text-blue-500" size={20} />
                  <motion.textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('reason')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl font-poppins focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="Tell us what motivates you to be part of this community..."
                    variants={inputVariants}
                    animate={focusedField === 'reason' ? 'focus' : 'blur'}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-nunito font-bold py-4 px-8 rounded-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.06
                }}
                whileTap={{ scale: 0.98 }}
              >
                Join the Movement
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative" ref={orbitRef}>
              <motion.div
                className="w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-400 rounded-full mx-auto flex items-center justify-center shadow-2xl"
                style={{
                  animation: 'spin 20s linear infinite'
                }}
              >
                <Users className="text-white" size={80} />
              </motion.div>

              {[
                { Icon: User, delay: 0 },
                { Icon: Mail, delay: 1 },
                { Icon: MessageCircle, delay: 2 },
                { Icon: Check, delay: 0.5 }
              ].map(({ Icon, delay }, index) => (
                <motion.div
                  key={index}
                  className="orbit-icon absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-24px',
                    marginTop: '-24px'
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="text-blue-500" size={20} />
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-nunito font-bold text-blue-600 mb-4">
                Growing Every Day
              </h3>
              <p className="font-poppins text-blue-700 leading-relaxed">
                Join thousands of students and community members who believe in the power of helping each other.
                Together, we're building a world where losing something doesn't mean losing hope.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;