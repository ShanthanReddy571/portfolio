export default function Logo() {
  return (
    <div
      aria-hidden
      className="group relative grid h-9 w-9 place-items-center rounded-xl border transition-transform"
      style={{
        background: "linear-gradient(135deg, var(--card), rgba(99,102,241,.18))",
        borderColor: "var(--border)",
        color: "var(--fg)",
      }}
    >
      {/* subtle glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-60"
        style={{
          background:
            "radial-gradient(16px 16px at 50% 50%, rgba(99,102,241,.35), transparent 60%)",
        }}
      />
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="relative"
      >
        <polyline points="9 7 5 12 9 17" />
        <polyline points="15 7 19 12 15 17" />
        <line x1="12" y1="6" x2="12" y2="18" />
      </svg>
    </div>
  );
}
