"use client";

import { useMemo, useState } from "react";

const CATEGORIES = [
  "Frontend",
  "Backend",
  "Cloud & DevOps",
  "Data / ML",
  "Databases",
  "Testing & Quality",
  "Messaging & Realtime",
  "Security",
  "Tools",
];

const ALL_SKILLS = [
  // Frontend
  { name: "React", category: "Frontend", level: "Advanced", tags: ["core"] },
  { name: "Next.js (App Router)", category: "Frontend", level: "Advanced", tags: ["trending"] },
  { name: "TypeScript", category: "Frontend", level: "Advanced", tags: ["core"] },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced", tags: ["trending"] },
  { name: "React Native", category: "Frontend", level: "Advanced", tags: [] },
  { name: "Framer Motion", category: "Frontend", level: "Intermediate", tags: [] },
  { name: "Angular", category: "Frontend", level: "Intermediate", tags: [] },

  // Backend
  { name: "Node.js", category: "Backend", level: "Advanced", tags: ["core"] },
  { name: "REST APIs", category: "Backend", level: "Advanced", tags: ["core"] },
  { name: "GraphQL", category: "Backend", level: "Intermediate", tags: ["trending"] },
  { name: "tRPC", category: "Backend", level: "Intermediate", tags: ["trending"] },
  { name: "WebSockets", category: "Backend", level: "Intermediate", tags: ["realtime"] },

  // Databases
  { name: "PostgreSQL", category: "Databases", level: "Advanced", tags: ["core"] },
  { name: "MongoDB", category: "Databases", level: "Advanced", tags: ["core"] },
  { name: "Redis", category: "Databases", level: "Intermediate", tags: ["trending"] },

  // Cloud & DevOps
  { name: "Microsoft Azure", category: "Cloud & DevOps", level: "Advanced", tags: ["core"] },
  { name: "AWS", category: "Cloud & DevOps", level: "Advanced", tags: ["core"] },
  { name: "Vercel", category: "Cloud & DevOps", level: "Advanced", tags: ["trending"] },
  { name: "Docker", category: "Cloud & DevOps", level: "Advanced", tags: ["core"] },
  { name: "Kubernetes", category: "Cloud & DevOps", level: "Intermediate", tags: ["core"] },
  { name: "CI/CD (GitHub Actions, Jenkins)", category: "Cloud & DevOps", level: "Advanced", tags: ["core"] },
  { name: "Cloudflare Workers/Edge", category: "Cloud & DevOps", level: "Intermediate", tags: ["trending"] },

  // Data / ML
  { name: "PyTorch", category: "Data / ML", level: "Advanced", tags: ["core"] },
  { name: "TensorFlow", category: "Data / ML", level: "Intermediate", tags: [] },
  { name: "OpenCV", category: "Data / ML", level: "Advanced", tags: ["core"] },
  { name: "CUDA", category: "Data / ML", level: "Intermediate", tags: [] },
  { name: "ONNX", category: "Data / ML", level: "Intermediate", tags: ["trending"] },

  // Messaging & Realtime
  { name: "MQTT", category: "Messaging & Realtime", level: "Advanced", tags: ["core"] },
  { name: "Kafka", category: "Messaging & Realtime", level: "Intermediate", tags: ["core"] },

  // Testing & Quality
  { name: "Jest", category: "Testing & Quality", level: "Advanced", tags: ["core"] },
  { name: "Playwright", category: "Testing & Quality", level: "Intermediate", tags: ["trending"] },
  { name: "Cucumber", category: "Testing & Quality", level: "Intermediate", tags: [] },
  { name: "Testing Library", category: "Testing & Quality", level: "Intermediate", tags: [] },

  // Security
  { name: "OAuth 2.0 / OpenID Connect", category: "Security", level: "Advanced", tags: ["core"] },
  { name: "JWT", category: "Security", level: "Advanced", tags: [] },

  // Tools
  { name: "Git", category: "Tools", level: "Advanced", tags: ["core"] },
  { name: "GitHub / GitLab", category: "Tools", level: "Advanced", tags: [] },
  { name: "VS Code / Visual Studio", category: "Tools", level: "Advanced", tags: [] },
  { name: "Postman", category: "Tools", level: "Advanced", tags: [] },
  { name: "Linux", category: "Tools", level: "Advanced", tags: [] },
  { name: "Figma", category: "Tools", level: "Intermediate", tags: [] },
];

function levelToPercent(level) {
  switch (level) {
    case "Expert":
      return 100;
    case "Advanced":
      return 85;
    case "Intermediate":
      return 65;
    case "Beginner":
      return 40;
    default:
      return 50;
  }
}

export default function SkillsBoard() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [onlyTrending, setOnlyTrending] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_SKILLS.filter((s) => {
      if (onlyTrending && !s.tags.includes("trending")) return false;
      if (category !== "All" && s.category !== category) return false;
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        (s.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, category, onlyTrending]);

  const groups = useMemo(() => {
    const by = new Map();
    for (const s of filtered) {
      const key = s.category;
      if (!by.has(key)) by.set(key, []);
      by.get(key).push(s);
    }
    // preserve defined category order
    const ordered = [];
    for (const c of ["All", ...CATEGORIES]) {
      if (c === "All") continue;
      if (by.has(c)) ordered.push([c, by.get(c)]);
    }
    return ordered;
  }, [filtered]);

  return (
    <div>
      <div className="hero-wrap">
        <div className="kicker">Tech I work with</div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="card flex items-center gap-2 p-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills, e.g. GraphQL, CUDA, Kubernetes"
              className="w-full rounded-lg border bg-transparent px-3 py-2 outline-none focus:border-[var(--accent)]"
            />
          </div>
          <div className="card flex flex-wrap items-center gap-2 p-2">
            <button className={`chip ${category === "All" ? "chip--active" : ""}`} onClick={() => setCategory("All")} type="button">All</button>
            {CATEGORIES.map((c) => (
              <button key={c} className={`chip ${category === c ? "chip--active" : ""}`} onClick={() => setCategory(c)} type="button">{c}</button>
            ))}
            <button
              className={`chip ${onlyTrending ? "chip--active" : ""}`}
              onClick={() => setOnlyTrending((v) => !v)}
              type="button"
              title="Show trending picks"
            >
              Trending
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6">
        {groups.map(([group, items]) => (
          <div key={group} className="card p-5">
            <div className="mb-3 text-sm font-semibold tracking-wide opacity-70">{group}</div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => {
                const pct = levelToPercent(s.level);
                return (
                  <div key={s.name} className="card relative overflow-hidden p-4">
                    <div className="absolute inset-x-0 -top-8 h-12 bg-gradient-to-r from-[var(--accent)]/20 via-transparent to-[var(--accent)]/20 blur-md" aria-hidden />
                    <div className="relative">
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-medium">{s.name}</div>
                        <span className="badge text-xs">{s.level}</span>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-neutral-200/60 dark:bg-neutral-800">
                        <div className="h-2 rounded-full bg-[var(--accent)]" style={{ width: `${pct}%` }} />
                      </div>
                      {s.tags?.length ? (
                        <div className="mt-2 flex flex-wrap gap-1 text-[10px] opacity-80">
                          {s.tags.map((t) => (
                            <span key={t} className="badge">{t}</span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

