export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex shrink-0 items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 md:h-10 md:w-10 drop-shadow-[0_0_14px_oklch(0.72_0.18_50/0.45)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="uv-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.78 0.16 55)" />
              <stop offset="50%" stopColor="oklch(0.72 0.18 50)" />
              <stop offset="100%" stopColor="oklch(0.62 0.17 45)" />
            </linearGradient>
            <linearGradient id="uv-shine" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.95 0.05 70)" />
              <stop offset="100%" stopColor="oklch(0.72 0.18 50)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="6" y="6" width="36" height="36" rx="10" fill="url(#uv-gradient)" />
          <path
            d="M17 18V28C17 31.3137 19.6863 34 23 34C26.3137 34 29 31.3137 29 28V18"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path d="M23 23L17 14H29L23 23Z" fill="white" fillOpacity="0.9" />
          <rect x="6" y="6" width="36" height="36" rx="10" fill="url(#uv-shine)" fillOpacity="0.25" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className="bg-gradient-to-r from-[oklch(0.97_0.01_80)] via-[oklch(0.72_0.18_50)] to-[oklch(0.62_0.17_45)] bg-clip-text text-lg font-semibold tracking-tight text-transparent md:text-xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Urban Vibes
        </span>
        <span
          className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.22em] text-white/55 md:text-[10px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          A Space to Connect & Celebrate
        </span>
      </div>
    </div>
  );
}
