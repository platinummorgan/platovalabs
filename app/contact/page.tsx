export const metadata = {
  title: 'Contact — Platova Labs',
  description: 'Contact Platova Labs — support, partnerships, and general inquiries.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Contact Platova Labs</h1>
      <p className="mt-3 text-neutral-300">Choose how you'd like to reach us. We typically reply within 1–2 business days.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="mt-2 text-sm text-neutral-400">Best for support, billing, and partnership inquiries.</p>
          <a href="mailto:support@platovalabs.com" className="mt-4 inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium">Email support@platovalabs.com</a>
        </div>

        <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="text-lg font-semibold">Social</h2>
          <p className="mt-2 text-sm text-neutral-400">Quick updates and casual reach-outs.</p>
          <div className="mt-4 flex gap-3">
            <a href="https://x.com/platovalabs" target="_blank" rel="noopener noreferrer" className="text-sm underline">X (Twitter)</a>
            <a href="https://www.tiktok.com/@platovalabs" target="_blank" rel="noopener noreferrer" className="text-sm underline">TikTok</a>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-neutral-500">Emails are stored for support resolution only.</p>

      {/* Optional: legacy/contact form retained below for customers who prefer to submit via form. Update Formspree ID if needed. */}
      {/*
      <form action="https://formspree.io/f/REPLACE_ME" method="POST" className="mt-8 grid gap-4">
        <input type="hidden" name="_next" value="/contact?success=1" />
        <label className="text-sm text-neutral-300">Your email</label>
        <input aria-label="contact email" type="email" name="email" required className="w-full rounded bg-neutral-800 border border-neutral-700 px-3 py-2 text-sm text-neutral-50" />

        <label className="text-sm text-neutral-300">Message</label>
        <textarea aria-label="contact message" name="message" rows={6} required className="w-full rounded bg-neutral-800 border border-neutral-700 px-3 py-2 text-sm text-neutral-50" />

        <div className="flex justify-end">
          <button aria-label="Send message" type="submit" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium">Send message</button>
        </div>
      </form>
      */}
    </main>
  );
}
