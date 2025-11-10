import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClasses =
    'text-sm md:text-base text-white/80 hover:text-white transition-colors';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? 'backdrop-blur-md bg-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-semibold tracking-tight text-white text-lg md:text-xl"
          aria-label="Go to top"
        >
          Ahmad
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('projects')} className={linkClasses}>
            Projects
          </button>
          <button onClick={() => scrollTo('contact')} className={linkClasses}>
            Contact
          </button>
          <a
            href="mailto:hello@ahmad.dev"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors"
          >
            <Mail size={16} />
            Say hello
          </a>
        </nav>

        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
