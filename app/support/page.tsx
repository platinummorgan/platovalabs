import AccessibleButton from "@/components/AccessibleButton";
import React from "react";

export const metadata = {
  title: "Support — Platova Labs",
  description: "Contact support for Platova Labs",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-lg p-6 shadow">
        <h1 className="text-2xl font-semibold">Support</h1>
        <p className="mt-2 text-neutral-400">Need help? Send us a message and we’ll get back within 2 business days.</p>

  <form className="mt-6 grid grid-cols-1 gap-4" action="#">
          <label className="text-sm text-neutral-300">Your email</label>
          <input aria-label="support email" type="email" required className="w-full rounded bg-neutral-800 border border-neutral-700 px-3 py-2 text-sm text-neutral-50" />

          <label className="text-sm text-neutral-300">Subject</label>
          <input aria-label="support subject" type="text" required className="w-full rounded bg-neutral-800 border border-neutral-700 px-3 py-2 text-sm text-neutral-50" />

          <label className="text-sm text-neutral-300">Message</label>
          <textarea aria-label="support message" rows={6} required className="w-full rounded bg-neutral-800 border border-neutral-700 px-3 py-2 text-sm text-neutral-50" />

          <div className="flex items-center justify-end">
            <AccessibleButton ariaLabel="Send support message" className="bg-indigo-600 hover:bg-indigo-700">
              Send message
            </AccessibleButton>
          </div>
        </form>
      </div>
    </main>
  );
}
