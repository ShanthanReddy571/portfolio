import Section from "../../components/Section";
import Timeline from "../../components/Timeline";
import Link from "next/link";

const EXPERIENCES = [
  {
    company: "Company A",
    role: "Full-Stack Developer",
    period: "2023 — Present",
    highlights: [
      "Built performant Next.js features reaching thousands of users.",
      "Improved Lighthouse scores to 95+ with image and bundle optimizations.",
    ],
  },
  {
    company: "Company B",
    role: "Frontend Engineer",
    period: "2021 — 2023",
    highlights: [
      "Shipped component library with Tailwind and Storybook.",
      "Led accessibility improvements across key flows.",
    ],
  },
];

export default function ExperiencePage() {
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
      <Timeline items={EXPERIENCES} />
    </Section>
  );
}
