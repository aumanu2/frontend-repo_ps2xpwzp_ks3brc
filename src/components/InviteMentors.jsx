import { useState } from "react";
import { Users, Mail } from "lucide-react";

export default function InviteMentors() {
  const [emails, setEmails] = useState("");
  const [sent, setSent] = useState(false);

  const sendInvites = () => {
    const list = emails
      .split(/[,\n]/)
      .map((e) => e.trim())
      .filter(Boolean);
    if (list.length === 0) return;
    // Simulate send
    setTimeout(() => setSent(true), 400);
  };

  return (
    <section id="mentors" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Invite Mentors & Accountability Partners</h2>
          <p className="mt-1 text-slate-600">Bring trusted people into your plan for feedback and momentum.</p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-6">
          <div className="mb-3 flex items-center gap-2 text-slate-700">
            <Users size={18} />
            <span className="font-semibold">Add emails</span>
          </div>
          <textarea
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
            placeholder="mentor1@example.com, mentor2@example.com"
            rows={4}
            className="w-full rounded-md border border-slate-300 p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={sendInvites}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700"
          >
            <Mail size={16} /> Send invites
          </button>

          {sent && (
            <p className="mt-3 text-sm text-green-700">Invitations sent! Your mentors will receive an email shortly.</p>
          )}
        </div>
      </div>
    </section>
  );
}
