export default function BadgeList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span key={i} className="rounded-full border px-2 py-0.5 text-xs opacity-80 dark:border-neutral-700">
          {i}
        </span>
      ))}
    </div>
  );
}

