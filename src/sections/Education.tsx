import { education } from '../data/content'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education">
      <div className="section-label">education</div>
      <div className={styles.item}>
        <div className={styles.header}>
          <span className={styles.school}>{education.school}</span>
          <span className={styles.period}>{education.period}</span>
        </div>
        <div className={styles.degree}>{education.degree}</div>
        <div className={styles.note}>{education.note}</div>
      </div>
    </section>
  )
}