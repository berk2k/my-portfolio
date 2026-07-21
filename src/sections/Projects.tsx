import { useState } from 'react'
import { projects, otherProjects } from '../data/content'
import styles from './Projects.module.css'

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="projects">
      <div className="section-label">projects</div>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.name}>{p.name}</div>
            <div className={styles.stack}>{p.stack}</div>
            <p className={styles.desc}>{p.description}</p>
            <button
              className={styles.decisionToggle}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {expanded === i ? 'hide key decision ↑' : 'key decision ↓'}
            </button>
            {expanded === i && (
              <p className={styles.decision}>{p.keyDecision}</p>
            )}
            <div className={styles.linkGroup}>
              {p.github && (
                <a href={p.github} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
                  github ↗
                </a>
              )}
              {p.designDoc && (
                <a href={p.designDoc} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
                  design doc ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className={styles.showMoreBtn}
        onClick={() => setShowMore(v => !v)}
      >
        {showMore ? '− hide projects' : `+ ${otherProjects.length} more projects`}
      </button>

      {showMore && (
        <div className={styles.otherList}>
          {otherProjects.map((p, i) => (
            <div key={i} className={styles.otherItem}>
              <div className={styles.otherTop}>
                <span className={styles.otherName}>{p.name}</span>
                <div className={styles.linkGroup}>
                  {p.github && (
                    <a href={p.github} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
                      github ↗
                    </a>
                  )}
                  {p.designDoc && (
                    <a href={p.designDoc} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
                      design doc ↗
                    </a>
                  )}
                </div>
              </div>
              <p className={styles.otherDesc}>{p.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}