import { useState } from 'react';

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-down w-4 h-4"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// Only the first (active) category's questions were present in the captured
// snapshot, and only its first answer was expanded — so only that answer text
// exists here. Add the remaining answers/categories from the real source when
// available.
const FAQS = [
  {
    q: 'Does the voice sound like a robotic IVR, and how well does it speak local Telugu?',
    a: 'Not at all! Built for Pan-India, your AI employee speaks warm, natural Hindi, English and regional languages. It naturally mixes languages (code-switching) just like locals do in daily business. If a customer prefers to switch entirely to English or regional languages midway through the call, your AI adapts its language instantly without missing a beat.',
  },
  { q: 'Can my AI employee take real actions during a call, or does it only talk?', a: '' },
  { q: 'Does the AI ever freeze or leave awkward silences on the phone?', a: '' },
  { q: "What happens if the caller interrupts or speaks over the AI while it's talking?", a: '' },
  { q: 'How are calls summarized and documented after hanging up?', a: '' },
  { q: 'Can my AI employee remember past callers and previous conversations when they call back?', a: '' },
];

export default function Faq() {
  const [query, setQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const items = FAQS.filter((f) => f.q.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <section id="faq" className="py-[clamp(48px,6vw,80px)] bg-white relative overflow-hidden">
      <div className="wrap max-w-6xl mx-auto px-4 sm:px-6 min-w-0">
        <div
          className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-16 items-start min-w-0 w-full"
          style={{ '--reveal-y': "18px" }}
        >
          <div className="lg:sticky lg:top-24 space-y-5 sm:space-y-6 min-w-0 w-full">
            <div>
              <h2 className="text-[clamp(26px,3.2vw,40px)] font-bold text-ink leading-[1.08] font-display tracking-tight mb-3">
                {"Clear answers to "}
                <span className="grad-text">hard questions.</span>
              </h2>
              <p className="text-[14.5px] sm:text-[15px] text-ink2 leading-relaxed max-w-[38ch]">Everything Andhra & Telangana business owners ask before handing over their customer phone calls.</p>
            </div>
            <div className="relative min-w-0 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink2/60"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-10 pr-9 py-2.5 bg-surface2/60 hover:bg-surface2 focus:bg-white border border-line focus:border-purple-500 rounded-xl text-sm text-ink placeholder:text-ink2/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap lg:flex-col gap-2 w-full min-w-0">
              <button className="flex items-center justify-between gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-display font-bold text-[13px] sm:text-sm transition-all cursor-pointer text-left shrink-0 lg:shrink grow sm:grow-0 min-w-0 bg-purple-600 text-white shadow-lg shadow-purple-600/20 scale-[1.01]">
                <div className="flex items-center gap-2 min-w-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sparkles w-4 h-4 shrink-0 text-white"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  <span className="truncate">AI Capabilities & Voices</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold ml-1 shrink-0 bg-white/20 text-white">6</span>
              </button>
              {" "}
              <button className="flex items-center justify-between gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-display font-bold text-[13px] sm:text-sm transition-all cursor-pointer text-left shrink-0 lg:shrink grow sm:grow-0 min-w-0 bg-surface/60 hover:bg-surface2 text-ink2 hover:text-ink border border-line/60">
                <div className="flex items-center gap-2 min-w-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone-call w-4 h-4 shrink-0 text-purple-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                    <path d="M14.05 6A5 5 0 0 1 18 10" />
                  </svg>
                  {" "}
                  <span className="truncate">The 3 Calling Modes</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold ml-1 shrink-0 bg-surface2 text-ink2">4</span>
              </button>
              <button className="flex items-center justify-between gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-display font-bold text-[13px] sm:text-sm transition-all cursor-pointer text-left shrink-0 lg:shrink grow sm:grow-0 min-w-0 bg-surface/60 hover:bg-surface2 text-ink2 hover:text-ink border border-line/60">
                <div className="flex items-center gap-2 min-w-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-graduation-cap w-4 h-4 shrink-0 text-purple-600"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                  <span className="truncate">Setup & Training</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold ml-1 shrink-0 bg-surface2 text-ink2">4</span>
              </button>
              {" "}
              <button className="flex items-center justify-between gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-display font-bold text-[13px] sm:text-sm transition-all cursor-pointer text-left shrink-0 lg:shrink grow sm:grow-0 min-w-0 bg-surface/60 hover:bg-surface2 text-ink2 hover:text-ink border border-line/60">
                <div className="flex items-center gap-2 min-w-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-check w-4 h-4 shrink-0 text-purple-600"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  {" "}
                  <span className="truncate">Pricing & Compliance</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold ml-1 shrink-0 bg-surface2 text-ink2">4</span>
              </button>
            </div>
          </div>
          <div className="min-h-[400px] min-w-0 w-full">
            <div className="border-t border-line">
              {items.map((item) => {
                const index = FAQS.indexOf(item);
                const open = openIndex === index;
                return (
                  <div key={item.q} style={{ opacity: "1", transform: "none" }}>
                    <div className="border-b border-line overflow-hidden group min-w-0">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(open ? -1 : index)}
                        aria-expanded={open}
                        className="w-full flex items-center justify-between gap-4 text-left py-4 sm:py-4.5 transition-all sm:group-hover:pl-2 duration-300 min-w-0"
                      >
                        <span
                          className={
                            open
                              ? 'text-[14px] sm:text-[15.5px] font-semibold transition-colors duration-300 flex-1 min-w-0 pr-2 leading-snug text-purple-600'
                              : 'text-[14px] sm:text-[15.5px] font-semibold transition-colors duration-300 flex-1 min-w-0 pr-2 leading-snug text-ink group-hover:text-purple-600'
                          }
                        >
                          {item.q}
                        </span>
                        <span
                          className={
                            open
                              ? 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 bg-purple-100 text-purple-600 rotate-180'
                              : 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 bg-surface2 text-ink2 group-hover:bg-purple-50 group-hover:text-purple-600'
                          }
                        >
                          <ChevronDown />
                        </span>
                      </button>
                      {open && item.a ? (
                        <>
                          {" "}
                          <div className="overflow-hidden" style={{ height: "auto", opacity: "1" }}>
                            <p className="pb-5 text-[13.5px] sm:text-[14.5px] text-ink2 leading-relaxed max-w-[64ch] sm:pl-2">{item.a}</p>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                );
              })}
              {items.length === 0 ? (
                <div className="py-6 text-[14px] text-ink2">No questions match “{query}”.</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
