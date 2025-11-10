import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
          >
            Ahmad
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"> — Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="mt-4 text-white/80 max-w-xl mx-auto md:mx-0"
          >
            I craft interactive, high‑performance web experiences with a focus on delightful micro‑interactions, motion, and seamless performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-8 flex items-center justify-center md:justify-start gap-3"
          >
            <a
              href="#projects"
              className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-medium overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <div className="hidden md:block" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm"
      >
        Scroll
      </motion.div>
    </section>
  );
}
