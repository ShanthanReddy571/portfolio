import Section from "../../components/Section";
import SkillPill from "../../components/SkillPill";
import Link from "next/link";

const SKILLS = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  Backend: ["Node", "Prisma", "PostgreSQL"],
  Cloud: ["AWS", "Docker"],
  Tools: ["Git", "Vercel", "Figma"],
};

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
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="opacity-90">
            I’m Shanthan — a full‑stack developer focused on building clean, fast, and
            user‑loving web apps. I enjoy thoughtful UI, accessible UX, and shipping features that matter.
          </p>
          <p className="mt-3 opacity-80">
            Recently I’ve been deep in Next.js, TypeScript, Tailwind, and serverless patterns.
          </p>
        </div>
        <div>
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} className="mb-4">
              <h3 className="text-sm font-semibold tracking-wide opacity-70">{group}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {items.map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
