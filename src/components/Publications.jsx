import { useState, useEffect, useMemo } from 'react';
import {
  publications,
  featuredPublications,
  publicationYears,
  scholarMetrics,
  getImpactTier,
  getImpactBarWidth,
} from '../data/publicationsData';
import styles from './Publications.module.css';

const PER_PAGE = 8;
const TYPE_TABS = [
  { id: 'all', label: 'All' },
  { id: 'journal', label: 'Journal' },
  { id: 'conference', label: 'Conference & Chapters' },
];

function highlightText(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className={styles.highlight}>{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function ImpactRibbon({ pub }) {
  const tier = getImpactTier(pub.impactFactor);
  const width = getImpactBarWidth(pub.impactFactor);
  const hasMetrics = pub.impactFactor != null || pub.h5Index != null || pub.mcq != null;

  return (
    <div className={styles.impactRibbon} title={
      hasMetrics
        ? `IF ${pub.impactFactor ?? '—'} · h5 ${pub.h5Index ?? '—'} · MCQ ${pub.mcq ?? '—'}`
        : 'Impact metrics not yet available'
    }>
      <div
        className={`${styles.impactBar} ${styles[`tier_${tier}`]}`}
        style={{ width: hasMetrics ? `${Math.max(width, 12)}%` : '100%' }}
        data-dashed={!hasMetrics || undefined}
      />
      {pub.impactFactor != null && (
        <span className={`${styles.ifBadge} ${styles[`if_${tier}`]}`}>IF {pub.impactFactor}</span>
      )}
      {pub.status === 'accepted' && <span className={styles.acceptedBadge}>Accepted</span>}
      {pub.citations != null && (
        <span className={styles.citeBadge}>{pub.citations} citations</span>
      )}
    </div>
  );
}

function PubCard({ pub, search, expanded, onToggle, index }) {
  const isExpanded = expanded === pub.id;

  return (
    <article
      className={`${styles.pub} ${isExpanded ? styles.pubExpanded : ''}`}
      style={{ '--i': index }}
    >
      <button type="button" className={styles.pubHeader} onClick={() => onToggle(pub.id)} aria-expanded={isExpanded}>
        <div className={styles.pubHeaderMain}>
          <div className={styles.pubMeta}>
            <span className={styles.pubYear}>{pub.year}</span>
            {pub.tags?.slice(0, 2).map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <h3 className={styles.pubTitle}>{highlightText(pub.title, search)}</h3>
          <ImpactRibbon pub={pub} />
        </div>
        <span className={styles.expandIcon} aria-hidden="true">{isExpanded ? '▾' : '▸'}</span>
      </button>

      {isExpanded && (
        <div className={styles.pubBody}>
          <p className={styles.pubAuthors}>{highlightText(pub.authors, search)}</p>
          <p className={styles.pubJournal}>{highlightText(pub.journal, search)}</p>

          {(pub.impactFactor != null || pub.h5Index != null || pub.mcq != null) && (
            <div className={styles.metricsRow}>
              {pub.impactFactor != null && <span>IF <strong>{pub.impactFactor}</strong></span>}
              {pub.h5Index != null && <span>h5 <strong>{pub.h5Index}</strong></span>}
              {pub.mcq != null && <span>MCQ <strong>{pub.mcq}</strong></span>}
            </div>
          )}

          <div className={styles.actions}>
            {pub.downloadUrl && (
              <a href={pub.downloadUrl} target="_blank" rel="noopener noreferrer" className={styles.actionChip}>
                PDF ↓
              </a>
            )}
            {pub.doi && (
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className={styles.actionChip}>
                DOI
              </a>
            )}
            <a
              href={`https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionChip}
            >
              Scholar
            </a>
          </div>

          {pub.takeaway && (
            <div className={styles.takeawayBox}>
              <div className={styles.takeawayLabel}>Key Takeaway</div>
              <p className={styles.takeawayText}>{pub.takeaway}</p>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default function Publications() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  const [expanded, setExpanded] = useState(null);
  const [count, setCount] = useState(PER_PAGE);

  const filtered = useMemo(() => {
    return publications.filter(p => {
      if (typeFilter === 'journal' && p.type !== 'journal') return false;
      if (typeFilter === 'conference' && p.type === 'journal') return false;
      if (yearFilter !== 'all' && p.year !== Number(yearFilter)) return false;
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.journal.toLowerCase().includes(q) ||
        p.tags?.some(t => t.toLowerCase().includes(q))
      );
    });
  }, [search, typeFilter, yearFilter]);

  const visible = filtered.slice(0, count);

  const toggle = (id) => setExpanded(prev => (prev === id ? null : id));

  useEffect(() => { setCount(PER_PAGE); }, [search, typeFilter, yearFilter]);

  return (
    <section id="publications" className={`section ${styles.section}`} aria-label="Publications">
      <div className="paper">
        <div className="section-label">Academic Output</div>
        <h2 className={styles.title}>Publications & Research Output</h2>
        <p className={styles.subtitle}>
          {publications.length} peer-reviewed papers, proceedings, and book chapters with impact metrics where available.
        </p>

        {featuredPublications.length > 0 && (
          <div className={styles.spotlight}>
            <span className={styles.spotlightLabel}>Featured research</span>
            <div className={styles.spotlightGrid}>
              {featuredPublications.slice(0, 4).map(pub => (
                <button
                  key={pub.id}
                  type="button"
                  className={styles.spotlightCard}
                  onClick={() => {
                    setExpanded(pub.id);
                    document.getElementById(`pub-${pub.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  <span className={styles.spotlightYear}>{pub.year}</span>
                  <span className={styles.spotlightTitle}>{pub.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className={styles.filters}>
          <div className={styles.tabs} role="tablist">
            {TYPE_TABS.map(tab => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={typeFilter === tab.id}
                className={`${styles.tab} ${typeFilter === tab.id ? styles.tabActive : ''}`}
                onClick={() => setTypeFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <select
            className={styles.yearSelect}
            value={yearFilter}
            onChange={e => setYearFilter(e.target.value)}
            aria-label="Filter by year"
          >
            <option value="all">All years</option>
            {publicationYears.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

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
            <button type="button" className={styles.clearBtn} onClick={() => setSearch('')} aria-label="Clear search">×</button>
          )}
        </div>

        {search && <p className={styles.resultCount}>{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>}

        <div className={styles.list}>
          {visible.length === 0 && (
            <div className={styles.empty}>No publications match your filters.</div>
          )}
          {visible.map((pub, i) => (
            <div key={pub.id} id={`pub-${pub.id}`} className={styles.timelineItem}>
              <div className={styles.timelineDot} aria-hidden="true" />
              <PubCard pub={pub} search={search} expanded={expanded} onToggle={toggle} index={i} />
            </div>
          ))}
        </div>

        {visible.length < filtered.length && (
          <div className={styles.loadMore}>
            <button type="button" className="btn btn-ghost" onClick={() => setCount(c => c + PER_PAGE)}>
              Show more ({filtered.length - visible.length} remaining)
            </button>
          </div>
        )}

        <p className={styles.disclaimer}>
          Impact metrics sourced from{' '}
          <a href="https://iitp.ac.in/departments/mathematics/faculty/profile?id=115" target="_blank" rel="noopener noreferrer">
            IIT Patna faculty profile
          </a>
          ; newer publications may not yet have updated IF.
        </p>

        <div className={styles.externalLink}>
          <a href="https://iitp.ac.in/~pksri/" target="_blank" rel="noopener noreferrer">
            View complete list on lab website →
          </a>
          {' · '}
          <a href={scholarMetrics.profileUrl} target="_blank" rel="noopener noreferrer">
            Google Scholar →
          </a>
        </div>
      </div>
    </section>
  );
}
