import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionHeader } from './Skills';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Ideofuzion',
    location: 'Islamabad',
    period: 'Aug 2022 – Present',
    type: 'Full-time',
    description: 'A company specializing in developing web and mobile applications.',
    points: [
      'Built scalable, responsive web applications using ReactJS, NextJS, and Angular with cross-browser compatibility',
      'Designed component-based architecture to improve maintainability and scalability',
      'Developed and integrated RESTful APIs for efficient frontend-backend communication',
      'Optimized application performance, reducing load times and improving user experience',
      'Developed Web3 dApps on Ethereum and Solana with smart contract interactions',
      'Collaborated with cross-functional teams to deliver production-ready solutions',
    ],
    tags: ['ReactJS', 'NextJS', 'Angular', 'TypeScript', 'Web3', 'Ethereum', 'Solana'],
    current: true,
  },
  {
    role: 'Frontend Developer',
    company: 'Jarvis AI',
    location: 'Remote, Dubai',
    period: 'Jan 2025 – Mar 2025',
    type: 'Remote',
    description: 'A remote tech company focusing on AI-driven solutions.',
    points: [
      'Developed and maintained scalable frontend architecture for AI-based applications using ReactJS',
      'Built responsive, high-performance UI components for real-time user interactions',
      'Integrated Solana SDK for blockchain-based features and smooth wallet interactions',
      'Improved application performance and code quality through optimization and best practices',
      'Worked closely with backend and product teams to deliver user-centric features',
    ],
    tags: ['ReactJS', 'Solana SDK', 'AI', 'Performance'],
    current: false,
  },
  {
    role: 'SAP Consultant',
    company: 'Project Mann Packing',
    location: 'Remote',
    period: 'Aug 2021 – May 2022',
    type: 'Remote',
    description: '',
    points: [
      'Developed interactive ALV reports and built function modules to enhance system capabilities',
    ],
    tags: ['SAP', 'ALV Reports', 'ABAP'],
    current: false,
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Experience" sub="Professional journey" inView={inView} />

        <div className="mt-14 relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-slate-700/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-16 md:pl-20 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Dot */}
                <div className={`absolute left-4 md:left-6 top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  exp.current
                    ? 'border-sky-400 bg-sky-500/20 shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                    : 'border-slate-600 bg-slate-800'
                }`}>
                  {exp.current && <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />}
                </div>

                <div className="card-hover p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Briefcase size={13} className="text-sky-400" />
                        <span className="text-sky-400 font-semibold text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-slate-500 font-mono shrink-0">
                      <div className="flex items-center gap-1">
                        <Calendar size={11} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={11} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-slate-500 text-sm mb-4 italic">{exp.description}</p>
                  )}

                  <ul className="space-y-2 mb-5">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                        <span className="text-sky-500 mt-1 shrink-0">▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-sky-500/8 border border-sky-500/20 text-sky-400 text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
