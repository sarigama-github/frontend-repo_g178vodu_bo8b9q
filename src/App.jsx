import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased selection:bg-sky-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-white/50">
        <p>© {new Date().getFullYear()} Ahmad • Crafted with motion</p>
      </footer>
    </div>
  );
}

export default App;
