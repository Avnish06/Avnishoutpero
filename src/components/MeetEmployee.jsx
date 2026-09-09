export default function MeetEmployee() {
  return (
    <section className="py-[clamp(32px,3.5vw,48px)] surface-ink grain text-white border-y border-white/10 relative overflow-hidden shadow-2xl">
      <audio preload="none" />
      {" "}
      <div className="pointer-events-none absolute left-1/4 -top-20 w-[520px] h-[360px] rounded-full bg-purple-500/18 blur-[130px]" />
      {" "}
      <div className="pointer-events-none absolute right-[10%] bottom-0 w-[360px] h-[280px] rounded-full bg-gold-400/10 blur-[120px]" />
      {" "}
      <div className="wrap relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5 sm:mb-6">
          <div className="reveal max-w-[700px]" style={{ '--reveal-y': "18px" }}>
            <div className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-gold-400 mb-2.5">
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
                className="lucide lucide-sparkles w-3.5 h-3.5"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              {" Proven across 15+ industries"}
            </div>
            {" "}
            <h2 className="text-[clamp(26px,3.5vw,38px)] font-display font-extrabold text-white leading-[1.08]">
              {"Who is your AI Employee "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-amber-200 to-yellow-300">best for?</span>
            </h2>
            {" "}
            <p className="mt-2 text-[14px] sm:text-[15px] text-white/65 leading-relaxed">From local businesses in Andhra & Telangana to enterprises across India, your AI employee pays for itself on day one whenever your business relies on phone calls.</p>
            {" "}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] font-semibold text-white/80 shadow-sm">
              <span className="text-gold-400 font-bold">Fun Fact:</span>
              {" In the recordings below, both the prospect and the agent are our AI! 🤖"}
            </div>
          </div>
          {" "}
          <div className="flex items-center gap-2.5 shrink-0 self-start md:self-end">
            <button
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 shadow-lg hover:bg-white/25 hover:border-gold-400 hover:scale-105 text-white flex items-center justify-center transition-all active:scale-95"
            >
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
                className="lucide lucide-chevron-left w-4.5 h-4.5 text-gold-300"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            {" "}
            <button
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 shadow-lg hover:bg-white/25 hover:border-gold-400 hover:scale-105 text-white flex items-center justify-center transition-all active:scale-95"
            >
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
                className="lucide lucide-chevron-right w-4.5 h-4.5 text-gold-300"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        {" "}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 px-1 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-1">
          <div className="w-[270px] sm:w-[290px] lg:w-[305px] shrink-0 snap-start h-auto flex flex-col justify-between p-5 rounded-[24px] bg-white text-ink border border-white shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-gold-400 hover:shadow-[0_20px_50px_rgba(226,184,90,0.35)] hover:-translate-y-1.5 transition-all duration-300 group text-left">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 border-blue-500/30 text-blue-600 border flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-building2 w-5 h-5"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 rounded-none bg-[#DFB052] text-[#1E1303] border border-b-[3px] border-r-[3px] border-[#A88231] shadow-sm uppercase tracking-[0.12em]">
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
                    className="lucide lucide-sparkles w-3 h-3 fill-current text-[#1E1303]"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  {"Voice Code: "}
                  O' Shanthi
                </span>
              </div>
              {" "}
              <h3 className="text-[16px] font-bold font-display text-ink mb-1 group-hover:text-purple-700 transition-colors">Real Estate & Builders</h3>
              {" "}
              <p className="text-[12.5px] text-ink2 leading-snug line-clamp-3">Calls Facebook, 99acres & MagicBricks leads within 3 seconds, qualifies budget & location preference, and books weekend site visits.</p>
              {" "}
              <div className="mt-4 flex items-center gap-2.5 bg-surface border border-line rounded-full p-1 pr-4 hover:border-purple-200 transition-colors">
                <button className="w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 bg-purple-600">
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
                    className="lucide lucide-play w-3.5 h-3.5 fill-current ml-0.5"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </button>
                {" "}
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-purple-100 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-purple-500 rounded-full w-0" />
                  </div>
                  <span className="text-[10px] font-bold text-ink2 tab-nums">1:21</span>
                </div>
              </div>
            </div>
            <a
              href="https://app.outpero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[12.5px] font-bold text-purple-700 group-hover:text-purple-600 transition-colors"
            >
              <span>
                {"Deploy for "}
                Real
              </span>
              <span className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
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
                  className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
          {" "}
          <div className="w-[270px] sm:w-[290px] lg:w-[305px] shrink-0 snap-start h-auto flex flex-col justify-between p-5 rounded-[24px] bg-white text-ink border border-white shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-gold-400 hover:shadow-[0_20px_50px_rgba(226,184,90,0.35)] hover:-translate-y-1.5 transition-all duration-300 group text-left">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/15 border-amber-500/30 text-amber-600 border flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-graduation-cap w-5 h-5"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 rounded-none bg-[#DFB052] text-[#1E1303] border border-b-[3px] border-r-[3px] border-[#A88231] shadow-sm uppercase tracking-[0.12em]">
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
                    className="lucide lucide-sparkles w-3 h-3 fill-current text-[#1E1303]"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  {"Voice Code: "}
                  P09
                </span>
              </div>
              {" "}
              <h3 className="text-[16px] font-bold font-display text-ink mb-1 group-hover:text-purple-700 transition-colors">Coaching & Admissions</h3>
              {" "}
              <p className="text-[12.5px] text-ink2 leading-snug line-clamp-3">Screens student inquiries instantly in Telugu & English, explains course fees and batch timings, and books counseling sessions without delay.</p>
              {" "}
              <div className="mt-4 flex items-center gap-2.5 bg-surface border border-line rounded-full p-1 pr-4 hover:border-purple-200 transition-colors">
                <button className="w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 bg-purple-600">
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
                    className="lucide lucide-play w-3.5 h-3.5 fill-current ml-0.5"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </button>
                {" "}
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-purple-100 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-purple-500 rounded-full w-0" />
                  </div>
                  <span className="text-[10px] font-bold text-ink2 tab-nums">1:16</span>
                </div>
              </div>
            </div>
            <a
              href="https://app.outpero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[12.5px] font-bold text-purple-700 group-hover:text-purple-600 transition-colors"
            >
              <span>
                {"Deploy for "}
                Coaching
              </span>
              <span className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
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
                  className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
          {" "}
          <div className="w-[270px] sm:w-[290px] lg:w-[305px] shrink-0 snap-start h-auto flex flex-col justify-between p-5 rounded-[24px] bg-white text-ink border border-white shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-gold-400 hover:shadow-[0_20px_50px_rgba(226,184,90,0.35)] hover:-translate-y-1.5 transition-all duration-300 group text-left">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/15 border-emerald-500/30 text-emerald-600 border flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-stethoscope w-5 h-5"
                  >
                    <path d="M11 2v2" />
                    <path d="M5 2v2" />
                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                    <path d="M8 15a6 6 0 0 0 12 0v-3" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 rounded-none bg-[#DFB052] text-[#1E1303] border border-b-[3px] border-r-[3px] border-[#A88231] shadow-sm uppercase tracking-[0.12em]">
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
                    className="lucide lucide-sparkles w-3 h-3 fill-current text-[#1E1303]"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  {"Voice Code: "}
                  P07
                </span>
              </div>
              {" "}
              <h3 className="text-[16px] font-bold font-display text-ink mb-1 group-hover:text-purple-700 transition-colors">Hospitals & Diagnostics</h3>
              {" "}
              <p className="text-[12.5px] text-ink2 leading-snug line-clamp-3">Handles OPD inquiries 24/7, books doctor appointments, sends lab report readiness reminders, and conducts post-treatment follow-up calls.</p>
              {" "}
              <div className="mt-4 flex items-center gap-2.5 bg-surface border border-line rounded-full p-1 pr-4 hover:border-purple-200 transition-colors">
                <button className="w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 bg-purple-600">
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
                    className="lucide lucide-play w-3.5 h-3.5 fill-current ml-0.5"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </button>
                {" "}
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-purple-100 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-purple-500 rounded-full w-0" />
                  </div>
                  <span className="text-[10px] font-bold text-ink2 tab-nums">1:02</span>
                </div>
              </div>
            </div>
            <a
              href="https://app.outpero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[12.5px] font-bold text-purple-700 group-hover:text-purple-600 transition-colors"
            >
              <span>
                {"Deploy for "}
                Hospitals
              </span>
              <span className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
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
                  className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
          {" "}
          <div className="w-[270px] sm:w-[290px] lg:w-[305px] shrink-0 snap-start h-auto flex flex-col justify-between p-5 rounded-[24px] bg-white text-ink border border-white shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-gold-400 hover:shadow-[0_20px_50px_rgba(226,184,90,0.35)] hover:-translate-y-1.5 transition-all duration-300 group text-left">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/15 to-pink-500/15 border-rose-500/30 text-rose-600 border flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-utensils w-5 h-5"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 rounded-none bg-[#DFB052] text-[#1E1303] border border-b-[3px] border-r-[3px] border-[#A88231] shadow-sm uppercase tracking-[0.12em]">
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
                    className="lucide lucide-sparkles w-3 h-3 fill-current text-[#1E1303]"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  {"Voice Code: "}
                  P06
                </span>
              </div>
              {" "}
              <h3 className="text-[16px] font-bold font-display text-ink mb-1 group-hover:text-purple-700 transition-colors">Restaurants & Banquets</h3>
              {" "}
              <p className="text-[12.5px] text-ink2 leading-snug line-clamp-3">Answers customer calls during peak dinner rush hours, manages table bookings, explains party buffet packages, and collects dine-in feedback.</p>
              {" "}
              <div className="mt-4 flex items-center gap-2.5 bg-surface border border-line rounded-full p-1 pr-4 hover:border-purple-200 transition-colors">
                <button className="w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 bg-purple-600">
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
                    className="lucide lucide-play w-3.5 h-3.5 fill-current ml-0.5"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </button>
                {" "}
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-purple-100 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-purple-500 rounded-full w-0" />
                  </div>
                  <span className="text-[10px] font-bold text-ink2 tab-nums">0:44</span>
                </div>
              </div>
            </div>
            <a
              href="https://app.outpero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[12.5px] font-bold text-purple-700 group-hover:text-purple-600 transition-colors"
            >
              <span>
                {"Deploy for "}
                Restaurants
              </span>
              <span className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
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
                  className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
          {" "}
          <div className="w-[270px] sm:w-[290px] lg:w-[305px] shrink-0 snap-start h-auto flex flex-col justify-between p-5 rounded-[24px] bg-white text-ink border border-white shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-gold-400 hover:shadow-[0_20px_50px_rgba(226,184,90,0.35)] hover:-translate-y-1.5 transition-all duration-300 group text-left">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/15 to-violet-500/15 border-purple-500/30 text-purple-600 border flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-car w-5 h-5"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 rounded-none bg-[#DFB052] text-[#1E1303] border border-b-[3px] border-r-[3px] border-[#A88231] shadow-sm uppercase tracking-[0.12em]">
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
                    className="lucide lucide-sparkles w-3 h-3 fill-current text-[#1E1303]"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  {"Voice Code: "}
                  P02
                </span>
              </div>
              {" "}
              <h3 className="text-[16px] font-bold font-display text-ink mb-1 group-hover:text-purple-700 transition-colors">Car Dealerships & Showrooms</h3>
              {" "}
              <p className="text-[12.5px] text-ink2 leading-snug line-clamp-3">Follows up on new vehicle inquiries, schedules doorstep test drives, and makes automated service due and insurance renewal reminders.</p>
              {" "}
              <div className="mt-2.5 inline-flex items-center self-start gap-1.5 px-2 py-0.5 rounded bg-purple-50 text-purple-700 text-[10px] font-bold tracking-wider uppercase border border-purple-200">
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
                  className="lucide lucide-sparkles w-3 h-3 text-purple-500"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
                AI Problem Handling
              </div>
              {" "}
              <div className="mt-4 flex items-center gap-2.5 bg-surface border border-line rounded-full p-1 pr-4 hover:border-purple-200 transition-colors">
                <button className="w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 bg-purple-600">
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
                    className="lucide lucide-play w-3.5 h-3.5 fill-current ml-0.5"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </button>
                {" "}
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-purple-100 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-purple-500 rounded-full w-0" />
                  </div>
                  <span className="text-[10px] font-bold text-ink2 tab-nums">1:17</span>
                </div>
              </div>
            </div>
            <a
              href="https://app.outpero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[12.5px] font-bold text-purple-700 group-hover:text-purple-600 transition-colors"
            >
              <span>
                {"Deploy for "}
                Car
              </span>
              <span className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
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
                  className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
          {" "}
          <div className="w-[270px] sm:w-[290px] lg:w-[305px] shrink-0 snap-start h-auto flex flex-col justify-between p-5 rounded-[24px] bg-white text-ink border border-white shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-gold-400 hover:shadow-[0_20px_50px_rgba(226,184,90,0.35)] hover:-translate-y-1.5 transition-all duration-300 group text-left">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border-cyan-500/30 text-cyan-600 border flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-wallet w-5 h-5"
                  >
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                  </svg>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 rounded-none bg-[#DFB052] text-[#1E1303] border border-b-[3px] border-r-[3px] border-[#A88231] shadow-sm uppercase tracking-[0.12em]">
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
                    className="lucide lucide-sparkles w-3 h-3 fill-current text-[#1E1303]"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  {"Voice Code: "}
                  P02
                </span>
              </div>
              {" "}
              <h3 className="text-[16px] font-bold font-display text-ink mb-1 group-hover:text-purple-700 transition-colors">Loans & Insurance</h3>
              {" "}
              <p className="text-[12.5px] text-ink2 leading-snug line-clamp-3">Screens loan applicants for basic eligibility and income criteria, sends polite EMI due reminders, and follows up on pending KYC documents.</p>
              {" "}
              <div className="mt-4 flex items-center gap-2.5 bg-surface border border-line rounded-full p-1 pr-4 hover:border-purple-200 transition-colors">
                <button className="w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 bg-purple-600">
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
                    className="lucide lucide-play w-3.5 h-3.5 fill-current ml-0.5"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </button>
                {" "}
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-purple-100 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-purple-500 rounded-full w-0" />
                  </div>
                  <span className="text-[10px] font-bold text-ink2 tab-nums">0:55</span>
                </div>
              </div>
            </div>
            <a
              href="https://app.outpero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[12.5px] font-bold text-purple-700 group-hover:text-purple-600 transition-colors"
            >
              <span>
                {"Deploy for "}
                Loans
              </span>
              <span className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
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
                  className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
          {" "}
          <div className="w-[270px] sm:w-[290px] lg:w-[305px] shrink-0 snap-start h-auto flex flex-col justify-between p-5 rounded-[24px] bg-white text-ink border border-white shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-gold-400 hover:shadow-[0_20px_50px_rgba(226,184,90,0.35)] hover:-translate-y-1.5 transition-all duration-300 group text-left">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500/15 to-pink-500/15 border-fuchsia-500/30 text-fuchsia-600 border flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-shopping-bag w-5 h-5"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 rounded-none bg-[#DFB052] text-[#1E1303] border border-b-[3px] border-r-[3px] border-[#A88231] shadow-sm uppercase tracking-[0.12em]">
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
                    className="lucide lucide-sparkles w-3 h-3 fill-current text-[#1E1303]"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  {"Voice Code: "}
                  P07
                </span>
              </div>
              {" "}
              <h3 className="text-[16px] font-bold font-display text-ink mb-1 group-hover:text-purple-700 transition-colors">E-commerce & D2C Brands</h3>
              {" "}
              <p className="text-[12.5px] text-ink2 leading-snug line-clamp-3">Calls Cash-on-Delivery buyers immediately after checkout to confirm address and purchase intent, saving lakhs in reverse shipping losses.</p>
              {" "}
              <div className="mt-2.5 inline-flex items-center self-start gap-1.5 px-2 py-0.5 rounded bg-purple-50 text-purple-700 text-[10px] font-bold tracking-wider uppercase border border-purple-200">
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
                  className="lucide lucide-sparkles w-3 h-3 text-purple-500"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
                Telugu English Switch
              </div>
              {" "}
              <div className="mt-4 flex items-center gap-2.5 bg-surface border border-line rounded-full p-1 pr-4 hover:border-purple-200 transition-colors">
                <button className="w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 bg-purple-600">
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
                    className="lucide lucide-play w-3.5 h-3.5 fill-current ml-0.5"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </button>
                {" "}
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-purple-100 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-purple-500 rounded-full w-0" />
                  </div>
                  <span className="text-[10px] font-bold text-ink2 tab-nums">0:43</span>
                </div>
              </div>
            </div>
            <a
              href="https://app.outpero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[12.5px] font-bold text-purple-700 group-hover:text-purple-600 transition-colors"
            >
              <span>
                {"Deploy for "}
                E-commerce
              </span>
              <span className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
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
                  className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
          {" "}
          <div className="w-[270px] sm:w-[290px] lg:w-[305px] shrink-0 snap-start h-auto flex flex-col justify-between p-5 rounded-[24px] bg-white text-ink border border-white shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-gold-400 hover:shadow-[0_20px_50px_rgba(226,184,90,0.35)] hover:-translate-y-1.5 transition-all duration-300 group text-left">
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500/15 to-amber-500/15 border-yellow-500/30 text-yellow-600 border flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-briefcase w-5 h-5"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                </div>
                {" "}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 rounded-none bg-[#DFB052] text-[#1E1303] border border-b-[3px] border-r-[3px] border-[#A88231] shadow-sm uppercase tracking-[0.12em]">
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
                    className="lucide lucide-sparkles w-3 h-3 fill-current text-[#1E1303]"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  {"Voice Code: "}
                  P09
                </span>
              </div>
              {" "}
              <h3 className="text-[16px] font-bold font-display text-ink mb-1 group-hover:text-purple-700 transition-colors">Recruitment & Staffing</h3>
              {" "}
              <p className="text-[12.5px] text-ink2 leading-snug line-clamp-3">Conducts initial telephone interviews, verifies candidate salary expectations and notice periods, and lines up shortlists for your HR team.</p>
              {" "}
              <div className="mt-2.5 inline-flex items-center self-start gap-1.5 px-2 py-0.5 rounded bg-purple-50 text-purple-700 text-[10px] font-bold tracking-wider uppercase border border-purple-200">
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
                  className="lucide lucide-sparkles w-3 h-3 text-purple-500"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
                Telugu Hindi Switch
              </div>
              {" "}
              <div className="mt-4 flex items-center gap-2.5 bg-surface border border-line rounded-full p-1 pr-4 hover:border-purple-200 transition-colors">
                <button className="w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-105 bg-purple-600">
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
                    className="lucide lucide-play w-3.5 h-3.5 fill-current ml-0.5"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </button>
                {" "}
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-purple-100 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-purple-500 rounded-full w-0" />
                  </div>
                  <span className="text-[10px] font-bold text-ink2 tab-nums">0:49</span>
                </div>
              </div>
            </div>
            <a
              href="https://app.outpero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-[12.5px] font-bold text-purple-700 group-hover:text-purple-600 transition-colors"
            >
              <span>
                {"Deploy for "}
                Recruitment
              </span>
              <span className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
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
                  className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
