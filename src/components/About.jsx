import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section ref={ref} className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900/0 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        <motion.h2 style={{ y, opacity }} className="text-3xl md:text-4xl font-semibold text-white">
          About Ahmad
        </motion.h2>
        <motion.p
          style={{ y }}
          className="mt-6 text-white/75 leading-relaxed"
        >
          I’m a frontend-focused developer who blends design and engineering to build immersive user experiences. My toolkit includes React, TypeScript, Tailwind, and Framer Motion, and I love bringing UIs to life with subtle micro‑interactions and tasteful motion.
        </motion.p>
        <motion.div
          style={{ y }}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          {[
            ['Performance', 'First'],
            ['Accessibility', 'Built‑in'],
            ['Animation', 'Obsessed'],
          ].map(([a, b]) => (
            <div key={a} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6">
              <p className="text-white font-medium">{a}</p>
              <p className="text-white/60 text-sm">{b}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
