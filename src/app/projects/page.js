"use client";

import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import TagFilter from "../../components/TagFilter";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ALL_PROJECTS } from "../../data/projects";

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
      <div className="hero-wrap">
        <div className="kicker">Selected work & studies</div>
        <p className="mt-3 max-w-3xl text-sm opacity-85">
          A mix of production apps, research prototypes, and infrastructure blueprints. Use tags to filter what matters to you.
        </p>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <p className="opacity-80 text-sm nowrap">Filter by tag</p>
          <button
            type="button"
            onClick={() => setSelected([])}
            disabled={selected.length === 0}
            className={`btn ${selected.length ? 'btn-primary' : 'btn-ghost'} text-xs disabled:opacity-50`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            Clear
          </button>
        </div>
        <TagFilter hideClear tags={allTags} selected={selected} onChange={setSelected} />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
