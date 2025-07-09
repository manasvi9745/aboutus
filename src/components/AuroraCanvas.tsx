import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AuroraCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightRaysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const lightRays = lightRaysRef.current;
    if (!canvas || !lightRays) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Dark blue background
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1e3a8a'); // Dark blue top
      gradient.addColorStop(0.5, '#1e40af'); // Medium dark blue
      gradient.addColorStop(1, '#1d4ed8'); // Darker blue bottom
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    // Aurora animation variables
    let time = 0;
    const layers = [
      { speed: 0.5, amplitude: 50, frequency: 0.02, color: 'rgba(168, 85, 247, 0.6)' }, // Laser purple
      { speed: 0.7, amplitude: 70, frequency: 0.015, color: 'rgba(147, 51, 234, 0.5)' }, // Deep purple
      { speed: 0.3, amplitude: 40, frequency: 0.025, color: 'rgba(126, 58, 237, 0.4)' }, // Medium purple
      { speed: 0.9, amplitude: 60, frequency: 0.018, color: 'rgba(196, 181, 253, 0.3)' } // Light purple
    ];

    // Draw aurora waves
    const drawAurora = () => {
      // Draw dark blue background first
      drawBackground();
      
      layers.forEach((layer, index) => {
        ctx.beginPath();
        ctx.strokeStyle = layer.color;
        ctx.lineWidth = 4; // Slightly thicker for better visibility
        
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = canvas.height / 2 + 
            Math.sin(x * layer.frequency + time * layer.speed) * layer.amplitude +
            Math.sin(x * layer.frequency * 2 + time * layer.speed * 1.5) * (layer.amplitude * 0.5);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
        
        // Add glow effect for laser purple waves
        ctx.shadowColor = layer.color;
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
      
      time += 0.01;
      requestAnimationFrame(drawAurora);
    };

    drawAurora();

    // Light rays animation
    const rays = Array.from({ length: 6 }, (_, i) => {
      const ray = document.createElement('div');
      ray.className = 'absolute w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform -rotate-12';
      ray.style.left = `${-10 + i * 20}%`;
      ray.style.animationDelay = `${i * 4}s`;
      lightRays.appendChild(ray);
      return ray;
    });

    // GSAP light ray animation
    rays.forEach((ray, index) => {
      gsap.fromTo(ray, 
        { x: '-100vw', opacity: 0 },
        { 
          x: '100vw', 
          opacity: 1,
          duration: 24,
          repeat: -1,
          delay: index * 4,
          ease: 'none'
        }
      );
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      rays.forEach(ray => ray.remove());
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      <div
        ref={lightRaysRef}
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: 2 }}
      />
    </>
  );
};

export default AuroraCanvas;