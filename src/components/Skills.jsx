const skills = ['JavaScript', 'C++', 'HTML', 'CSS'];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">Skills</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">What I use to craft digital experiences</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium backdrop-blur-xl bg-white/50 dark:bg-neutral-900/40 border border-white/70 dark:border-white/10 shadow-sm text-neutral-800 dark:text-neutral-200"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
