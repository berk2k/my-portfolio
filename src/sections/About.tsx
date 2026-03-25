import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <p className={styles.title}>Software Engineer</p>
      <h1 className={styles.name}>Berk Polat</h1>
      <p className={styles.bio}>
        I build <strong>backend systems and infrastructure</strong>: distributed pipelines,
        concurrent runtimes, multi-tenant APIs. Most of my work sits at the intersection
        of correctness and performance — isolation guarantees, backpressure propagation,
        behaviour under contention.
        <br /><br />
        Currently building at <strong>Nullware Digital</strong>. Primarily working in{' '}
        <strong>Go</strong> and <strong>C#</strong>.
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