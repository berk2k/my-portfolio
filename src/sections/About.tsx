import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <p className={styles.title}>Software Engineer</p>
      <h1 className={styles.name}>Berk Polat</h1>
      <p className={styles.bio}>
        I'm an <strong>MSc Computer Science & Engineering</strong> student at{' '}
        <strong>TU/e (Eindhoven)</strong>, starting September 2026. I enjoy
        working on problems around <strong>concurrency, reliability,
        backpressure</strong>, and how systems behave under load.
        <br /><br />
      </p>
      <div className={styles.links}>
        <a href="https://github.com/berk2k" className={styles.pill} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href="https://www.linkedin.com/in/berk2k/" className={styles.pill} target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a href="https://medium.com/@berk2k" className={styles.pill} target="_blank" rel="noopener noreferrer">
          medium
        </a>
      </div>
    </section>
  )
}