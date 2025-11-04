"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

const TagFilter = forwardRef(function TagFilter({ tags, selected, onChange, hideClear = false, onScrollState }, ref) {
  const scrollerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const toggle = (tag) => {
    const next = selected.includes(tag)
      ? selected.filter((t) => t !== tag)
      : [...selected, tag];
    onChange(next);
  };

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 1);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [tags]);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.max(240, Math.floor(el.clientWidth * 0.6));
    el.scrollBy({ left: dir * step, behavior: "smooth" });
    setTimeout(updateArrows, 250);
  };

  useImperativeHandle(ref, () => ({
    scrollLeft: () => scrollBy(-1),
    scrollRight: () => scrollBy(1),
  }));

  useEffect(() => {
    onScrollState?.({ left: showLeft, right: showRight });
  }, [showLeft, showRight, onScrollState]);

  const onWheel = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  const canClear = selected.length > 0;

  return (
    <div className="relative w-full mt-2">
      <div
        ref={scrollerRef}
        onWheel={onWheel}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar touch-pan-x flex-nowrap w-full max-w-full pr-1 pl-2 py-1"
        role="listbox"
        aria-label="Project tags"
      >
        {!hideClear && (
          <button
            type="button"
            title="Clear filters"
            aria-label="Clear filters"
            disabled={!canClear}
            onClick={() => onChange([])}
            className={`btn ${canClear ? 'btn-primary' : 'btn-ghost'} text-xs disabled:opacity-50 shrink-0`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            Clear
          </button>
        )}
        {tags.map((tag) => {
          const active = selected.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggle(tag)}
              className={`chip ${active ? 'chip--active' : ''} shrink-0`}
              type="button"
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
});

export default TagFilter;
