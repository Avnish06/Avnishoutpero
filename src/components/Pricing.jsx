export default function Pricing() {
  return (
    <section id="pricing" className="py-[clamp(28px,4vw,52px)] bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-purple-50/50 to-transparent rounded-full blur-[100px] pointer-events-none" />
      {" "}
      <div className="wrap max-w-5xl mx-auto relative z-10">
        <div className="max-w-[640px] mx-auto text-center mb-6">
          <div className="reveal" style={{ '--reveal-y': "18px" }}>
            <h2 className="text-[clamp(26px,3.6vw,42px)] font-bold text-ink leading-[1.08] tracking-tight font-display">
              {"Pure per-minute billing. "}
              <span className="grad-text">Zero base fees.</span>
            </h2>
            {" "}
            <p className="mt-3 text-[15px] text-ink2 leading-relaxed max-w-[48ch] mx-auto">Hire AI the way you hire people — you only pay for talk-time that actually connects, with no monthly lock-ins.</p>
          </div>
        </div>
        {" "}
        <div className="reveal reveal-d2 w-full max-w-[960px] mx-auto mb-8" style={{ '--reveal-y': "18px" }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl py-3 px-4 flex flex-col items-center justify-center text-center">
              <span className="text-[12px] font-semibold text-slate-500 mb-0.5">Bland AI</span>
              <span className="font-mono text-[14px] lg:text-[15px] font-bold text-slate-400 line-through decoration-slate-300">₹12-15 / min</span>
              <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Robotic Telugu</span>
            </div>
            {" "}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl py-3 px-4 flex flex-col items-center justify-center text-center">
              <span className="text-[12px] font-semibold text-slate-500 mb-0.5">Bolna AI</span>
              <span className="font-mono text-[14px] lg:text-[15px] font-bold text-slate-400 line-through decoration-slate-300">₹8-10 / min</span>
              <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Robotic Telugu</span>
            </div>
            {" "}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl py-3 px-4 flex flex-col items-center justify-center text-center">
              <span className="text-[12px] font-semibold text-slate-500 mb-0.5">Vapi / Retell</span>
              <span className="font-mono text-[14px] lg:text-[15px] font-bold text-slate-400 line-through decoration-slate-300">₹12-15 / min</span>
              <span className="text-[9px] text-danger/70 font-bold uppercase tracking-wider mt-1 bg-danger/5 px-2 py-0.5 rounded-sm">Robotic Telugu</span>
            </div>
            {" "}
            <div className="relative bg-white rounded-xl py-3 px-4 flex flex-col items-center justify-center text-center shadow-[0_8px_24px_rgba(124,58,237,0.15)] transform md:scale-105 z-10 border-2 border-purple-500">
              <div className="absolute -top-3 bg-purple-600 text-white text-[9px] lg:text-[10px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md">Save up to 85%</div>
              <span className="text-[12px] lg:text-[13px] font-extrabold text-purple-700 mb-1 flex items-center gap-1">
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
                  className="lucide lucide-sparkles w-3.5 h-3.5 text-purple-500"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
                {" Outpero AI"}
              </span>
              {" "}
              <span className="font-display text-[20px] lg:text-[22px] font-black text-ink leading-none tracking-tight mb-1">
                ₹3.5 - 7
                <span className="text-[14px] text-muted font-bold">/min</span>
              </span>
              {" "}
              <div className="flex flex-col gap-1 items-center mt-1">
                <span className="text-[9px] font-bold text-purple-700 uppercase tracking-widest bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full">Lowest price · English Only</span>
                <span className="text-[8.5px] font-bold text-purple-500 uppercase tracking-widest">Zero base fee</span>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="reveal max-w-[1020px] mx-auto mb-12" style={{ '--reveal-y': "18px" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="rounded-[2rem] bg-white border border-line shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 sm:p-8 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex w-fit items-center text-[11px] font-extrabold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">Value</span>
              </div>
              {" "}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[clamp(34px,4vw,42px)] font-extrabold font-display text-ink leading-none tracking-tight tab-nums">₹3.5</span>
                <span className="text-[18px] text-muted font-bold">/min</span>
              </div>
              {" "}
              <p className="text-[13px] text-ink2 leading-relaxed pb-4 border-b border-line mb-5">
                <strong className="text-ink font-semibold">Budget-friendly.</strong>
                {" Mostly used for bulk calling campaigns."}
              </p>
              {" "}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-ink">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Native Multilingual
                </div>
                {" "}
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-ink">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Value Voices
                </div>
                {" "}
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-ink">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Low Latency
                </div>
                {" "}
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-ink">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Budget bulk calling
                </div>
              </div>
              <button className="w-full mt-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3 rounded-xl transition-all duration-200">Start Calling</button>
            </div>
            {" "}
            <div className="rounded-[2rem] bg-gradient-to-br from-purple-600 to-indigo-700 border border-purple-400/30 shadow-[0_20px_60px_-20px_rgba(124,58,237,0.3)] p-6 sm:p-8 flex flex-col group relative overflow-hidden transform md:scale-105 z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-20 -mt-20" />
              {" "}
              <div className="flex flex-wrap items-center gap-2 mb-4 relative z-10">
                <span className="inline-flex w-fit items-center text-[11px] font-extrabold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full bg-white/20 text-white border border-white/20">Standard</span>
                <span className="inline-flex w-fit items-center gap-1 text-[9px] font-extrabold uppercase tracking-[0.13em] px-2.5 py-1 rounded-full bg-gold-400 text-gold-950 shadow-sm">
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
                    className="lucide lucide-sparkles w-3 h-3"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  {" Most Popular"}
                </span>
              </div>
              {" "}
              <div className="flex items-baseline gap-2 mb-3 relative z-10">
                <span className="text-[clamp(34px,4vw,42px)] font-extrabold font-display text-white leading-none tracking-tight tab-nums drop-shadow-md">₹5</span>
                <span className="text-[18px] text-purple-200 font-bold">/min</span>
              </div>
              {" "}
              <p className="text-[13px] text-white/90 leading-relaxed pb-4 border-b border-white/20 mb-5 relative z-10">
                <strong className="text-white font-bold">The All-Rounder.</strong>
                {" High realism for everyday customer interactions and support."}
              </p>
              {" "}
              <div className="space-y-3 mb-8 relative z-10">
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-white">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-purple-300 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Native Multilingual
                </div>
                {" "}
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-white">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-purple-300 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Standard Voices
                </div>
                {" "}
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-white">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-purple-300 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Low Latency
                </div>
                {" "}
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-white">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-purple-300 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  The All-Rounder
                </div>
              </div>
              <button className="w-full mt-auto bg-white hover:bg-slate-50 text-purple-700 font-extrabold px-6 py-3 rounded-xl shadow-xl transition-all duration-200 relative z-10">Start Calling</button>
            </div>
            {" "}
            <div className="rounded-[2rem] bg-white border border-line shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 sm:p-8 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex w-fit items-center text-[11px] font-extrabold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">Premium</span>
              </div>
              {" "}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[clamp(34px,4vw,42px)] font-extrabold font-display text-ink leading-none tracking-tight tab-nums">₹7</span>
                <span className="text-[18px] text-muted font-bold">/min</span>
              </div>
              {" "}
              <p className="text-[13px] text-ink2 leading-relaxed pb-4 border-b border-line mb-5">
                <strong className="text-ink font-semibold">Curated native speakers.</strong>
                {" The most real-like voices from our exclusive library."}
              </p>
              {" "}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-ink">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Native Multilingual
                </div>
                {" "}
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-ink">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Premium Voices
                </div>
                {" "}
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-ink">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Ultra-low Latency
                </div>
                {" "}
                <div className="flex items-start gap-2.5 text-[12.5px] font-medium text-ink">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Custom integrations
                </div>
              </div>
              <button className="w-full mt-auto bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold px-6 py-3 rounded-xl transition-all duration-200">Start Calling</button>
            </div>
          </div>
        </div>
        {" "}
        <div className="reveal mt-8 lg:mt-10 max-w-[960px] mx-auto" style={{ '--reveal-y': "18px" }}>
          <div className="text-center mb-6">
            <h3 className="text-[18px] lg:text-[20px] font-display font-bold text-ink">How the credit system works</h3>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-4xl mx-auto">
            <div className="bg-slate-50 border border-slate-200/60 rounded-[1.5rem] p-6 relative overflow-hidden group hover:shadow-sm transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-300 rounded-full blur-[50px] -mr-10 -mt-10 opacity-20 group-hover:opacity-40 transition-opacity" />
              {" "}
              <div className="w-10 h-10 rounded-full bg-white border border-gold-200 shadow-sm flex items-center justify-center mb-4 relative z-10">
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
                  className="lucide lucide-wallet w-4 h-4 text-gold-600"
                >
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                </svg>
              </div>
              {" "}
              <h4 className="text-[15px] font-bold text-ink mb-2 relative z-10">1. The Credit Wallet</h4>
              {" "}
              <p className="text-[13px] text-ink2 leading-relaxed relative z-10">
                {"1 Credit = ₹1. You top up your wallet anytime based on your volume. "}
                <strong className="text-ink font-semibold">Credits never expire.</strong>
                {" We give you 50 free credits to start."}
              </p>
            </div>
            {" "}
            <div className="bg-slate-50 border border-slate-200/60 rounded-[1.5rem] p-6 relative overflow-hidden group hover:shadow-sm transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-success/30 rounded-full blur-[50px] -mr-10 -mt-10 opacity-30 group-hover:opacity-50 transition-opacity" />
              {" "}
              <div className="w-10 h-10 rounded-full bg-white border border-success/20 shadow-sm flex items-center justify-center mb-4 relative z-10">
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
                  className="lucide lucide-phone w-4 h-4 text-success"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              {" "}
              <h4 className="text-[15px] font-bold text-ink mb-2 relative z-10">2. Live Talk-Time</h4>
              {" "}
              <p className="text-[13px] text-ink2 leading-relaxed relative z-10">Credits are only deducted when your AI is actively talking on a live call. You are never charged for idle time or setup fees.</p>
            </div>
            {" "}
            <div className="bg-slate-50 border border-slate-200/60 rounded-[1.5rem] p-6 relative overflow-hidden group hover:shadow-sm transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300 rounded-full blur-[50px] -mr-10 -mt-10 opacity-20 group-hover:opacity-40 transition-opacity" />
              {" "}
              <div className="w-10 h-10 rounded-full bg-white border border-purple-200 shadow-sm flex items-center justify-center mb-4 relative z-10">
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
                  className="lucide lucide-hash w-4 h-4 text-purple-600"
                >
                  <line x1="4" x2="20" y1="9" y2="9" />
                  <line x1="4" x2="20" y1="15" y2="15" />
                  <line x1="10" x2="8" y1="3" y2="21" />
                  <line x1="16" x2="14" y1="3" y2="21" />
                </svg>
              </div>
              {" "}
              <h4 className="text-[15px] font-bold text-ink mb-2 relative z-10">3. Phone Number Rental</h4>
              {" "}
              <p className="text-[13px] text-ink2 leading-relaxed relative z-10">
                {"A dedicated phone number to run your calls. "}
                <strong className="text-ink font-semibold">Billed at ₹649/month.</strong>
                {" Includes compliance and carrier fees."}
              </p>
            </div>
          </div>
        </div>
        {" "}
        <div
          className="reveal mt-12 text-center text-[13px] font-semibold text-muted flex items-center justify-center gap-2"
          style={{ '--reveal-y': "18px" }}
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
            className="lucide lucide-sparkles w-4 h-4 text-purple-500"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </svg>
          {" No lock-in · credits never expire · zero base fees"}
        </div>
      </div>
    </section>
  );
}
