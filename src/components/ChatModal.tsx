import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export function ChatModal({ isOpen, onClose, initialTopic = 'General Inquiry' }: ChatModalProps) {
  const [topic, setTopic] = useState(initialTopic);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-lg rounded-2xl liquid-glass border border-white/20 p-6 sm:p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-normal tracking-tight">Transmission Received</h3>
            <p className="text-gray-300 text-sm max-w-sm mx-auto leading-relaxed">
              Thank you, {name}. A partner from our {topic.toLowerCase()} team will review your message and reply to <span className="text-white underline">{email}</span> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Direct Connection</div>
              <h2 className="text-2xl font-normal tracking-tight">Start a conversation with VEX</h2>
              <p className="text-gray-300 text-sm mt-1">
                Share your thesis, venture proposal, or advisory need.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Focus Area</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Investing', 'Building', 'Advisory', 'General'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTopic(t)}
                      className={`px-3 py-2 text-xs rounded-lg border transition-all text-center ${
                        topic === t
                          ? 'bg-white text-black border-white font-medium'
                          : 'bg-black/40 border-white/15 text-gray-300 hover:border-white/30'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Eleni Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleni@venture.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Message or Brief</label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you are building or looking to explore..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/20 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-gray-400">Response time ~ 24h</span>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
