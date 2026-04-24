'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Headset, Mail, Globe, MessageSquare, Share2 } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-purple/10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Ready to Step into the <span className="text-gradient">Future?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-10"
          >
            Let&apos;s collaborate on your next immersive project. Whether it&apos;s cultural preservation or enterprise innovation, we&apos;re here to bridge the worlds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="mailto:hello@keepersxr.com" className="inline-flex items-center gap-3 bg-white text-dark-900 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
              <Mail className="w-5 h-5" /> hello@keepersxr.com
            </Link>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Headset className="w-6 h-6 text-neon-blue" />
            <span className="font-bold text-xl tracking-tight">Keepers<span className="text-neon-purple">XR</span></span>
          </div>

          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Share2 className="w-5 h-5" /></Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Globe className="w-5 h-5" /></Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><MessageSquare className="w-5 h-5" /></Link>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KeepersXR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
