export default function Hero() {
  return (
    <section id="top" className="relative flex flex-col pt-4 sm:pt-8 min-h-[calc(100vh-76px)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-no-repeat opacity-[0.24]" style={{ transform: "none" }}>
          <div
            className="lg:hidden absolute inset-0 bg-no-repeat"
            style={{ backgroundImage: "url('/ai-employee/india-map.jpg')", backgroundSize: "auto 46%", backgroundPosition: "50% 8%" }}
          />
          {" "}
          <div
            className="hidden lg:block absolute inset-0 bg-no-repeat"
            style={{ backgroundImage: "url('/ai-employee/india-map.jpg')", backgroundSize: "auto 82%", backgroundPosition: "44% 44%" }}
          />
        </div>
        {" "}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[460px]"
          style={{ background: "linear-gradient(to bottom, rgba(122,80,220,0.06), transparent)" }}
        />
        {" "}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(30% 30% at 90% 14%, rgba(122,80,220,0.08), transparent 60%), radial-gradient(26% 28% at 4% 26%, rgba(201,155,60,0.06), transparent 60%)" }}
        />
        {" "}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>
      {" "}
      <div className="wrap relative z-10 grid lg:grid-cols-[1.04fr_.96fr] gap-8 lg:gap-12 items-center py-8 lg:py-10 my-auto">
        <div className="max-w-[560px] mx-auto text-center flex lg:hidden flex-col items-center">
          <div className="anim-load anim-load-d1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-purple-200/50 text-purple-700 text-[10.5px] font-extrabold uppercase tracking-widest mb-4 shadow-sm">
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
            {" BUILT FOR SMBs & ENTERPRISES"}
          </div>
          {" "}
          <h1 className="anim-load anim-load-d1 font-extrabold text-ink tracking-tight leading-[1.07] text-[clamp(33px,4.5vw,48px)]">
            {"Hire India's fastest "}
            <span className="te grad-text align-baseline">AI</span>
            {" employee."}
          </h1>
          {" "}
          <div className="anim-load anim-load-d1 mt-6 flex w-full justify-center">
            <div className="flex items-center gap-3 bg-white/90 border-2 border-purple-100/80 rounded-2xl p-1.5 pr-4 shadow-sm">
              <div className="bg-purple-600 text-white rounded-xl px-4 py-2.5 flex flex-col justify-center items-center">
                <span className="text-[9px] font-bold uppercase tracking-widest text-purple-200 mb-0.5">Starts from</span>
                <span className="text-[26px] font-black leading-none tracking-tight">
                  ₹3.5
                  <span className="text-[13px] font-bold text-purple-200 ml-0.5">/min</span>
                </span>
              </div>
              {" "}
              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-1.5 text-[12px] font-bold text-ink2 leading-none">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-purple-600 stroke-[3]"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" Pay only for talk-time"}
                </span>
                {" "}
                <span className="flex items-center gap-1.5 text-[12px] font-bold text-ink2 leading-none">
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
                    className="lucide lucide-check w-3.5 h-3.5 text-purple-600 stroke-[3]"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" Zero setup fees"}
                </span>
              </div>
            </div>
          </div>
          {" "}
          <p className="anim-load anim-load-d2 mt-6 text-[15.5px] sm:text-[17px] text-ink2 font-normal leading-relaxed max-w-[42ch]">
            {"Calls every new lead in "}
            <b className="text-ink font-bold">under 30 seconds</b>
            . Fluent Hindi, English & regional languages, perfect notes every time.
          </p>
          {" "}
          <div className="anim-load anim-load-d2 mt-7 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href="#start"
              className="group inline-flex items-center justify-center gap-2 font-semibold transition-all whitespace-nowrap border select-none text-[15.5px] px-7 py-[15px] rounded-2xl text-white border-transparent fill-gold shadow-gold hover:-translate-y-0.5 w-full sm:w-auto uppercase tracking-wide font-extrabold shadow-md hover:shadow-lg py-3 text-[14px]"
            >
              Call AI now (Free)
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
                className="lucide lucide-arrow-right w-[17px] h-[17px] transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            {" "}
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 font-semibold transition-all whitespace-nowrap border select-none text-[14.5px] px-5 py-[11px] rounded-xl bg-surface text-ink border-line2 shadow-card hover:bg-surface3 hover:-translate-y-0.5 w-full sm:w-auto text-ink2 font-semibold text-[13px] border border-line/80 bg-white/60 hover:bg-surface py-2.5"
            >
              View Pricing
            </a>
          </div>
          {" "}
          <div className="anim-load-fade anim-load-d3 mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[12.5px] text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success animate-pulseDot" />
              50 free credits (no card required)
            </span>
            <span className="flex items-center gap-1.5">
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
                className="lucide lucide-shield-check w-4 h-4 text-success"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              {" DLT-registered"}
            </span>
          </div>
        </div>
        {" "}
        <div className="max-w-[560px] mx-0 text-left hidden lg:flex flex-col items-start">
          <div className="anim-load anim-load-d1 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-purple-200/50 text-purple-700 text-[11px] font-extrabold uppercase tracking-widest mb-4 shadow-sm">
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
            {" BUILT FOR SMBs & ENTERPRISES"}
          </div>
          {" "}
          <h1 className="anim-load anim-load-d1 font-extrabold text-ink tracking-tight leading-[1.05] text-[clamp(34px,3.7vw,50px)]">
            {"Hire India's fastest "}
            <span className="te grad-text align-baseline">AI</span>
            {" employee."}
          </h1>
          {" "}
          <div className="anim-load anim-load-d1 mt-6 flex flex-wrap items-center justify-start gap-4">
            <div className="flex items-center gap-4 bg-surface border-2 border-purple-100 rounded-2xl p-2 pr-6 shadow-lift">
              <div className="bg-purple-600 text-white rounded-xl px-5 py-3 flex flex-col justify-center items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-200 mb-0.5">Starts from</span>
                <span className="text-[32px] font-black leading-none tracking-tight">
                  ₹3.5
                  <span className="text-[15px] font-bold text-purple-200 ml-0.5">/min</span>
                </span>
              </div>
              {" "}
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2 text-[13.5px] font-bold text-ink2 leading-none">
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
                    className="lucide lucide-check w-4 h-4 text-purple-600 stroke-[3]"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" Pay only for talk-time"}
                </span>
                {" "}
                <span className="flex items-center gap-2 text-[13.5px] font-bold text-ink2 leading-none">
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
                    className="lucide lucide-check w-4 h-4 text-purple-600 stroke-[3]"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {" Zero setup fees"}
                </span>
              </div>
            </div>
          </div>
          {" "}
          <p className="anim-load anim-load-d2 mt-5 text-[clamp(16.5px,1.45vw,17.5px)] text-ink2 font-medium leading-relaxed max-w-[46ch]">
            {"Just tell Swara HR what you need. She builds you an AI employee who calls every new lead in "}
            <b className="text-ink font-bold">under 30 seconds</b>
            {" (fluent Hindi, English & regional languages, perfect notes every time)."}
          </p>
          {" "}
          <div className="anim-load anim-load-d2 mt-7 flex flex-wrap items-center justify-start gap-3">
            <a
              href="#start"
              className="group inline-flex items-center justify-center gap-2 font-semibold transition-all whitespace-nowrap border select-none text-[15.5px] px-7 py-[15px] rounded-2xl text-white border-transparent fill-gold shadow-gold hover:-translate-y-0.5 uppercase tracking-wide"
            >
              Call AI now (Free)
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
                className="lucide lucide-arrow-right w-[17px] h-[17px] transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            {" "}
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 font-semibold transition-all whitespace-nowrap border select-none text-[15.5px] px-7 py-[15px] rounded-2xl bg-surface text-ink border-line2 shadow-card hover:bg-surface3 hover:-translate-y-0.5"
            >
              View Pricing
            </a>
          </div>
          {" "}
          <div className="anim-load-fade anim-load-d3 mt-4 flex flex-wrap items-center justify-start gap-x-4 gap-y-1.5 text-[12.5px] text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success animate-pulseDot" />
              50 free credits (no card required)
            </span>
            <span className="flex items-center gap-1.5">
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
                className="lucide lucide-shield-check w-4 h-4 text-success"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              {" DLT-registered"}
            </span>
          </div>
        </div>
        {" "}
        <div className="relative hidden lg:flex items-center justify-center" style={{ transform: "none" }}>
          <div className="anim-load-scale anim-load-d2 relative w-full flex items-center justify-center">
            <div className="pointer-events-none absolute inset-x-12 bottom-8 h-40 bg-purple-500/15 blur-[80px] rounded-full" />
            <img
              src="/ai-employee/outpero-ai-hero.png"
              alt="An Indian business owner on a call with his Outpero AI employee — never misses a call, speaks Hindi, Telugu, English and regional languages"
              className="relative w-full h-auto max-h-[60vh] object-contain"
              loading="eager"
            />
            {" "}
            <div className="absolute top-[18%] left-2 lg:-left-10 z-30 flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(122,80,220,0.12)] px-3.5 py-2 border border-purple-100/60 anim-load-scale anim-load-d4">
              <div className="flex items-end gap-[3px] h-3.5">
                <div className="w-[3.5px] bg-gradient-to-t from-purple-600 to-indigo-500 rounded-full" />
                {" "}
                <div className="w-[3.5px] bg-gradient-to-t from-purple-600 to-indigo-500 rounded-full" />
                {" "}
                <div className="w-[3.5px] bg-gradient-to-t from-purple-600 to-indigo-500 rounded-full" />
                {" "}
                <div className="w-[3.5px] bg-gradient-to-t from-purple-600 to-indigo-500 rounded-full" />
              </div>
              <span className="text-[11.5px] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 tracking-[0.08em]">Live in 5 mins</span>
            </div>
          </div>
          {" "}
          <div className="anim-load-scale anim-load-d5 absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[286px] rounded-2xl bg-surface/90 backdrop-blur-md border border-line shadow-lift px-3.5 py-3">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="relative inline-flex" style={{ width: "24px", height: "24px" }}>
                <span
                  className="inline-flex items-center justify-center font-bold text-white"
                  style={{ width: "24px", height: "24px", background: "#7A50DC", borderRadius: "11px", fontSize: "9px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)" }}
                >
                  M
                </span>
                {" "}
                <span
                  className="absolute -bottom-0.5 -right-0.5 rounded-full bg-success border-2 border-surface animate-pulseDot"
                  style={{ width: "6.720000000000001px", height: "6.720000000000001px" }}
                />
              </span>
              <span className="text-[12.5px] font-bold text-ink">Meera</span>
              <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-success">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulseDot" />
                {" live"}
              </span>
              {" "}
              <div className="flex items-center gap-[3px] ml-auto" style={{ height: "14px" }} aria-hidden="true">
                <span className="w-[3px] rounded-full" style={{ background: "#7A50DC", animation: "wave 1.1s ease-in-out 0s infinite", opacity: "0.5" }} />
                <span className="w-[3px] rounded-full" style={{ background: "#7A50DC", animation: "wave 1.1s ease-in-out 0.09s infinite", opacity: "0.63" }} />
                {" "}
                <span className="w-[3px] rounded-full" style={{ background: "#7A50DC", animation: "wave 1.1s ease-in-out 0.18s infinite", opacity: "0.76" }} />
                <span className="w-[3px] rounded-full" style={{ background: "#7A50DC", animation: "wave 1.1s ease-in-out 0.27s infinite", opacity: "0.89" }} />
                <span className="w-[3px] rounded-full" style={{ background: "#7A50DC", animation: "wave 1.1s ease-in-out 0.36s infinite", opacity: "0.5" }} />
                {" "}
                <span
                  className="w-[3px] rounded-full"
                  style={{ background: "#7A50DC", animation: "wave 1.1s ease-in-out 0.44999999999999996s infinite", opacity: "0.63" }}
                />
                <span className="w-[3px] rounded-full" style={{ background: "#7A50DC", animation: "wave 1.1s ease-in-out 0.54s infinite", opacity: "0.76" }} />
                <span className="w-[3px] rounded-full" style={{ background: "#7A50DC", animation: "wave 1.1s ease-in-out 0s infinite", opacity: "0.89" }} />
                {" "}
                <span className="w-[3px] rounded-full" style={{ background: "#7A50DC", animation: "wave 1.1s ease-in-out 0.09s infinite", opacity: "0.5" }} />
                <span className="w-[3px] rounded-full" style={{ background: "#7A50DC", animation: "wave 1.1s ease-in-out 0.18s infinite", opacity: "0.63" }} />
              </div>
            </div>
            {" "}
            <div className="min-h-[42px]">
              <div style={{ opacity: "1", transform: "none" }}>
                <div className="hi text-[12.5px] text-ink leading-snug">Hi! मैं आपकी enquiry के बारे में call कर रही हूँ।</div>
                {" "}
                <div className="text-[10.5px] text-muted mt-0.5">Hi! Calling about your enquiry.</div>
              </div>
            </div>
          </div>
        </div>
        {" "}
        <div className="relative lg:hidden w-full max-w-[440px] mx-auto">
          <img src="/ai-employee/outpero-ai-hero.png" alt="Outpero AI employee" className="anim-load anim-load-d2 relative w-full h-auto" />
          {" "}
          <div className="absolute top-[18%] left-2 lg:-left-10 z-30 flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(122,80,220,0.12)] px-3.5 py-2 border border-purple-100/60 anim-load-scale anim-load-d4">
            <div className="flex items-end gap-[3px] h-3.5">
              <div className="w-[3.5px] bg-gradient-to-t from-purple-600 to-indigo-500 rounded-full" />
              {" "}
              <div className="w-[3.5px] bg-gradient-to-t from-purple-600 to-indigo-500 rounded-full" />
              {" "}
              <div className="w-[3.5px] bg-gradient-to-t from-purple-600 to-indigo-500 rounded-full" />
              {" "}
              <div className="w-[3.5px] bg-gradient-to-t from-purple-600 to-indigo-500 rounded-full" />
            </div>
            <span className="text-[11.5px] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700 tracking-[0.08em]">Live in 5 mins</span>
          </div>
        </div>
      </div>
      {" "}
      <div className="w-full relative z-20 flex justify-center pb-6 lg:pb-8 pt-4">
        <p className="text-[13px] md:text-[15px] font-bold text-ink/70 tracking-wide text-center px-4 leading-relaxed">
          {"हिंदी "}
          <span className="mx-2 text-purple-300">•</span>
          {" తెలుగు "}
          <span className="mx-2 text-purple-300">•</span>
          {" தமிழ் "}
          <span className="mx-2 text-purple-300">•</span>
          {" മലയാളം "}
          <span className="mx-2 text-purple-300">•</span>
          {" ಕನ್ನಡ "}
          <span className="mx-2 text-purple-300">•</span>
          {" मराठी "}
          <span className="mx-2 text-purple-300">•</span>
          {" English"}
        </p>
      </div>
      {" "}
      <div className="w-full relative z-20 sticky bottom-0 mt-auto">
        <div className="relative border-y border-line bg-surface2/60 py-4 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent" />
          {" "}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent" />
          {" "}
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-languages w-4 h-4 text-purple-600"
              >
                <path d="m5 8 6 6" />
                <path d="m4 14 6-6 2-3" />
                <path d="M2 5h12" />
                <path d="M7 2h1" />
                <path d="m22 22-5-10-5 10" />
                <path d="M14 18h6" />
              </svg>
              Speaks 10+ Native Languages
              <span className="ml-8 text-line2">•</span>
            </span>
            {" "}
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-clock w-4 h-4 text-purple-600"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Calls every lead in under 30s
              <span className="ml-8 text-line2">•</span>
            </span>
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
              Calls the moment a lead arrives
              <span className="ml-8 text-line2">•</span>
            </span>
            {" "}
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-shield-check w-4 h-4 text-purple-600"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              99.9% Uptime SLA guarantee
              <span className="ml-8 text-line2">•</span>
            </span>
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-zap w-4 h-4 text-purple-600"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
              Follows up every single lead
              <span className="ml-8 text-line2">•</span>
            </span>
            {" "}
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-sparkles w-4 h-4 text-purple-600"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              Built in 2 minutes
              <span className="ml-8 text-line2">•</span>
            </span>
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-heart-handshake w-4 h-4 text-purple-600"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                <path d="m18 15-2-2" />
                <path d="m15 18-2-2" />
              </svg>
              Heals mid-call if a line drops
              <span className="ml-8 text-line2">•</span>
            </span>
            {" "}
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-globe w-4 h-4 text-purple-600"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              Meta, forms, Pabbly & webhooks
              <span className="ml-8 text-line2">•</span>
            </span>
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-languages w-4 h-4 text-purple-600"
              >
                <path d="m5 8 6 6" />
                <path d="m4 14 6-6 2-3" />
                <path d="M2 5h12" />
                <path d="M7 2h1" />
                <path d="m22 22-5-10-5 10" />
                <path d="M14 18h6" />
              </svg>
              Speaks 10+ Native Languages
              <span className="ml-8 text-line2">•</span>
            </span>
            {" "}
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-clock w-4 h-4 text-purple-600"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Calls every lead in under 30s
              <span className="ml-8 text-line2">•</span>
            </span>
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
              Calls the moment a lead arrives
              <span className="ml-8 text-line2">•</span>
            </span>
            {" "}
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-shield-check w-4 h-4 text-purple-600"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              99.9% Uptime SLA guarantee
              <span className="ml-8 text-line2">•</span>
            </span>
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-zap w-4 h-4 text-purple-600"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
              Follows up every single lead
              <span className="ml-8 text-line2">•</span>
            </span>
            {" "}
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-sparkles w-4 h-4 text-purple-600"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              Built in 2 minutes
              <span className="ml-8 text-line2">•</span>
            </span>
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-heart-handshake w-4 h-4 text-purple-600"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                <path d="m18 15-2-2" />
                <path d="m15 18-2-2" />
              </svg>
              Heals mid-call if a line drops
              <span className="ml-8 text-line2">•</span>
            </span>
            {" "}
            <span className="flex items-center gap-2.5 text-[13.5px] font-semibold text-ink2">
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
                className="lucide lucide-globe w-4 h-4 text-purple-600"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              Meta, forms, Pabbly & webhooks
              <span className="ml-8 text-line2">•</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
