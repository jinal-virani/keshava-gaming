"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Gamepad2, Swords } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { redirect, usePathname } from "next/navigation";

type GameCardProps = {
  title: string;
  // genre: string;
  imageUrl: string;
  description: string;
  links: {
    ios: string;
    android: string;
  }
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function GameCard({
  title,
  // genre,
  imageUrl,
  description,
  links
}: GameCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();


  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setRotate({
      y: clamp((px - 0.5) * 16, -8, 8),
      x: clamp((0.5 - py) * 16, -8, 8),
    });
  };

  const onEnter = async () => {
    // setHovered(true);
  };

  const onLeave = () => {
    // setHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.article
      // onPointerMove={onPointerMove}
      // onPointerEnter={onEnter}
      // onPointerLeave={onLeave}
      className="group relative overflow-hidden rounded-2xl border border-cyan-400/40 bg-slate-900/70 p-4 shadow-[0_0_28px_rgba(6,182,212,0.26)] backdrop-blur-xl"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-500/20" />
      {pathname == "/games" ?
        <motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[400px] w-full p-4">

            {/* Part 1: Image Section */}
            <div className="relative group overflow-hidden rounded-2xl bg-slate-900 aspect-square md:aspect-auto md:h-50">
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              {/* Optional Overlay for Gaming look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Part 2: Description Section (The 3D part) */}
            <div className="flex flex-col justify-center space-y-4">
              <div
                className="relative space-y-3"
                style={{ transform: "perspective(1000px) translateZ(30px)" }}
              >
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {title}
                  </h2>
                  <span className="px-3 py-1 text-xs font-mono bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                    NEW
                  </span>
                </div>

                <p className="text-slate-400 text-sm md:text-base">
                  {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button className="flex-1 py-3 px-6">
                    <a href={links.ios} target="_blank" rel="noopener noreferrer">
                      <img src="/appstore.png" alt="Download on App Store" />
                    </a>
                  </button>
                  <button className="flex-1 py-3 px-6">
                    <a href={links.android} target="_blank" rel="noopener noreferrer">
                      <img src="/googleplay.png" alt="Get it on Google Play" />
                    </a>
                  </button>
                </div>
              </div>
            </div>

          </div>


        </motion.div>
        :
        <>
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={imageUrl}
              alt={title}
              className={`h-44 w-full object-cover transition duration-300`}
            />
          </div>

          <div className="relative mt-4 space-y-3" style={{ transform: "translateZ(30px)" }}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
              </div>
              <Swords className="h-5 w-5 text-fuchsia-300" />
            </div>
            <span className="game-card-desc rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-fuchsia-200">
              {description}
            </span>
            <MagneticButton onClick={() => redirect('/games')} className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-3 text-base font-semibold text-white shadow-[0_0_18px_rgba(124,58,237,0.6)]">
              Play Now
            </MagneticButton>
          </div>
        </>
      }

    </motion.article>
  );
}
