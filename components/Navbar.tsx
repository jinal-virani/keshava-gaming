"use client";

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, Gamepad2, Home, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/games", label: "Games", icon: Gamepad2 },
  // { href: "/careers", label: "Quest", icon: BriefcaseBusiness },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" data-clickable="true" className="text-lg font-bold tracking-widest text-cyan-300">
            KASHAVA GAME
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-clickable="true"
                className={`rounded-lg px-4 py-2 text-sm transition ${
                  pathname === link.href ? "bg-cyan-400/15 text-cyan-300" : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <MagneticButton onClick={() => redirect('/games')} className="ml-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(59,130,246,0.45)]">
              Join Us
            </MagneticButton>
          </div>

          <button
            data-clickable="true"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobileMenu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="absolute right-0 top-16 w-72 border-l border-white/10 bg-slate-950/95 p-4 shadow-2xl md:hidden"
            >
              <div className="space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base ${
                      pathname === link.href ? "bg-cyan-400/15 text-cyan-300" : "text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
        <div className="grid grid-cols-4 gap-2 rounded-2xl border border-white/15 bg-slate-900/90 p-2 shadow-2xl backdrop-blur-xl">
          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={`dock-${link.href}`}
                href={link.href}
                data-clickable="true"
                className={`flex min-h-14 flex-col items-center justify-center rounded-xl text-xs ${
                  active ? "bg-gradient-to-b from-purple-600 to-blue-500 text-white" : "text-slate-300"
                }`}
              >
                <Icon className="mb-1 h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
