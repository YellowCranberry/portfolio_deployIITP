import { faculty } from '../data/facultyData';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={`paper ${styles.content}`}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🏫</span> IIT Patna &middot; Department of Mathematics
          </div>
          
          <h1 className={styles.name}>{faculty.name}</h1>
          <h2 className={styles.role}>{faculty.designation}</h2>
          
          <p className={styles.bio}>{faculty.bio}</p>

          <div className={styles.actions}>
            <button className={`btn btn-primary ${styles.btnPrimary}`} onClick={() => document.getElementById('phd')?.scrollIntoView({ behavior: 'smooth' })}>
              PhD Opportunities &rarr;
            </button>
            <button className={`btn btn-outline ${styles.btnOutline}`} onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}>
              View Publications
            </button>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>65+</span>
              <span className={styles.statLabel}>Publications</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>2000+</span>
              <span className={styles.statLabel}>Citations</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>15+</span>
              <span className={styles.statLabel}>PhD Students</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <img
              src={faculty.photo}
              alt={`${faculty.name}`}
              className={styles.photo}
              loading="eager"
            />
            <div className={styles.floatingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.dot}></div>
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
