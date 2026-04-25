'use client';

import React, { useState, useEffect } from 'react';
import { Headset, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Headset className="w-8 h-8 text-neon-blue" />
            <span className="font-bold text-2xl tracking-tight">Keepers<span className="text-neon-purple">XR</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#home" className="hover:text-neon-blue transition-colors px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="#about" className="hover:text-neon-blue transition-colors px-3 py-2 text-sm font-medium">About</Link>
              <Link href="#projects" className="hover:text-neon-blue transition-colors px-3 py-2 text-sm font-medium">Projects</Link>
              <Link href="#services" className="hover:text-neon-blue transition-colors px-3 py-2 text-sm font-medium">Services</Link>
              <Link href="#contact" className="bg-white/10 hover:bg-white/20 border border-white/20 transition-all px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2">
                Let&apos;s Talk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 absolute w-full animate-fadeInUp">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-neon-blue">Home</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-neon-blue">About</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-neon-blue">Projects</Link>
            <Link href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-neon-blue">Services</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-neon-purple">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
