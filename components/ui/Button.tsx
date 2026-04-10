import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const baseClasses =
  'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan';

const variants = {
  primary:
    'bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-neon hover:scale-[1.02]',
  secondary:
    'glass text-white hover:border-neon-cyan/60 hover:text-neon-cyan'
};

export function Button({
  children,
  href,
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
