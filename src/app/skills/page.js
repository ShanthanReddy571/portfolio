import Section from "../../components/Section";
import Link from "next/link";
import SkillsBoard from "../../components/SkillsBoard";

export const metadata = {
  title: "Skills",
  description: "Skills and tools I use to build modern, scalable systems.",
};

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
      <SkillsBoard />
    </Section>
  );
}
