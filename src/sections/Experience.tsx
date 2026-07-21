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

            {job.summary && (
              <p className={styles.summary}>{job.summary}</p>
            )}

            {job.featuredWork && (
              <div className={styles.featured}>
                <div className={styles.featuredHeader}>
                  <span className={styles.featuredLabel}>Featured Work</span>

                  <a
                    href={job.featuredWork.url}
                    className={styles.featuredName}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.featuredWork.name} ↗
                  </a>
                </div>

                <p className={styles.featuredTagline}>
                  {job.featuredWork.tagline}
                </p>

                <ul className={styles.bullets}>
                  {job.featuredWork.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

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