// Lightweight per-slug overrides without touching the base data file.

export const PROJECT_OVERRIDES = {
  "cloud-intrusion-detection": {
    title: "AegisCloud IDS - ML-Driven Advanced Threat Detection",
    description:
      "Research-backed, cloud-native intrusion detection system presented at IEEE ICCCNT 2023; GPU-batched preprocessing and anomaly models for low-latency, high-precision alerts.",
    tags: [
      "Python",
      "ML",
      "Security",
      "Cloud",
      "Anomaly Detection",
      "IDS",
      "IEEE",
      "Research",
    ],
    details: {
      status: "Research publication - IEEE ICCCNT 2023",
      overview:
        "Presented the paper \"A Cloud-Based Intrusion Detection System for Advanced Threat Detection and Prevention Using Machine Learning Techniques\" at the 14th International Conference on Computing Communication and Networking Technologies (ICCCNT), IEEE, on Jul 6, 2023. The system operationalizes ML for real-time threat detection in cloud environments with an end-to-end pipeline from feature extraction to inference and alerting.",
      role: "Principal ML Systems Architect & Lead Presenter — owned end-to-end IDS architecture, ML research, and production-readiness",
      contribution:
        "Authored the paper and built the end-to-end IDS pipeline: telemetry ingestion, feature store, model training, GPU-batched inference service, and alerting heuristics.",
      teamSize: "Team of 4",
      problem:
        "Detect and prevent advanced threats in cloud workloads with low latency and high precision using machine learning, while keeping costs predictable and deployments portable.",
      stack: ["Python", "PyTorch", "LightGBM", "FastAPI", "CUDA", "Docker"],
      highlights: [
        "Presented at IEEE ICCCNT 2023 to an audience of academics and industry practitioners.",
        "GPU-batched transforms reduce preprocessing latency by ~40% in lab tests.",
        "Explainability with SHAP improves analyst triage and safer rollouts.",
        "Portable deployment with Docker; stateless inference service with a simple feature store.",
      ],
      architecture: [
        "Ingestion + Feature store + Training + Inference service + Alerts/Web UI",
        "Batch and streaming transforms with GPU-parallel preprocessing",
        "Model zoo: tree-based (LightGBM) and autoencoder anomaly scoring",
      ],
      results: [
        "Lower time-to-alert on lab workloads and fewer false positives in validation.",
        "Engaged researchers and practitioners at ICCCNT; sparked follow-up discussions and knowledge exchange.",
      ],
      benchmarks: [
        {
          label: "Preprocessing latency",
          before: "~100 ms",
          after: "~60 ms",
          delta: "~40% faster",
        },
      ],
      diagram: "/projects/cloud-intrusion-detection-diagram.svg",
      gallery: [
        {
          src: "/projects/cloud-intrusion-detection.svg",
          alt: "AegisCloud IDS",
          caption: "Signal streams and scoring",
        },
        {
          src: "/projects/cloud-intrusion-detection-diagram.svg",
          alt: "Architecture",
          caption: "Ingestion + Features + Inference + Alerts",
        },
      ],
      challenges: [
        "Imbalanced datasets",
        "Concept drift",
        "Feature leakage risks",
        "Operational thresholds under drift",
      ],
      future: [
        "Online learning and drift detection",
        "Artifact signing/attestation for model releases",
        "Vector DB for embeddings and context",
      ],
    },
  },
  // Ensure portfolio card shows a working Live link
  "portfolio-v2": {
    live: "https://shanthan-portfolio.vercel.app/",
  },
};

// Hide copied/irrelevant projects by slug
export const HIDDEN_SLUGS = new Set([
  "adas-monocular-3d-scene-understanding",
  "panoramic-image-stitcher",
  "connected-associate-retail-platform",
]);

