import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const teamGridRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: 'Manasvi',
      role: 'UX & Strategy',
      bio: 'Turned late-night campus frustrations into user-centered design solutions. Passionate about creating interfaces that feel intuitive and human.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'manasvi@lostandfound.com',
      linkedin: 'https://linkedin.com/in/manasvi',
      phone: '+1 (555) 123-4567'
    },
    {
      name: 'Alex',
      role: 'Tech & Development',
      bio: 'Builds the magic that connects lost items with their owners. Believes in the power of simple, elegant code to solve real-world problems.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      email: 'alex@lostandfound.com',
      linkedin: 'https://linkedin.com/in/alex',
      phone: '+1 (555) 123-4568'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const teamGrid = teamGridRef.current;

    if (!section || !teamGrid) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Fallback: Cards immediately visible in large size, front-side
      const cards = teamGrid.querySelectorAll('.team-card-final');
      gsap.set(cards, { 
        opacity: 1, 
        y: 0,
        rotateY: 0,
        width: 280,
        height: 380,
        scale: 1
      });
      return;
    }

    // Team section trigger animation (top 75%)
    ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      onEnter: () => {
        // Find any re-parented cards from hero section
        const clonedCards = teamGrid.querySelectorAll('.team-card-clone');
        const staticCards = teamGrid.querySelectorAll('.team-card-final');
        
        // If we have re-parented cards, animate them
        if (clonedCards.length > 0) {
          // Set initial state for re-parented cards
          gsap.set(clonedCards, {
            opacity: 0,
            y: -100,
            rotateY: 180, // Still showing back
            width: 180,
            height: 260,
            willChange: 'transform, opacity'
          });

          // Update front face content with actual team member data
          clonedCards.forEach((card, index) => {
            const frontFace = card.querySelector('.card-front');
            if (frontFace && teamMembers[index]) {
              frontFace.innerHTML = `
                <div class="p-8 text-center h-full flex flex-col">
                  <div class="flex justify-center mb-6">
                    <div class="w-32 h-32 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 p-1" style="box-shadow: 0 10px 25px rgba(67,97,238,0.2)">
                      <img src="${teamMembers[index].image}" alt="${teamMembers[index].name}" class="w-full h-full rounded-full object-cover border-4 border-white/50" loading="lazy" />
                    </div>
                  </div>
                  <h3 class="text-2xl font-nunito font-bold text-gray-800 mb-3">${teamMembers[index].name}</h3>
                  <div class="inline-block mb-4">
                    <span class="px-4 py-2 rounded-full text-blue-600 font-semibold text-sm" style="background: rgba(67,97,238,0.1); border: 1px solid rgba(67,97,238,0.15)">${teamMembers[index].role}</span>
                  </div>
                  <p class="font-poppins text-gray-600 mb-6 leading-relaxed text-sm flex-1">${teamMembers[index].bio}</p>
                  <div class="flex justify-center gap-3">
                    <a href="mailto:${teamMembers[index].email}" class="w-10 h-10 rounded-full flex items-center justify-center text-blue-600 transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:text-white hover:-translate-y-1" style="background: rgba(67,97,238,0.1); border: 1px solid rgba(67,97,238,0.15)">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                    <a href="${teamMembers[index].linkedin}" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full flex items-center justify-center text-blue-600 transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:text-white hover:-translate-y-1" style="background: rgba(67,97,238,0.1); border: 1px solid rgba(67,97,238,0.15)">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="tel:${teamMembers[index].phone}" class="w-10 h-10 rounded-full flex items-center justify-center text-blue-600 transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:text-white hover:-translate-y-1" style="background: rgba(67,97,238,0.1); border: 1px solid rgba(67,97,238,0.15)">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </a>
                  </div>
                </div>
              `;
            }
          });

          // Animate re-parented cards: resize, flip, and fade in with stagger
          const tl = gsap.timeline();
          
          // Grow cards to 280×380px
          tl.to(clonedCards, {
            width: 280,
            height: 380,
            duration: 0.6,
            ease: 'power2.out'
          })
          
          // Flip to front side (rotateY: 180° → 0°)
          .to(clonedCards, {
            rotateY: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 0.2)
          
          // Fade in and move to position with stagger
          .to(clonedCards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            onComplete: () => {
              // Remove will-change after animation
              gsap.set(clonedCards, { willChange: 'auto' });
              
              // Enable 3D hover effects
              clonedCards.forEach((card) => {
                setupCardHover(card as HTMLElement);
              });
            }
          }, 0.4);
        } else {
          // Fallback: animate static cards
          gsap.set(staticCards, {
            opacity: 0,
            y: -100,
            rotateY: 180,
            willChange: 'transform, opacity'
          });

          const tl = gsap.timeline();
          
          tl.to(staticCards, {
            width: 280,
            height: 380,
            duration: 0.6,
            ease: 'power2.out'
          })
          .to(staticCards, {
            rotateY: 0,
            duration: 0.8,
            ease: 'power2.inOut'
          }, 0.2)
          .to(staticCards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            onComplete: () => {
              gsap.set(staticCards, { willChange: 'auto' });
              staticCards.forEach((card) => {
                setupCardHover(card as HTMLElement);
              });
            }
          }, 0.4);
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // 3D hover effect setup (rotateX/Y ±10° based on mouse position)
  const setupCardHover = (card: HTMLElement) => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      gsap.to(card, {
        rotationX: Math.max(-10, Math.min(10, rotateX)),
        rotationY: Math.max(-10, Math.min(10, rotateY)),
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  return (
    <section 
      id="team"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #4361ee 0%, transparent 70%)',
            top: '20%',
            left: '20%'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #4cc9f0 0%, transparent 70%)',
            bottom: '20%',
            right: '20%'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-nunito font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Dedicated Team
          </h2>
          <p className="text-xl font-poppins text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The passionate individuals working behind the scenes to reunite lost items with their owners
          </p>
        </div>

        {/* Team Grid - flex with gap:4rem, justify-center */}
        <div 
          ref={teamGridRef}
          className="team-grid flex gap-16 justify-center max-w-4xl mx-auto"
          style={{ 
            flexDirection: window.innerWidth < 600 ? 'column' : 'row',
            alignItems: 'center'
          }}
        >
          {/* Static cards as fallback */}
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
    phone: string;
  };
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  return (
    <div
      className="team-card-final group relative"
      style={{ 
        perspective: '1500px',
        width: '280px',
        height: '380px',
        maxWidth: '100%'
      }}
    >
      {/* Gradient Top Bar */}
      <div className="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-t-2xl" />
      
      {/* Main Card */}
      <div
        className="relative bg-white/85 backdrop-blur-xl rounded-b-2xl p-8 shadow-lg overflow-hidden h-full"
        style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div 
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: 'radial-gradient(circle, #4361ee 0%, transparent 70%)',
              top: '20%',
              left: '30%'
            }}
          />
          <div 
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: 'radial-gradient(circle, #4cc9f0 0%, transparent 70%)',
              bottom: '20%',
              right: '30%'
            }}
          />
        </div>

        <div className="relative z-10 text-center h-full flex flex-col">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 p-1"
              style={{
                boxShadow: '0 10px 25px rgba(67,97,238,0.2)'
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full rounded-full object-cover border-4 border-white/50"
                loading="lazy"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-2xl font-nunito font-bold text-gray-800 mb-3">
            {member.name}
          </h3>
          
          {/* Role Badge */}
          <div className="inline-block mb-4">
            <span 
              className="px-4 py-2 rounded-full text-blue-600 font-semibold text-sm"
              style={{
                background: 'rgba(67,97,238,0.1)',
                border: '1px solid rgba(67,97,238,0.15)'
              }}
            >
              {member.role}
            </span>
          </div>
          
          {/* Bio */}
          <p className="font-poppins text-gray-600 mb-6 leading-relaxed text-sm flex-1">
            {member.bio}
          </p>

          {/* Contact Icons */}
          <div className="flex justify-center gap-3">
            {[
              { icon: Mail, href: `mailto:${member.email}`, label: 'Email' },
              { icon: Linkedin, href: member.linkedin, label: 'LinkedIn' },
              { icon: Phone, href: `tel:${member.phone}`, label: 'Phone' }
            ].map(({ icon: Icon, href, label }, iconIndex) => (
              <a
                key={iconIndex}
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full flex items-center justify-center text-blue-600 transition-all duration-300 cursor-pointer hover:bg-blue-600 hover:text-white hover:-translate-y-1"
                style={{
                  background: 'rgba(67,97,238,0.1)',
                  border: '1px solid rgba(67,97,238,0.15)'
                }}
                aria-label={`Contact ${member.name} via ${label}`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default TeamSection;