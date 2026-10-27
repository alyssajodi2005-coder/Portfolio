'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, Menu, X, Asterisk } from 'lucide-react';
import { profile } from '@/data/projects';
export function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation">
    <Link className="wordmark" href="/" onClick={close} aria-label="Alyssa Johnson home">aj<Asterisk className="wordmark-dot" aria-hidden="true"/></Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-menu" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
    <div id="main-menu" className={`nav-links ${open ? 'is-open' : ''}`}>
      <Link href="/#work" className={path === '/' || path.startsWith('/work') ? 'active' : ''} aria-current={path === '/' || path.startsWith('/work') ? 'page' : undefined} onClick={close}>Work</Link>
      <Link href="/about" className={path === '/about' ? 'active' : ''} aria-current={path === '/about' ? 'page' : undefined} onClick={close}>About</Link>
      <Link href={profile.resume || '/about#resume'} onClick={close}>Resume <ArrowUpRight size={13} /></Link>
      <Link className="contact-nav" href="#contact" onClick={close}>Contact <ArrowUpRight size={14} /></Link>
    </div>
  </nav></header>;
}
