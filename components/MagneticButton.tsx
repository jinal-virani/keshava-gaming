"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?:any
};

export function MagneticButton({ children, className,onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [xy, setXy] = useState({ x: 0, y: 0 });

  const onMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const limit = 16;

    setXy({
      x: Math.max(-limit, Math.min(limit, dx * 0.2)),
      y: Math.max(-limit, Math.min(limit, dy * 0.2)),
    });
  };

  return (
    <motion.button
      ref={ref}
      data-clickable="true"
      onMouseMove={onMove}
      onMouseLeave={() => setXy({ x: 0, y: 0 })}
      animate={{ x: xy.x, y: xy.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      whileTap={{ scale: 0.97 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
