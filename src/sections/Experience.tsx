import { jobs } from '../data/content'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">experience</div>
      <div className={styles.list}>
        {jobs.map((job, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.header}>
              <span className={styles.company}>{job.company}</span>
              <span className={styles.period}>{job.period}</span>
            </div>
            <div className={styles.role}>{job.role}</div>
            {job.bullets && (
              <ul className={styles.bullets}>
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}