"use client";

export default function TagFilter({ tags, selected, onChange }) {
  const toggle = (tag) => {
    const next = selected.includes(tag)
      ? selected.filter((t) => t !== tag)
      : [...selected, tag];
    onChange(next);
  };
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const active = selected.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => toggle(tag)}
            className={`chip ${active ? 'chip--active' : ''}`}
          >
            {tag}
          </button>
        );
      })}
      {selected.length > 0 && (
        <button
          onClick={() => onChange([])}
          className="chip"
        >
          Clear
        </button>
      )}
    </div>
  );
}
