'use client';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I get started?',
    answer: 'Browse our products above and click "Open" on any tool that interests you. Most of our web apps require no signup—just visit and start using them immediately.',
  },
  {
    question: 'What about pricing and free trials?',
    answer: 'Many of our tools are completely free (like QRKit and PDFTrim). For paid products, we offer transparent pricing with no hidden fees. Check each product page for specific pricing details.',
  },
  {
    question: 'How do you handle my data?',
    answer: 'Privacy is our priority. Browser-based tools like QRKit and PDFTrim process everything locally—your data never leaves your device. For apps that do sync data, we use industry-standard encryption and never sell your information.',
  },
  {
    question: 'What platforms do you support?',
    answer: 'Our web apps work on any modern browser (Chrome, Firefox, Safari, Edge). Mobile apps are currently available on Android via Google Play, with iOS support planned for select products.',
  },
  {
    question: 'How do I get support?',
    answer: 'Email us at support@platovalabs.com with any questions, bug reports, or feature requests. We typically respond within 1-2 business days.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes. If you\'re not satisfied with a paid product, contact us within 30 days of purchase for a full refund—no questions asked.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-neutral-950/30">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-neutral-400 mt-2">Everything you need to know about our products</p>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="card-glass rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 pt-0 text-neutral-300 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-400">
            Still have questions?{' '}
            <a
              href="mailto:support@platovalabs.com"
              className="text-cyan-400 hover:underline"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).plausible) {
                  (window as any).plausible('mailto - Click', { props: { location: 'FAQ Section' } });
                }
              }}
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
