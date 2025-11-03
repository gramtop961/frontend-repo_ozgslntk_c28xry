import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
            >
              Our Story
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Almou Tourism was born from the love of Moroccan landscapes — from the dunes of Merzouga to the valleys of the Atlas. We craft authentic experiences that connect travelers to the soul of Morocco.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {["Sahara Guides", "Nomad Hosts", "Local Artisans"].map((title, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0b0b0b] to-[#111] p-4 shadow-inner"
                >
                  <div className="h-24 w-full rounded-xl bg-center bg-cover"
                       style={{ backgroundImage: `url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop)` }}
                  />
                  <p className="mt-3 text-sm text-white/80">{title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1548783300-1c77f0b7b618?q=80&w=1600&auto=format&fit=crop"
                alt="Moroccan desert and oasis"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-3xl bg-gradient-to-tr from-[#3D6B5C]/40 to-[#D47F3E]/40 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
