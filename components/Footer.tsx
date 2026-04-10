"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Our Games", href: "/#our-games" },
  { label: "Insights", href: "/#insights" },
];

const legalLinks = ["Terms and Conditions", "Privacy Policy"] as const;

type LegalKey = (typeof legalLinks)[number] | null;

const legalContent: Record<Exclude<LegalKey, null>, { title: string; body: string }> = {
  "Terms and Conditions": {
    title: "Terms and Conditions",
    body: "These Terms govern your use of Keshava website and purchase of puzzles. You must be 18+ years old. We reserve rights to update terms. For full details on shipping, payments, intellectual property, limitation of liability, and governing law (India), see the complete terms.",
  },
  "Privacy Policy": {
    title: "Privacy Policy",
    body: "Keshava respects your privacy in line with the Digital Personal Data Protection (DPDP) Act. We collect minimal personal data (name, email, shipping address) for order processing and newsletter. We do not sell data. You can request access, correction, or deletion of your data. Cookies are used for better experience. Last updated: April 2026.",
  },
};

export function Footer() {
  const [activeLegal, setActiveLegal] = useState<LegalKey>(null);

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <footer className="relative border-t border-slate-800/80 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Keshava
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white">Playful minds. Purposeful puzzles.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Keshava designs screen-free puzzle experiences that build curiosity, focus, and family connection.
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-cyan-300" /> Surat, Gujarat, India
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Quick Links</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link className="transition hover:text-cyan-300" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Legal</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {legalLinks.map((item) => (
                  <li key={item}>
                    <button type="button" className="transition hover:text-cyan-300" onClick={() => setActiveLegal(item)}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <a className="inline-flex items-center gap-2 transition hover:text-cyan-300" href="mailto:hello@keshava.in">
                    <Mail className="h-4 w-4" /> hello@keshava.in
                  </a>
                </li>
                <li className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +91-XXXXXXXXXX
                </li>
                <li>4th Floor, Puzzle House, Ghod Dod Road, Surat, Gujarat, India</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Stay in the loop</h3>
                <p className="mt-1 text-sm text-slate-300">Get puzzle launch updates, educational tips, and exclusive offers.</p>
              </div>
              <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_18px_rgba(59,130,246,0.45)]"
                >
                  Subscribe
                </button>
              </form>
              <div className="flex items-center gap-3 text-slate-300">
                <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 p-2 transition hover:border-cyan-300 hover:text-cyan-200">
                  <Instagram className="h-4 w-4" />
                </a>
                <a aria-label="YouTube" href="https://youtube.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 p-2 transition hover:border-cyan-300 hover:text-cyan-200">
                  <Youtube className="h-4 w-4" />
                </a>
                <a aria-label="X" href="https://x.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 p-2 text-xs font-bold transition hover:border-cyan-300 hover:text-cyan-200">
                  X
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800/80 pt-6 flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center  text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Keshava. All Rights Reserved. | Made with passion in Surat, Gujarat, India</p>
            </div>
          </div>
        </div>
      </footer>

      {activeLegal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl shadow-blue-900/20">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{legalContent[activeLegal].title}</h3>
              <button
                type="button"
                onClick={() => setActiveLegal(null)}
                className="rounded-full border border-slate-600 px-3 py-1 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">{legalContent[activeLegal].body}</p>
          </div>
        </div>
      )}
    </>
  );
}