// Add completely new, trending projects here without touching base data
export const EXTRA_PROJECTS = [
  {
    slug: "helios-guarded-rag-platform",
    title: "Helios Guarded RAG Platform — Production-Grade Retrieval with Guardrails",
    description:
      "Production-ready RAG stack with hybrid search (BM25 + vectors), toolcalling agents, evaluation harness, and safety guardrails. Sub-100ms retrieval, <3% hallucination on evals.",
    tags: [
      "RAG",
      "LLM",
      "Vector DB",
      "LangGraph",
      "OpenAI",
      "Next.js",
      "Vercel",
      "Guardrails",
      "Observability",
    ],
    live: "#",
    repo: "#",
    image: "/projects/helios-guarded-rag-platform-cover.svg",
    details: {
      status: "Case study / Trending AI infra",
      overview:
        "Built a robust Retrieval-Augmented Generation platform featuring hybrid retrieval (BM25 + ANN vectors), structured tool/function calling, prompt safety guardrails, and a rigorous eval harness for latency, faithfulness, and answer quality. Designed for multi-tenant apps and fast iteration.",
      role:
        "Principal AI Platform Engineer — orchestrated retrieval pipeline, agent workflows, evaluation framework, and production SLOs (p95 latency & cost).",
      contribution:
        "Architected retrievers and rerankers, implemented vector ingestion and chunking strategies, added observability (traces/metrics), built eval datasets and regression tests, and shipped a streaming UI with citations.",
      teamSize: "Team of 4",
      problem:
        "Reduce hallucinations and response variance while keeping tail latency low for enterprise knowledge bases and assistants.",
      stack: [
        "Next.js",
        "Vercel",
        "LangGraph",
        "OpenAI",
        "Postgres/pgvector",
        "Elastic/BM25",
        "TypeScript",
      ],
      highlights: [
        "Hybrid search + reranking improved answer relevance by 18% on internal evals.",
        "Guardrails and content filters cut hallucination rate to <3% on held-out set.",
        "Streaming with citations and chunk-level provenance for trust.",
        "Per-tenant cost and latency budgets with autoscaling knobs.",
      ],
      architecture: [
        "Ingestion → Chunking → Embeddings → Vector store (pgvector) + BM25",
        "Retrieval → Rerank → Agent tools (search, calculator, web, code) → Compose",
        "Safety layer (prompt/classifier) → Streaming UI with citations",
      ],
      results: [
        "p95 retrieval < 90 ms, end-to-end p95 < 1.2 s on common queries.",
        "18% relevance lift vs. naive vector-only baseline.",
      ],
      benchmarks: [
        { label: "Hallucination rate", before: "~9%", after: "<3%", delta: "-6 pp" },
        { label: "p95 retrieval", before: "~160 ms", after: "~90 ms", delta: "~44% faster" },
      ],
      diagram: "/projects/helios-guarded-rag-platform-diagram-v2.svg",
      gallery: [
        {
          src: "/projects/helios-guarded-rag-platform-cover.svg",
          alt: "Helios RAG UI",
          caption: "Streaming responses with citations and guardrails",
        },
        {
          src: "/projects/helios-guarded-rag-platform-diagram-v2.svg",
          alt: "RAG Architecture",
          caption: "Hybrid retrieval, tools, and safety layer",
        },
      ],
      challenges: [
        "Corpus drift and re-embedding costs",
        "Query reformulation and multi-hop retrieval",
        "Latency budgets under heavy load",
      ],
      future: [
        "Active evaluation and auto-tuning retrievers",
        "Distillation for cheaper models without quality loss",
        "Realtime agents and multi-modal sources",
      ],
    },
  },
  {
    slug: "aurora-vectorized-olap-engine",
    title: "AuroraDB — Vectorized OLAP Query Engine (Arrow/Substrait)",
    description:
      "Research-grade analytical engine inspired by advanced DB systems: Arrow columnar memory, Substrait plans, vectorized execution, CBO, and Parquet pushdown. 2–3× speedups on TPC-H S=1 vs. a naive interpreter.",
    tags: [
      "Databases",
      "OLAP",
      "Query Engine",
      "Apache Arrow",
      "Substrait",
      "Parquet",
      "Rust",
      "SIMD",
      "TPC-H",
    ],
    live: "#",
    repo: "#",
    image: "/projects/aurora-vectorized-olap-engine-cover.svg",
    details: {
      status: "Master's capstone — Advanced DB Systems",
      overview:
        "Built an advanced analytical query engine drawing from CSE562 topics: vectorized operators over Arrow columns, a cost-based optimizer, join reordering with basic cardinality estimation, and Parquet/CSV readers with predicate/runtime filter pushdown. Executes Substrait logical plans and emits a compact physical pipeline with fused operators and selective materialization.",
      role:
        "Lead systems engineer — designed execution model, wrote vectorized operators (scan, filter, project, hash join, aggregation), implemented Parquet IO and planner, and assembled a small benchmark harness.",
      contribution:
        "Implemented Arrow-native columnar buffers; selection vectors; dictionary/bloom filters; hash-table join with radix partitioning; grouping sets with two-phase aggregation; cost model for join ordering; Substrait-to-physical compiler; metrics/trace spans.",
      teamSize: "Team of 2",
      problem:
        "Deliver interactive OLAP performance on laptop-class hardware using modern columnar techniques while staying standards-friendly (Substrait) and portable.",
      stack: [
        "Rust",
        "Apache Arrow",
        "Parquet",
        "Substrait",
        "Polars/DataFusion (inspiration)",
      ],
      highlights: [
        "Vectorized execution with selection vectors and SIMD-friendly layouts.",
        "Predicate, projection, and partition pruning pushed into Parquet readers.",
        "Cost-based join reordering with simple cardinality estimation and runtime join filters.",
        "Substrait ingestion to encourage cross-engine plan portability.",
      ],
      architecture: [
        "Planner: Substrait → logical → physical (pipelines & drivers)",
        "Storage: Parquet/CSV readers with pushdown + Arrow buffers",
        "Execution: vectorized operators (scan, filter, proj, hash join, agg)",
        "Runtime: spill-safe hash agg/join, metrics, and tracing",
      ],
      results: [
        "2.4× average speedup on TPC-H Q1–Q10 (SF=1) vs. naive row-at-a-time baseline.",
        "Predicate pushdown reduces scanned bytes by 60–90% on selective queries.",
      ],
      benchmarks: [
        { label: "TPC-H Q1 (SF=1)", before: "~1.8 s", after: "~0.8 s", delta: "~2.2×" },
        { label: "Join-heavy (Q3)", before: "~2.6 s", after: "~1.1 s", delta: "~2.3×" },
      ],
      diagram: "/projects/aurora-vectorized-olap-engine-diagram.svg",
      gallery: [
        {
          src: "/projects/aurora-vectorized-olap-engine-cover.svg",
          alt: "AuroraDB cover",
          caption: "Columnar memory and vectorized operators",
        },
        {
          src: "/projects/aurora-vectorized-olap-engine-diagram.svg",
          alt: "AuroraDB pipeline",
          caption: "Planner → Pipelines → Vectorized execution",
        },
      ],
      challenges: [
        "Dictionary/binary column semantics in vector operators",
        "Join spilling and memory bound behavior",
        "Stable cardinality estimation on skewed data",
      ],
      future: [
        "Adaptive query execution with runtime re-optimization",
        "Codegen (Cranelift) for hot pipelines",
        "Distributed mode via Ballista-like executors",
      ],
    },
  },
  {
    slug: "focusflow-chrome-extension",
    title: "FocusFlow — Focus Timer & Distraction Blocker (MV3)",
    description:
      "Chrome extension that combines Pomodoro focus timers, dynamic site blocking, and lightweight analytics. Built with React + TypeScript on Manifest V3.",
    tags: [
      "Chrome Extension",
      "Manifest V3",
      "TypeScript",
      "React",
      "Service Worker",
      "IndexedDB",
      "Productivity",
      "UX",
    ],
    live: "https://chromewebstore.google.com/detail/focusflow/mnjdbbdldmdnepmlbomfnkmfclanikgp",
    repo: "#",
    image: "/projects/focusflow-cover.svg",
    details: {
      status: "Shipped — Chrome Web Store",
      overview:
        "FocusFlow helps you protect deep work sessions with a flexible focus timer, distraction blocking (blacklist/whitelist), schedules, and a clean UI. Built on Manifest V3 with a service worker background, it is fast, privacy‑respecting, and syncs settings via Chrome storage.",
      role: "Solo builder — product, UX, and engineering",
      contribution:
        "Designed the UX, implemented MV3 background service worker, content scripts, rules engine, options/dashboard UI, storage/sync, and import/export.",
      teamSize: "Solo project",
      problem:
        "Avoid context switching and time loss by preventing distracting sites during planned focus intervals while keeping exceptions simple.",
      stack: ["TypeScript", "React", "Manifest V3", "Chrome Storage", "IndexedDB", "Vite"],
      highlights: [
        "Focus sessions with Pomodoro, custom intervals, and autostart schedules.",
        "Dynamic rules: blocklists, allowlists, tags, and per‑domain timers.",
        "Keyboard shortcuts and quick commands from the popup.",
        "Lightweight analytics: streaks, time focused, top distractions.",
      ],
      architecture: [
        "Background (service worker) orchestrates timers, rules, and storage",
        "Content script displays overlays and handles site‑level UX",
        "Options/Popup UIs in React for configuration and stats",
      ],
      results: [
        "Shipped to the Chrome Web Store; early user feedback highlights simplicity and low overhead.",
      ],
      benchmarks: [],
      diagram: "/projects/focusflow-diagram-v2.svg",
      gallery: [
        { src: "/projects/focusflow-cover.svg", alt: "FocusFlow cover", caption: "Clean card cover in the portfolio style" },
        { src: "/projects/focusflow-diagram-v2.svg", alt: "FocusFlow architecture", caption: "MV3 background + content + UI" },
      ],
      challenges: [
        "MV3 service worker lifecycle and reliable alarms",
        "Race‑free sync between content scripts and background",
        "Rule precedence (allow vs block) and UX edge cases",
      ],
      future: [
        "Calendar‑aware schedules (work hours/meetings)",
        "i18n and exportable presets",
        "Firefox/Edge ports and cloud sync",
      ],
    },
  },
  {
    slug: "bosch-test-bench-booking-platform",
    title: "Bosch Test Bench Booking & Utilization Platform",
    description:
      "Internal platform for scheduling, access control, and utilization analytics of automotive test benches. Conflict-free reservations, calibration metadata, and live status telemetry.",
    tags: [
      "Bosch",
      "Next.js",
      "Postgres",
      "Redis",
      "RBAC",
      "Scheduling",
      "Telemetry",
      "MQTT",
      "Kubernetes",
    ],
    live: "#",
    repo: "#",
    image: "/projects/bosch-test-bench-booking-platform-cover.svg",
    details: {
      status: "Internal production — enterprise",
      overview:
        "Designed and implemented a secure reservation and orchestration system for hardware test benches. The platform offers conflict-free booking with constraints, role-based access, asset state tracking, calibration metadata, and live bench status via telemetry, unlocking higher utilization and fewer handoff errors.",
      role:
        "Full‑stack engineer — owned architecture, RBAC model, booking engine, and observability; collaborated with lab admins and validation engineers on workflows.",
      contribution:
        "Built booking engine with constraint solver (availability, maintenance, calibration windows), added approval workflows, implemented RBAC and audit logs, integrated device telemetry via MQTT/WebSockets, and delivered dashboards for utilization and SLA metrics.",
      teamSize: "Team of 4",
      problem:
        "Eliminate resource contention and idle time across shared test benches while preserving safety, traceability, and change control.",
      stack: [
        "Next.js",
        "Node.js",
        "Postgres",
        "Redis",
        "Prisma",
        "MQTT",
        "WebSockets",
        "Kubernetes",
        "Grafana",
      ],
      highlights: [
        "Conflict‑aware booking with maintenance/calibration blackout windows.",
        "Granular RBAC with signed change requests and audit trails.",
        "Live status from benches via MQTT → WebSocket fan‑out.",
        "Utilization and SLA dashboards with drill‑downs and CSV export.",
      ],
      architecture: [
        "Web app (Next.js) → API (Node/Prisma) → Postgres/Redis",
        "Telemetry path: Device → MQTT broker → Ingest → WS broadcast",
        "Schedulers for reminders, expiries, and maintenance windows",
      ],
      results: [
        "~35% reduction in booking conflicts within first quarter.",
        "~22% increase in bench utilization measured month‑over‑month.",
        "Near‑zero after‑hours escalations post rollout (alerts + approvals).",
      ],
      benchmarks: [
        { label: "Conflict detection", before: "manual", after: "<100 ms", delta: "automated" },
        { label: "Utilization", before: "~58%", after: "~80%", delta: "+22 pp" },
      ],
      diagram: "/projects/bosch-test-bench-booking-platform-diagram.svg",
      gallery: [
        {
          src: "/projects/bosch-test-bench-booking-platform-cover.svg",
          alt: "Bosch test bench booking platform",
          caption: "Booking, RBAC, and real‑time status",
        },
        {
          src: "/projects/bosch-test-bench-booking-platform-diagram.svg",
          alt: "Architecture",
          caption: "Web app, API, DB, and MQTT telemetry",
        },
      ],
      challenges: [
        "Edge cases with overlapping maintenance and calibration holds",
        "Sync between telemetry status and human overrides",
        "Scalable approval chains and notifications",
      ],
      future: [
        "What‑if scheduling and auto‑suggested reschedules",
        "Mobile kiosk mode at benches",
        "Predictive maintenance hooks from telemetry",
      ],
    },
  },
];

