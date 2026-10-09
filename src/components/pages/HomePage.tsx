import { FadeIn } from '../FadeIn';
import { AnimatedHeading } from '../AnimatedHeading';
import { PageId } from '../../types/portfolio';
import { portfolioProjects, articles } from '../../data/portfolioData';
import { ArrowRight, Sparkles, Code2, BookOpen } from 'lucide-react';

interface HomePageProps {
  onOpenChat: (topic?: string) => void;
  onExploreNow: () => void;
  onNavigate: (page: PageId) => void;
  onSelectProject: (projectId: string) => void;
  onSelectArticle: (articleId: string) => void;
}

export function HomePage({
  onOpenChat,
  onExploreNow,
  onNavigate,
  onSelectProject,
  onSelectArticle,
}: HomePageProps) {
  const featuredProjects = portfolioProjects.filter((p) => p.featured).slice(0, 2);
  const latestArticle = articles[0];

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between">
      {/* Exact Hero Content (Bottom of Viewport) */}
      <div className="px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16 relative z-10 w-full min-h-[calc(100vh-120px)]">
        <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
          {/* Left Column - Main content */}
          <div>
            {/* Heading with character-by-character entrance animation */}
            <AnimatedHeading
              text={'Shaping tomorrow\nwith vision and action.'}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 text-white"
            />

            {/* Subheading with 800ms fade-in */}
            <FadeIn delay={800} duration={1000} className="mb-5">
              <p className="text-base md:text-lg text-gray-300">
                We back visionaries and craft ventures that define what comes next.
              </p>
            </FadeIn>

            {/* Buttons Row with 1200ms fade-in */}
            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenChat('General')}
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Start a Chat
                </button>
                <button
                  onClick={onExploreNow}
                  className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  Explore Now
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Tag Card with 1400ms fade-in */}
          <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
            <FadeIn delay={1400} duration={1000}>
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <span className="text-lg md:text-xl lg:text-2xl font-light text-white tracking-wide">
                  Investing. Building. Advisory.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Below-the-fold Curated Highlights Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 py-16 bg-black/90 border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Personal Portfolio Overview</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white">
                Featured Architectures & Selected Thoughts
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('projects')}
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>All Projects (6)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Projects (2 cards) */}
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="liquid-glass border border-white/15 rounded-2xl p-6 flex flex-col justify-between hover:border-white/35 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <span className="uppercase tracking-wider">{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    {project.impactMetrics[0].label}:{' '}
                    <span className="text-white font-medium">{project.impactMetrics[0].value}</span>
                  </div>
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="flex items-center gap-1 text-xs text-white group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Latest Article Card */}
            {latestArticle && (
              <div className="liquid-glass border border-white/15 rounded-2xl p-6 flex flex-col justify-between hover:border-white/35 transition-all group">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <span className="uppercase tracking-wider">Latest Essay</span>
                    <span>{latestArticle.readTime}</span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {latestArticle.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {latestArticle.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{latestArticle.publishedDate}</span>
                  <button
                    onClick={() => onSelectArticle(latestArticle.id)}
                    className="flex items-center gap-1 text-xs text-white group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Read Thesis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Nav Badges */}
          <div className="p-6 rounded-2xl liquid-glass border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Explore the 5 Portfolio Tracks</div>
                <div className="text-xs text-gray-400">
                  Read full bio, explore 6 case studies, browse architectural writing, or initiate contact.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onNavigate('story')}
                className="px-3.5 py-1.5 rounded-lg text-xs border border-white/15 text-gray-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
              >
                Story & Bio
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-3.5 py-1.5 rounded-lg text-xs border border-white/15 text-gray-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
              >
                Projects & Code
              </button>
              <button
                onClick={() => onNavigate('writing')}
                className="px-3.5 py-1.5 rounded-lg text-xs border border-white/15 text-gray-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
              >
                Essays & Writing
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-3.5 py-1.5 rounded-lg text-xs bg-white text-black font-medium hover:bg-gray-200 transition-all cursor-pointer"
              >
                Direct Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
