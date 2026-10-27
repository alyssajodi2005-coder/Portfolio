import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { MotionProvider, PageTransition } from '@/components/motion';
export const metadata: Metadata = {
  title: { default: 'Alyssa Johnson — Product Design & Engineering', template: '%s — Alyssa Johnson' },
  description: 'Alyssa Johnson is a Computer Science student at CCNY creating thoughtful digital experiences through product design, UI/UX, and frontend development.',
  openGraph: { title: 'Alyssa Johnson — Product Design & Engineering', description: 'Thoughtful digital experiences. Meaningful impact.', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) {
  return <html lang="en"><body id="top"><MotionProvider><a href="#main" className="skip-link">Skip to content</a><Navigation/><PageTransition>{children}</PageTransition><Footer/></MotionProvider></body></html>;
}
