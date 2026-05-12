'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Firefly = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Random initial position
    setPosition({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    });
  }, []);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-neon-blue rounded-full shadow-[0_0_10px_#00d2ff]"
      initial={{ x: position.x, y: position.y, opacity: 0 }}
      animate={{
        x: [position.x, position.x + (Math.random() * 100 - 50), position.x + (Math.random() * 100 - 50), position.x],
        y: [position.y, position.y + (Math.random() * 100 - 50), position.y + (Math.random() * 100 - 50), position.y],
        opacity: [0, 0.8, 0.2, 0.8, 0],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

const AmbientBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Existing Neon Orbs - adjusted for jungle feel */}
      <div className="absolute rounded-full filter blur-[100px] opacity-30 bg-[#004d40] w-[500px] h-[500px] top-[-10%] left-[-10%] animate-blob"></div>
      <div className="absolute rounded-full filter blur-[100px] opacity-20 bg-neon-purple w-[400px] h-[400px] top-[40%] right-[-10%] animate-blob animation-delay-2000"></div>
      <div className="absolute rounded-full filter blur-[100px] opacity-30 bg-[#00251a] w-[600px] h-[600px] bottom-[-20%] left-[20%] animate-blob animation-delay-4000"></div>
      <div className="absolute rounded-full filter blur-[80px] opacity-15 bg-neon-blue w-[300px] h-[300px] bottom-[10%] right-[20%] animate-blob animation-delay-4000"></div>

      {/* Fireflies */}
      {isMounted && Array.from({ length: 30 }).map((_, i) => (
        <Firefly key={i} />
      ))}
    </div>
  );
};

export default AmbientBackground;
