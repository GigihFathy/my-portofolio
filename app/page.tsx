export default function Home() {
  const features = [
    {
      title: "Beautiful by default",
      description:
        "A premium landing page layout with strong typography, elegant spacing, and polished visual hierarchy.",
    },
    {
      title: "Fast and responsive",
      description:
        "Looks sharp on mobile, tablet, and desktop without extra effort.",
    },
    {
      title: "Built for your brand",
      description:
        "Easy to customize with your own name, colors, content, and call-to-action.",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Always on" },
    { value: "∞", label: "Creativity" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-white">
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.18),transparent_30%),linear-gradient(to_bottom,rgba(9,9,11,1),rgba(24,24,27,1))]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-3xl" />

        <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
          

          <div className="flex flex-1 flex-col items-center justify-center py-20">
            <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Crafted for impact, speed, and style
                </div>

                <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                  A magnificent homepage for your next big idea.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                  Replace the default Next.js starter with a bold, modern
                  experience that feels premium from the first glance.
                  "Ubah 1 halaman default Next.js dengan pengalaman yang berani dan modern yang terasa premium sejak pandangan pertama."
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-zinc-950 transition hover:scale-[1.02] hover:bg-zinc-200"
                  >
                    Explore the page
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                  >
                    Let us build it
                  </a>
                </div>

                <div className="mt-14 grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="mt-1 text-sm text-white/60">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2rem] bg-fuchsia-500/20 blur-2xl" />
                <div className="rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                  <div className="rounded-[1.6rem] border border-white/10 bg-zinc-950/60 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white/60">
                          Live experience
                        </p>
                        <h2 className="mt-1 text-2xl font-bold">Elegant. Clean. Premium.</h2>
                      </div>
                      <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                        Online
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4">
                      <div className="rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/10 p-4 ring-1 ring-white/10">
                        <p className="text-sm text-white/60">Headline</p>
                        <p className="mt-1 text-lg font-semibold text-white">
                          Designed to make your project feel alive.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                          <p className="text-sm text-white/60">Speed</p>
                          <p className="mt-2 text-2xl font-bold">Lightning</p>
                        </div>
                        <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                          <p className="text-sm text-white/60">Style</p>
                          <p className="mt-2 text-2xl font-bold">Luxury</p>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                        <p className="text-sm text-white/60">Message</p>
                        <p className="mt-2 leading-7 text-white/80">
                          “This is the kind of landing page that makes people
                          stay.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section
              id="features"
              className="mt-24 w-full border-t border-white/10 pt-16"
            >
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                    Features
                  </p>
                  <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Simple structure. Strong presence.
                  </h3>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {features.map((feature, index) => (
                  <article
                    key={feature.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/8"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 font-bold text-zinc-950">
                      0{index + 1}
                    </div>
                    <h4 className="text-xl font-semibold">{feature.title}</h4>
                    <p className="mt-3 leading-7 text-white/65">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="contact"
              className="mt-24 w-full rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10"
            >
              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                    Next step
                  </p>
                  <h3 className="mt-3 text-3xl font-bold">
                    Put your name, product, or portfolio here.
                  </h3>
                  <p className="mt-3 max-w-2xl text-white/65">
                    This layout is ready to become a personal site, startup
                    landing page, portfolio, or game-themed showcase.
                  </p>
                </div>

                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 font-semibold text-zinc-950 transition hover:scale-[1.02] hover:bg-zinc-200"
                >
                  hello@example.com
                </a>
              </div>
            </section>
          </div>

          <footer className="border-t border-white/10 py-6 text-center text-sm text-white/45">
            Built with Next.js and a stronger taste level.
          </footer>
        </section>
      </div>
    </main>
  );
}