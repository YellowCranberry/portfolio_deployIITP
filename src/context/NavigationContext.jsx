import { createContext, useCallback, useContext, useRef, useState } from 'react';
import FormulaMorphTransition from '../components/FormulaMorphTransition';

const NavigationContext = createContext(null);

const SECTION_META = {
  '#about': { title: 'About', formula: '∫ f(x) dx' },
  '#research': { title: 'Research Areas', formula: '∂u/∂t = D∇²u' },
  '#scholar': { title: 'Scholar Impact', formula: '∇ · F = ρ' },
  '#publications': { title: 'Publications', formula: 'Σ' },
  '#phd': { title: 'PhD Opportunities', formula: 'π' },
  '#contact': { title: 'Contact', formula: 'e^{iπ} + 1 = 0' },
  '#': { title: 'Home', formula: '∑' },
};

const FORMULA_POOL = [
  '∫ f(x) dx',
  'Σ',
  'π',
  'e^{iπ} + 1 = 0',
  'lim_{n→∞}',
  '∂²u/∂t² = c²∇²u',
];

function resolveTarget(href) {
  if (!href || href === '#') return '#hero';
  return href.startsWith('#') ? href : `#${href}`;
}

function scrollToTarget(target) {
  if (target === '#hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function NavigationProvider({ children }) {
  const [overlay, setOverlay] = useState(null);
  const busyRef = useRef(false);

  const navigateToSection = useCallback((href, e) => {
    e?.preventDefault?.();

    const target = resolveTarget(href);
    const meta = SECTION_META[target] || {
      title: target.replace('#', '').replace(/^\w/, c => c.toUpperCase()),
      formula: FORMULA_POOL[Math.floor(Math.random() * FORMULA_POOL.length)],
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scrollToTarget(target);
      return;
    }

    if (busyRef.current) return;
    busyRef.current = true;

    setOverlay({
      key: Date.now(),
      formula: meta.formula,
      title: meta.title,
      target,
    });
  }, []);

  const handleComplete = useCallback(() => {
    busyRef.current = false;
    setOverlay(null);
  }, []);

  const handleScroll = useCallback((target) => {
    scrollToTarget(target);
  }, []);

  return (
    <NavigationContext.Provider value={{ navigateToSection }}>
      {children}
      {overlay && (
        <FormulaMorphTransition
          key={overlay.key}
          formula={overlay.formula}
          title={overlay.title}
          target={overlay.target}
          onScroll={handleScroll}
          onComplete={handleComplete}
        />
      )}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}
