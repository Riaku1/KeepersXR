'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Film, Check, ArrowUpRight, Play } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-dark-800/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon-purple font-semibold tracking-wider uppercase text-sm"
          >
            Featured Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mt-2"
          >
            Keepers of the Forest
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            An award-nominated virtual reality journey exploring the Batwa Legacy.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full w-max mb-6">
                <Film className="w-4 h-4 text-neon-blue" />
                <span className="text-xs font-medium">VR Documentary Film</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">The Batwa Legacy</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Filmed in Uganda, this single-user VR360 experience features the Batwa people—ancestral guardians of the Bwindi and Virunga mountain ranges. Evicted from their forests, the Batwa use this platform to preserve their culture, identity, and environmental knowledge.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-neon-blue" /> Device: Meta Quest 2 & 3
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-neon-blue" /> Theme: Environmental & Social Issues
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-neon-blue" /> Nominated: AIXR XR Awards 2024
                </li>
              </ul>
              <button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all w-max flex items-center gap-2">
                View Project Details <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative min-h-[400px]">
              <Image src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Forest VR Concept" fill className="absolute inset-0 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-800 to-transparent lg:block hidden"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 hover:scale-110 transition-transform cursor-pointer group">
                  <Play className="w-8 h-8 text-white fill-white ml-1 group-hover:text-neon-blue transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
