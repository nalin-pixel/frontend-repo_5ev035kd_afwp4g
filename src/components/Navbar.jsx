import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Default to light mode
    document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    setIsDark(root.classList.contains('dark'));
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/40 dark:bg-neutral-900/40 border-b border-white/60 dark:border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">MyPortfolio</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">About</a>
          <a href="#skills" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">Skills</a>
          <a href="#projects" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">Projects</a>
          <a href="#contact" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">Contact</a>
        </div>
        <button
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium backdrop-blur-md bg-white/50 dark:bg-neutral-900/60 border border-white/70 dark:border-white/10 shadow-sm text-neutral-700 dark:text-neutral-200 hover:bg-white/70 dark:hover:bg-neutral-900/80 transition"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'} Mode</span>
        </button>
      </nav>
    </header>
  );
}
