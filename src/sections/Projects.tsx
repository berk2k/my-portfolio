import { useState } from 'react'
import { projects } from '../data/content'
import styles from './Projects.module.css'

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects">
      <div className="section-label">projects</div>
      {projects.map((p, i) => (
        <div key={i} className={styles.row}>
          <div className={styles.left}>
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
          </div>
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
    </section>
  )
}