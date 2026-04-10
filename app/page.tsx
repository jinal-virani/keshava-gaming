"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Cpu, Gamepad2 } from "lucide-react";
import { GameCard } from "@/components/GameCard";
import { MagneticButton } from "@/components/MagneticButton";
import { fadeUpChild, pageTransition, staggerParent } from "@/lib/motion";
import Typewriter from "@/components/Typewriter";
import gameData from "@/allGamesdata.json";
import { redirect } from "next/navigation";

const featuredGames = gameData;

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });
  const heroY = useTransform(smoothProgress, [0, 1], [0, -120]);

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="pb-24 md:pb-0">
      <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <motion.div style={{ y: heroY }} className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.35),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.35),transparent_40%),linear-gradient(to_bottom,#020617,#020617)]" />
        <motion.div
          style={{ y: useTransform(smoothProgress, [0, 1], [0, -180]) }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"
        />

        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="relative mx-auto max-w-6xl">
          {/* <motion.p variants={fadeUpChild} className="mb-4 text-cyan-300/80">
            Enter the competitive future
          </motion.p> */}
          <motion.h1 variants={fadeUpChild} className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Why Players<br />with <Typewriter /> keshava
          </motion.h1>
          <motion.p variants={fadeUpChild} className="mt-5 max-w-2xl text-slate-300">
            keshava offers a premium collection of wooden puzzles, 3D puzzles, puzzle board challenges, and connect the dot games.
              Perfect for adults who want to improve focus, memory, and problem-solving skills while having fun.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton onClick={() => redirect("/games")} className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-7 py-4 text-base font-semibold text-white shadow-[0_0_22px_rgba(96,165,250,0.55)]">
              Explore Games
            </MagneticButton>
            {/* <MagneticButton className="rounded-2xl border border-cyan-300/40 bg-slate-900/40 px-7 py-4 text-base text-cyan-200">
              Watch Trailer
            </MagneticButton> */}
          </div>

          {/* <motion.div variants={fadeUpChild} className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2">
              <Gamepad2 className="h-4 w-4 text-cyan-300" /> 120Hz Matchmaking
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2">
              <Cpu className="h-4 w-4 text-purple-300" /> AI Anti-Cheat
            </span>
          </motion.div> */}
        </motion.div>
      </section>

      <section id="our-games" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold">Featured Library</h2>
        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredGames?.map((game, index) => (
            <motion.div key={game?.title} variants={fadeUpChild} 
            // className={index === 0 ? "lg:col-span-2" : ""}
            >
              <GameCard {...game} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* <section id="shop" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-2xl font-bold">Shop</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Browse premium puzzle packs, gifting bundles, and classroom-ready editions curated for every skill level.
          </p>
        </div>
      </section> */}

      {/* <section id="benefits" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {["Boost Critical Thinking", "Build Family Bonding", "Designed for Lifelong Learning"].map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="font-semibold text-cyan-200">{benefit}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section id="insights" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-2xl font-bold">Insights</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Explore expert notes on puzzle-based learning, cognitive development, and creative play at home.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
