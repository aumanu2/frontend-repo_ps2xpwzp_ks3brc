import { Rocket, Target, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-medium tracking-wide text-slate-300">
              <Rocket size={14} />
              Career Playbook
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Your 90‑Day Career Playbook
            </h1>
            <p className="mt-4 text-slate-300 md:text-lg">
              Turn ambition into action. Build a focused 12‑week plan, polish your resume & LinkedIn, and bring mentors along for accountability.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#plan" className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 font-semibold text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <Target size={18} /> Build my plan
              </a>
              <a href="#readiness" className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 font-semibold text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
                <Calendar size={18} /> Get job‑ready
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-20 flex-col items-center justify-center rounded-lg bg-slate-900/60 text-center"
                >
                  <div className="text-xs text-slate-400">Week</div>
                  <div className="text-lg font-semibold">{i + 1}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-sm text-slate-400">
              12 weeks. One decisive outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
