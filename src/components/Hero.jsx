import { useEffect, useRef, useState } from 'react';
import { faculty } from '../data/facultyData';
import { scholarMetrics, publicationCount } from '../data/publicationsData';
import styles from './Hero.module.css';

const IITP_LOGO = '/iitp-logo.svg';

function useCountUp(target, duration = 1200, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return value;
}

export default function Hero() {
  const statsRef = useRef(null);
  const badgeRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [magnetic, setMagnetic] = useState({ x: 0, y: 0 });

  const pubCount = useCountUp(publicationCount, 1200, statsVisible);
  const citeCount = useCountUp(scholarMetrics.totalCitations, 1400, statsVisible);
  const phdCount = useCountUp(scholarMetrics.phdAlumni, 1000, statsVisible);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onBadgeMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 900) return;
    const rect = badgeRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    setMagnetic({ x: Math.max(-8, Math.min(8, dx * 12)), y: Math.max(-8, Math.min(8, dy * 12)) });
  };

  const resetMagnetic = () => setMagnetic({ x: 0, y: 0 });

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.meshBg} aria-hidden="true" />
      <div className={`paper ${styles.content}`}>
        <div className={styles.textContent}>
          <a
            ref={badgeRef}
            href="https://www.iitp.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.badge}
            style={{ transform: `translate(${magnetic.x}px, ${magnetic.y}px)` }}
            onMouseMove={onBadgeMove}
            onMouseLeave={resetMagnetic}
          >
            <img src={IITP_LOGO} alt="" className={styles.badgeLogo} width={36} height={36} />
            <span>IIT Patna &middot; Department of Mathematics</span>
          </a>

          <h1 className={styles.name}>{faculty.name}</h1>
          <h2 className={styles.role}>{faculty.designation}</h2>
          <p className={styles.bio}>{faculty.bio}</p>

          <div className={styles.actions}>
            <button type="button" className={`btn btn-primary ${styles.btnPrimary}`} onClick={() => document.getElementById('phd')?.scrollIntoView({ behavior: 'smooth' })}>
              PhD Opportunities &rarr;
            </button>
            <button type="button" className={`btn btn-outline ${styles.btnOutline}`} onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}>
              View Publications
            </button>
            <a href={scholarMetrics.profileUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-ghost ${styles.btnScholar}`}>
              Google Scholar &rarr;
            </a>
          </div>

          <div className={styles.stats} ref={statsRef}>
            <div className={styles.stat}>
              <span className={styles.statNum}>{pubCount}+</span>
              <span className={styles.statLabel}>Publications</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{citeCount}+</span>
              <span className={styles.statLabel}>Citations</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{phdCount}+</span>
              <span className={styles.statLabel}>PhD Alumni</span>
            </div>
          </div>

          <div className={styles.keywords}>
            {scholarMetrics.keywords.map(kw => (
              <span key={kw} className={styles.keyword}>{kw}</span>
            ))}
          </div>
        </div>

        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <img src={faculty.photo} alt={faculty.name} className={styles.photo} loading="eager" />
            <div className={styles.floatingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.dot} />
                <span className={styles.cardTitle}>Current Focus</span>
              </div>
              <p className={styles.cardText}>Mathematical Epidemiology & Ecology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
