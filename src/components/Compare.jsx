export default function Compare() {
  return (
    <section id="compare" className="py-[clamp(32px,4.5vw,62px)] bg-[#FAFAFA] border-y border-line">
      <div className="wrap max-w-[820px] mx-auto">
        <div className="max-w-[620px] mx-auto text-center mb-8">
          <div className="reveal" style={{ '--reveal-y': "18px" }}>
            <h2 className="text-[clamp(25px,3.5vw,40px)] font-bold text-ink leading-[1.08] tracking-tight font-display">
              {"Same job. "}
              <span className="grad-text">Very different math.</span>
            </h2>
            {" "}
            <p className="mt-3 text-[15px] text-ink2 leading-relaxed max-w-[46ch] mx-auto">One-tenth the salary. Calls in seconds, not hours. Live in minutes, not weeks.</p>
          </div>
        </div>
        {" "}
        <div className="flex items-center justify-center gap-1.5 mb-2 text-[12px] font-semibold text-purple-600 sm:hidden">
          <span>← swipe to see all columns →</span>
        </div>
        {" "}
        <div className="reveal relative" style={{ '--reveal-y': "18px" }}>
          <div className="overflow-x-auto hide-scroll -mx-[22px] px-[22px] sm:mx-0 sm:px-0">
            <div className="min-w-[620px] rounded-[26px] overflow-hidden bg-white border border-line shadow-card">
              <table className="w-full border-collapse">
                <colgroup>
                  <col className="w-[32%]" />
                  {" "}
                  <col className="w-[28%]" />
                  {" "}
                  <col className="w-[20%]" />
                  {" "}
                  <col className="w-[20%]" />
                </colgroup>
                {" "}
                <thead>
                  <tr>
                    <th className="text-left px-6 py-5 align-bottom text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Compare</th>
                    {" "}
                    <th className="px-4 py-5 text-center align-bottom bg-purple-50 border-x border-purple-200/60">
                      <div className="text-[16px] font-extrabold text-purple-700 font-display">Outpero</div>
                      {" "}
                      <div className="inline-block mt-1.5 text-[9px] font-bold text-white bg-purple-600 uppercase tracking-[0.12em] px-2 py-[3px] rounded-full">Recommended</div>
                    </th>
                    {" "}
                    <th className="px-4 py-5 text-center align-bottom text-[14px] font-bold text-ink">Telecaller</th>
                    {" "}
                    <th className="px-4 py-5 text-center align-bottom text-[14px] font-bold text-ink">Generic AI</th>
                  </tr>
                </thead>
                {" "}
                <tbody>
                  <tr className="reveal-fade border-t border-line">
                    <td className="px-6 py-4 text-[14px] font-semibold text-ink">Cost to hire</td>
                    {" "}
                    <td className="px-4 py-4 bg-purple-50 border-x border-purple-200/60">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-[15px] h-[15px] text-success shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {" "}
                        <span className="text-[14px] font-bold text-purple-700 tab-nums">From ₹3.5/min</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x w-[15px] h-[15px] text-danger/55 shrink-0"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">₹18,000+/mo</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x w-[15px] h-[15px] text-danger/55 shrink-0"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">₹50,000+ setup</span>
                      </div>
                    </td>
                  </tr>
                  {" "}
                  <tr className="reveal-fade reveal-d1 border-t border-line">
                    <td className="px-6 py-4 text-[14px] font-semibold text-ink">Speed to lead</td>
                    {" "}
                    <td className="px-4 py-4 bg-purple-50 border-x border-purple-200/60">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-[15px] h-[15px] text-success shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {" "}
                        <span className="text-[14px] font-bold text-purple-700 tab-nums">{"< 30 seconds"}</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x w-[15px] h-[15px] text-danger/55 shrink-0"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">2–4 hours</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-minus w-[15px] h-[15px] text-muted/70 shrink-0"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">5–10 mins</span>
                      </div>
                    </td>
                  </tr>
                  {" "}
                  <tr className="reveal-fade reveal-d2 border-t border-line">
                    <td className="px-6 py-4 text-[14px] font-semibold text-ink">Time to deploy</td>
                    {" "}
                    <td className="px-4 py-4 bg-purple-50 border-x border-purple-200/60">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-[15px] h-[15px] text-success shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {" "}
                        <span className="text-[14px] font-bold text-purple-700 tab-nums">2 minutes</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x w-[15px] h-[15px] text-danger/55 shrink-0"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">2–4 weeks</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x w-[15px] h-[15px] text-danger/55 shrink-0"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">1–2 weeks</span>
                      </div>
                    </td>
                  </tr>
                  {" "}
                  <tr className="reveal-fade reveal-d3 border-t border-line">
                    <td className="px-6 py-4 text-[14px] font-semibold text-ink">Native Multilingual</td>
                    {" "}
                    <td className="px-4 py-4 bg-purple-50 border-x border-purple-200/60">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-[15px] h-[15px] text-success shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {" "}
                        <span className="text-[14px] font-bold text-purple-700 tab-nums">Fluent</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-[15px] h-[15px] text-success shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">Yes</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x w-[15px] h-[15px] text-danger/55 shrink-0"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">Rarely</span>
                      </div>
                    </td>
                  </tr>
                  {" "}
                  <tr className="reveal-fade reveal-d4 border-t border-line">
                    <td className="px-6 py-4 text-[14px] font-semibold text-ink">Attrition & leave</td>
                    {" "}
                    <td className="px-4 py-4 bg-purple-50 border-x border-purple-200/60">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-[15px] h-[15px] text-success shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {" "}
                        <span className="text-[14px] font-bold text-purple-700 tab-nums">0 days</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x w-[15px] h-[15px] text-danger/55 shrink-0"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">Frequent</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-[15px] h-[15px] text-success shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">0 days</span>
                      </div>
                    </td>
                  </tr>
                  {" "}
                  <tr className="reveal-fade reveal-d5 border-t border-line">
                    <td className="px-6 py-4 text-[14px] font-semibold text-ink">Memory & notes</td>
                    {" "}
                    <td className="px-4 py-4 bg-purple-50 border-x border-purple-200/60">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-[15px] h-[15px] text-success shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {" "}
                        <span className="text-[14px] font-bold text-purple-700 tab-nums">Perfect</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-minus w-[15px] h-[15px] text-muted/70 shrink-0"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">Spotty</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-[15px] h-[15px] text-success shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">Yes</span>
                      </div>
                    </td>
                  </tr>
                  {" "}
                  <tr className="reveal-fade reveal-d5 border-t border-line">
                    <td className="px-6 py-4 text-[14px] font-semibold text-ink">Remembers callers</td>
                    {" "}
                    <td className="px-4 py-4 bg-purple-50 border-x border-purple-200/60">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check w-[15px] h-[15px] text-success shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {" "}
                        <span className="text-[14px] font-bold text-purple-700 tab-nums">Instantly</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x w-[15px] h-[15px] text-danger/55 shrink-0"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">Rarely</span>
                      </div>
                    </td>
                    {" "}
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x w-[15px] h-[15px] text-danger/55 shrink-0"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        {" "}
                        <span className="text-[13px] font-medium text-muted2 tab-nums">No context</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {" "}
          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-10 bg-gradient-to-l from-[#FAF8F5] to-transparent sm:hidden" />
        </div>
        {" "}
        <div className="reveal reveal-d1 mt-4 flex justify-center" style={{ '--reveal-y': "18px" }}>
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-line shadow-sm px-5 py-2.5">
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
              className="lucide lucide-piggy-bank w-[18px] h-[18px] text-gold-600 shrink-0"
            >
              <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" />
              <path d="M2 9v1c0 1.1.9 2 2 2h1" />
              <path d="M16 11h.01" />
            </svg>
            {" "}
            <span className="text-[13.5px] font-semibold text-ink2">
              {"That's "}
              <span className="font-extrabold text-ink">up to ₹18,000</span>
              {" saved every month — before call-time."}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
