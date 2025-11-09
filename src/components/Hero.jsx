import { Rocket, Target, CalendarCheck2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm backdrop-blur">
              <CalendarCheck2 className="h-4 w-4" />
              90-day career action strategy
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
              Your AI-enabled career coach for landing the next role
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              Create a focused 90-day plan, track milestones, invite mentors, and
              sharpen your job readiness with resume and LinkedIn insights.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#plan"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-white shadow hover:bg-indigo-400 transition"
              >
                <Rocket className="h-4 w-4" />
                Build your plan
              </a>
              <a
                href="#readiness"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10 transition"
              >
                <Target className="h-4 w-4" />
                Boost readiness
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-2xl font-bold">90d</div>
                <div className="text-xs text-slate-400">Structured plan</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12+</div>
                <div className="text-xs text-slate-400">Milestones</div>
              </div>
              <div>
                <div className="text-2xl font-bold">AI</div>
                <div className="text-xs text-slate-400">Resume & LinkedIn</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-cyan-400/10 to-fuchsia-400/10 p-[1px]">
              <div className="h-full w-full rounded-2xl bg-slate-900/60 backdrop-blur p-6 border border-white/10">
                <div className="grid grid-cols-3 gap-3 h-full">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-white/10 bg-white/5 p-4 flex flex-col justify-between"
                    >
                      <div className="h-2 w-12 rounded bg-white/20" />
                      <div className="mt-4 h-1 w-full rounded bg-gradient-to-r from-indigo-400 to-cyan-400" />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-xs text-slate-400">
                  Visualize your weekly progress at a glance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
