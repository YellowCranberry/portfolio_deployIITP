import { faculty } from '../data/facultyData';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`} aria-label="Contact">
      <div className="paper">
        <div className="section-label">Get in Touch</div>
        <h2 className={styles.title}>Contact</h2>

        <div className={styles.grid}>
          <a href={`mailto:${faculty.email}`} className={styles.card}>
            <div className={styles.icon}>✉️</div>
            <div className={styles.cardLabel}>Email</div>
            <div className={styles.cardValue}>{faculty.email}</div>
          </a>
          <div className={styles.card}>
            <div className={styles.icon}>🏢</div>
            <div className={styles.cardLabel}>Office</div>
            <div className={styles.cardValue}>{faculty.office}</div>
          </div>
          <a href={faculty.website} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.icon}>🌐</div>
            <div className={styles.cardLabel}>Personal Website</div>
            <div className={styles.cardValue}>iitp.ac.in/~pksri/</div>
          </a>
          <a href={faculty.scholarProfile} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.icon}>📚</div>
            <div className={styles.cardLabel}>Google Scholar</div>
            <div className={styles.cardValue}>Citation profile & publications</div>
          </a>
        </div>
      </div>
    </section>
  );
}
