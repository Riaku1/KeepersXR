'use client';

import React from 'react';

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="absolute rounded-full filter blur-[80px] opacity-40 bg-neon-purple w-96 h-96 top-[-10%] left-[-10%] animate-blob"></div>
      <div className="absolute rounded-full filter blur-[80px] opacity-40 bg-neon-blue w-96 h-96 top-[40%] right-[-10%] animate-blob animation-delay-2000"></div>
      <div className="absolute rounded-full filter blur-[80px] opacity-40 bg-purple-600 w-80 h-80 bottom-[-10%] left-[20%] animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default AmbientBackground;
