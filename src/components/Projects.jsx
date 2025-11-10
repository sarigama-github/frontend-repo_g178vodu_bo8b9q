import { motion } from 'framer-motion';
import { Code2, Rocket, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    desc: 'A blazing-fast analytics dashboard with live streaming charts and buttery-smooth interactions.',
    tags: ['React', 'WebSockets', 'Tailwind'],
  },
  {
    title: '3D Product Showcase',
    desc: 'Interactive 3D scenes with Spline and custom shaders, optimized for performance.',
    tags: ['Spline', 'Three', 'Vite'],
  },
  {
    title: 'Design System',
    desc: 'A scalable component library with tokens, themes, and motion recipes.',
    tags: ['TypeScript', 'Storybook', 'Framer Motion'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white tracking-tight"
        >
          Selected Work
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl group-hover:bg-sky-400/25 transition-colors pointer-events-none" />
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-white/10 text-white">
                  {i === 0 && <Rocket size={18} />}
                  {i === 1 && <Sparkles size={18} />}
                  {i === 2 && <Code2 size={18} />}
                </span>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <motion.span
                initial={{ x: '-110%' }}
                whileHover={{ x: '110%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
