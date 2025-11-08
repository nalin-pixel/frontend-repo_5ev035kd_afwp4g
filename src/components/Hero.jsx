import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to enhance readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950/80" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Minimal, Modern & Glassy
        </h1>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          I craft delightful web experiences with clean aesthetics and performant code.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="rounded-xl px-5 py-2.5 text-sm font-medium backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 border border-white/70 dark:border-white/10 shadow-md text-neutral-900 dark:text-white hover:bg-white/80 dark:hover:bg-neutral-900/80 transition">
            View Projects
          </a>
          <a href="#contact" className="rounded-xl px-5 py-2.5 text-sm font-medium bg-neutral-900/90 dark:bg-white/90 text-white dark:text-neutral-900 shadow-md hover:bg-neutral-900 dark:hover:bg-white transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
