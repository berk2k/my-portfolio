export interface Project {
  name: string
  stack: string
  description: string
  keyDecision: string
  github?: string
  designDoc?: string
}

export interface Job {
  company: string
  period: string
  role: string
  bullets?: string[]
}

export const projects: Project[] = [
  {
    name: 'In-Memory Message Broker',
    stack: 'Go · Feb – Mar 2026',
    description:
      'A message broker built to deeply understand delivery semantics: lease-based processing, visibility timeouts, at-least-once guarantees, and DLQ isolation. The broker implements a 3-state message lifecycle (Ready → Inflight → Done) with crash recovery built in from the start.',
    keyDecision:
      'Chose sync.Cond over channels for the dequeue path. Channels work cleanly for one-condition waiting; cond.Wait() handles the multi-condition case (ready queue non-empty AND prefetch slots available AND not shutting down) without awkward select gymnastics. Profiling with pprof confirmed mutex acquisition was 0.6% of CPU time — the bottleneck was gRPC\'s network I/O layer, not the lock.',
    github: 'https://github.com/berk2k/mini-go-broker',
    designDoc: 'https://github.com/berk2k/mini-go-broker/blob/main/DESIGN.md',
  },
  {
    name: 'Distributed Video Transcoding Pipeline',
    stack: 'Go · Mar 2026',
    description:
      'A distributed pipeline for video transcoding over SQS and FFmpeg. The core challenge was correctness: SQS redelivers a message if its visibility timeout expires, but FFmpeg jobs take variable time. A goroutine per job extends the lease on a fixed interval, keeping the message invisible to SQS until the job completes or fails cleanly.',
    keyDecision:
      'Scaling from 1 to 4 workers cut max end-to-end latency by 32% — not because FFmpeg ran faster (it\'s CPU-bound and hit its ceiling regardless of worker count), but because jobs stopped waiting in the queue. The constraint was correctly identified through benchmarking rather than assumed.',
    github: 'https://github.com/berk2k/transcodeX',
    designDoc: 'https://github.com/berk2k/transcodeX/blob/master/DESIGN.md',
  },
  {
    name: 'Multi-Tenant Booking Backend',
    stack: '.NET · Jul 2025 – Jan 2026',
    description:
      'A booking system where correctness under concurrent writes was the central problem. Double-booking is a classic race condition: two requests read availability, both see a free slot, both write a booking. An advisory lock is one solution, but it puts the correctness guarantee in the application layer — any code path that skips the lock breaks the invariant.',
    keyDecision:
      'Used PostgreSQL Serializable isolation instead of advisory locks. At Serializable, the database detects conflicting concurrent transactions and aborts one — the guarantee holds regardless of how the application is written. Multi-tenancy uses a shared-schema approach with TenantId-based row isolation, verified to block cross-tenant data access under concurrent injection attempts.',
    designDoc: 'https://booking-backend-docs.netlify.app/',
  },
  {
    name: 'Pressure Lab',
    stack: 'Go · 2025',
    description:
      'A learning lab studying how a network-facing backend behaves under sustained load. The central question: where does pressure accumulate, and how does it propagate upstream? Two backpressure forms were compared directly — implicit (latency-based) and explicit (HTTP 429). The implicit form was the more dangerous one: the system appeared healthy from the outside while goroutines stacked and connections held open internally.',
    keyDecision:
      'Rate limiting and capacity are not interchangeable. Raising the rate limit without scaling workers only accelerates queue saturation. The lab makes this observable: set rate limit to 50 RPS with a 2 RPS worker, watch the queue fill in seconds. Proactive rate limiting at the boundary keeps workers at a steady state; reactive backpressure only kicks in after the damage is done.',
    github: 'https://github.com/berk2k/pressure-lab',
    designDoc: 'https://github.com/berk2k/pressure-lab/blob/main/DESIGN.md',
  },
  {
    name: 'High-Throughput Log Pipeline',
    stack: 'Go · 2025',
    description:
      'A log processing pipeline modelled after Logstash, Fluent Bit, and Kafka producers — built to make their internal mechanics explicit. Implements adaptive backpressure, dynamic worker scaling based on queue utilisation, and batch flushing on size or timeout. The focus was on graceful degradation: no log loss on shutdown, producer rate adapts when the queue fills.',
    keyDecision:
      'The autoscaler uses threshold-based hysteresis (scale up at 80%, scale down at 20%) rather than reactive event-driven scaling. The gap between thresholds prevents oscillation — a behavior Kubernetes HPA uses for the same reason. Workers flush their in-flight batch before exiting, which is what makes zero-loss shutdown possible.',
    github: 'https://github.com/berk2k/log-processing-pipeline',
    designDoc: 'https://github.com/berk2k/log-processing-pipeline/blob/main/DESIGN.md',
  },
  {
    name: 'POSIX Concurrency Systems',
    stack: 'C · 2025',
    description:
      'Two MapReduce-style programs implemented four ways: pthreads, fork + pipes, shared memory with POSIX semaphores, and atomic CAS. The goal was empirical: measure where each model breaks down rather than reason about it abstractly.',
    keyDecision:
      'For fine-grained shared-state updates (a single max value), synchronization overhead dominates — adding workers does not improve runtime regardless of the primitive. Atomic CAS and mutex performed nearly identically at 8 workers, because the bottleneck was not lock acquisition itself but the cache coherence traffic contention generated.',
    github: 'https://github.com/berk2k/posix-concurrency-systems',
  },
]

export const jobs: Job[] = [
  {
    company: 'Nullware Digital',
    period: 'Feb 2026 – Present · Remote, UK',
    role: 'Software Engineer · Part-time',
    bullets: [
      'Analyzed fragmented auth patterns across existing projects, extracted reusable baseline, and built production-oriented API template with structured logging (Pino), PII redaction, Prometheus metrics, auth, and rate limiting, establishing a reusable foundation that reduces new project setup from ~20h to under 2h.',
      'Proposed and led VPS migration after shared hosting lacked Node.js support and required costly separate managed services; co-located PostgreSQL, Redis, and API on a single private network, reducing infrastructure cost, accepting single-point-of-failure risk as a deliberate early-stage tradeoff.',
      'Identified a missing cache layer in Firebase session verification; the first request populates the cache and subsequent requests are served from it, reducing auth latency from ~4s to 11ms.',
      'Identified TOCTOU race condition in Stripe webhook handler; resolved by moving idempotency guard inside the database transaction, ensuring atomic duplicate prevention at DB level before any side effects execute.',
      'Optimized enrollment fetching with batched queries (2N to 2 fixed) and O(N^2) to O(N) in-memory grouping via Map; response time improved 19% at 9 courses, gains compound with scale.'
    ],
  },
  {
    company: 'VakifBank',
    period: 'Jul – Aug 2023 · Istanbul',
    role: 'Data Engineer Intern',
    bullets: [
      'Supported SCD Type 1 ETL workflows in a production Oracle data warehouse environment using Informatica.',
    ],
  },
]

export const education = {
  school: 'Yasar University',
  period: 'Sep 2019 – Jul 2024 · Izmir / Türkiye',
  degree: 'B.Sc. Software Engineering',
  note: 'CGPA 3.25/4.00 · Graduated 3rd in department',
}