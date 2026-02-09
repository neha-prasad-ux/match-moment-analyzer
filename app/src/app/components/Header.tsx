"use client";

const navLinks = [
  { label: "Situation", href: "#situation" },
  { label: "Gamble", href: "#gamble" },
  { label: "Posture", href: "#posture" },
  { label: "Insights", href: "#insights" },
  { label: "Choice", href: "#choice" },
  { label: "Stability", href: "#stability" },
  { label: "Verdict", href: "#verdict" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-gray-700/60">
      <div className="h-16 flex items-center gap-4 px-6 md:px-8">
        <div className="w-9 h-9 bg-teal rounded-[10px] flex items-center justify-center font-mono font-bold text-sm text-bg shrink-0 shadow-[0_0_16px_rgba(0,200,150,0.25)]">
          MA
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-base font-bold tracking-tight text-white">
            Match Moment Analyzer
          </div>
          <div className="text-xs text-gray-400 truncate hidden sm:block">
            Analysis of final world cup match between Srilanka &amp; India
          </div>
        </div>
        <div className="text-[0.65rem] font-semibold tracking-widest uppercase text-teal bg-teal-dim px-3 py-1.5 rounded-md whitespace-nowrap border border-teal/20">
          Video analysis
        </div>
      </div>
      <nav className="flex items-center gap-1 px-6 md:px-8 pb-2 overflow-x-auto scrollbar-hide">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs text-gray-400 hover:text-teal px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
