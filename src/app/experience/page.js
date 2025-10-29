"use client";

import { useMemo, useState } from "react";
import Section from "../../components/Section";
import Link from "next/link";
import ExperienceCard from "../../components/ExperienceCard";

const EXPERIENCES = [
  {
    company: "Bosch Global Software Technologies",
    role: "Software Engineer I",
    location: "India",
    period: "Jan 2023 – Jan 2024",
    category: "Work",
    highlights: [
      "Developed core modules for a Connected Associate retail app on Android/tablet, enabling real‑time lane management across stores.",
      "Led E2E testing (manual, unit, automated) with CI to keep 99.9% uptime and consistent cross‑device UX.",
      "Adopted MQTT for lightweight real‑time messaging between clients and backend services, reducing sync latency by ~40%.",
      "Implemented OAuth 2.0 + OpenID Connect flows, streamlining secure access for 2k+ associates.",
    ],
    tech: ["React Native", "TypeScript", "Redux", "Jest", "Cucumber", "Kubernetes", "Docker", "MQTT", "OpenID"],
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Latency", value: "−40%" },
      { label: "Users", value: "2k+" },
    ],
  },
  {
    company: "Samsung",
    role: "Research Intern",
    location: "Hyderabad, India",
    period: "Jun 2021 – May 2022",
    category: "Research",
    highlights: [
      "Built panoramic image stitching with keypoint detection and RANSAC‑based homography using perspective projection.",
      "Optimized feature matching and blending; reduced stitching latency by ~40% and improved alignment to ~92% of image pairs.",
      "Prototyped real‑time preview for high‑resolution camera input, improving user experience.",
    ],
    tech: ["OpenCV", "SIFT", "FLANN", "Homography", "CUDA", "Image Blending", "RANSAC"],
    metrics: [
      { label: "Alignment", value: "~92%" },
      { label: "Latency", value: "−40%" },
    ],
  },
  {
    company: "University at Buffalo",
    role: "Graduate Teaching Assistant",
    location: "New York, USA",
    period: "Jan 2025 – May 2025",
    category: "Teaching",
    highlights: [
      "Held weekly office hours for 100+ students; assisted debugging of Python‑based ML models (CNNs, ResNet, ViT).",
      "Redesigned the course site’s frontend to improve responsiveness and ~60% faster page loads across devices.",
    ],
    tech: ["React", "Python", "PyTorch", "ViT", "ResNet"],
    metrics: [
      { label: "Students", value: "100+" },
      { label: "Load time", value: "−60%" },
    ],
  },
];

const CATEGORIES = ["All", "Work", "Research", "Teaching"];

export default function ExperiencePage() {
  const [selected, setSelected] = useState("All");
  const items = useMemo(
    () => (selected === "All" ? EXPERIENCES : EXPERIENCES.filter((e) => e.category === selected)),
    [selected]
  );

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
          A blend of full‑stack engineering, research in computer vision, and hands‑on teaching. Filter by type to focus on what you care about.
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

