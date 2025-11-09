import Hero from "./components/Hero";
import PlanBuilder from "./components/PlanBuilder";
import ReadinessTools from "./components/ReadinessTools";
import InviteMentors from "./components/InviteMentors";
import { Rocket } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <Rocket className="text-indigo-600" size={20} />
            <span className="text-sm font-semibold tracking-wide">Career Playbook</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
            <a href="#plan" className="hover:text-slate-900">Plan</a>
            <a href="#readiness" className="hover:text-slate-900">Readiness</a>
            <a href="#mentors" className="hover:text-slate-900">Mentors</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <PlanBuilder />
        <ReadinessTools />
        <InviteMentors />
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Career Playbook — Build momentum in 90 days.
        </div>
      </footer>
    </div>
  );
}
