import styles from './Writing.module.css'

export default function Writing() {
  return (
    <section id="writing">
      <div className="section-label">writing</div>

      <p className={styles.note}>
        I am writing about Backend and systems engineering on Medium{' '}
      </p>

      <div className={styles.row}>
        <a
          href="https://medium.com/@berk2k"
          className={styles.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          All articles on Medium
        </a>
      </div>
    </section>
  )
}