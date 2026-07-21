export interface Project {
  name: string
  stack: string
  description: string
  keyDecision: string
  github?: string
  designDoc?: string
}

export interface FeaturedWork {
  name: string
  url: string
  tagline: string
  bullets: string[]
}

export interface Job {
  company: string
  period: string
  role: string
  summary?: string
  featuredWork?: FeaturedWork
  bullets?: string[]
}


export const projects: Project[] = [
  {
    name: 'In-Memory Message Broker',
    stack: 'Go · Feb – May 2026',
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
]

export const otherProjects: Project[] = [
  {
    name: 'Multi-Tenant Booking Backend',
    stack: '.NET · Jul 2025 – Jan 2026',
    description:
      'A booking system where correctness under concurrent writes was the central problem.',
    keyDecision: '',
    designDoc: 'https://booking-backend-docs.netlify.app/',
  },
  {
    name: 'Pressure Lab',
    stack: 'Go · 2025',
    description:
      'A learning lab studying how a network-facing backend behaves under sustained load. The central question: where does pressure accumulate, and how does it propagate upstream?',
    keyDecision: '',
    github: 'https://github.com/berk2k/pressure-lab',
    designDoc: 'https://github.com/berk2k/pressure-lab/blob/main/DESIGN.md',
  },
  {
    name: 'High-Throughput Log Pipeline',
    stack: 'Go · 2025',
    description:
      'A log processing pipeline built to make internal mechanics of batching, backpressure, and worker scaling explicit.',
    keyDecision: '',
    github: 'https://github.com/berk2k/log-processing-pipeline',
    designDoc: 'https://github.com/berk2k/log-processing-pipeline/blob/main/DESIGN.md',
  },
  // {
  //   name: 'POSIX Concurrency Systems',
  //   stack: 'C · 2025',
  //   description:
  //     'Two MapReduce-style programs implemented four ways: pthreads, fork + pipes, shared memory with POSIX semaphores, and atomic CAS.',
  //   keyDecision: '',
  //   github: 'https://github.com/berk2k/posix-concurrency-systems',
  // },
]

export const jobs: Job[] = [
  {
    company: 'Nullware Digital',
    period: 'Jan 2026 – Present · Remote, UK',
    role: 'Software Engineer · Part-time',
    summary: 'Led backend and infrastructure development for TechLearn.ai within a four-person team, taking end-to-end ownership from architecture through production operation.',
    featuredWork: {
      name: 'TechLearn.ai',
      url: 'https://techlearn.ai',
      tagline: 'A multilingual online learning platform built under Nullware Digital. Owned backend, infrastructure, auth, payment, and AI content-generation systems end-to-end.',
      bullets: [
        'Reduced per-course generation time from 4+ hours to 13.5 minutes by replacing a sequential workflow with a Redis-backed BullMQ pipeline.',
        'Diagnosed and resolved a production authentication outage caused by broken outbound IPv6 routing.',
        'Migrated the platform to an Ubuntu VPS with PostgreSQL, Redis, and the API isolated on a private network.',
        'Prevented duplicate Stripe webhook processing by moving the idempotency guard inside the database transaction.',
      ],
    },
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

export const education = [
  {
    school: 'Eindhoven University of Technology (TU/e)',
    period: 'Starting Sep 2026 · Eindhoven, Netherlands',
    degree: 'M.Sc. Computer Science and Engineering',
    note: 'Focus: Systems, distributed software, and software architecture',
  },
  {
    school: 'Yaşar University',
    period: 'Sep 2019 – Jul 2024 · İzmir, Türkiye',
    degree: 'B.Sc. Software Engineering',
    note: 'Graduated 3rd in department',
  },
]