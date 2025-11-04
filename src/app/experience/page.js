"use client";

import { useMemo, useState } from "react";
import Section from "../../components/Section";
import Link from "next/link";
import ExperienceCard from "../../components/ExperienceCard";

const EXPERIENCES = [
  {
    company: "University at Buffalo",
    role: "Graduate Teaching Assistant — Data Structures & Algorithms",
    location: "New York, USA",
    period: "Jan 2025 – May 2025",
    start: "2025-01-01",
    end: "2025-05-31",
    category: "Teaching",
    highlights: [
      "Delivered recitations and office hours for 120+ students; covered algorithm design (divide & conquer, greedy, DP) and core data structures (trees, heaps, union‑find, graphs).",
      "Built a Python autograder with sandboxing (subprocess/ptrace) and per‑test resource limits; integrated with a C++ harness to check asymptotic behavior under adversarial inputs.",
      "Authored reference solutions and unit tests; added static analysis (flake8/clang‑tidy) and plagiarism signals (AST hashing + token‑level similarity).",
      "Automated grading/feedback pipeline with GitHub Actions and artifacts; reduced turnaround and regrade requests.",
    ],
    tech: ["Python", "C++", "GitHub Actions", "pytest", "clang‑tidy"],
    metrics: [
      { label: "Students", value: "120+" },
      { label: "Turnaround", value: "<24h" },
    ],
  },
  {
    company: "Bosch Global Software Technologies",
    role: "Software Engineer — Test Bench Booking Platform",
    location: "India",
    period: "Jan 2023 – Jan 2024",
    start: "2023-01-01",
    end: "2024-01-31",
    category: "Work",
    highlights: [
      "Designed and delivered a React/Next.js internal portal for booking hardware test benches across labs and time zones; responsive, PWA‑ready UI for desktop/mobile.",
      "Implemented a conflict‑free reservation engine (interval trees + fairness policy) with waitlists, approvals, and recurring bookings; ICS export + calendar integration.",
      "Built Node.js/Express APIs with PostgreSQL/Prisma, RBAC + SSO; added Redis‑backed rate limiting and job queues for reminders and expirations.",
      "Instrumented usage analytics and audit trails; CI/CD with GitHub Actions, Playwright e2e suite, and Dockerized deploys.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "Playwright", "GitHub Actions", "Docker"],
    metrics: [
      { label: "Conflicts", value: "−85%" },
      { label: "Booking time", value: "−60%" },
      { label: "Utilization", value: "+25%" },
    ],
  },
  {
    company: "Imaging Systems Lab (Research Internship)",
    role: "Research Intern",
    location: "Hyderabad, India",
    period: "Jun 2021 – May 2022",
    start: "2021-06-01",
    end: "2022-05-31",
    category: "Research",
    highlights: [
      "Developed self‑supervised pretraining (SimCLR/MAE variants) for surface‑defect detection with limited labels; fine‑tuned ViT/ResNet backbones.",
      "Built an active‑learning loop and dataset curation tooling; automated augmentations and hard‑example mining.",
      "Optimized inference with CUDA/TensorRT and mixed precision; deployed a batched service for real‑time inspection.",
    ],
    tech: ["PyTorch", "CUDA", "TensorRT", "OpenCV", "ViT", "SimCLR"],
    metrics: [
      { label: "mAP", value: "+7 pts" },
      { label: "Latency", value: "−35%" },
    ],
  },
];

const CATEGORIES = ["All", "Work", "Research", "Teaching"];

export default function ExperiencePage() {
  const [selected, setSelected] = useState("All");
  const items = useMemo(() => {
    const pool = selected === "All" ? EXPERIENCES : EXPERIENCES.filter((e) => e.category === selected);
    return [...pool].sort((a, b) => new Date(b.start) - new Date(a.start));
  }, [selected]);

  return (
    <Section
      id="experience"
      title="Experience"
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
        <div className="kicker">Career journey</div>
        <p className="mt-3 max-w-3xl text-sm opacity-85">
          A blend of full-stack engineering, research in computer vision, and hands-on teaching. Filter by type to focus on what you care about.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`chip ${selected === c ? "chip--active" : ""}`}
              onClick={() => setSelected(c)}
              type="button"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5">
        {items.map((it, i) => (
          <ExperienceCard key={i} item={it} />
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <Link href="/projects" className="btn btn-ghost">Explore projects</Link>
        <Link href="/contact" className="btn btn-primary">Get in touch</Link>
      </div>
    </Section>
  );
}
