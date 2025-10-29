export default function ExperienceCard({ item }) {
  const { company, role, location, period, category, highlights = [], tech = [], metrics = [] } = item;
  return (
    <div className="card p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-sm opacity-70">{company}{location ? ` · ${location}` : ''}</div>
          <div className="text-base font-semibold tracking-tight">{role}</div>
        </div>
        <div className="flex items-center gap-2">
          {category && <span className="badge text-xs">{category}</span>}
          <span className="chip text-xs">{period}</span>
        </div>
      </div>
      {metrics.length > 0 && (
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">
          {metrics.map((m, i) => (
            <div key={i} className="card p-2">
              <div className="opacity-70">{m.label}</div>
              <div className="font-medium">{m.value}</div>
            </div>
          ))}
        </div>
      )}
      {highlights.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm opacity-90">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
      {tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {tech.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}

