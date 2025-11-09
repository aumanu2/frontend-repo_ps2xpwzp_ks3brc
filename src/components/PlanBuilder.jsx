import { useState } from "react";
import { Plus, CheckCircle2, Calendar, Flag } from "lucide-react";

const defaultWeeks = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Week ${i + 1}`,
  goals: [],
}));

export default function PlanBuilder() {
  const [weeks, setWeeks] = useState(defaultWeeks);
  const [input, setInput] = useState("");
  const [activeWeek, setActiveWeek] = useState(1);

  const addGoal = () => {
    if (!input.trim()) return;
    setWeeks((prev) =>
      prev.map((w) =>
        w.id === activeWeek ? { ...w, goals: [...w.goals, { text: input, done: false }] } : w
      )
    );
    setInput("");
  };

  const toggleGoal = (weekId, idx) => {
    setWeeks((prev) =>
      prev.map((w) =>
        w.id === weekId
          ? {
              ...w,
              goals: w.goals.map((g, i) => (i === idx ? { ...g, done: !g.done } : g)),
            }
          : w
      )
    );
  };

  return (
    <section id="plan" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3">
          <Flag className="h-5 w-5 text-indigo-600" />
          <h2 className="text-xl sm:text-2xl font-semibold">Build your 90-day plan</h2>
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl border border-slate-200 p-4 sm:p-6">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex overflow-auto rounded-lg border border-slate-200">
                {weeks.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setActiveWeek(w.id)}
                    className={`px-3 py-2 text-sm border-r border-slate-200 hover:bg-slate-50 ${
                      activeWeek === w.id ? "bg-indigo-50 text-indigo-700" : "bg-white"
                    }`}
                  >
                    {w.title}
                  </button>
                ))}
              </div>
              <div className="flex w-full sm:w-auto gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Add a goal for the selected week"
                  className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={addGoal}
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-white text-sm hover:bg-indigo-500"
                >
                  <Plus className="h-4 w-4" /> Add
                </button>
              </div>
            </div>

            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {weeks
                .find((w) => w.id === activeWeek)
                ?.goals.map((g, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleGoal(activeWeek, idx)}
                    className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-3 text-left text-sm transition ${
                      g.done
                        ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-400" /> {g.text}
                    </span>
                    <CheckCircle2
                      className={`h-5 w-5 ${g.done ? "text-emerald-600" : "text-slate-300"}`}
                    />
                  </button>
                ))}
              {weeks.find((w) => w.id === activeWeek)?.goals.length === 0 && (
                <p className="col-span-full text-center text-slate-500 text-sm">
                  No goals yet. Add your first one above.
                </p>
              )}
            </div>
          </div>

          <aside className="rounded-xl border border-slate-200 p-4 sm:p-6 bg-slate-50">
            <h3 className="font-medium">Weekly guidance</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Focus on 2-4 achievable goals per week.</li>
              <li>Balance between applications, networking and learning.</li>
              <li>Review progress every Friday and plan Monday.</li>
              <li>Invite a mentor or accountability partner.</li>
            </ul>
            <div className="mt-4 rounded-lg bg-white p-4 border border-slate-200">
              <div className="text-xs uppercase text-slate-500">Tip</div>
              <p className="mt-1 text-sm">
                Keep goals outcome-driven: "Reach out to 10 hiring managers" vs.
                "Work on outreach".
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
