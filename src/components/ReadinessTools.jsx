import { useState } from "react";
import { FileText, Linkedin, Sparkles } from "lucide-react";

export default function ReadinessTools() {
  const [resumeNotes, setResumeNotes] = useState("");
  const [linkedinNotes, setLinkedinNotes] = useState("");

  const analyzeResume = () => {
    // Placeholder local logic for UX; backend AI can be wired later via API
    const tips = [
      "Quantify achievements (%, $, #)",
      "Use strong action verbs",
      "Mirror keywords from target job descriptions",
      "Keep to 1-2 pages with clear section headings",
    ];
    setResumeNotes(tips.join("\n• "));
  };

  const analyzeLinkedIn = () => {
    const tips = [
      "Headline: role + value proposition + niche",
      "About: 3-4 impact paragraphs, include metrics",
      "Add 5-10 featured items (projects, posts, media)",
      "Open to Work with targeted titles & locations",
    ];
    setLinkedinNotes(tips.join("\n• "));
  };

  return (
    <section id="readiness" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-indigo-600" />
          <h2 className="text-xl sm:text-2xl font-semibold">Job readiness tools</h2>
        </div>

        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
            <div className="flex items-center gap-2 font-medium">
              <FileText className="h-5 w-5 text-slate-500" /> Resume analysis
            </div>
            <textarea
              className="mt-4 w-full min-h-[160px] rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Paste your resume text here"
            />
            <div className="mt-3 flex justify-end">
              <button
                onClick={analyzeResume}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-indigo-500"
              >
                Generate insights
              </button>
            </div>
            {resumeNotes && (
              <div className="mt-4 rounded-lg bg-indigo-50 border border-indigo-200 p-4 text-sm whitespace-pre-wrap">
                • {resumeNotes}
              </div>
            )}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
            <div className="flex items-center gap-2 font-medium">
              <Linkedin className="h-5 w-5 text-slate-500" /> LinkedIn profile feedback
            </div>
            <textarea
              className="mt-4 w-full min-h-[160px] rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Paste your LinkedIn 'About' or key sections"
            />
            <div className="mt-3 flex justify-end">
              <button
                onClick={analyzeLinkedIn}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-indigo-500"
              >
                Generate insights
              </button>
            </div>
            {linkedinNotes && (
              <div className="mt-4 rounded-lg bg-indigo-50 border border-indigo-200 p-4 text-sm whitespace-pre-wrap">
                • {linkedinNotes}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
