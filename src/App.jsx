import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-neutral-600 dark:text-neutral-400">
      © {new Date().getFullYear()} — Built with love and glass.
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-indigo-50 to-cyan-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
