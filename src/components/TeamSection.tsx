import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Soni Kumari',
      role: 'BTech 4th Year Student',
      bio: 'Passionate about creating user-centered solutions that make a difference.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'soni@lostandfound.com',
      linkedin: 'https://linkedin.com/in/soni-kumari'
    },
    {
      name: 'Manasvi Singh',
      role: 'BTech 4th Year Student',
      bio: 'Turning bold ideas into AI‑powered solutions that matter.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'manasvi@lostandfound.com',
      linkedin: 'https://linkedin.com/in/manasvi-singh'
    }
  ];

  return (
    <section 
      id="team"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
            top: '20%',
            right: '20%'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)',
            bottom: '20%',
            left: '20%'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-nunito font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Dedicated Team
          </h2>
          <p className="text-xl font-poppins text-blue-700 max-w-3xl mx-auto leading-relaxed">
            The passionate individuals working behind the scenes to reunite lost items with their owners
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    bio: string;
    image: string;
    email: string;
    linkedin: string;
  };
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  return (
    <motion.div
      className="w-72 h-96 rounded-2xl bg-white/20 backdrop-blur border border-grey-100 relative overflow-hidden group"
      style={{ perspective: '1000px' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        rotateX: 6, 
        rotateY: -6,
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative z-10 text-center h-full flex flex-col p-8">
        <div className="flex justify-center mb-6">
          <motion.div 
            className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 p-1 shadow-lg"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full rounded-full object-cover border-2 border-white/50"
              loading="lazy"
            />
          </motion.div>
        </div>

        <h3 className="text-xl font-nunito font-bold text-blue-800 mb-3">
          {member.name}
        </h3>
        
        <div className="inline-block mb-4">
          <motion.span 
            className="px-3 py-1 rounded-full text-blue-700 font-semibold text-sm bg-blue-100 border border-blue-200/50"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {member.role}
          </motion.span>
        </div>
        
        <p className="font-poppins text-blue-600 mb-6 leading-relaxed text-sm flex-1">
          {member.bio}
        </p>

        <div className="flex justify-center gap-3">
          {[
            { icon: Mail, href: `mailto:${member.email}`, label: 'Email' },
            { icon: Linkedin, href: member.linkedin, label: 'LinkedIn' }
          ].map(({ icon: Icon, href, label }, iconIndex) => (
            <motion.a
              key={iconIndex}
              href={href}
              target={href.startsWith('http') ? '_blank' : '_self'}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-10 h-10 rounded-full flex items-center justify-center text-blue-600 bg-blue-100/60 border border-blue-200/50 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              aria-label={`Contact ${member.name} via ${label}`}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + iconIndex * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSection;