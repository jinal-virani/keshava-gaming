"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [point, setPoint] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPoint({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      setActive(!!target?.closest("a,button,[data-clickable='true']"));
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      animate={{ x: point.x - 14, y: point.y - 14 }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <motion.circle
          cx="14"
          cy="14"
          r="10"
          stroke={active ? "#22d3ee" : "#a855f7"}
          strokeWidth="1.5"
          animate={{ r: active ? 12 : 10 }}
        />
        <path d="M14 1V7M14 21V27M1 14H7M21 14H27" stroke={active ? "#22d3ee" : "#a855f7"} strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}
