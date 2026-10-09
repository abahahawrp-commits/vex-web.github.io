import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../types/portfolio';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenChat: () => void;
}

export const navPages: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Story' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ currentPage, onNavigate, onOpenChat }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelectPage = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="px-6 md:px-12 lg:px-16 pt-6 relative z-30 w-full">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        {/* Left: Logo */}
        <button
          onClick={() => handleSelectPage('home')}
          className="text-2xl font-semibold tracking-tight text-white select-none hover:opacity-80 transition-opacity cursor-pointer text-left"
        >
          VEX
        </button>

        {/* Center: 5 Standard Portfolio Pages (hidden on mobile, visible md+) */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navPages.map((page) => {
            const isActive = currentPage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleSelectPage(page.id)}
                className={`transition-colors cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {page.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full animate-fade-in" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenChat}
            className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Start a Chat
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 liquid-glass rounded-xl border border-white/20 p-4 space-y-2 animate-fade-in text-sm">
          {navPages.map((page) => {
            const isActive = currentPage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleSelectPage(page.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-white text-black font-medium'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{page.label}</span>
                {isActive && <span className="text-xs uppercase tracking-wider">• Active</span>}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
