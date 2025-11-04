import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const hasLive = project.live && project.live !== "#";
  const hasRepo = project.repo && project.repo !== "#";
  return (
    <div className="group card hover:border-neutral-400 dark:hover:border-neutral-600">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        {project.image ? (
          project.image.endsWith?.(".svg") ? (
            <img
              src={project.image}
              alt={`${project.title} cover`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <Image
              src={project.image}
              alt={`${project.title} cover`}
              fill
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          )
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-700 dark:to-neutral-900" />
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm opacity-80">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 text-sm">
        {hasLive && (
          <a href={project.live} target="_blank" rel="noreferrer" className="underline underline-offset-4">
            Live
          </a>
        )}
        {hasRepo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="underline underline-offset-4">
            GitHub
          </a>
        )}
        <Link href={`/projects/${project.slug}`} className="opacity-80 hover:opacity-100">
          Details →
        </Link>
      </div>
    </div>
  );
}




