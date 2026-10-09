/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/pages/HomePage';
import { StoryPage } from './components/pages/StoryPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { WritingPage } from './components/pages/WritingPage';
import { ContactPage } from './components/pages/ContactPage';
import { ChatModal } from './components/ChatModal';
import { ExploreModal } from './components/ExploreModal';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ArticleModal } from './components/ArticleModal';
import { PageId, Project, Article } from './types/portfolio';
import { portfolioProjects, articles } from './data/portfolioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatTopic, setChatTopic] = useState('General');
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [exploreTab, setExploreTab] = useState<'Story' | 'Investing' | 'Building' | 'Advisory'>('Story');

  // Selected case study and article modal states
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'story', 'projects', 'writing', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenChat = (topic = 'General') => {
    setChatTopic(topic);
    setIsChatOpen(true);
  };

  const handleExploreNow = () => {
    setExploreTab('Story');
    setIsExploreOpen(true);
  };

  const selectedProject: Project | null =
    portfolioProjects.find((p) => p.id === selectedProjectId) || null;

  const selectedArticle: Article | null =
    articles.find((a) => a.id === selectedArticleId) || null;

  return (
    <main className="relative min-h-screen w-full flex flex-col bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Thin, white scroll progress indicator at the very top */}
      <ScrollProgressBar watchKey={currentPage} />

      {/* Full-screen Background Video (plays raw, no overlay on hero) */}
      <video
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* When not on Home, apply a subtle dark backdrop for optimal readability on content pages */}
      {currentPage !== 'home' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md pointer-events-none z-0 animate-fade-in" />
      )}

      {/* Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenChat={() => handleOpenChat('General')}
      />

      {/* 5 Portfolio Pages */}
      <div className="relative z-10 flex-1 flex flex-col">
        {currentPage === 'home' && (
          <HomePage
            onOpenChat={handleOpenChat}
            onExploreNow={handleExploreNow}
            onNavigate={navigateTo}
            onSelectProject={(id) => setSelectedProjectId(id)}
            onSelectArticle={(id) => setSelectedArticleId(id)}
          />
        )}

        {currentPage === 'story' && (
          <StoryPage
            onNavigate={navigateTo}
            onOpenChat={(topic) => handleOpenChat(topic)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onSelectProject={(id) => setSelectedProjectId(id)}
            onOpenChat={(topic) => handleOpenChat(topic)}
          />
        )}

        {currentPage === 'writing' && (
          <WritingPage
            onSelectArticle={(id) => setSelectedArticleId(id)}
            onOpenChat={(topic) => handleOpenChat(topic)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onOpenChat={(topic) => handleOpenChat(topic)} />
        )}
      </div>

      {/* Global Footer (shown on all pages) */}
      <footer className="relative z-20 px-6 md:px-12 lg:px-16 py-8 border-t border-white/10 bg-black/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold tracking-tight">VEX</span>
            <span>•</span>
            <span>© 2026 Alexander Vex. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigateTo('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('story')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Story
            </button>
            <button
              onClick={() => navigateTo('projects')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => navigateTo('writing')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Writing
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        initialTopic={chatTopic}
      />

      <ExploreModal
        isOpen={isExploreOpen}
        onClose={() => setIsExploreOpen(false)}
        initialTab={exploreTab}
        onStartChat={(topic) => handleOpenChat(topic)}
      />

      <ProjectCaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
        onInquire={(title) => handleOpenChat(`Inquiry regarding ${title}`)}
      />

      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticleId}
        onClose={() => setSelectedArticleId(null)}
        onInquire={(title) => handleOpenChat(`Inquiry: ${title}`)}
      />
    </main>
  );
}