export function withOverrides(project) {
  if (!project) return project;
  const o = PROJECT_OVERRIDES[project.slug];
  if (!o) return project;
  return {
    ...project,
    ...o,
    details: { ...(project.details || {}), ...(o.details || {}) },
  };
}

function sortByPriority(items) {
  const priority = [
    "cloud-intrusion-detection",
    "bosch-test-bench-booking-platform",
    "aurora-vectorized-olap-engine",
    "focusflow-chrome-extension",
    "portfolio-v2",
    "pintos-os-kernel-extensions",
  ];
  const rank = new Map(priority.map((s, i) => [s, i]));
  return items.slice().sort((a, b) => {
    const ra = rank.has(a.slug) ? rank.get(a.slug) : Number.MAX_SAFE_INTEGER;
    const rb = rank.has(b.slug) ? rank.get(b.slug) : Number.MAX_SAFE_INTEGER;
    if (ra !== rb) return ra - rb;
    return a.title.localeCompare(b.title);
  });
}

export function mapWithOverrides(projects) {
  const base = projects.filter((p) => !HIDDEN_SLUGS.has(p.slug)).map((p) => withOverrides(p));
  const combined = [...base, ...EXTRA_PROJECTS];
  return sortByPriority(combined);
}

export function getVisibleProjectSlugsFrom(projects) {
  const base = projects.filter((p) => !HIDDEN_SLUGS.has(p.slug));
  const combined = [...base, ...EXTRA_PROJECTS];
  return sortByPriority(combined).map((p) => p.slug);
}

export function getProjectBySlugFrom(projects, slug) {
  if (HIDDEN_SLUGS.has(slug)) return undefined;
  const extra = EXTRA_PROJECTS.find((p) => p.slug === slug);
  if (extra) return extra;
  const base = projects.find((p) => p.slug === slug);
  if (!base) return undefined;
  return withOverrides(base);
}
