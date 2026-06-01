import { Mail,  Linkedin, MapPin, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionHeader } from './Skills';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aishaehsan0@gmail.com',
    href: 'mailto:aishaehsan0@gmail.com',
    color: 'sky',
  },
  // {
  //   icon: Phone,
  //   label: 'Phone',
  //   value: '+92 336 501 0495',
  //   href: 'tel:+923365010495',
  //   color: 'cyan',
  // },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ayesha',
    href: 'https://linkedin.com',
    color: 'teal',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Rawalpindi, Pakistan',
    href: null,
    color: 'emerald',
  },
];

const colorStyles: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  sky: { bg: 'hover:bg-sky-500/8', border: 'border-sky-500/20', text: 'text-sky-400', iconBg: 'bg-sky-500/10' },
  cyan: { bg: 'hover:bg-cyan-500/8', border: 'border-cyan-500/20', text: 'text-cyan-400', iconBg: 'bg-cyan-500/10' },
  teal: { bg: 'hover:bg-teal-500/8', border: 'border-teal-500/20', text: 'text-teal-400', iconBg: 'bg-teal-500/10' },
  emerald: { bg: 'hover:bg-emerald-500/8', border: 'border-emerald-500/20', text: 'text-emerald-400', iconBg: 'bg-emerald-500/10' },
};

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Contact" sub="Let's work together" inView={inView} />

        <div
          className={`mt-10 text-center transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed mb-12">
            I'm open to new opportunities, collaborations, and interesting projects.
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            const s = colorStyles[c.color];
            const inner = (
              <>
                <div className={`w-10 h-10 rounded-xl ${s.iconBg} border ${s.border} flex items-center justify-center shrink-0`}>
                  <Icon size={18} className={s.text} />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-mono mb-0.5">{c.label}</div>
                  <div className={`font-medium text-sm ${c.href ? s.text : 'text-slate-300'}`}>{c.value}</div>
                </div>
              </>
            );

            return c.href ? (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`card-hover flex items-center gap-4 p-5 rounded-xl bg-slate-900/60 border ${s.border} ${s.bg} transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                {inner}
              </a>
            ) : (
              <div
                key={i}
                className={`flex items-center gap-4 p-5 rounded-xl bg-slate-900/60 border ${s.border} transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                {inner}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="mailto:aishaehsan0@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/25 hover:-translate-y-1 active:translate-y-0"
          >
            <Send size={16} />
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
