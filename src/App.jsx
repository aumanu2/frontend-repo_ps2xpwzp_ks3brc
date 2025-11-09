import Hero from "./components/Hero";
import PlanBuilder from "./components/PlanBuilder";
import ReadinessTools from "./components/ReadinessTools";
import InviteMentors from "./components/InviteMentors";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold text-slate-900">Career90</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#plan" className="hover:text-slate-900">Plan</a>
            <a href="#readiness" className="hover:text-slate-900">Readiness</a>
            <a href="#mentors" className="hover:text-slate-900">Mentors</a>
          </nav>
          <a
            href="#plan"
            className="rounded-lg bg-indigo-600 px-3 py-1.5 text-white text-sm hover:bg-indigo-500"
          >
            Get started
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <PlanBuilder />
        <ReadinessTools />
        <InviteMentors />
      </main>

      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Career90. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#plan" className="hover:text-white">Plan</a>
            <a href="#readiness" className="hover:text-white">Readiness</a>
            <a href="#mentors" className="hover:text-white">Mentors</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
