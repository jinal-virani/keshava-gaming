'use client'; // This must be a Client Component
import { useEffect, useRef } from 'react';

export default function Typewriter() {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const words = ['passion', 'love', 'purpose', 'joy'];
    let wordIndex = 0, charIndex = 0, isDeleting = false;
    const el = typewriterRef.current;
    if (!el) return;

    function typeWrite() {
      const word = words[wordIndex];
      if (el) {
        el.textContent = isDeleting ? word.slice(0, charIndex--) : word.slice(0, charIndex++);
      }
      let delay = isDeleting ? 50 : 80;
      if (!isDeleting && charIndex === word.length + 1) { 
        delay = 2000; isDeleting = true; 
      } else if (isDeleting && charIndex < 0) { 
        isDeleting = false; charIndex = 0; wordIndex = (wordIndex + 1) % words.length; delay = 300; 
      }
      setTimeout(typeWrite, delay);
    }
    typeWrite();
  }, []);

  return <><span className="accent" ref={typewriterRef} /><span className="cursor" /></>;
}