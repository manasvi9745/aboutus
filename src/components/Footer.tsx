import React from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#F3E8FF"
            opacity="0.25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#F3E8FF"
            opacity="0.5"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#F3E8FF"
          />
        </svg>
      </div>

      <div className="relative z-10 pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Search className="text-blue-600 mr-2" size={32} />
                <span className="text-2xl font-nunito font-bold text-blue-600">Lost & Found</span>
              </div>
              <p className="font-poppins text-blue-700 leading-relaxed">
                Connecting communities through compassion, one lost item at a time.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-nunito font-bold text-blue-600 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Our Story', 'Our Mission', 'Our Values', 'Why Choose Us', 'Team', 'Join Community'].map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="font-poppins text-blue-700 hover:text-blue-500 transition-colors duration-300"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-nunito font-bold text-blue-600 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {[
                  { Icon: Mail, href: 'mailto:hello@lostandfound.com', label: 'Email' },
                  { Icon: Github, href: 'https://github.com/lostandfound', label: 'GitHub' },
                  { Icon: Twitter, href: 'https://twitter.com/lostandfound', label: 'Twitter' },
                  { Icon: Linkedin, href: 'https://linkedin.com/company/lostandfound', label: 'LinkedIn' }
                ].map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : '_self'}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-12 pt-8 border-t border-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="font-poppins text-blue-600 text-sm">
                © 2024 Lost & Found. Made with ❤️ for the community.
              </p>
              <div className="mt-4 md:mt-0">
                <div className="h-0.5 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;