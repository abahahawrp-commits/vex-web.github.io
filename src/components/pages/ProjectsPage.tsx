import { useState } from 'react';
import { portfolioProjects } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ArrowRight, Layers, ExternalLink, Github, Filter } from 'lucide-react';

interface ProjectsPageProps {
  onSelectProject: (projectId: string) => void;
  onOpenChat: (topic: string) => void;
}

export function ProjectsPage({ onSelectProject }: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Venture Systems',
    'AI & Data',
    'Developer Tools',
    'Frontend & Design',
  ];

  const filteredProjects = portfolioProjects.filter((project: Project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative z-10 px-6 md:px-12 lg:px-16 py-12 max-w-6xl mx-auto space-y-12 animate-fade-in text-white">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
          <Layers className="w-3.5 h-3.5 text-white" />
          <span>Building / Portfolio of Works</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
          Selected Systems & Venture Architectures
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
          Production systems, distributed protocols, and bespoke venture tooling engineered for high concurrency, zero latency, and extreme visual fidelity.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
        {/* Category Pills/Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-black'
                  : 'liquid-glass border border-white/10 text-gray-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[200px] sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects, tags..."
            className="w-full px-3.5 py-2 rounded-lg bg-black/50 border border-white/20 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-xs text-gray-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-16 text-center liquid-glass border border-white/10 rounded-2xl space-y-3">
          <Filter className="w-8 h-8 mx-auto text-gray-500" />
          <h3 className="text-lg font-medium text-white">No projects found</h3>
          <p className="text-xs text-gray-400">
            Try resetting your search query or choosing another category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-xs text-white underline pt-2 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="liquid-glass border border-white/15 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/35 transition-all group"
            >
              <div className="space-y-4">
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="uppercase tracking-wider">{project.category}</span>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-white font-medium">
                        Featured
                      </span>
                    )}
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white group-hover:text-gray-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {project.impactMetrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-black/40 border border-white/10 rounded-lg p-2.5"
                    >
                      <div className="text-[10px] text-gray-400 uppercase tracking-tight">
                        {metric.label}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-white mt-0.5">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-400 hover:text-white transition-colors"
                      title="Direct Link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-gray-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => onSelectProject(project.id)}
                  className="flex items-center gap-1.5 text-xs sm:text-sm text-white font-medium hover:text-gray-200 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Case Study & Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
