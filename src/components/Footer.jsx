export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface2/60">
      <img
        src="/ai-employee/brand-ring-mark.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 w-[320px] sm:w-[420px] h-auto opacity-[0.05] select-none"
      />
      {" "}
      <div className="wrap relative py-14">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="https://outpero.com" className="inline-block">
              <img src="/ai-employee/logo.png" alt="Outpero - India's Fastest AI Employee" className="h-10 sm:h-11 md:h-12 w-auto mb-5" />
            </a>
            {" "}
            <p className="text-[13.5px] text-ink2 max-w-[28ch] leading-relaxed">India's fastest AI employee. Calls every lead in seconds, answers 24/7 in fluent Hindi, English & regional languages.</p>
            {" "}
            <div className="mt-5 flex flex-col sm:flex-row md:flex-col items-start gap-2.5">
              <a
                href="mailto:support@outpero.com"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink2 hover:text-purple-600 transition-colors py-1"
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
                  className="lucide lucide-mail w-4 h-4 text-purple-600"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {" support@outpero.com"}
              </a>
            </div>
          </div>
          {" "}
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider text-muted mb-3.5">AI Employee</div>
            {" "}
            <ul className="space-y-2.5">
              <li>
                <a href="#how-it-works" className="text-[13.5px] text-ink2 hover:text-purple-600 transition-colors font-medium inline-block">How it works</a>
              </li>
              {" "}
              <li>
                <a href="#why-it-wins" className="text-[13.5px] text-ink2 hover:text-purple-600 transition-colors font-medium inline-block">Reliability</a>
              </li>
              {" "}
              <li>
                <a href="#pricing" className="text-[13.5px] text-ink2 hover:text-purple-600 transition-colors font-medium inline-block">Pricing</a>
              </li>
              {" "}
              <li>
                <a href="#dashboard" className="text-[13.5px] text-ink2 hover:text-purple-600 transition-colors font-medium inline-block">The dashboard</a>
              </li>
            </ul>
          </div>
          {" "}
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider text-muted mb-3.5">Legal & Support</div>
            {" "}
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://app.outpero.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] text-ink2 hover:text-purple-600 transition-colors font-medium inline-block"
                >
                  Contact Us
                </a>
              </li>
              {" "}
              <li>
                <a
                  href="https://app.outpero.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] text-ink2 hover:text-purple-600 transition-colors font-medium inline-block"
                >
                  Privacy Policy
                </a>
              </li>
              {" "}
              <li>
                <a
                  href="https://app.outpero.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] text-ink2 hover:text-purple-600 transition-colors font-medium inline-block"
                >
                  Terms of Service
                </a>
              </li>
              {" "}
              <li>
                <a
                  href="https://app.outpero.com/refund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13.5px] text-ink2 hover:text-purple-600 transition-colors font-medium inline-block"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        {" "}
        <div className="mt-6 pt-5 border-t border-line/60 flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-3">
          <span className="text-[12.5px] text-muted">
            {"📍 Headquartered in "}
            <strong className="text-ink2 font-medium">Hyderabad</strong>
            {" · Powering Telugu & English AI voice agents across Telangana & Andhra Pradesh"}
          </span>
          {" "}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Backed by</span>
            <a href="https://www.sarvam.ai" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 transition-opacity">
              <img src="/ai-employee/sarvam-logo.png" alt="Sarvam AI Startup Program" className="h-3 sm:h-3.5 w-auto" />
            </a>
            {" "}
            <a href="https://cartesia.ai" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 transition-opacity">
              <img src="/ai-employee/cartesia-logo.png" alt="Cartesia Startup Program" className="h-4 sm:h-[18px] w-auto" />
            </a>
          </div>
        </div>
        {" "}
        <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-[12.5px] text-muted flex items-center gap-3">
            <span>
              {"© "}
              2026
              {" Outpero. All rights reserved."}
            </span>
            <span className="opacity-40">•</span>
            <a href="/agency" className="hover:text-ink2 transition-colors">Agency</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
