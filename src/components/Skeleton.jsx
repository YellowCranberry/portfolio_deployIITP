import styles from './Skeleton.module.css';

export default function SkeletonLoader() {
  return (
    <div className={styles.wrap} aria-label="Loading content" role="status">
      {/* Nav skeleton */}
      <div className={styles.nav}>
        <div className={`skeleton ${styles.navLogo}`} />
        <div className={styles.navLinks}>
          <div className={`skeleton ${styles.navLink}`} />
          <div className={`skeleton ${styles.navLink}`} />
          <div className={`skeleton ${styles.navLink}`} />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={`skeleton ${styles.badge}`} />
          <div className={`skeleton ${styles.nameL}`} />
          <div className={`skeleton ${styles.nameL2}`} />
          <div className={`skeleton ${styles.roleL}`} />
          <div className={`skeleton ${styles.bioL}`} />
          <div className={`skeleton ${styles.bioL}`} style={{ width: '80%' }} />
          <div className={styles.statsRow}>
            <div className={`skeleton ${styles.statBlock}`} />
            <div className={`skeleton ${styles.statBlock}`} />
            <div className={`skeleton ${styles.statBlock}`} />
          </div>
          <div className={styles.btns}>
            <div className={`skeleton ${styles.btn}`} />
            <div className={`skeleton ${styles.btn}`} />
          </div>
        </div>
        <div className={`skeleton ${styles.photoSkel}`} />
      </div>

      <span className={styles.srOnly}>Loading portfolio…</span>
    </div>
  );
}
