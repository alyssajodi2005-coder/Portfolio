'use client';
import { motion, useReducedMotion, MotionConfig } from 'motion/react';
import { usePathname } from 'next/navigation';
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={`reveal ${className}`} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: .55, ease: 'easeOut' }}>{children}</motion.div>;
}
export function PageTransition({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const reduce = useReducedMotion();
  return <motion.div className="page-transition" key={path} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3 }}>{children}</motion.div>;
}
