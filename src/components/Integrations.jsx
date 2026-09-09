export default function Integrations() {
  return (
    <section className="py-8 lg:py-12 bg-surface relative overflow-hidden">
      <div className="wrap max-w-7xl mx-auto relative z-10">
        <div className="max-w-[700px] mx-auto text-center mb-8 lg:mb-10">
          <div className="reveal" style={{ '--reveal-y': "18px" }}>
            <h2 className="text-[clamp(24px,3.5vw,34px)] font-bold text-ink leading-[1.1] tracking-tight font-display">Data in. Data out. Perfectly synced.</h2>
          </div>
        </div>
        {" "}
        <div className="relative w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 px-4 lg:px-0">
          <div className="absolute top-1/2 left-0 w-full h-[2px] hidden lg:block -z-10">
            <div className="w-full h-full border-t-2 border-dashed border-purple-200 relative">
              <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              {" "}
              <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </div>
          </div>
          {" "}
          <div className="reveal reveal-d1 relative z-10 w-full lg:w-[320px]" style={{ '--reveal-y': "18px" }}>
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-line overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="px-4 py-3 border-b border-line bg-slate-50/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
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
                    className="lucide lucide-file-spreadsheet w-4 h-4 text-purple-600"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M8 13h2" />
                    <path d="M14 13h2" />
                    <path d="M8 17h2" />
                    <path d="M14 17h2" />
                  </svg>
                  {" "}
                  <span className="font-bold text-[13px] text-ink">Lead Source / Sheet</span>
                </div>
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Input</span>
              </div>
              {" "}
              <div className="p-4 bg-white space-y-2.5">
                <div className="flex items-center justify-between text-[12px]">
                  <div className="font-mono text-[11px] text-purple-500/80 font-medium tracking-wide">first_name</div>
                  {" "}
                  <div className="text-ink font-medium">Rahul</div>
                </div>
                {" "}
                <div className="flex items-center justify-between text-[12px]">
                  <div className="font-mono text-[10.5px] text-purple-500/80 font-medium tracking-wide">purchase</div>
                  {" "}
                  <div className="text-ink font-medium">iPhone 15</div>
                </div>
                {" "}
                <div className="flex items-center justify-between text-[12px]">
                  <div className="font-mono text-[10.5px] text-purple-500/80 font-medium tracking-wide">plan</div>
                  {" "}
                  <div className="text-ink font-medium">Premium</div>
                </div>
              </div>
            </div>
          </div>
          {" "}
          <div className="reveal reveal-d3 relative z-20 w-full lg:w-[420px]" style={{ '--reveal-y': "18px" }}>
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl -z-10 rounded-full" />
            {" "}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(124,58,237,0.15)] border border-purple-100 overflow-hidden flex flex-col transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative px-4 py-3 border-b border-purple-100 bg-purple-50/50 flex items-center justify-center">
                <div className="absolute left-4 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-200" />
                  {" "}
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-200" />
                  {" "}
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-200" />
                </div>
                {" "}
                <div className="flex items-center gap-2">
                  <img src="/ai-employee/favicon.png" alt="Outpero" className="w-6 h-6 drop-shadow-sm" />
                  <span className="font-bold text-[14px] text-purple-900">Outpero Script Editor</span>
                </div>
              </div>
              {" "}
              <div className="p-5 bg-white">
                <p className="text-[14px] leading-[1.6] text-ink font-normal font-sans">
                  {"\"Hi "}
                  <span className="inline-flex items-center justify-center bg-purple-50 text-purple-600 border border-purple-100/50 rounded px-1.5 py-0.5 mx-0.5 font-mono text-[12px] leading-none font-medium">Rahul</span>
                  {"! I see you recently purchased the "}
                  <span className="inline-flex items-center justify-center bg-purple-50 text-purple-600 border border-purple-100/50 rounded px-1.5 py-0.5 mx-0.5 font-mono text-[12px] leading-none font-medium">iPhone 15</span>
                  {" on our "}
                  <span className="inline-flex items-center justify-center bg-purple-50 text-purple-600 border border-purple-100/50 rounded px-1.5 py-0.5 mx-0.5 font-mono text-[12px] leading-none font-medium">Premium</span>
                  {" plan. Are you satisfied with the device so far?\""}
                </p>
                {" "}
                <div className="mt-5 flex items-center justify-between pt-3.5 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-[12px] text-purple-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    AI processing...
                  </div>
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
                    className="lucide lucide-chevron-right w-4 h-4 text-purple-300"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {" "}
          <div className="reveal reveal-d5 relative z-10 w-full lg:w-[320px]" style={{ '--reveal-y': "18px" }}>
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-line overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="px-4 py-3 border-b border-line bg-slate-50/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
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
                    className="lucide lucide-table2 w-4 h-4 text-success"
                  >
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                  </svg>
                  {" "}
                  <span className="font-bold text-[13px] text-ink">Updated CRM</span>
                </div>
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Output</span>
              </div>
              {" "}
              <div className="p-4 bg-white space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-medium text-muted uppercase tracking-wide">Device Feedback</span>
                  <span className="inline-flex items-center gap-1 text-[12px] font-medium text-success bg-successSoft px-2 py-0.5 rounded">
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
                      className="lucide lucide-circle-check w-3 h-3"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    {" Loves camera"}
                  </span>
                </div>
                {" "}
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-medium text-muted uppercase tracking-wide">Current Issues</span>
                  <span className="inline-block text-[11px] font-medium text-ink2">None reported</span>
                </div>
                {" "}
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-medium text-muted uppercase tracking-wide">Upsell Intent</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-100/50">AirPods Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
