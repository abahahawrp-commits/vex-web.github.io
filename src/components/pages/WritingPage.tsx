import { useState } from 'react';
import { articles } from '../../data/portfolioData';
import { Article } from '../../types/portfolio';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface WritingPageProps {
  onSelectArticle: (articleId: string) => void;
  onOpenChat: (topic: string) => void;
}

export function WritingPage({ onSelectArticle, onOpenChat }: WritingPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Architecture', 'Systems', 'Design', 'Venture'];

  const filteredArticles = articles.filter((a: Article) => {
    return selectedCategory === 'All' || a.category === selectedCategory;
  });

  return (
    <div className="relative z-10 px-6 md:px-12 lg:px-16 py-12 max-w-5xl mx-auto space-y-12 animate-fade-in text-white">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
          <BookOpen className="w-3.5 h-3.5 text-white" />
          <span>Writing / Architectural Insights</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
          Essays on Systems, Design & Venture Architecture
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
          Critical thoughts on engineering discipline, distributed systems performance, venture mechanics, and visual ergonomics.
        </p>
      </div>

      {/* Category filter tabs */}
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

      {/* Articles List */}
      <div className="space-y-6">
        {filteredArticles.map((article: Article) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article.id)}
            className="liquid-glass border border-white/15 rounded-2xl p-6 sm:p-8 hover:border-white/35 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Meta bar */}
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="uppercase tracking-wider font-medium text-white/80">
                  {article.category}
                </span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.publishedDate}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-medium text-white group-hover:text-gray-100 transition-colors leading-snug">
                {article.title}
              </h2>

              {/* Summary */}
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                {article.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {article.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-gray-400 hover:text-gray-200"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Read action */}
            <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-400">Click to read complete thesis</span>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-white font-medium group-hover:translate-x-1 transition-transform">
                <span>Read Full Essay</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter / Publication Note */}
      <div className="p-8 rounded-2xl liquid-glass border border-white/10 bg-black/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs uppercase tracking-widest text-gray-400">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Syndicated Publications</span>
          </div>
          <h3 className="text-xl font-normal text-white">
            Have a counter-thesis or architectural challenge?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md">
            I regularly discuss systems design, zero-latency protocols, and venture models with other technical operators.
          </p>
        </div>

        <button
          onClick={() => onOpenChat('Architectural Discussion')}
          className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors shrink-0 cursor-pointer"
        >
          Discuss Ideas
        </button>
      </div>
    </div>
  );
}
