import { useState } from 'react';

export default function StartFree() {
  // The prerendered snapshot has empty, uncontrolled inputs. Wired here with
  // local state only — there is no backend in this project.
  const [phone, setPhone] = useState('');

  const onPhoneChange = (e) => setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0, 10));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert('Please enter a 10-digit mobile number.');
      return;
    }
    window.open(`https://app.outpero.com/?phone=${encodeURIComponent('+91' + phone)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="start" className="relative overflow-hidden py-[clamp(60px,8vw,100px)] bg-[#FAFAFA] border-t border-line">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(122,80,220,0.08)_0%,transparent_70%)]" />
      {" "}
      <div className="absolute left-[10%] top-[20%] w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none" />
      {" "}
      <div className="wrap relative z-10">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-24 items-center max-w-[1040px] mx-auto min-w-0">
          <div className="reveal min-w-0 text-center lg:text-left" style={{ '--reveal-y': "18px" }}>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-purple-700 bg-purple-50 border border-purple-200/60 rounded-full px-3 py-1 mb-5 shadow-sm">
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
                className="lucide lucide-sparkles w-3.5 h-3.5 text-purple-600"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              {" THE 60-SECOND TEST"}
            </div>
            {" "}
            <h2 className="text-[clamp(36px,5vw,56px)] font-bold text-ink leading-[1.05] tracking-tight">
              {"Let your AI employee "}
              <span className="grad-text">call you instantly.</span>
            </h2>
            {" "}
            <p className="hidden lg:block mt-5 text-[18px] lg:text-[20px] text-ink2 leading-relaxed max-w-full lg:max-w-[48ch] mx-auto lg:mx-0">Drop your number — Swara HR sets up your employee and it calls you instantly. Free, no card. That's the whole demo.</p>
            {" "}
            <form
              onSubmit={handleSubmit}
              className="hidden lg:flex mt-8 items-center gap-2 bg-white border border-line rounded-[1.25rem] p-2 w-full max-w-full sm:max-w-[460px] mx-auto lg:mx-0 shadow-[0_8px_30px_rgba(0,0,0,0.04)] focus-within:border-purple-300 focus-within:ring-4 focus-within:ring-purple-100/50 transition-all"
            >
              <span className="pl-5 pr-1 text-[16px] font-bold text-ink select-none opacity-80">+91</span>
              <input
                inputMode="numeric"
                placeholder="your mobile number"
                className="flex-1 min-w-0 bg-transparent text-[16px] font-semibold text-ink placeholder:text-muted/50 outline-none px-2 tab-nums"
                value={phone}
                onChange={onPhoneChange}
              />
              <button
                className="group inline-flex items-center justify-center gap-2 font-semibold transition-all whitespace-nowrap border select-none text-[14.5px] px-5 py-[11px] rounded-xl bg-purple-600 text-white border-purple-600 shadow-purple hover:bg-purple-700 hover:-translate-y-0.5 shrink-0 px-6 shadow-md shadow-purple-500/20 text-[15px] h-[46px] rounded-xl"
                type="submit"
              >
                Get instant call
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
              </button>
            </form>
            {" "}
            <div className="hidden lg:flex mt-6 flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="inline-flex items-center gap-2 text-[12px] font-bold text-success bg-success/10 border border-success/20 rounded-full px-3 py-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulseDot" />
                100% free — no card required
              </div>
              <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted">
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
                  className="lucide lucide-shield-check w-4 h-4 text-muted"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                {" DLT-registered · 50 free credits"}
              </span>
            </div>
          </div>
          {" "}
          <div className="reveal reveal-d1 w-[300px] sm:w-[320px] shrink-0 mx-auto" style={{ '--reveal-y': "18px" }}>
            <div className="relative w-full h-[580px] rounded-[44px] bg-gradient-to-b from-[#FCFCFD] to-[#F8F9FB] border-[8px] border-white shadow-[0_32px_64px_-12px_rgba(122,80,220,0.12)] p-6 text-center overflow-hidden ring-1 ring-black/5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-white border-b border-x border-black/5 rounded-b-[20px] z-20" />
              {" "}
              <div className="relative z-10 pt-10 h-full flex flex-col">
                <div className="inline-flex items-center gap-2 mx-auto bg-purple-50/80 backdrop-blur-sm border border-purple-100/50 rounded-full px-3 py-1.5 mb-10 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-purple-700 uppercase tracking-widest pt-[1px]">Incoming Call</span>
                </div>
                {" "}
                <div className="relative w-28 h-28 mx-auto grid place-items-center mb-6">
                  <span className="absolute rounded-full border border-purple-300/40" style={{ width: "88px", height: "88px", opacity: "1" }} />
                  <span className="absolute rounded-full border border-purple-300/40" style={{ width: "88px", height: "88px", opacity: "1" }} />
                  {" "}
                  <div className="relative z-10 w-[88px] h-[88px] rounded-full bg-white shadow-[0_8px_24px_rgba(122,80,220,0.15)] border border-purple-50 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent" />
                    <span className="relative text-[38px] font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-indigo-600">M</span>
                  </div>
                </div>
                {" "}
                <div className="text-[26px] font-bold text-ink tracking-tight mb-0.5">Meera</div>
                {" "}
                <div className="text-[14.5px] font-medium text-ink2">your AI employee · Telugu</div>
                {" "}
                <div className="hidden lg:block mt-2 text-[16px] font-semibold text-ink tab-nums">
                  {"+91 "}
                  •••• •••••
                </div>
                {" "}
                <div className="lg:hidden mt-8 w-full relative">
                  <form
                    onSubmit={handleSubmit}
                    className="relative flex items-center gap-1 bg-white border border-purple-100/60 rounded-[16px] p-1.5 w-full shadow-[0_8px_20px_rgba(122,80,220,0.06)] focus-within:border-purple-300 focus-within:ring-4 focus-within:ring-purple-500/10 transition-all"
                  >
                    <span className="pl-3 text-[14px] font-semibold text-purple-900/60">+91</span>
                    <input
                      inputMode="numeric"
                      placeholder="Enter number"
                      className="flex-1 min-w-0 bg-transparent text-[14px] font-bold text-ink placeholder:text-purple-300 outline-none px-1.5 tab-nums"
                      value={phone}
                      onChange={onPhoneChange}
                    />
                    <button
                      className="group inline-flex items-center justify-center gap-2 font-semibold transition-all whitespace-nowrap border select-none text-[13px] px-4 py-2 rounded-xl bg-purple-600 text-white border-purple-600 shadow-purple hover:bg-purple-700 hover:-translate-y-0.5 shrink-0 px-4 h-10 rounded-[12px] text-[13px] font-bold bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_4px_12px_rgba(122,80,220,0.25)] hover:shadow-[0_6px_16px_rgba(122,80,220,0.35)] border-none"
                      type="submit"
                    >
                      Instant Call
                    </button>
                  </form>
                </div>
                {" "}
                <div className="lg:hidden mt-4 flex items-center justify-center gap-3">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-success bg-success/10 px-2 py-1 rounded-md">
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
                      className="lucide lucide-check w-3 h-3"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {" 100% Free"}
                  </div>
                  {" "}
                  <div className="flex items-center gap-1 text-[10px] font-medium text-muted">
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
                      className="lucide lucide-shield-check w-3 h-3"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    {" DLT-registered"}
                  </div>
                </div>
                {" "}
                <div className="hidden lg:block mt-auto pb-4">
                  <div className="flex items-center justify-center gap-8 mb-6">
                    <div className="flex flex-col items-center gap-2">
                      <span className="w-16 h-16 rounded-full bg-danger/10 text-danger grid place-items-center rotate-[135deg]">
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
                          className="lucide lucide-phone w-7 h-7 fill-current"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      {" "}
                      <span className="text-[11px] font-semibold text-danger">Decline</span>
                    </div>
                    {" "}
                    <div className="flex flex-col items-center gap-2">
                      <button
                        aria-label="Accept — get your free call"
                        className="relative w-16 h-16 rounded-full bg-success text-white grid place-items-center shadow-[0_8px_20px_rgba(20,158,106,0.3)] hover:scale-105 hover:-translate-y-1 transition-all"
                      >
                        <span className="absolute inset-0 rounded-full bg-success/40" />
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
                          className="lucide lucide-phone relative w-7 h-7"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </button>
                      {" "}
                      <span className="text-[11px] font-semibold text-success">Accept</span>
                    </div>
                  </div>
                  {" "}
                  <div className="text-[11px] font-medium text-muted">tap to get your free call</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
