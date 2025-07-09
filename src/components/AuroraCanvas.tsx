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

    // Aurora animation variables
    let time = 0;
    const layers = [
      { speed: 0.5, amplitude: 50, frequency: 0.02, color: 'rgba(91, 124, 250, 0.3)' },
      { speed: 0.7, amplitude: 70, frequency: 0.015, color: 'rgba(109, 110, 250, 0.25)' },
      { speed: 0.3, amplitude: 40, frequency: 0.025, color: 'rgba(123, 97, 255, 0.2)' },
      { speed: 0.9, amplitude: 60, frequency: 0.018, color: 'rgba(155, 232, 225, 0.15)' }
    ];

    // Draw aurora waves
    const drawAurora = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      layers.forEach((layer, index) => {
        ctx.beginPath();
        ctx.strokeStyle = layer.color;
        ctx.lineWidth = 3;
        
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