import { faculty } from '../data/facultyData';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`} aria-label="About">
      <div className="paper">
        <div className="section-label">Background</div>

        <div className={styles.grid}>
          {/* Experience - F-pattern left */}
          <div className={styles.col}>
            <h2 className={styles.heading}>Experience</h2>
            <div className={styles.timeline}>
              {faculty.experience.map((exp, i) => (
                <div key={i} className={`${styles.timelineItem} ${i === 0 ? styles.current : ''}`}>
                  <div className={styles.dot} />
                  <div>
                    <div className={styles.period}>{exp.period}</div>
                    <div className={styles.itemTitle}>{exp.role}</div>
                    <div className={styles.itemSub}>{exp.place}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Awards - right */}
          <div className={styles.col}>
            <h2 className={styles.heading}>Education</h2>
            {faculty.education.map((edu, i) => (
              <div key={i} className={styles.eduItem}>
                <div className={styles.itemTitle}>{edu.degree}</div>
                <div className={styles.itemSub}>{edu.place}{edu.focus ? ` — ${edu.focus}` : ''}</div>
              </div>
            ))}

            <h2 className={`${styles.heading} ${styles.mt}`}>Recognition</h2>
            <div className={styles.awards}>
              {faculty.awards.map((a, i) => (
                <div key={i} className={styles.award}>
                  <span className={styles.awardYear}>{a.year}</span>
                  <span className={styles.awardTitle}>{a.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
