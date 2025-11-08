export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="backdrop-blur-xl bg-white/50 dark:bg-neutral-900/40 border border-white/70 dark:border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">About Me</h2>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          I'm a front-end focused developer who loves minimalist, glassmorphic interfaces and
          micro-interactions. I build accessible, responsive sites with attention to performance
          and maintainability.
        </p>
      </div>
    </section>
  );
}
