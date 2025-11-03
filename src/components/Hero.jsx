import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = ({ onExplore, onBook }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for warmth and depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#3D6B5C]/20 via-transparent to-[#D47F3E]/20" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
          >
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#D47F3E] via-[#CBAA78] to-[#3D6B5C] drop-shadow"/>
            Almou Tourism
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="mt-3 text-lg md:text-xl text-white/80"
          >
            Discover Morocco’s Hidden Adventures
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={onExplore}
              className="rounded-full bg-[#D47F3E] px-6 py-3 text-sm md:text-base font-semibold shadow-lg shadow-[#D47F3E]/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#CBAA78]"
            >
              Explore Trips
            </button>
            <button
              onClick={onBook}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm md:text-base font-semibold backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#3D6B5C]"
            >
              Book Now
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Moroccan geometry accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
};

export default Hero;
