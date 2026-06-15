import { faculty } from '../data/facultyData';
import styles from './Research.module.css';

const icons = ['🦠', '🌿', '🔬', '📡'];

export default function Research() {
  return (
    <section id="research" className={`section ${styles.section}`} aria-label="Research areas">
      <div className="paper">
        <div className="section-label">Academic Focus</div>
        <h2 className={styles.title}>Research Areas</h2>

        <div className={styles.grid}>
          {faculty.researchAreas.map((area, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.cardIcon}>{icons[i]}</div>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDesc}>{area.desc}</p>
            </article>
          ))}
        </div>

        {/* Memberships - compact */}
        <div className={styles.memberships}>
          <span className={styles.memLabel}>Professional affiliations:</span>
          {faculty.memberships.map((m, i) => (
            <span key={i} className={styles.memChip}>{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
