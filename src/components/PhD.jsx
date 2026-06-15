import { faculty } from '../data/facultyData';
import styles from './PhD.module.css';

export default function PhD() {
  const { phdInfo, students } = faculty;

  return (
    <section id="phd" className={`section ${styles.section}`} aria-label="PhD Opportunities">
      <div className="paper">
        <div className="section-label">Opportunities</div>

        {/* Hero Banner — F-pattern: big headline top-left */}
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <h2 className={styles.bannerTitle}>{phdInfo.headline}</h2>
            <p className={styles.bannerDesc}>{phdInfo.description}</p>
            <a href="mailto:pksri@iitp.ac.in?subject=PhD%20Inquiry%20-%20Mathematical%20Modeling" className="btn btn-primary">
              ✉️ Apply via Email
            </a>
          </div>
          <div className={styles.bannerVisual} aria-hidden="true">
            <div className={styles.mathSymbol}>∑</div>
          </div>
        </div>

        {/* Requirements + Research Areas */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Eligibility</h3>
            <ul className={styles.reqList}>
              {phdInfo.requirements.map((r, i) => (
                <li key={i} className={styles.reqItem}>
                  <span className={styles.check} aria-hidden="true">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Current Research Openings</h3>
            <ul className={styles.areaList}>
              {phdInfo.areas.map((a, i) => (
                <li key={i} className={styles.areaItem}>{a}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Students — simple compact list, no bloat */}
        <div className={styles.studentsBlock}>
          <h3 className={styles.studentsTitle}>Research Group</h3>
          <div className={styles.studentsCols}>
            <div className={styles.studentsCol}>
              <div className={styles.colLabel}>Ongoing ({students.ongoing.length})</div>
              <table className={styles.table}>
                <tbody>
                  {students.ongoing.map((s, i) => (
                    <tr key={i}>
                      <td className={styles.tdName}>{s.name}</td>
                      <td className={styles.tdArea}>{s.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.studentsCol}>
              <div className={styles.colLabel}>Graduated ({students.graduated.length})</div>
              <table className={styles.table}>
                <tbody>
                  {students.graduated.map((s, i) => (
                    <tr key={i}>
                      <td className={styles.tdName}>{s.name}</td>
                      <td className={styles.tdArea}>{s.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
