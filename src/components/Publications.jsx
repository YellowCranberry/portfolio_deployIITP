import { useState, useRef, useEffect } from 'react';
import { faculty } from '../data/facultyData';
import styles from './Publications.module.css';

const PER_PAGE = 5;

export default function Publications() {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);
  const [loading, setLoading] = useState(null);
  const [count, setCount] = useState(PER_PAGE);

  const filtered = faculty.publications.filter(p => {
    if (!search) return true;
    const q = search.toLowerCase();
    return p.title.toLowerCase().includes(q) ||
      p.authors.toLowerCase().includes(q) ||
      p.journal.toLowerCase().includes(q) ||
      p.tags?.some(t => t.toLowerCase().includes(q));
  });

  const visible = filtered.slice(0, count);

  const toggle = (id) => {
    if (expanded === id) {
      setExpanded(null);
      return;
    }
    setLoading(id);
    setTimeout(() => {
      setLoading(null);
      setExpanded(id);
    }, 600);
  };

  useEffect(() => { setCount(PER_PAGE); }, [search]);

  return (
    <section id="publications" className={`section ${styles.section}`} aria-label="Publications">
      <div className="paper">
        <div className="section-label">Academic Output</div>
        <h2 className={styles.title}>Selected Publications</h2>
        <p className={styles.subtitle}>
          65+ peer-reviewed papers. Each includes a key takeaway explaining why the finding matters.
        </p>

        {/* Search */}
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon} aria-hidden="true">&#x1F50D;</span>
          <input
            type="search"
            className={styles.search}
            placeholder="Search by title, author, journal, or topic…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search publications"
          />
          {search && (
            <button className={styles.clearBtn} onClick={() => setSearch('')} aria-label="Clear search">×</button>
          )}
        </div>

        {search && <p className={styles.resultCount}>{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>}

        {/* List */}
        <div className={styles.list}>
          {visible.length === 0 && (
            <div className={styles.empty}>No publications match your search.</div>
          )}
          {visible.map(pub => (
            <article key={pub.id} className={`${styles.pub} ${expanded === pub.id ? styles.pubExpanded : ''}`}>
              <div className={styles.pubMain}>
                <div className={styles.pubMeta}>
                  <span className={styles.pubYear}>{pub.year}</span>
                  {pub.tags?.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <h3 className={styles.pubTitle}>{pub.title}</h3>
                <p className={styles.pubAuthors}>{pub.authors}</p>
                <p className={styles.pubJournal}>{pub.journal}</p>
              </div>

              <button className={styles.takeawayBtn} onClick={() => toggle(pub.id)} aria-expanded={expanded === pub.id}>
                {expanded === pub.id ? '▾ Hide Takeaway' : '▸ Key Takeaway'}
              </button>

              {loading === pub.id && (
                <div className={styles.takeawayBox}>
                  <div className={`skeleton ${styles.skelLine}`} />
                  <div className={`skeleton ${styles.skelLine}`} style={{ width: '85%' }} />
                  <div className={`skeleton ${styles.skelLine}`} style={{ width: '70%' }} />
                </div>
              )}

              {expanded === pub.id && loading !== pub.id && (
                <div className={styles.takeawayBox}>
                  <div className={styles.takeawayLabel}>Key Takeaway</div>
                  <p className={styles.takeawayText}>{pub.takeaway}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        {visible.length < filtered.length && (
          <div className={styles.loadMore}>
            <button className="btn btn-ghost" onClick={() => setCount(c => c + PER_PAGE)}>
              Show more ({filtered.length - visible.length} remaining)
            </button>
          </div>
        )}

        <div className={styles.externalLink}>
          <a href="https://iitp.ac.in/~pksri/" target="_blank" rel="noopener noreferrer">
            View complete publication list →
          </a>
        </div>
      </div>
    </section>
  );
}
