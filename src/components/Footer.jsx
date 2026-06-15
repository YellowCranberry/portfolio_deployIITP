import { faculty } from '../data/facultyData';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`paper ${styles.content}`}>
        {/* IIT Patna branding */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.iitpName}>Indian Institute of Technology Patna</div>
            <div className={styles.deptName}>Department of Mathematics</div>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            <div className={styles.colTitle}>Faculty</div>
            <div className={styles.colItem}>{faculty.name}</div>
            <div className={styles.colItem}>{faculty.designation}</div>
            <a href={`mailto:${faculty.email}`} className={styles.colLink}>{faculty.email}</a>
          </div>
          <div className={styles.col}>
            <div className={styles.colTitle}>Quick Links</div>
            <a href={faculty.website} target="_blank" rel="noopener noreferrer" className={styles.colLink}>Personal Website</a>
            <a href={faculty.iitpProfile} target="_blank" rel="noopener noreferrer" className={styles.colLink}>IIT Patna Profile</a>
            <a href="https://iitp.ac.in" target="_blank" rel="noopener noreferrer" className={styles.colLink}>IIT Patna</a>
          </div>
          <div className={styles.col}>
            <div className={styles.colTitle}>Research</div>
            <a href="https://smb.org" target="_blank" rel="noopener noreferrer" className={styles.colLink}>Society for Mathematical Biology</a>
            <a href="http://biomat.org" target="_blank" rel="noopener noreferrer" className={styles.colLink}>BIOMAT Consortium</a>
            <a href="https://ismmacs.org.in/" target="_blank" rel="noopener noreferrer" className={styles.colLink}>ISMMACS</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2025 {faculty.name}. All rights reserved.</span>
          <span className={styles.bottomSub}>Data sourced from <a href={faculty.website} target="_blank" rel="noopener noreferrer">iitp.ac.in/~pksri/</a></span>
        </div>
      </div>
    </footer>
  );
}
