import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ArrowRight } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export function ProjectCaseStudyModal({
  project,
  isOpen,
  onClose,
  onInquire,
}: ProjectCaseStudyModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-3xl rounded-2xl liquid-glass border border-white/20 p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Body */}
        <div className="overflow-y-auto pr-1 sm:pr-2 space-y-6 pt-1">
          {/* Header Metadata */}
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
              <span className="uppercase tracking-wider">{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Impact Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.impactMetrics.map((metric, i) => (
              <div
                key={i}
                className="liquid-glass border border-white/10 rounded-xl p-3.5 bg-black/40"
              >
                <div className="text-xs text-gray-400">{metric.label}</div>
                <div className="text-lg sm:text-xl font-medium text-white mt-1">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Deep Overview */}
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-wider text-gray-400 font-medium">
              System Overview
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="liquid-glass border border-white/10 rounded-xl p-4 bg-black/30">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                <Cpu className="w-4 h-4 text-gray-400" />
                <span>The Architectural Bottleneck</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="liquid-glass border border-white/10 rounded-xl p-4 bg-black/30">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Architecture Pillars */}
          <div>
            <h3 className="flex items-center gap-2 text-sm uppercase tracking-wider text-gray-400 font-medium mb-3">
              <Layers className="w-4 h-4 text-white" />
              <span>Core Architectural Highlights</span>
            </h3>
            <ul className="space-y-2">
              {project.architecture.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                >
                  <span className="text-white mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
              Technologies & Tooling
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-white hover:text-gray-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Repository / Specification</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span>Discuss Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
