import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Code2 size={14} className="text-sky-400" />
          <span className="font-mono text-sky-400">ayesha.dev</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Built with</span>
          <Heart size={12} className="text-rose-400 fill-rose-400 mx-1" />
          <span>React, TypeScript & Tailwind</span>
        </div>
        <div className="font-mono text-xs">© 2025 Ayesha</div>
      </div>
    </footer>
  );
}
