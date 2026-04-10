import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Fathy Studio",
  description: "Get in touch to discuss your next website, product launch, or portfolio project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-white">
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.25),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_30%),linear-gradient(to_bottom,rgba(9,9,11,1),rgba(24,24,27,1))]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-linear-to-b from-rose-500/10 to-transparent blur-3xl" />

        <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">

          <div className="flex flex-1 items-center py-12 sm:py-16">
            <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
              <div className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                  Contact
                </p>
                <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                  Tell us what you are building.
                </h1>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                  Share your project goals, timeline, and references. You will get
                  a thoughtful response with direction, scope, and next steps.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a
                    href="mailto:hello@example.com"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">Email</p>
                    <p className="mt-2 text-base font-semibold text-white">
                      hello@example.com
                    </p>
                  </a>

                  <a
                    href="https://cal.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">Schedule</p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Book a discovery call
                    </p>
                  </a>
                </div>

                <div className="mt-8 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm text-emerald-200">
                  Usually replying in under 24 hours.
                </div>
              </div>

              <form className="rounded-4xl border border-white/10 bg-zinc-900/70 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
                <div className="grid gap-5">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-white/80">Your name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Alex Fathy"
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-orange-300/60"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-white/80">Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="alex@email.com"
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-orange-300/60"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-white/80">Project type</span>
                    <select
                      name="projectType"
                      defaultValue=""
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none ring-0 transition focus:border-orange-300/60"
                    >
                      <option value="" disabled className="bg-zinc-900 text-white/40">
                        Select one
                      </option>
                      <option value="portfolio" className="bg-zinc-900">Portfolio</option>
                      <option value="landing-page" className="bg-zinc-900">Landing page</option>
                      <option value="business-site" className="bg-zinc-900">Business site</option>
                      <option value="other" className="bg-zinc-900">Other</option>
                    </select>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-white/80">Message</span>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Give a short brief of your project..."
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-orange-300/60"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center rounded-full bg-linear-to-r from-rose-400 via-orange-300 to-sky-300 px-6 py-3.5 text-base font-semibold text-zinc-900 transition hover:scale-[1.01]"
                  >
                    Send message
                  </button>

                  <p className="text-xs leading-5 text-white/50">
                    This demo form is UI-only. For real submissions, connect it to
                    an API route, email service, or form backend.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
