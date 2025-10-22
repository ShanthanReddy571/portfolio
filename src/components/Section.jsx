export default function Section({ id, title, action, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        {title !== null && (
          <div className="section-header group flex items-center justify-between gap-3">
            <h2 className="section-title text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
            {action ? <div className="shrink-0">{action}</div> : null}
          </div>
        )}
        {title !== null && <div className="section-underline" />}
        <div className="mt-6 sm:mt-8">{children}</div>
      </div>
    </section>
  );
}
