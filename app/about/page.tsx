export default function About() {
  const principles = [
    {
      title: "Clarity over noise",
      description:
        "Every interface and system should communicate instantly. If users think too much, the design failed.",
    },
    {
      title: "Systems thinking",
      description:
        "Good products aren’t just pretty—they are structured, scalable, and logically consistent.",
    },
    {
      title: "Execution matters",
      description:
        "Ideas are common. Clean execution, speed, and iteration are what create leverage.",
    },
  ];

  const timeline = [
    {
      year: "Start",
      title: "Foundation",
      description:
        "Built core skills in development, design, and problem solving.",
    },
    {
      year: "Growth",
      title: "Exploration",
      description:
        "Experimented with projects, refined taste, and improved technical depth.",
    },
    {
      year: "Now",
      title: "Focused Direction",
      description:
        "Building high-quality digital experiences with clear intent and strong identity.",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <section className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            About
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Not just a developer.
            <br />
            A builder of systems and experiences.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            This page shouldn’t be treated as a biography. It’s positioning.
            Anyone can list skills. The goal here is to communicate how you
            think, how you build, and why your work has leverage.
          </p>
        </section>

        {/* Profile Card */}
        <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold">Who you are</h2>
            <p className="mt-4 leading-7 text-white/70">
              You are building toward mastery in digital product creation—
              combining development, design, and structured thinking. Your focus
              is not just shipping features, but creating systems that feel
              intentional, efficient, and refined.
            </p>
            <p className="mt-4 leading-7 text-white/70">
              You are particularly interested in areas like game theory,
              interaction design, and decision systems—where logic meets user
              behavior.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/10 p-8">
            <h2 className="text-2xl font-semibold">What you do</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              <li>• Build modern web applications</li>
              <li>• Design clean, high-impact interfaces</li>
              <li>• Think in systems, not isolated features</li>
              <li>• Optimize for clarity, speed, and scalability</li>
            </ul>
          </div>
        </section>

        {/* Principles */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Principles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-white/65 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold">Trajectory</h2>
          <div className="mt-8 space-y-6">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm font-semibold text-white/40 w-20">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-white/65">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="text-2xl font-semibold">
            If you're building something meaningful, let's connect.
          </h2>
          <p className="mt-4 text-white/65">
            Replace this with your real contact, portfolio links, or product.
            Don’t leave it vague—this is where conversion happens.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-zinc-950 hover:bg-zinc-200"
          >
            Contact Me
          </a>
        </section>
      </div>
    </main>
  );
}