export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">Contact</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Have a project in mind? Let’s talk.</p>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-2xl backdrop-blur-xl bg-white/50 dark:bg-neutral-900/40 border border-white/70 dark:border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] p-6 md:p-8 grid gap-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <label className="text-sm text-neutral-700 dark:text-neutral-300">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-xl bg-white/60 dark:bg-neutral-950/40 border border-white/70 dark:border-white/10 px-4 py-2.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-indigo-300/60"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-1.5">
            <label className="text-sm text-neutral-700 dark:text-neutral-300">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-xl bg-white/60 dark:bg-neutral-950/40 border border-white/70 dark:border-white/10 px-4 py-2.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-indigo-300/60"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm text-neutral-700 dark:text-neutral-300">Message</label>
          <textarea
            rows={4}
            required
            className="w-full rounded-xl bg-white/60 dark:bg-neutral-950/40 border border-white/70 dark:border-white/10 px-4 py-2.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-indigo-300/60"
            placeholder="Tell me about your project"
          />
        </div>
        <button
          type="submit"
          className="mt-2 inline-flex justify-center rounded-xl px-5 py-2.5 text-sm font-medium bg-neutral-900/90 dark:bg-white/90 text-white dark:text-neutral-900 shadow-md hover:bg-neutral-900 dark:hover:bg-white transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
