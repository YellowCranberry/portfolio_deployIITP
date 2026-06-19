import { useEffect, useState } from 'react';
import styles from './FormulaMorphTransition.module.css';

function FormulaDisplay({ formula }) {
  if (formula === 'e^{iπ} + 1 = 0') {
    return (
      <span className={styles.formulaText}>
        e<sup>iπ</sup> + 1 = 0
      </span>
    );
  }
  if (formula === '∫ f(x) dx') {
    return (
      <span className={styles.formulaText}>
        ∫ f(x) dx
      </span>
    );
  }
  return <span className={styles.formulaText}>{formula}</span>;
}

export default function FormulaMorphTransition({ formula, title, target, onScroll, onComplete }) {
  const [phase, setPhase] = useState('enter');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('morph'), 420),
      setTimeout(() => setPhase('title'), 880),
      setTimeout(() => {
        setPhase('scroll');
        onScroll(target);
      }, 960),
      setTimeout(() => setPhase('exit'), 1750),
      setTimeout(() => onComplete(), 2150),
    ];
    return () => timers.forEach(clearTimeout);
  }, [target, onScroll, onComplete]);

  return (
    <div
      className={`${styles.overlay} ${styles[phase]}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className={styles.backdrop} />
      <div className={styles.stage}>
        <div className={`${styles.formulaLayer} ${phase === 'morph' || phase === 'title' || phase === 'scroll' || phase === 'exit' ? styles.formulaOut : ''}`}>
          <FormulaDisplay formula={formula} />
        </div>
        <div className={`${styles.titleLayer} ${phase === 'title' || phase === 'scroll' ? styles.titleIn : ''} ${phase === 'exit' ? styles.titleOut : ''}`}>
          <span className={styles.titleText}>{title}</span>
        </div>
        <div className={styles.decorLine} aria-hidden="true" />
      </div>
    </div>
  );
}
