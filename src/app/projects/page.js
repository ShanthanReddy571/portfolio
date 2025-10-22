"use client";

import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import TagFilter from "../../components/TagFilter";
import Link from "next/link";
import { useMemo, useState } from "react";

const ALL_PROJECTS = [
  {
    slug: "airbnb-nyc-pricing-explorer",
    title: "Airbnb NYC Pricing Explorer",
    description: "Interactive maps and insights. Next.js, charts, Python API.",
    tags: ["Next.js", "Charts", "Python"],
    live: "#",
    repo: "#",
  },
  {
    slug: "secure-notes",
    title: "Secure Notes",
    description: "E2E encrypted notes with Prisma, NextAuth, Postgres.",
    tags: ["Next.js", "Prisma", "Postgres"],
    live: "#",
    repo: "#",
  },
  {
    slug: "algoplayground",
    title: "AlgoPlayground",
    description: "Visualizing DSA (graphs, DP) in the browser.",
    tags: ["Next.js", "Canvas"],
    live: "#",
    repo: "#",
  },
];

export default function ProjectsPage() {
  const allTags = useMemo(() => Array.from(new Set(ALL_PROJECTS.flatMap((p) => p.tags))), []);
  const [selected, setSelected] = useState([]);
  const filtered = useMemo(() => {
    if (selected.length === 0) return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => selected.every((t) => p.tags.includes(t)));
  }, [selected]);

  return (
    <Section
      id="projects"
      title="Projects"
      action={
        <Link href="/" aria-label="Close and go home" className="icon-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </Link>
      }
    >
      <div className="flex items-center justify-between gap-4">
        <p className="opacity-80">Filter by tag</p>
        <TagFilter tags={allTags} selected={selected} onChange={setSelected} />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
