import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <Section id="home" title={null}>
        <div className="hero-wrap">
          <div className="kicker">Full-Stack | Next.js | TypeScript</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl gradient-text">
            Shanthan Reddy Singadi
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg opacity-90 dark:opacity-85">
            I craft fast, accessible web experiences with a sharp eye for detail. Clean UI, smooth UX, and maintainable code — from idea to production.
          </p>
        </div>
      </Section>

      {/* Skills moved to a dedicated page at /skills */}
    </>
  );
}



