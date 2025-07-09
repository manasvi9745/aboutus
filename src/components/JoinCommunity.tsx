import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageCircle, Check, Users } from 'lucide-react';

const JoinCommunity: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [userCount] = useState(518);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: '#84AE92' },
    blur: { scale: 1, borderColor: '#B9D4AA' }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-mint-50 via-white to-sage-100 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="#84AE92" />
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
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-teal-600 mb-4">
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-primary-600 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl font-poppins text-primary-700 max-w-2xl mx-auto">
            Be part of a movement that's making losing something a little less painful
          </p>

          {/* User Counter */}
          <motion.div
            className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Users className="text-sage-500 mr-2" size={20} />
            <span className="font-nunito font-semibold text-teal-600">
            <span className="font-nunito font-semibold text-primary-600">
              You'll be user #{(userCount + 1).toLocaleString()} to join our mission
            </span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-nunito font-semibold text-teal-600 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-500" size={20} />
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-12 py-3 border-2 border-sage-200 rounded-xl font-poppins focus:outline-none focus:border-sage-500 transition-all duration-300"
                    placeholder="Enter your name"
                    variants={inputVariants}
                    animate={focusedField === 'name' ? 'focus' : 'blur'}
                  />
                  {formData.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <Check className="text-green-500" size={20} />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-nunito font-semibold text-teal-600 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-500" size={20} />
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-12 py-3 border-2 border-sage-200 rounded-xl font-poppins focus:outline-none focus:border-sage-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                    variants={inputVariants}
                    animate={focusedField === 'email' ? 'focus' : 'blur'}
                  />
                  {formData.email.includes('@') && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <Check className="text-green-500" size={20} />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Reason Field */}
              <div className="relative">
                <label htmlFor="reason" className="block text-sm font-nunito font-semibold text-teal-600 mb-2">
                  Why do you want to join?
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 text-sage-500" size={20} />
                  <motion.textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('reason')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 border-2 border-sage-200 rounded-xl font-poppins focus:outline-none focus:border-sage-500 transition-all duration-300 resize-none"
                    placeholder="Tell us what motivates you to be part of this community..."
                    variants={inputVariants}
                    animate={focusedField === 'reason' ? 'focus' : 'blur'}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-sage-500 to-teal-500 hover:from-sage-600 hover:to-teal-600 text-white font-nunito font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  Join the Movement
                  <motion.div
                    className="ml-2 w-6 h-6 border-2 border-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Community Illustration */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Circle */}
              <motion.div
                className="w-64 h-64 bg-gradient-to-br from-sage-200 to-sage-400 rounded-full mx-auto flex items-center justify-center shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Users className="text-white" size={80} />
              </motion.div>

              {/* Floating Icons */}
              {[
                { Icon: User, delay: 0, x: -100, y: -50 },
                { Icon: Mail, delay: 1, x: 100, y: -30 },
                { Icon: MessageCircle, delay: 2, x: -80, y: 80 },
                { Icon: Check, delay: 0.5, x: 90, y: 70 }
              ].map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{ left: '50%', top: '50%', marginLeft: x, marginTop: y }}
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
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Icon className="text-sage-500" size={20} />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-nunito font-bold text-teal-600 mb-4">
                Growing Every Day
              </h3>
              <p className="font-poppins text-teal-700 leading-relaxed">
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