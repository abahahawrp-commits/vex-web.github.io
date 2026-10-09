import { personalBio, careerTimeline } from '../../data/portfolioData';
import { PageId } from '../../types/portfolio';
import { ArrowRight, Compass, Shield, Terminal, Briefcase, Award } from 'lucide-react';

interface StoryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenChat: (topic: string) => void;
}

export function StoryPage({ onNavigate, onOpenChat }: StoryPageProps) {
  return (
    <div className="relative z-10 px-6 md:px-12 lg:px-16 py-12 max-w-6xl mx-auto space-y-16 animate-fade-in text-white">
      {/* Bio Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
          <Compass className="w-3.5 h-3.5 text-white" />
          <span>About / Personal Narrative</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
          Engineering scalable foundations for the next technological paradigm.
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
          {personalBio.summary}
        </p>

        {/* Action buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onOpenChat('Advisory')}
            className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Start a Collaboration
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="liquid-glass border border-white/20 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>View Shipped Systems</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Impact Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {personalBio.stats.map((stat, i) => (
          <div
            key={i}
            className="liquid-glass border border-white/10 rounded-xl p-4 sm:p-5 bg-black/40"
          >
            <div className="text-xs text-gray-400">{stat.label}</div>
            <div className="text-2xl sm:text-3xl font-medium text-white mt-1">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Principles */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
          <Shield className="w-3.5 h-3.5 text-white" />
          <span>Core Principles</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {personalBio.principles.map((p, i) => (
            <div
              key={i}
              className="liquid-glass border border-white/10 rounded-xl p-6 bg-black/30 space-y-2"
            >
              <div className="text-xs font-mono text-gray-400">0{i + 1}</div>
              <h3 className="text-base sm:text-lg font-medium text-white">{p.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Timeline / Experience */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Briefcase className="w-3.5 h-3.5 text-white" />
            <span>Career Experience & Milestones</span>
          </div>
          <span className="text-xs text-gray-400">2016 — 2026</span>
        </div>

        <div className="space-y-4">
          {careerTimeline.map((item, idx) => (
            <div
              key={idx}
              className="liquid-glass border border-white/10 rounded-2xl p-6 bg-black/30 hover:border-white/25 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div className="text-lg font-medium text-white flex items-center gap-2">
                  <span>{item.role}</span>
                  <span className="text-gray-400 font-light">@ {item.company}</span>
                </div>
                <div className="text-xs font-mono text-gray-400">{item.period}</div>
              </div>

              <div className="text-xs text-gray-400 mb-3">{item.location}</div>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Achievements */}
              <div className="space-y-1.5 mb-4">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <span className="text-white mt-1">•</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Skills used */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Arsenal Grid */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
          <Terminal className="w-3.5 h-3.5 text-white" />
          <span>Technical Arsenal</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(personalBio.techArsenal).map(([category, items]) => (
            <div
              key={category}
              className="liquid-glass border border-white/10 rounded-xl p-5 bg-black/30 space-y-3"
            >
              <h4 className="text-xs font-medium uppercase tracking-wider text-gray-300 border-b border-white/10 pb-2">
                {category}
              </h4>
              <ul className="space-y-1.5">
                {items.map((it) => (
                  <li key={it} className="text-xs sm:text-sm text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Card */}
      <div className="p-8 rounded-2xl liquid-glass border border-white/20 bg-black/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Award className="w-3.5 h-3.5 text-white" />
            <span>Open for Selective Advisory & Venture Roles</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-normal text-white">
            Have an ambitious system to architect?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md">
            Whether preparing for institutional scale or launching a zero-to-one venture, let's connect.
          </p>
        </div>

        <button
          onClick={() => onOpenChat('Venture Advisory')}
          className="bg-white text-black px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors shrink-0 cursor-pointer"
        >
          Initiate Dialogue
        </button>
      </div>
    </div>
  );
}
