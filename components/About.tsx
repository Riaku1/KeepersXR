'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Leaf } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Future of <span className="text-gradient">Storytelling</span></h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Led by visionaries Lorna Okeng and Emmanuel Rukundo, KeepersXR is at the forefront of virtual reality innovation in Uganda. We don&apos;t just build software; we create spatial archives.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our philosophy centers on <strong className="text-white">Ancestral Intelligence (AI)</strong>—using emergent technologies like VR and AR to preserve cultural knowledge, highlight ancient ecological wisdom, and foster climate resilience through co-creation with Indigenous communities.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-neon-blue">
                <Box className="w-8 h-8 text-neon-blue mb-3" />
                <h3 className="font-bold text-xl mb-1">Immersive Tech</h3>
                <p className="text-sm text-gray-400">VR360 & 6DoF Experiences</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-neon-purple">
                <Leaf className="w-8 h-8 text-neon-purple mb-3" />
                <h3 className="font-bold text-xl mb-1">Cultural Roots</h3>
                <p className="text-sm text-gray-400">Preserving Heritage</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="VR Experience in Nature"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl w-48 shadow-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-wider">LIVE DATA</span>
              </div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-xs text-gray-400">Immersive Engagement</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
