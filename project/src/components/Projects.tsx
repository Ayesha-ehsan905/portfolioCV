import { ExternalLink, Shield, MessageSquare, Bot, Wallet } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./Skills";

const projects = [
  {
    title: "DLT Alert",
    icon: Shield,
    desc: "Blockchain-based insurance platform using React & Web3, enabling automated claim processing via smart contracts.",
    tags: ["React", "MUI", "Web3", "Smart Contracts", "Blockchain"],
    href: "https://www.dltalert.com/",
    color: "sky",
    gradient: "from-sky-500/10 to-blue-500/5",
    border: "border-sky-500/20",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
  },
  {
    title: "Pink3",
    icon: Bot,
    desc: "Web3 CRM & growth platform with AI automation.",
    tags: ["Web3", "CRM", "AI", "Automation"],
    href: "https://pink3.io/",
    color: "teal",
    gradient: "from-teal-500/10 to-emerald-500/5",
    border: "border-teal-500/20",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
  },
  {
    title: "NFT Marketplace",
    icon: Wallet,
    desc: "NFT marketplace experience focused on discovery, collection browsing, and a clean, conversion-friendly UX.",
    tags: ["NFT", "Stitiches", "Marketplace", "Web3", "UX"],
    href: "https://v2.pfpvault.com/collection/1",
    color: "emerald",
    gradient: "from-emerald-500/10 to-green-500/5",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    title: "Telegram Mini Apps",
    icon: MessageSquare,
    desc: "Multiplayer trading app with Tron wallet integration, copy trading and snipe trading features.",
    tags: ["React", "Stitiches", "Tron", "Wallet", "Trading", "Web3"],
    color: "cyan",
    gradient: "from-cyan-500/10 to-teal-500/5",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    title: "Jarvis AI",
    icon: Bot,
    desc: "AI-driven trading agents automating DeFi liquidity management at Jarvis.fun with real-time market intelligence.",
    tags: ["React", "Tailwind ", "AI", "DeFi", "Solana", "Automation"],
    color: "teal",
    gradient: "from-teal-500/10 to-emerald-500/5",
    border: "border-teal-500/20",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
  },
  {
    title: "Senet Wallet",
    icon: Wallet,
    desc: "NFT marketplace enabling token trading, withdrawals, and swaps across Solana, Ethereum, and USD.",
    tags: ["Solana", "Ethereum", "NFT", "Marketplace", "DeFi"],
    color: "emerald",
    gradient: "from-emerald-500/10 to-green-500/5",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
];

const tagTextMap: Record<string, string> = {
  sky: "text-sky-400 border-sky-500/20 bg-sky-500/8",
  cyan: "text-cyan-400 border-cyan-500/20 bg-cyan-500/8",
  teal: "text-teal-400 border-teal-500/20 bg-teal-500/8",
  emerald: "text-emerald-400 border-emerald-500/20 bg-emerald-500/8",
};

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/8 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Projects"
          sub="Things I've built"
          inView={inView}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`group card-hover relative overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient} border ${p.border} backdrop-blur-sm p-6 transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${p.iconBg} border ${p.border} flex items-center justify-center`}
                  >
                    <Icon size={22} className={p.iconColor} />
                  </div>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title} project link`}
                      className="text-slate-600 hover:text-slate-300 group-hover:text-slate-400 transition-colors mt-1"
                    >
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <ExternalLink
                      size={16}
                      className="text-slate-700/70 mt-1"
                    />
                  )}
                </div>

                <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-0.5 rounded-md border text-xs font-mono ${tagTextMap[p.color]}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Hover shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
