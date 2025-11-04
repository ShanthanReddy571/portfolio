import Section from "../../components/Section";
import Link from "next/link";

function ValueIcon({ name }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": true };
  switch (name) {
    case "Performance-first":
      return (
        <svg {...common}><path d="M13 3a9 9 0 1 1-8 12"/><path d="M12 6v6l4 2"/></svg>
      );
    case "Accessible by default":
      return (
        <svg {...common}><circle cx="12" cy="5" r="2"/><path d="M5 22l2-7 5-3 5 3 2 7"/><path d="M12 8v4"/></svg>
      );
    case "Strong testing & DX":
      return (
        <svg {...common}><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 8h10M7 12h6"/></svg>
      );
    case "Clear communication":
      return (
        <svg {...common}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
      );
    default:
      return (
        <svg {...common}><path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4-7 4 2.5-7L2 9h7z"/></svg>
      );
  }
}

const VALUES = [
  { title: "Performance-first", desc: "Snappy UIs, efficient APIs, measurable wins." },
  { title: "Accessible by default", desc: "Inclusive, keyboard-friendly, WCAG-aware interfaces." },
  { title: "Strong testing & DX", desc: "CI, integration tests, and tooling for developer velocity." },
  { title: "Clear communication", desc: "Docs, async updates, and collaborative planning." },
];

const HIGHLIGHTS = [
  "Built internal test-bench booking platform (React/Next.js + Node/Postgres); conflict-free reservation engine and approvals cut conflicts ~85% and booking time ~60%.",
  "Designed Python autograder + C++ harness with CI for DSA; supported 120+ students with <24h feedback cycles.",
  "Research: self-supervised pretraining + CUDA/TensorRT optimizations for visual inspection; +7 mAP and ~35% lower latency.",
];

export default function AboutPage() {
  return (
    <Section
      id="about"
      title="About"
      action={
        <Link href="/" aria-label="Close and go home" className="icon-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </Link>
      }
    >
      <div className="hero-wrap">
        <div className="kicker">Who I am</div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Turning complex ideas into <span className="gradient-text">fast, delightful</span> products
        </h3>
        <p className="mt-3 max-w-3xl opacity-85">
          I’m Shanthan — a full‑stack engineer who enjoys shaping clean UIs, reliable backends, and production‑ready pipelines across cloud and computer vision.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn btn-primary">Let’s work together</Link>
          <Link href="/experience" className="btn btn-ghost">See full experience</Link>
          <span className="badge">NYC • Open to relocate</span>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="opacity-90">
            I’m a CS Master’s graduate from the University at Buffalo (’25). Previously at Bosch and in an imaging research internship, I worked across React/React Native, Node, and CV/ML pipelines.
          </p>
          <p className="mt-3 opacity-80">
            I care deeply about performance, accessibility, and testable architectures that scale. I favor clear communication and collaborative execution.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
            <div className="card p-3"><span className="block text-xs opacity-70">Experience</span><span>3+ yrs</span></div>
            <div className="card p-3"><span className="block text-xs opacity-70">Projects</span><span>15+ shipped</span></div>
            <div className="card p-3"><span className="block text-xs opacity-70">Location</span><span>NYC · Open to relocate</span></div>
          </div>
        </div>
        <div className="card p-6">
          <h4 className="text-sm font-semibold tracking-wide opacity-70">Values</h4>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="card relative overflow-hidden p-4">
                <div className="absolute -inset-x-2 -top-8 h-12 bg-gradient-to-r from-[var(--accent)]/20 via-transparent to-[var(--accent)]/20 blur-md" aria-hidden />
                <div className="relative flex items-start gap-3">
                  <div className="icon-btn h-9 w-9"><ValueIcon name={v.title} /></div>
                  <div>
                    <div className="text-sm font-semibold">{v.title}</div>
                    <div className="mt-0.5 text-xs opacity-80">{v.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 card p-6">
        <h3 className="text-lg font-semibold tracking-tight">Top Highlights</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {HIGHLIGHTS.map((h) => (<li key={h}>{h}</li>))}
        </ul>
        <div className="mt-4">
          <Link href="/experience" className="link-pill text-sm">See full experience →</Link>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="card p-6">
          <h4 className="text-sm font-semibold tracking-wide opacity-70">Education</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><div className="font-medium">MS in Computer Science</div><div className="opacity-80">University at Buffalo · 2024–2025</div></li>
            <li><div className="font-medium">BTech in Computer Science</div><div className="opacity-80">Amrita Vishwa Vidyapeetham · 2019–2023</div></li>
          </ul>
        </div>
        <div className="card p-6">
          <h4 className="text-sm font-semibold tracking-wide opacity-70">Currently</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Exploring advanced Next.js patterns, edge functions, and DX tooling.</li>
            <li>Deepening ML/vision projects with CUDA + PyTorch.</li>
            <li>Open to impactful full‑stack roles (NYC · Remote).</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

