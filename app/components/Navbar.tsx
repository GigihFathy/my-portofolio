import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 text-sm font-bold shadow-lg shadow-fuchsia-500/30">
            F
            </div>
            <div>
            <p className="text-sm font-semibold tracking-wide text-white">
                Fathy Studio
            </p>
            <p className="text-xs text-white/60">Creative web presence</p>
            </div>
        </div>

        <div className="flex gap-2">
            <a
            href="/"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
            Home
            </a> 
            <a
            href="/about"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
            About
            </a> 
            <a
            href="/contact"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
            Contact
            </a>
        </div>
    </header>
  );
}