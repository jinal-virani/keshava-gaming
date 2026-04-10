"use client";

import { useEffect } from "react";

export function SmoothScrollProvider() {
  useEffect(() => {
    let raf = 0;
    let current = window.scrollY;
    let target = window.scrollY;

    const onScroll = () => {
      target = window.scrollY;
    };

    const tick = () => {
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.1) {
        current = target;
      }
      document.documentElement.style.setProperty("--scroll-y", String(current));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      document.documentElement.style.removeProperty("--scroll-y");
    };
  }, []);

  return null;
}
