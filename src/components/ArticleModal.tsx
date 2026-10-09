import { X, Clock, Calendar, ArrowRight, Share2, Check } from 'lucide-react';
import { useState } from 'react';
import { Article } from '../types/portfolio';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire: (articleTitle: string) => void;
}

export function ArticleModal({
  article,
  isOpen,
  onClose,
  onInquire,
}: ArticleModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-2xl rounded-2xl liquid-glass border border-white/20 p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Top actions */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="uppercase tracking-wider">{article.category}</span>
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

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Copy share link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Content */}
        <div className="overflow-y-auto pr-1 sm:pr-2 pt-6 pb-2 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <div className="p-4 rounded-xl liquid-glass border border-white/15 bg-black/40 text-sm text-gray-300 italic border-l-2 border-l-white">
            "{article.summary}"
          </div>

          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">
              Topic Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author footer */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/10">
            <div>
              <div className="text-xs text-gray-400">Written by</div>
              <div className="text-sm font-medium text-white">Alexander Vex</div>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(`Regarding article: "${article.title}"`);
              }}
              className="flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span>Discuss This Thesis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
