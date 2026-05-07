import { GraduationCap, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SectionHeader } from './Skills';

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="Education" sub="Academic background" inView={inView} />

        <div
          className={`mt-14 card-hover group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500/8 to-blue-500/4 border border-sky-500/20 p-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
              <GraduationCap size={28} className="text-sky-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl mb-1">BS Computer Science</h3>
              <p className="text-sky-400 font-semibold text-base mb-2">UET Taxila</p>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
                <Calendar size={13} />
                <span>2016 – 2020</span>
              </div>
            </div>
            <div className="shrink-0">
              <div className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-center">
                <div className="text-sky-400 font-bold text-2xl font-mono">4</div>
                <div className="text-slate-500 text-xs">Years</div>
              </div>
            </div>
          </div>

          {/* Decorative */}
          <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-sky-500/4 blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
