import { useState } from 'react';
import { X, ArrowRight, ShieldCheck, Layers, Compass, TrendingUp } from 'lucide-react';

interface ExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'Story' | 'Investing' | 'Building' | 'Advisory';
  onStartChat: (topic: string) => void;
}

export function ExploreModal({
  isOpen,
  onClose,
  initialTab = 'Story',
  onStartChat,
}: ExploreModalProps) {
  const [activeTab, setActiveTab] = useState<'Story' | 'Investing' | 'Building' | 'Advisory'>(initialTab);

  if (!isOpen) return null;

  const content = {
    Story: {
      tag: 'Origin & Philosophy',
      icon: Compass,
      title: 'Backing what defies consensus.',
      body: 'Founded at the nexus of frontier science, sovereign computation, and physical intelligence, VEX partners with rare operators before momentum becomes obvious. We do not aggregate conventional capital; we engineer enduring structural advantages.',
      metrics: [
        { label: 'Cumulative Venture Value', val: '$3.4B+' },
        { label: 'Studio Incubation Ratio', val: '84% Tier-1 follow-on' },
        { label: 'Frontier Focus', val: '0 to 1 Operators' },
      ],
    },
    Investing: {
      tag: 'Early & Growth Capital',
      icon: TrendingUp,
      title: 'High-conviction, concentrated capital.',
      body: 'We deploy from seed to Series B into foundational architectures: resilient computing, synthetic biology, planetary systems, and algorithmic automation. We take deep technical risk and provide patient, long-horizon support.',
      metrics: [
        { label: 'Check Sizes', val: '$500K — $15M' },
        { label: 'Board Seats & Governance', val: 'Active Partnership' },
        { label: 'Syndicate Network', val: 'Global Top-Decile' },
      ],
    },
    Building: {
      tag: 'Venture Studio & Incubation',
      icon: Layers,
      title: 'From theoretical edge to enterprise scale.',
      body: 'Our studio pairs resident engineers, product architects, and world-class researchers to launch spinouts from stealth. We co-found alongside technical visionaries, building bespoke infrastructure, initial prototypes, and early go-to-market engines.',
      metrics: [
        { label: 'Internal Labs', val: 'Full-stack prototyping' },
        { label: 'Time to Series A', val: '< 14 Months Avg' },
        { label: 'IP & Patent Strategy', val: 'In-house Counsel' },
      ],
    },
    Advisory: {
      tag: 'Strategic Governance',
      icon: ShieldCheck,
      title: 'Sovereign strategy for category leaders.',
      body: 'We counsel founders, institutional boards, and state enterprises navigating seismic technological transitions. Our partners provide high-stakes guidance on geopolitics of tech, cryptographic security, M&A, and transformative capital structuring.',
      metrics: [
        { label: 'Advisory Engagements', val: 'Selective, by referral' },
        { label: 'Cross-border M&A', val: '$12B+ Transacted' },
        { label: 'Regulatory Navigation', val: 'Global jurisdictions' },
      ],
    },
  };

  const current = content[activeTab];
  const IconComponent = current.icon;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
    >
      <div className="relative w-full max-w-2xl rounded-2xl liquid-glass border border-white/20 p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 sm:gap-2 border-b border-white/10 pb-4 pr-10 overflow-x-auto no-scrollbar">
          {(['Story', 'Investing', 'Building', 'Advisory'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                activeTab === tab
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="pt-6 pb-2 space-y-6 overflow-y-auto pr-1">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-gray-400">
            <IconComponent className="w-4 h-4 text-white" />
            <span>{current.tag}</span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight mb-3">
              {current.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {current.body}
            </p>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {current.metrics.map((m, idx) => (
              <div
                key={idx}
                className="liquid-glass border border-white/10 rounded-xl p-3.5 bg-black/30"
              >
                <div className="text-xs text-gray-400">{m.label}</div>
                <div className="text-base sm:text-lg font-medium text-white mt-1">
                  {m.val}
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="text-xs text-gray-400">
              Interested in collaborating in {activeTab}?
            </div>
            <button
              onClick={() => {
                onClose();
                onStartChat(activeTab);
              }}
              className="flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span>Connect on {activeTab}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
