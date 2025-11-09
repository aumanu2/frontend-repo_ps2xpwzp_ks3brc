import { useState } from "react";
import { CheckCircle2, Flag, CalendarCheck2 } from "lucide-react";

const defaultWeeks = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  goals: [],
}));

export default function PlanBuilder() {
  const [weeks, setWeeks] = useState(defaultWeeks);
  const [activeWeek, setActiveWeek] = useState(1);
  const [goalInput, setGoalInput] = useState("");

  const addGoal = () => {
    const value = goalInput.trim();
    if (!value) return;
    setWeeks((prev) =>
      prev.map((w) =>
        w.id === activeWeek
          ? { ...w, goals: [...w.goals, { id: crypto.randomUUID(), text: value, done: false }] }
          : w
      )
    );
    setGoalInput("");
  };

  const toggleGoal = (weekId, goalId) => {
    setWeeks((prev) =>
      prev.map((w) =>
        w.id === weekId
          ? { ...w, goals: w.goals.map((g) => (g.id === goalId ? { ...g, done: !g.done } : g)) }
          : w
      )
    );
  };

  return (
    <section id="plan" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">90‑Day Plan Builder</h2>
            <p className="mt-1 text-slate-600">Organize 12 weeks into focused, achievable outcomes.</p>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <CalendarCheck2 size={18} />
            <span className="text-sm">Week {activeWeek} of 12</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[280px,1fr]">
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {weeks.map((w) => (
                <button
                  key={w.id}
                  onClick={() => setActiveWeek(w.id)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                    activeWeek === w.id
                      ? "bg-indigo-600 text-white shadow"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  Week {w.id}
                </button>
              ))}
            </div>
          </aside>

          <main className="rounded-lg border border-slate-200 p-4 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex-1">
                <input
                  value={goalInput}
                  onChange={(e) => setGoalInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addGoal()}
                  placeholder="Add a key action for this week (e.g., Reach out to 5 hiring managers)"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <button
                onClick={addGoal}
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700"
              >
                <Flag size={16} /> Add Goal
              </button>
            </div>

            <ul className="mt-6 space-y-2">
              {weeks.find((w) => w.id === activeWeek)?.goals.length ? (
                weeks
                  .find((w) => w.id === activeWeek)
                  .goals.map((g) => (
                    <li
                      key={g.id}
                      className="flex items-start justify-between rounded-md border border-slate-200 bg-white p-3"
                    >
                      <div className="flex items-start gap-3">
                        <button
                          aria-label={g.done ? "Mark as incomplete" : "Mark as complete"}
                          onClick={() => toggleGoal(activeWeek, g.id)}
                          className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border ${
                            g.done
                              ? "border-green-500 bg-green-500 text-white"
                              : "border-slate-300 bg-white text-slate-400"
                          }`}
                        >
                          <CheckCircle2 size={16} />
                        </button>
                        <p className={`text-sm ${g.done ? "text-slate-400 line-through" : "text-slate-800"}`}>
                          {g.text}
                        </p>
                      </div>
                    </li>
                  ))
              ) : (
                <li className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">
                  No goals yet. Add your first action for Week {activeWeek}.
                </li>
              )}
            </ul>
          </main>
        </div>
      </div>
    </section>
  );
}
