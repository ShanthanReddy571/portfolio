"use client";

export default function TagFilter({ tags, selected, onChange }) {
  const toggle = (tag) => {
    const next = selected.includes(tag)
      ? selected.filter((t) => t !== tag)
      : [...selected, tag];
    onChange(next);
  };
  const canClear = selected.length > 0;
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        title="Clear filters"
        aria-label="Clear filters"
        disabled={!canClear}
        onClick={() => onChange([])}
        className={`btn ${canClear ? 'btn-primary' : 'btn-ghost'} text-xs disabled:opacity-50`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
        Clear
      </button>
      {tags.map((tag) => {
        const active = selected.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => toggle(tag)}
            className={`chip ${active ? 'chip--active' : ''}`}
            type="button"
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
