export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-neutral-300">Send a message and we’ll respond within 1–2 business days.</p>

      {/* TODO: replace REPLACE_ME with your Formspree form ID */}
      <form action="https://formspree.io/f/REPLACE_ME" method="POST" className="mt-6 grid gap-4">
        <label className="text-sm text-neutral-300">Your email</label>
        <input aria-label="contact email" type="email" name="email" required className="w-full rounded bg-neutral-800 border border-neutral-700 px-3 py-2 text-sm text-neutral-50" />

        <label className="text-sm text-neutral-300">Subject (optional)</label>
        <input aria-label="contact subject" type="text" name="subject" className="w-full rounded bg-neutral-800 border border-neutral-700 px-3 py-2 text-sm text-neutral-50" />

        <label className="text-sm text-neutral-300">Message</label>
        <textarea aria-label="contact message" name="message" rows={6} required className="w-full rounded bg-neutral-800 border border-neutral-700 px-3 py-2 text-sm text-neutral-50" />

        <div className="flex justify-end">
          <button aria-label="Send message" type="submit" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium">Send message</button>
        </div>
      </form>
    </main>
  );
}
