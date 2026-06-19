import { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import styles from './Nav.module.css';

const links = [
  { href: '#about', label: 'About', icon: <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
  { href: '#research', label: 'Research', icon: <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> },
  { href: '#publications', label: 'Publications', icon: <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
  { href: '#contact', label: 'Contact', icon: <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
];

export default function Nav() {
  const { navigateToSection } = useNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => navigateToSection(href, e);

  return (
    <>
      {/* Desktop Pill Nav */}
      <header className={`${styles.headerDesktop} ${scrolled ? styles.scrolled : ''}`} role="banner">
        <nav className={styles.navPill} aria-label="Main navigation">
          <a href="#" className={styles.logo} onClick={(e) => go(e, '#')} aria-label="Home">
            <img src="/iitp-logo.svg" alt="" className={styles.logoImg} width={28} height={28} />
          </a>
          <div className={styles.divider} />
          <ul className={styles.links}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className={styles.link} onClick={(e) => go(e, l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className={styles.divider} />
          <a href="#contact" className={styles.btnStart} onClick={(e) => go(e, '#contact')}>
            Get in touch &rarr;
          </a>
        </nav>
      </header>

      {/* Mobile Floating Dock */}
      <nav className={styles.floatingDock} aria-label="Mobile navigation">
        <ul className={styles.dockList}>
          <li
            className={styles.dockItem}
            onMouseEnter={() => setHoveredIndex(-1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href="#" onClick={(e) => go(e, '#')} className={styles.dockLink} aria-label="Home">
              <svg viewBox="0 0 24 24" fill="none" className={styles.dockIcon}>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
            {hoveredIndex === -1 && <span className={styles.tooltip}>Home</span>}
          </li>
          {links.map((l, idx) => (
            <li
              key={l.href}
              className={styles.dockItem}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={l.href} onClick={(e) => go(e, l.href)} className={styles.dockLink} aria-label={l.label}>
                <svg viewBox="0 0 24 24" fill="none" className={styles.dockIcon}>
                  {l.icon}
                </svg>
              </a>
              {hoveredIndex === idx && <span className={styles.tooltip}>{l.label}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
