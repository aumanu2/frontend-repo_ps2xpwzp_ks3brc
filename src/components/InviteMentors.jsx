import { useState } from "react";
import { Mail, Users } from "lucide-react";

export default function InviteMentors() {
  const [emails, setEmails] = useState("");
  const [sent, setSent] = useState(false);

  const sendInvites = () => {
    if (!emails.trim()) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="mentors" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-indigo-600" />
          <h2 className="text-xl sm:text-2xl font-semibold">Invite mentors & accountability partners</h2>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 p-4 sm:p-6">
          <p className="text-sm text-slate-600">
            Enter comma-separated emails to invite people who can view your plan
            and celebrate wins with you.
          </p>
          <input
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
            placeholder="e.g. alex@mentor.com, sam@friend.com"
            className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="mt-3 flex justify-end">
            <button
              onClick={sendInvites}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-indigo-500"
            >
              <Mail className="h-4 w-4" /> Send invites
            </button>
          </div>
          {sent && (
            <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-sm text-emerald-800">
              Invites sent! Your mentors will receive an email with a link to your plan.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
