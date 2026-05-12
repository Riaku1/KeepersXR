'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-30"
      style={{
        background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, rgba(176, 38, 255, 0.05) 40%, rgba(0,0,0,0) 70%)',
        mixBlendMode: 'screen',
      }}
      animate={{
        x: mousePosition.x - 200,
        y: mousePosition.y - 200,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
    />
  );
};

export default CursorGlow;
