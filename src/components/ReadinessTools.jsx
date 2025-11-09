import { useState } from "react";
import { FileText, Linkedin, Sparkles } from "lucide-react";

export default function ReadinessTools() {
  const [resume, setResume] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [insights, setInsights] = useState([]);

  const analyze = () => {
    const tips = [];
    if (resume.length < 200) tips.push("Expand your resume bullets with quantified outcomes and relevant keywords.");
    if (!/https?:\/\//.test(linkedin)) tips.push("Add a valid LinkedIn URL to enable richer networking features.");
    if (!/\bimpact\b|\bresults\b|\bshipped\b/i.test(resume)) tips.push("Highlight measurable impact with action verbs (shipped, delivered, grew, reduced).");
    if (tips.length === 0) tips.push("Looks solid. Consider role‑specific tailoring for the next application.");
    setInsights(tips);
  };

  return (
    <section id="readiness" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Job‑Readiness Tools</h2>
          <p className="mt-1 text-slate-600">Quick checks to strengthen your resume and LinkedIn profile.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <div className="mb-3 flex items-center gap-2 text-slate-700">
              <FileText size={18} />
              <span className="font-semibold">Resume insights</span>
            </div>
            <textarea
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              placeholder="Paste your resume text here..."
              rows={8}
              className="w-full rounded-md border border-slate-300 p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
            <div className="mb-3 flex items-center gap-2 text-slate-700">
              <Linkedin size={18} />
              <span className="font-semibold">LinkedIn check</span>
            </div>
            <input
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="https://www.linkedin.com/in/your-handle"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button
              onClick={analyze}
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700"
            >
              <Sparkles size={16} /> Analyze
            </button>

            {insights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {insights.map((tip, i) => (
                  <li key={i} className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
