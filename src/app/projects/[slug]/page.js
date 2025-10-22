import Section from "../../../components/Section";
import Link from "next/link";

const PROJECTS = {
  "airbnb-nyc-pricing-explorer": {
    title: "Airbnb NYC Pricing Explorer",
    body: "Interactive maps and pricing insights across NYC boroughs.",
  },
  "secure-notes": {
    title: "Secure Notes",
    body: "End-to-end encrypted notes with robust auth and DB.",
  },
  algoplayground: {
    title: "AlgoPlayground",
    body: "Algorithms visualized: graphs, DP, and more.",
  },
};

export default function ProjectDetail({ params }) {
  const proj = PROJECTS[params.slug];
  if (!proj) {
    return (
      <Section
        id="not-found"
        title="Project not found"
        action={
          <Link href="/" aria-label="Close and go home" className="icon-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </Link>
        }
      >
        <p className="opacity-80">Check the projects page for available demos.</p>
      </Section>
    );
  }
  return (
    <Section
      id="project"
      title={proj.title}
      action={
        <Link href="/" aria-label="Close and go home" className="icon-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </Link>
      }
    >
      <p className="max-w-2xl opacity-80">{proj.body}</p>
    </Section>
  );
}
