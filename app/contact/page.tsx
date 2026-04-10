import type { Metadata } from 'next';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/MagneticButton';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Keshwa Games Studio for partnerships and project inquiries.'
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">Contact Us</h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <article className="glass rounded-2xl p-8 border border-cyan-400/30">
          <h2 className="text-2xl font-bold text-cyan-300/80">Send a Message</h2>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              required
              placeholder="Name"
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3"
            />
            <textarea
              required
              rows={5}
              placeholder="Message"
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3"
            />
             <MagneticButton className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-3 text-base font-semibold text-white shadow-[0_0_18px_rgba(124,58,237,0.6)]">
              Send Inquiry
              </MagneticButton>
          </form>
        </article>

        <article className="glass rounded-2xl p-8 border border-cyan-400/30">
          <h2 className="text-2xl font-bold">Studio Info</h2>
          <p className="mt-4 text-sm text-slate-300">Email: info@keshwagames.com</p>
          {/* <p className="text-sm text-slate-300">Phone: +1 (512) 555-0190</p>
          <p className="text-sm text-slate-300">Address: 240 Neon District, Austin, TX</p> */}

          <div className="mt-5 flex gap-4 text-neon-cyan">
            <Instagram  color='rgb(103 232 249 / 0.8)'/>
            <Linkedin color='rgb(103 232 249 / 0.8)'/>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-white/15">
            <iframe
              title="Keshwa Games Studio Map"
              src="https://www.google.com/maps?q=Austin%2C%20TX&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
