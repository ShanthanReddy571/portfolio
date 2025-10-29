import Section from "../../../components/Section";
import Link from "next/link";
import Image from "next/image";
import { getAllProjectSlugs, getProjectBySlug } from "../../../data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

// Ensure static generation for detail pages in Vercel builds
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.description };
}

export default function ProjectDetail({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  const { title, description, image, tags = [], details = {}, live, repo } = project;
  const {
    overview,
    highlights = [],
    architecture = [],
    results = [],
    problem,
    role,
    stack = [],
    challenges = [],
    future = [],
    status,
    contribution,
    teamSize,
    diagram,
    gallery = [],
    benchmarks = [],
  } = details;
  const hasLive = !!(live && live !== "#");
  const hasRepo = !!(repo && repo !== "#");

  return (
    <Section
      id="project-detail"
      title={title}
      action={
        <Link href="/projects" aria-label="Close and go back" className="icon-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </Link>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="card overflow-hidden">
            <div className="relative aspect-video w-full">
              {image ? (
                <Image src={image} alt={`${title} cover`} fill className="object-cover" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-700 dark:to-neutral-900" />
              )}
            </div>
          </div>
          <p className="mt-4 text-sm opacity-90">{overview || description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            {status && <span className="badge">{status}</span>}
            {stack.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>

          {diagram && (
            <div className="mt-6 card overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image src={diagram} alt={`${title} diagram`} fill className="object-cover" />
              </div>
            </div>
          )}

          {problem && (
            <div className="mt-6 card p-5">
              <h4 className="text-sm font-semibold tracking-wide opacity-70">Problem</h4>
              <p className="mt-2 text-sm opacity-90">{problem}</p>
            </div>
          )}

          {role && (
            <div className="mt-6 card p-5">
              <h4 className="text-sm font-semibold tracking-wide opacity-70">My Role</h4>
              <p className="mt-2 text-sm opacity-90">{role}</p>
            </div>
          )}

          {highlights.length > 0 && (
            <div className="mt-6 card p-5">
              <h4 className="text-sm font-semibold tracking-wide opacity-70">Highlights</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {architecture.length > 0 && (
            <div className="mt-6 card p-5">
              <h4 className="text-sm font-semibold tracking-wide opacity-70">Architecture</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {architecture.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          {results.length > 0 && (
            <div className="mt-6 card p-5">
              <h4 className="text-sm font-semibold tracking-wide opacity-70">Results</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          {benchmarks.length > 0 && (
            <div className="mt-6 card p-5">
              <h4 className="text-sm font-semibold tracking-wide opacity-70">Benchmarks</h4>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {benchmarks.map((b, i) => (
                  <div key={i} className="card p-3 text-sm">
                    <div className="opacity-70">{b.label}</div>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="badge">Before: {b.before}</span>
                      <span className="badge">After: {b.after}</span>
                      {b.delta && <span className="chip chip--active">{b.delta}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {challenges.length > 0 && (
            <div className="mt-6 card p-5">
              <h4 className="text-sm font-semibold tracking-wide opacity-70">Challenges</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          {future.length > 0 && (
            <div className="mt-6 card p-5">
              <h4 className="text-sm font-semibold tracking-wide opacity-70">Future Work</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {future.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {gallery.length > 0 && (
            <div className="mt-6 card p-5">
              <h4 className="text-sm font-semibold tracking-wide opacity-70">Gallery</h4>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {gallery.map((g, i) => (
                  <figure key={i} className="card overflow-hidden">
                    <div className="relative aspect-video w-full">
                      <Image src={g.src} alt={g.alt || `${title} image ${i + 1}`} fill className="object-cover" />
                    </div>
                    {g.caption && <figcaption className="p-2 text-xs opacity-80">{g.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-4">
          <div className="card p-5">
            <h4 className="text-sm font-semibold tracking-wide opacity-70">Tech</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>
          <div className="card p-5">
            <h4 className="text-sm font-semibold tracking-wide opacity-70">Links</h4>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {hasLive && (
                <a href={live} target="_blank" rel="noreferrer" className="btn btn-ghost">Live</a>
              )}
              {hasRepo && (
                <a href={repo} target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
              )}
              {!hasLive && !hasRepo && (
                <div className="text-xs opacity-70">Code/Live links not available — case study</div>
              )}
            </div>
          </div>
          {(contribution || role || teamSize) && (
            <div className="card p-5">
              <h4 className="text-sm font-semibold tracking-wide opacity-70">Contribution</h4>
              {role && <div className="mt-2 text-sm"><span className="opacity-70">Role:</span> {role}</div>}
              {teamSize && <div className="text-sm"><span className="opacity-70">Team:</span> {teamSize}</div>}
              {contribution && <p className="mt-2 text-sm opacity-90">{contribution}</p>}
            </div>
          )}
          <div className="card p-5">
            <h4 className="text-sm font-semibold tracking-wide opacity-70">More</h4>
            <p className="text-sm opacity-80">Have questions about this project or want a deeper walkthrough?</p>
            <div className="mt-3 flex gap-2">
              <Link href="/contact" className="btn btn-primary">Contact</Link>
              <Link href="/projects" className="btn btn-ghost">Back to projects</Link>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
