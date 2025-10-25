"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  id: number;
}

interface StaticNode {
  x: number;
  y: number;
}

// Optimized line component with predictive leading effect
const CursorLine = ({ node, smoothX, smoothY }: { 
  node: StaticNode; 
  smoothX: any; 
  smoothY: any; 
}) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const prevPosRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const unsubscribeX = smoothX.on("change", (x: number) => {
      const vx = x - prevPosRef.current.x;
      setVelocity(prev => ({ ...prev, x: vx }));
      prevPosRef.current.x = x;
      setCursorPos(prev => ({ ...prev, x }));
    });
    const unsubscribeY = smoothY.on("change", (y: number) => {
      const vy = y - prevPosRef.current.y;
      setVelocity(prev => ({ ...prev, y: vy }));
      prevPosRef.current.y = y;
      setCursorPos(prev => ({ ...prev, y }));
    });
    
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [smoothX, smoothY]);
  
  // Predict ahead position based on velocity
  const leadFactor = 15; // How far ahead to predict
  const leadX = cursorPos.x + (velocity.x * leadFactor);
  const leadY = cursorPos.y + (velocity.y * leadFactor);
  
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const isNearLeftSide = leadX < windowWidth * 0.20; // Only 20% left zone
  const isNearRightSide = leadX > windowWidth * 0.80; // Only 20% right zone
  const isNearSides = isNearLeftSide || isNearRightSide;
  
  if (!isNearSides) return null;
  
  const dx = node.x - leadX;
  const dy = node.y - leadY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > 350) return null;
  
  const opacity = (1 - distance / 350) * 0.75;
  
  return (
    <line
      x1={leadX}
      y1={leadY}
      x2={node.x}
      y2={node.y}
      stroke="url(#gradient)"
      strokeWidth="1.5"
      opacity={opacity}
      style={{ transition: "opacity 0.08s ease-out" }}
    />
  );
};

const CustomCursor = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  const [staticNodes, setStaticNodes] = useState<StaticNode[]>([]);
  const [isInHomeSection, setIsInHomeSection] = useState(true);
  
  // Smooth spring animation for cursor position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring config for smooth, fast movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const particleIdRef = useRef(0);
  const lastParticleTimeRef = useRef(0);

  useEffect(() => {
    setMounted(true);

    // Create permanent nodes in narrow 20% side zones
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    const leftNodes: StaticNode[] = [];
    const rightNodes: StaticNode[] = [];
    
    // 5 nodes on each side within 20% zones
    const leftZoneWidth = windowWidth * 0.18; // 18% for node placement
    const rightZoneStart = windowWidth * 0.82; // Start at 82%
    
    for (let i = 0; i < 5; i++) {
      leftNodes.push({
        x: 50 + Math.random() * (leftZoneWidth - 50), // Within left 20%
        y: (windowHeight / 6) * (i + 1) + (Math.random() * 40 - 20),
      });
    }
    
    for (let i = 0; i < 5; i++) {
      rightNodes.push({
        x: rightZoneStart + Math.random() * (windowWidth - rightZoneStart - 50), // Within right 20%
        y: (windowHeight / 6) * (i + 1) + (Math.random() * 40 - 20),
      });
    }
    
    setStaticNodes([...leftNodes, ...rightNodes]);

    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor position immediately for smooth tracking
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Create tracking points less frequently for performance
      const now = Date.now();
      if (now - lastParticleTimeRef.current > 100) {
        // Only create particles in side zones (not center)
        const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
        const isInLeftZone = e.clientX < windowWidth * 0.20;
        const isInRightZone = e.clientX > windowWidth * 0.80;
        
        if (isInLeftZone || isInRightZone) {
          const newParticle = { 
            x: e.clientX, 
            y: e.clientY, 
            id: particleIdRef.current++ 
          };
          setParticles((prev) => {
            const updated = [...prev, newParticle];
            return updated.slice(-3); // Keep only 3 particles (minimal)
          });
        }
        lastParticleTimeRef.current = now;
      }
    };

    // Detect scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsInHomeSection(scrollY < windowHeight * 0.7);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  // Calculate distance between two points
  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };

  return (
    <>
      {/* Gradient glow directly under cursor - ONLY in center zone */}
      <div className="fixed pointer-events-none z-0 inset-0"
        style={{
          maskImage: `linear-gradient(to right, 
            transparent 0%, 
            transparent 20%, 
            black 20%, 
            black 80%, 
            transparent 80%, 
            transparent 100%)`,
          WebkitMaskImage: `linear-gradient(to right, 
            transparent 0%, 
            transparent 20%, 
            black 20%, 
            black 80%, 
            transparent 80%, 
            transparent 100%)`,
        }}
      >
        <motion.div
          className="pointer-events-none"
          style={{
            position: "fixed",
            left: smoothX,
            top: smoothY,
            x: "-50%",
            y: "-50%",
            width: "600px",
            height: "600px",
            background: `radial-gradient(circle at center, rgba(255, 153, 51, 0.15), rgba(245, 158, 11, 0.08) 40%, transparent 70%)`,
          }}
        />
      </div>

      {/* Network/Spider web structure - only visible in home section */}
      <AnimatePresence>
        {isInHomeSection && (
          <svg
            className="fixed pointer-events-none z-0 inset-0 w-full h-full will-change-auto"
            style={{ mixBlendMode: "screen" }}
          >
            {/* Real-time cursor to side nodes - FAST and SMOOTH */}
            {staticNodes.map((node, nodeIndex) => (
              <CursorLine
                key={`cursor-${nodeIndex}`}
                node={node}
                smoothX={smoothX}
                smoothY={smoothY}
              />
            ))}

            {/* Static side web structure - permanent (only connects same-side nodes in 20% zones) */}
            {staticNodes.map((node, i) => {
              const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
              const nodeOnLeft = node.x < windowWidth * 0.25; // Slightly wider for detection
              
              return staticNodes.slice(i + 1).map((otherNode, j) => {
                const otherOnLeft = otherNode.x < windowWidth * 0.25;
                
                // Only connect nodes on the same side (both left or both right)
                if (nodeOnLeft !== otherOnLeft) return null;
                
                const dx = otherNode.x - node.x;
                const dy = otherNode.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 250) {
                  const opacity = (1 - distance / 250) * 0.25;
                  return (
                    <line
                      key={`static-${i}-${j}`}
                      x1={node.x}
                      y1={node.y}
                      x2={otherNode.x}
                      y2={otherNode.y}
                      stroke="url(#gradient-dim)"
                      strokeWidth="1"
                      opacity={opacity}
                    />
                  );
                }
                return null;
              });
            })}

            {/* Gradient definitions */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff9933" stopOpacity="1" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="gradient-dim" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff9933" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </AnimatePresence>

      {/* Visible anchor dots on left and right sides - optimized */}
      <AnimatePresence>
        {isInHomeSection && staticNodes.map((node, index) => (
          <motion.div
            key={`node-${index}`}
            className="fixed pointer-events-none z-0 will-change-transform"
            style={{
              left: node.x - 3,
              top: node.y - 3,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.12,
              ease: "easeInOut",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saffron-400 to-golden-500 shadow-[0_0_8px_rgba(255,153,51,0.6)]" />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;

