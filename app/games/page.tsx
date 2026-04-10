"use client";

import { motion } from "framer-motion";
import { GameCard } from "@/components/GameCard";
import { fadeUpChild, pageTransition, staggerParent } from "@/lib/motion";
import gameData from "@/allGamesdata.json";

const featuredGames = gameData;

export default function GamesPage() {
  return (
    <motion.section variants={pageTransition} initial="initial" animate="animate" exit="exit" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 pb-28 md:pb-12">
      <h1 className="text-3xl font-bold mb-4">Our Games</h1>
      {/* <p className="mt-2 text-slate-300">A Steam-style catalog with hover video previews, glowing rarity borders, and engine metadata.</p> */}
      {/* <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {games.map((game) => (
          <motion.div key={game.title} variants={fadeUpChild}>
            <GameCard {...game} />
          </motion.div>
        ))}
      </motion.div> */}
       <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 gap-6 lg:grid-cols-1">
                {featuredGames?.map((game, index) => (
                  <motion.div key={game.title} variants={fadeUpChild}>
                    <GameCard {...game} />
                  </motion.div>
                ))}
              </motion.div>
    </motion.section>
  );
}
