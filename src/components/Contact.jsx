import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="relative max-w-3xl mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          Let’s build something great
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/75"
        >
          Open for freelance and collaborations. Drop a message and I’ll get back.
        </motion.p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid sm:grid-cols-2 gap-4 text-left"
        >
          <div>
            <label className="text-white/70 text-sm">Name</label>
            <input
              type="text"
              required
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-white/70 text-sm">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-white/70 text-sm">Message</label>
            <textarea
              rows={5}
              required
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-medium overflow-hidden"
            >
              <span className="relative z-10">Send message</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
