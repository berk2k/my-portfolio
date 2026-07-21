import { education } from '../data/content'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education">
      <div className="section-label">education</div>
      <div className={styles.list}>
        {education.map((edu, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.header}>
              <span className={styles.school}>{edu.school}</span>
              <span className={styles.period}>{edu.period}</span>
            </div>
            <div className={styles.degree}>{edu.degree}</div>
            {edu.note && (
              <div className={styles.note}>{edu.note}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}