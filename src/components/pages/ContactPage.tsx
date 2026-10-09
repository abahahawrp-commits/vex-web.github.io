import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Globe, Clock, Github, Twitter, Linkedin, MessageSquare, CheckCircle2 } from 'lucide-react';
import { personalBio } from '../../data/portfolioData';

interface ContactPageProps {
  onOpenChat: (topic: string) => void;
}

export function ContactPage({ onOpenChat }: ContactPageProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Venture Architecture');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(personalBio.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="relative z-10 px-6 md:px-12 lg:px-16 py-12 max-w-5xl mx-auto space-y-12 animate-fade-in text-white">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
          <MessageSquare className="w-3.5 h-3.5 text-white" />
          <span>Contact / Initiate Dialogue</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
          Let's build something enduring together.
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
          Available for principal engineering advisory, venture incubation, and mission-critical distributed systems design.
        </p>
      </div>

      {/* Grid: Form on Left, Contact info on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 liquid-glass border border-white/15 rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
                <CheckCircle2 className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-normal tracking-tight">Transmission Received</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, {name}. Your inquiry regarding <span className="text-white font-medium">{projectType}</span> has been logged. I review direct messages personally and will respond to <span className="text-white underline">{email}</span> within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-lg font-medium text-white">Direct Message Transmission</h3>
                <p className="text-xs text-gray-400 mt-1">
                  All messages encrypted in transit. Response SLA: 24 hours.
                </p>
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-2">
                  Inquiry Discipline
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Venture Architecture',
                    'Systems Consulting',
                    'Fractional Principal',
                    'Early-Stage Advisory',
                    'Open Source',
                    'General Inquiry',
                  ].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`px-3 py-2 text-xs rounded-lg border text-left transition-all ${
                        projectType === type
                          ? 'bg-white text-black border-white font-medium'
                          : 'bg-black/30 border-white/10 text-gray-400 hover:text-white hover:border-white/25'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Lin"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@frontier.vc"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Target Engagement Horizon
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/20 text-sm text-white focus:outline-none focus:border-white"
                >
                  <option value="Immediate (< 2 Weeks)" className="bg-black text-white">Immediate (&lt; 2 Weeks)</option>
                  <option value="Within 1 Month" className="bg-black text-white">Within 1 Month</option>
                  <option value="Q2 / Q3 2026" className="bg-black text-white">Q2 / Q3 2026</option>
                  <option value="Exploratory Discussion" className="bg-black text-white">Exploratory Discussion</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Project Brief or Inquiry Context
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your technical parameters, current stage, and objectives..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-gray-400">Direct response via email</span>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar Info (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Status Box */}
          <div className="liquid-glass border border-white/15 rounded-2xl p-6 bg-black/40 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Current Availability
              </span>
            </div>
            <p className="text-sm text-white leading-relaxed font-light">
              Accepting select advisory engagements and technical architecture audits for Q2 2026.
            </p>
          </div>

          {/* Quick Email Copy Box */}
          <div className="liquid-glass border border-white/15 rounded-2xl p-6 bg-black/40 space-y-3">
            <div className="text-xs uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Direct Inquiries</span>
            </div>
            <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5">
              <span className="text-xs sm:text-sm font-mono text-gray-200 truncate">
                {personalBio.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copiedEmail && (
              <div className="text-xs text-emerald-400 text-center animate-fade-in">
                Email address copied to clipboard!
              </div>
            )}
          </div>

          {/* Location & Timezone */}
          <div className="liquid-glass border border-white/15 rounded-2xl p-6 bg-black/40 space-y-3 text-xs text-gray-300">
            <div className="flex items-center gap-2 text-gray-400 uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-white" />
              <span>Geographic Base</span>
            </div>
            <p className="text-sm text-white">{personalBio.location}</p>
            <div className="flex items-center gap-2 text-gray-400 pt-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Primary Business Hours: 08:00 — 19:00 PT</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="liquid-glass border border-white/15 rounded-2xl p-6 bg-black/40 space-y-3">
            <div className="text-xs uppercase tracking-wider text-gray-400">
              Verified Profiles & Code Repositories
            </div>
            <div className="grid grid-cols-3 gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-white/10 bg-black/30 hover:border-white/30 text-xs text-gray-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-white/10 bg-black/30 hover:border-white/30 text-xs text-gray-300 hover:text-white transition-all"
              >
                <Twitter className="w-4 h-4" />
                <span>X / Twt</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-white/10 bg-black/30 hover:border-white/30 text-xs text-gray-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Instant Chat Trigger */}
          <div className="p-4 rounded-xl border border-white/10 bg-black/20 flex items-center justify-between">
            <span className="text-xs text-gray-400">Prefer instant messaging?</span>
            <button
              onClick={() => onOpenChat('General')}
              className="text-xs text-white underline hover:text-gray-200 cursor-pointer"
            >
              Open Instant Chat Drawer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
