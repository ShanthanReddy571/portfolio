"use client";

import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import TagFilter from "../../components/TagFilter";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { ALL_PROJECTS } from "../../data/projects";
import { mapWithOverrides } from "../../data/project-overrides";

export default function ProjectsPage() {
  const PROJECTS = useMemo(() => mapWithOverrides(ALL_PROJECTS), []);
  const allTags = useMemo(() => Array.from(new Set(PROJECTS.flatMap((p) => p.tags))), [PROJECTS]);
  const [selected, setSelected] = useState([]);
  const filtered = useMemo(() => {
    if (selected.length === 0) return PROJECTS;
    return PROJECTS.filter((p) => selected.every((t) => p.tags.includes(t)));
  }, [selected, PROJECTS]);

  const tagRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });

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

      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between gap-2 mb-1">
          <p className="opacity-80 text-sm nowrap leading-none">Filter by tag</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => tagRef.current?.scrollLeft?.()}
              disabled={!canScroll.left}
              className="icon-btn disabled:opacity-40"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => tagRef.current?.scrollRight?.()}
              disabled={!canScroll.right}
              className="icon-btn disabled:opacity-40"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
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
        </div>
        <TagFilter
          ref={tagRef}
          hideClear
          tags={allTags}
          selected={selected}
          onChange={setSelected}
          onScrollState={setCanScroll}
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
