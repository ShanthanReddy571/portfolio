export default function Timeline({ items }) {
  return (
    <ol className="relative ml-4 border-l border-neutral-200 dark:border-neutral-800">
      {items.map((it, idx) => (
        <li key={idx} className="mb-8 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border bg-white dark:border-neutral-600 dark:bg-neutral-950" />
          <h3 className="text-base font-semibold tracking-tight">
            {it.role} · <span className="opacity-80">{it.company}</span>
          </h3>
          <p className="text-sm opacity-70">{it.period}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm opacity-90">
            {it.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

