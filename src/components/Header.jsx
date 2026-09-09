import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#why', label: 'Why Outpero' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#compare', label: 'Compare' },
  { href: '#faq', label: 'FAQ' },
];

const ArrowRight = ({ className }) => (
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
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function Header() {
  // The captured snapshot was frozen at scrollY = 0: the header is transparent
  // and the progress bar is at scaleX(0). Both are scroll-driven in the real page.
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      setScrolled(y > 10);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const headerStyle = scrolled
    ? {
        background: 'rgba(253,252,248,0.85)',
        borderColor: 'rgb(234 231 224)',
        backdropFilter: 'saturate(180%) blur(12px)',
      }
    : { background: 'rgba(253,252,248,0)', borderColor: 'transparent', backdropFilter: 'none' };

  return (
    <>
      <div className="sticky top-0 z-50 w-full flex flex-col">
        <header className="border-b transition-colors w-full" style={headerStyle}>
          <div className="wrap flex items-center justify-between h-14 sm:h-[72px]">
            <a href="#top" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <img src="/ai-employee/logo.png" alt="Outpero" className="h-8 sm:h-9 w-auto" />
            </a>
            {" "}
            <nav className="hidden md:flex items-center gap-7">
              <a href="#how" className="text-[14px] font-semibold text-ink2 hover:text-purple-600 transition-colors">How it works</a>
              <a href="#why" className="text-[14px] font-semibold text-ink2 hover:text-purple-600 transition-colors">Why Outpero</a>
              {" "}
              <a href="#pricing" className="text-[14px] font-semibold text-ink2 hover:text-purple-600 transition-colors">Pricing</a>
              <a href="#compare" className="text-[14px] font-semibold text-ink2 hover:text-purple-600 transition-colors">Compare</a>
              <a href="#faq" className="text-[14px] font-semibold text-ink2 hover:text-purple-600 transition-colors">FAQ</a>
              {" "}
              <a
                href="https://docs.outpero.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold text-ink2 hover:text-purple-600 transition-colors"
              >
                Docs
              </a>
            </nav>
            {" "}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://app.outpero.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold text-ink2 hover:text-purple-600 transition-colors"
              >
                Sign in
              </a>
              <button
                type="button"
                onClick={() => window.open('https://app.outpero.com', '_blank', 'noopener,noreferrer')}
                className="group inline-flex items-center justify-center gap-2 font-semibold transition-all whitespace-nowrap border select-none text-[14.5px] px-5 py-[11px] rounded-xl bg-purple-600 text-white border-purple-600 shadow-purple hover:bg-purple-700 hover:-translate-y-0.5 !px-[18px] !py-2.5 !rounded-xl"
              >
                Start free
                <ArrowRight className="lucide lucide-arrow-right w-[17px] h-[17px] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            {" "}
            <button
              className="md:hidden p-2 -mr-2 text-ink"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              type="button"
            >
              {menuOpen ? (
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
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
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
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </header>
        {menuOpen ? (
          <div className="md:hidden border-b border-line bg-white/95 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
            <nav className="wrap flex flex-col py-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-[15px] font-semibold text-ink2 hover:text-purple-600 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://docs.outpero.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-[15px] font-semibold text-ink2 hover:text-purple-600 transition-colors"
              >
                Docs
              </a>
              <a
                href="https://app.outpero.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-[15px] font-semibold text-ink2 hover:text-purple-600 transition-colors"
              >
                Sign in
              </a>
              <a
                href="https://app.outpero.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="group mt-2 mb-1 inline-flex items-center justify-center gap-2 font-semibold transition-all whitespace-nowrap border select-none text-[14.5px] px-5 py-[11px] rounded-xl bg-purple-600 text-white border-purple-600 shadow-purple hover:bg-purple-700"
              >
                Start free
                <ArrowRight className="lucide lucide-arrow-right w-[17px] h-[17px] transition-transform group-hover:translate-x-1" />
              </a>
            </nav>
          </div>
        ) : null}
      </div>
      <div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-purple-500"
        style={{ transform: `scaleX(${progress})` }}
      />
    </>
  );
}
