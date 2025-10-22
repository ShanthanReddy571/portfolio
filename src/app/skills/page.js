import Section from "../../components/Section";
import Link from "next/link";

export const metadata = {
  title: "Skills",
  description: "Skills and tools I use to build modern web apps.",
};

const GROUPS = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Zustand", "Redux", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB", "REST", "tRPC"],
  },
  {
    title: "Cloud",
    items: ["AWS", "Vercel", "Docker", "CI/CD"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub Actions", "Jest", "Playwright", "Figma"],
  },
];

export default function SkillsPage() {
  return (
    <Section
      id="skills"
      title="Skills"
      action={
        <Link href="/" aria-label="Close and go home" className="icon-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </Link>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {GROUPS.map((g) => (
          <div key={g.title}>
            <h3 className="text-sm font-semibold tracking-wide opacity-70">{g.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
