import React, { useRef, useEffect, useCallback } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  targetRadius: number;
}

interface ConstellationCanvasProps {
  className?: string;
}

const ConstellationCanvas: React.FC<ConstellationCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const offsetRef = useRef({ x: 0, y: 0 });
  const highlightedNodeRef = useRef<number>(-1);
  const highlightTimeRef = useRef<number>(0);

  const initializeNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 2 + Math.random(),
        targetRadius: 2 + Math.random()
      });
    }
    nodesRef.current = nodes;
  }, []);

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const nodes = nodesRef.current;
    const offset = offsetRef.current;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    ctx.shadowBlur = 0; // GPU friendly

    // Update node positions
    nodes.forEach((node, index) => {
      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges
      if (node.x <= 0 || node.x >= width) node.vx *= -1;
      if (node.y <= 0 || node.y >= height) node.vy *= -1;

      // Keep in bounds
      node.x = Math.max(0, Math.min(width, node.x));
      node.y = Math.max(0, Math.min(height, node.y));

      // Animate radius for highlighted node
      if (index === highlightedNodeRef.current) {
        const elapsed = Date.now() - highlightTimeRef.current;
        if (elapsed < 1000) {
          const progress = elapsed / 1000;
          const easeOut = 1 - Math.pow(1 - progress, 3);
          node.radius = node.targetRadius + (4 - node.targetRadius) * (1 - easeOut);
        } else {
          node.radius = node.targetRadius;
          highlightedNodeRef.current = -1;
        }
      } else {
        node.radius = node.targetRadius;
      }
    });

    // Draw connections
    ctx.strokeStyle = '#A0C5AE';
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x + offset.x;
        const dy = nodes[i].y - nodes[j].y + offset.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          const opacity = (1 - distance / 110) * 0.6;
          const lineWidth = (i === highlightedNodeRef.current || j === highlightedNodeRef.current) ? 1.4 : 1;
          
          ctx.globalAlpha = opacity;
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x + offset.x, nodes[i].y + offset.y);
          ctx.lineTo(nodes[j].x + offset.x, nodes[j].y + offset.y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach((node, index) => {
      ctx.globalAlpha = 1;
      ctx.fillStyle = index === highlightedNodeRef.current ? '#5A827E' : '#769F9A';
      ctx.beginPath();
      ctx.arc(node.x + offset.x, node.y + offset.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    animationRef.current = requestAnimationFrame(drawFrame);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    mouseRef.current = { x: mouseX, y: mouseY };

    // Update parallax offset
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    offsetRef.current = {
      x: (mouseX - centerX) / canvas.width * 15,
      y: (mouseY - centerY) / canvas.height * 15
    };

    // Find closest node for highlighting
    const nodes = nodesRef.current;
    let closestIndex = -1;
    let closestDistance = Infinity;

    nodes.forEach((node, index) => {
      const dx = node.x - mouseX;
      const dy = node.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 60 && distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== -1 && closestIndex !== highlightedNodeRef.current) {
      highlightedNodeRef.current = closestIndex;
      highlightTimeRef.current = Date.now();
    }
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    
    initializeNodes(canvas.width, canvas.height);
  }, [initializeNodes]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Just draw static nodes without animation
      handleResize();
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#769F9A';
        nodesRef.current.forEach(node => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      return;
    }

    // Initialize
    handleResize();
    drawFrame();

    // Event listeners
    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 200);
    };

    window.addEventListener('resize', throttledResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', throttledResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(resizeTimeout);
    };
  }, [drawFrame, handleMouseMove, handleResize]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default ConstellationCanvas;