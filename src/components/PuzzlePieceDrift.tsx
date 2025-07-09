import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PuzzlePiece {
  id: number;
  initialX: number;
  initialY: number;
  initialRotate: number;
  initialScale: number;
  targetX: number;
  targetY: number;
  gridCol: number;
  gridRow: number;
}

const PuzzlePieceDrift: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const piecesRef = useRef<HTMLDivElement[]>([]);

  const puzzlePieces: PuzzlePiece[] = [
    { id: 1, initialX: 20, initialY: 30, initialRotate: -15, initialScale: 0.9, targetX: 0, targetY: 0, gridCol: 0, gridRow: 0 },
    { id: 2, initialX: 70, initialY: 20, initialRotate: 25, initialScale: 1.1, targetX: 33.33, targetY: 0, gridCol: 1, gridRow: 0 },
    { id: 3, initialX: 85, initialY: 60, initialRotate: -10, initialScale: 0.8, targetX: 66.66, targetY: 0, gridCol: 2, gridRow: 0 },
    { id: 4, initialX: 15, initialY: 75, initialRotate: 20, initialScale: 1.0, targetX: 0, targetY: 50, gridCol: 0, gridRow: 1 },
    { id: 5, initialX: 60, initialY: 80, initialRotate: -30, initialScale: 0.95, targetX: 33.33, targetY: 50, gridCol: 1, gridRow: 1 },
    { id: 6, initialX: 40, initialY: 40, initialRotate: 35, initialScale: 1.05, targetX: 66.66, targetY: 50, gridCol: 2, gridRow: 1 }
  ];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const pieces = piecesRef.current;

    if (!wrapper || pieces.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip animations, show final grid directly
      pieces.forEach((piece, index) => {
        if (piece) {
          gsap.set(piece, {
            x: `${puzzlePieces[index].targetX}%`,
            y: `${puzzlePieces[index].targetY}%`,
            rotation: 0,
            scale: 1,
            opacity: 1
          });
        }
      });
      return;
    }

    // Set initial positions with floating animation
    pieces.forEach((piece, index) => {
      if (piece) {
        const puzzlePiece = puzzlePieces[index];
        
        // Set initial state
        gsap.set(piece, {
          x: `${puzzlePiece.initialX}%`,
          y: `${puzzlePiece.initialY}%`,
          rotation: puzzlePiece.initialRotate,
          scale: puzzlePiece.initialScale,
          zIndex: index + 1
        });

        // Floating animation
        gsap.to(piece, {
          y: `${puzzlePiece.initialY - 6}%`,
          rotation: puzzlePiece.initialRotate + (Math.random() - 0.5) * 10,
          duration: 3 + Math.random() * 2,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1
        });
      }
    });

    // Scroll-triggered snap animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: '+=30%',
        scrub: 1,
        onComplete: () => {
          // Optional: Add completion sound or effect
          console.log('Puzzle pieces snapped into place!');
        }
      }
    });

    // Animate each piece to its target position
    pieces.forEach((piece, index) => {
      if (piece) {
        const puzzlePiece = puzzlePieces[index];
        
        tl.to(piece, {
          x: `${puzzlePiece.targetX}%`,
          y: `${puzzlePiece.targetY}%`,
          rotation: 0,
          scale: 1,
          zIndex: 10 + index,
          duration: 1,
          ease: 'power2.out'
        }, index * 0.1); // Stagger the animations
      }
    });

    // Add a subtle bounce when pieces snap into place
    tl.to(pieces, {
      scale: 1.05,
      duration: 0.2,
      ease: 'power2.out',
      stagger: 0.05
    }).to(pieces, {
      scale: 1,
      duration: 0.3,
      ease: 'bounce.out',
      stagger: 0.05
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      piecesRef.current[index] = el;
    }
  };

  return (
    <div 
      ref={wrapperRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <div className="relative w-full h-full">
        {puzzlePieces.map((piece, index) => (
          <motion.div
            key={piece.id}
            ref={(el) => addToRefs(el, index)}
            className="absolute w-16 h-12 bg-[#84AE92] rounded-lg shadow-md border border-[#5A827E] cursor-pointer"
            style={{
              transformOrigin: 'center center',
              willChange: 'transform'
            }}
            whileHover={{
              y: -4,
              scale: 1.1,
              boxShadow: '0 8px 25px rgba(132, 174, 146, 0.4)',
              transition: { duration: 0.2 }
            }}
          >
            {/* Puzzle piece notch/tab details */}
            <div className="relative w-full h-full">
              {/* Top tab */}
              {(piece.gridRow === 0 && piece.gridCol === 1) && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#84AE92] rounded-full border border-[#5A827E]" />
              )}
              
              {/* Right tab */}
              {(piece.gridCol === 0 && piece.gridRow === 0) && (
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#84AE92] rounded-full border border-[#5A827E]" />
              )}
              
              {/* Bottom notch */}
              {(piece.gridRow === 0 && piece.gridCol === 0) && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border border-[#5A827E]" />
              )}
              
              {/* Left notch */}
              {(piece.gridCol === 2 && piece.gridRow === 1) && (
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border border-[#5A827E]" />
              )}

              {/* Inner gradient for depth */}
              <div 
                className="absolute inset-1 rounded-md opacity-30"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.1) 100%)'
                }}
              />
              
              {/* Piece number for debugging (remove in production) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white opacity-50">
                  {piece.id}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PuzzlePieceDrift;