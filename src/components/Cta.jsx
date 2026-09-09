export default function Cta() {
  return (
    <section
      id="cta"
      className="py-10 sm:py-16 bg-gradient-to-b from-surface2/40 via-purple-50/40 to-surface border-t border-line relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[350px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)" }}
      />
      {" "}
      <div
        className="pointer-events-none absolute bottom-1/3 right-1/4 w-[400px] h-[300px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(226,184,90,0.18) 0%, transparent 70%)" }}
      />
      {" "}
      <div className="wrap relative z-10">
        <div className="reveal" style={{ '--reveal-y': "18px" }}>
          <div className="max-w-[800px] mx-auto rounded-[28px] sm:rounded-[36px] bg-white border border-purple-100/80 shadow-[0_15px_50px_rgba(122,80,220,0.1)] hover:shadow-[0_20px_60px_rgba(122,80,220,0.15)] transition-all duration-500 p-6 sm:p-10 text-center relative overflow-hidden group">
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[150px] rounded-full bg-purple-500/[0.07] blur-[80px]" />
            {" "}
            <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[350px] h-[130px] rounded-full bg-gold-400/[0.08] blur-[80px]" />
            {" "}
            <div className="relative z-10 max-w-[620px] mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 font-bold text-[11px] sm:text-[11.5px] uppercase tracking-wider mb-3.5 shadow-2xs">
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
                  className="lucide lucide-sparkles w-3 h-3 text-purple-600"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
                {" Start in 5 Minutes • Risk-Free"}
              </div>
              {" "}
              <h2 className="text-[clamp(26px,3.6vw,42px)] font-display font-extrabold text-ink leading-[1.1] tracking-tight">Never miss another customer call again.</h2>
              {" "}
              <p className="mt-2.5 text-[15px] sm:text-[16.5px] text-ink2 leading-relaxed max-w-[500px] mx-auto font-normal">Get 50 free credits (approx. 10 calls) instantly on signup. No trial required, it's completely free.</p>
              {" "}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                <a
                  href="https://app.outpero.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-400 via-amber-400 to-yellow-300 text-ink font-display font-extrabold text-[15.5px] shadow-[0_8px_25px_rgba(245,158,11,0.3)] hover:shadow-[0_12px_35px_rgba(245,158,11,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  {"Hire Your AI Employee Free "}
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
                    className="lucide lucide-arrow-right w-4.5 h-4.5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                {" "}
                <a
                  href="#start"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface border border-line text-ink font-display font-bold text-[15px] shadow-sm hover:border-purple-300 hover:bg-surface2 hover:scale-[1.02] active:scale-95 transition-all duration-300"
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
                    className="lucide lucide-phone-call w-4 h-4 text-purple-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                    <path d="M14.05 6A5 5 0 0 1 18 10" />
                  </svg>
                  {" Hear AI Call Your Phone"}
                </a>
              </div>
              {" "}
              <div className="mt-6 pt-4 border-t border-line/60 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[12px] sm:text-[12.5px] text-muted font-semibold">
                <span>No credit card required</span>
                <span className="text-line">•</span>
                <span>Goes live in 5 minutes</span>
                <span className="text-line">•</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
