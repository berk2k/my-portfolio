import styles from './OpenSource.module.css'

export default function OpenSource() {
  return (
    <section id="oss">
      <div className="section-label">open source</div>

      <div className={styles.row}>
        <div className={styles.left}>
          <div className={styles.name}>FlowMediator</div>
          <div className={styles.stack}>.NET · MEDIATOR · NUGET</div>

          <p className={styles.desc}>
            A mediator library for .NET that explicitly separates{' '}
            <code>SendAsync</code> (request/response) from{' '}
            <code>PublishAsync</code> (event broadcasting). The motivation was
            a recurring pattern in .NET applications where command/query flows
            and event handling get tangled through a single dispatch path —
            the separation makes the intent visible in the type system.
            Published as a NuGet package.
          </p>
        </div>

        <div className={styles.linkGroup}>
          <a
            href="https://github.com/berk2k/FlowMediator"
            className={styles.linkBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            github ↗
          </a>

          <a
            href="https://www.nuget.org/packages/FlowMediator"
            className={styles.linkBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            nuget ↗
          </a>
        </div>
      </div>
    </section>
  )
}