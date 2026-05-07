import { useRef, useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

const skillGroups = [
  {
    label: "Frontend",
    color: "sky",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Angular", level: 80 },
      { name: "JavaScript ES6+", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    label: "Backend",
    color: "cyan",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "NestJS", level: 65 },
    ],
  },
  {
    label: "UI & Tools",
    color: "teal",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "MUI", level: 85 },
      { name: "Git", level: 95 },
      { name: "Figma", level: 95 },
    ],
  },
  {
    label: "Web3",
    color: "emerald",
    skills: [
      { name: "Ethereum", level: 78 },
      { name: "Solana", level: 75 },
      { name: "Metamask / Wallets", level: 82 },
    ],
  },
];

const colorMap: Record<string, string> = {
  sky: "bg-sky-500",
  cyan: "bg-cyan-500",
  teal: "bg-teal-500",
  emerald: "bg-emerald-500",
};

const textColorMap: Record<string, string> = {
  sky: "text-sky-400",
  cyan: "text-cyan-400",
  teal: "text-teal-400",
  emerald: "text-emerald-400",
};

const borderColorMap: Record<string, string> = {
  sky: "border-sky-500/30",
  cyan: "border-cyan-500/30",
  teal: "border-teal-500/30",
  emerald: "border-emerald-500/30",
};

function SkillBar({
  name,
  level,
  color,
  animate,
}: {
  name: string;
  level: number;
  color: string;
  animate: boolean;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span
          className={`${textColorMap[color]} text-xs font-mono font-semibold`}
        >
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorMap[color]} rounded-full skill-progress`}
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Skills"
          sub="Technologies I work with"
          inView={inView}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className={`card-hover p-6 rounded-2xl bg-slate-900/60 border ${borderColorMap[group.color]} backdrop-blur-sm transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3
                className={`${textColorMap[group.color]} font-semibold text-sm font-mono uppercase tracking-wider mb-5`}
              >
                {group.label}
              </h3>
              {group.skills.map((s) => (
                <SkillBar
                  key={s.name}
                  {...s}
                  color={group.color}
                  animate={inView}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  sub,
  inView,
}: {
  title: string;
  sub: string;
  inView: boolean;
}) {
  return (
    <div
      className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <span className="text-sky-400 font-mono text-sm tracking-widest uppercase">
        {sub}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-sky-500" />
        <div className="w-2 h-2 rounded-full bg-sky-400" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-sky-500" />
      </div>
    </div>
  );
}

export { useRef, useEffect, useState };
