'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Globe, Leaf } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* Background Parallax Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <Leaf className="absolute top-[20%] left-[10%] w-32 h-32 text-[#004d40] opacity-20 -rotate-45" />
        <Leaf className="absolute top-[40%] right-[15%] w-48 h-48 text-[#00251a] opacity-30 rotate-12" />
        <Leaf className="absolute bottom-[20%] left-[25%] w-24 h-24 text-[#004d40] opacity-15 rotate-90" />
      </motion.div>

      {/* Foreground Parallax Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        animate={{
          x: mousePosition.x * 40,
          y: mousePosition.y * 40,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <Leaf className="absolute -bottom-10 -left-10 w-64 h-64 text-dark-900 opacity-90 rotate-[30deg] drop-shadow-[0_0_15px_rgba(0,210,255,0.2)]" />
        <Leaf className="absolute -top-10 -right-10 w-56 h-56 text-dark-900 opacity-90 -rotate-[120deg] drop-shadow-[0_0_15px_rgba(176,38,255,0.2)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
          <span className="text-xs font-medium uppercase tracking-wider text-gray-300">Based in Uganda, Bridging Worlds</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Redefining Possibilities <br className="hidden md:block" />
          with <span className="text-gradient">Immersive XR</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10"
        >
          We merge emerging technology with cultural heritage. Creating immersive stories, AR brand experiences, and VR educational tools that captivate and engage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="#projects" className="bg-white text-dark-900 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            Explore Our Work <ChevronRight className="w-5 h-5" />
          </Link>
          <Link href="#services" className="glass-panel px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center">
            Enterprise Solutions
          </Link>
        </motion.div>
      </div>

      {/* Floating UI Elements */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-10 right-10 glass-panel p-4 rounded-2xl hidden lg:flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center">
          <Globe className="text-white w-6 h-6" />
        </div>
        <div className="text-left">
          <p className="text-sm text-gray-400">Pioneering</p>
          <p className="font-bold">Ancestral Intelligence</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
