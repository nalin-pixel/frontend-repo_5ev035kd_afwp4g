const projects = [
  {
    title: 'Glassy Dashboard',
    description: 'A sleek admin dashboard featuring glassmorphism and smooth transitions.',
    link: '#',
  },
  {
    title: 'Portfolio Template',
    description: 'A responsive portfolio starter with pastel tones and elegant typography.',
    link: '#',
  },
  {
    title: 'Landing Page',
    description: 'Conversion-focused landing page with subtle 3D accents.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">Projects</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Selected work highlighting design and code</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="group block rounded-2xl backdrop-blur-xl bg-white/50 dark:bg-neutral-900/40 border border-white/70 dark:border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] p-6 hover:translate-y-[-2px] transition-transform"
          >
            <div className="h-36 rounded-xl bg-gradient-to-tr from-indigo-200/60 via-cyan-200/60 to-pink-200/60 dark:from-indigo-500/20 dark:via-cyan-500/20 dark:to-pink-500/20 mb-4" />
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-indigo-700 dark:text-indigo-300">Explore →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
