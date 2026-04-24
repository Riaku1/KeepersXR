'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Store, GraduationCap, Megaphone } from 'lucide-react';

const services = [
  {
    icon: <Store className="w-8 h-8 text-neon-purple" />,
    title: "Immersive Retail",
    description: "Step into fully interactive shopping experiences. We build virtual storefronts and augmented product catalogs that make modern retail unforgettable and highly engaging.",
    color: "bg-neon-purple/20",
    border: "border-neon-purple/30"
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-neon-blue" />,
    title: "Interactive Learning",
    description: "Revolutionize education and enterprise training. We create safe, controlled virtual environments for practicing complex procedures, reducing costs and physical hazards.",
    color: "bg-neon-blue/20",
    border: "border-neon-blue/30"
  },
  {
    icon: <Megaphone className="w-8 h-8 text-pink-500" />,
    title: "Augmented Storytelling",
    description: "Transform standard brand narratives into engaging, augmented experiences. We craft immersive campaigns that connect deeply with audiences on an emotional level.",
    color: "bg-pink-500/20",
    border: "border-pink-500/30"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neon-blue font-semibold tracking-wider uppercase text-sm"
          >
            Enterprise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mt-2"
          >
            XR Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Transforming operations, engaging customers, and driving innovation through bespoke immersive technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 border ${service.border}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
