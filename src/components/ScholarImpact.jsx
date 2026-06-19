import { scholarMetrics, yearDistribution, publicationCount } from '../data/publicationsData';
import styles from './ScholarImpact.module.css';

const maxYearCount = Math.max(...yearDistribution.map(y => y.count), 1);

export default function ScholarImpact() {
  const topPaper = scholarMetrics.topCited[0];
  const maxCitations = scholarMetrics.topCited[0]?.citations || 1;

  return (
    <section id="scholar" className={`section ${styles.section}`} aria-label="Research impact">
      <div className="paper">
        <div className="section-label">Research Footprint</div>
        <h2 className={styles.title}>Scholar Impact</h2>
        <p className={styles.subtitle}>
          Citation metrics and publication activity from Google Scholar and IIT Patna faculty profile.
        </p>

        <div className={styles.dashboard}>
          <div className={styles.metrics}>
            <div className={styles.metricTile}>
              <span className={styles.metricNum}>{scholarMetrics.totalCitations.toLocaleString()}+</span>
              <span className={styles.metricLabel}>Total Citations</span>
            </div>
            <div className={styles.metricTile}>
              <span className={styles.metricNum}>{publicationCount}</span>
              <span className={styles.metricLabel}>Publications</span>
            </div>
            <div className={`${styles.metricTile} ${styles.metricTileWide}`}>
              <span className={styles.metricLabel}>Most Cited</span>
              <span className={styles.topTitle}>{topPaper?.title}</span>
              <span className={styles.topCite}>{topPaper?.citations} citations</span>
            </div>
          </div>

          <div className={styles.vizCol}>
            <div className={styles.chartWrap}>
              <span className={styles.chartLabel}>Publications by year</span>
              <div className={styles.barChart} role="img" aria-label="Publication count by year">
                {yearDistribution.slice(0, 12).map(({ year, count }) => (
                  <div key={year} className={styles.barCol}>
                    <div
                      className={styles.bar}
                      style={{ height: `${(count / maxYearCount) * 100}%` }}
                      title={`${year}: ${count} papers`}
                    />
                    <span className={styles.barYear}>{String(year).slice(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.constellation} aria-hidden="true">
              <svg viewBox="0 0 320 120" className={styles.constellationSvg}>
                <line x1="160" y1="60" x2="60" y2="30" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="160" y1="60" x2="120" y2="25" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="160" y1="60" x2="200" y2="28" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="160" y1="60" x2="260" y2="35" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="160" y1="60" x2="280" y2="75" stroke="#e5e7eb" strokeWidth="1" />
                <circle cx="160" cy="60" r="14" fill="#1e3a5f" opacity="0.9" />
                {scholarMetrics.topCited.map((p, i) => {
                  const positions = [
                    { cx: 60, cy: 30 },
                    { cx: 120, cy: 25 },
                    { cx: 200, cy: 28 },
                    { cx: 260, cy: 35 },
                    { cx: 280, cy: 75 },
                  ];
                  const pos = positions[i];
                  const r = 8 + (p.citations / maxCitations) * 18;
                  return (
                    <circle
                      key={p.title}
                      cx={pos.cx}
                      cy={pos.cy}
                      r={r}
                      fill="#e67e22"
                      opacity={0.35 + (p.citations / maxCitations) * 0.55}
                    />
                  );
                })}
              </svg>
              <span className={styles.constellationCaption}>Citation constellation — node size ∝ citations</span>
            </div>
          </div>
        </div>

        <div className={styles.topCitedRow}>
          {scholarMetrics.topCited.map(p => (
            <article key={p.title} className={styles.citeCard}>
              <span className={styles.citeCount}>{p.citations}</span>
              <span className={styles.citeYear}>{p.year}</span>
              <p className={styles.citeTitle}>{p.title}</p>
            </article>
          ))}
        </div>

        <div className={styles.scholarLink}>
          <a href={scholarMetrics.profileUrl} target="_blank" rel="noopener noreferrer">
            View full Google Scholar profile &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
