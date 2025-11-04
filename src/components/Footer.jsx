export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200/60 text-sm text-neutral-600 dark:text-neutral-400 dark:border-neutral-800">
      <div className="h-px w-full bg-gradient-to-r from-[var(--accent)]/40 via-transparent to-[var(--accent)]/40" />
      <div className="container mx-auto max-w-6xl py-8 px-4 sm:px-6 safe-x safe-bottom">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs sm:text-sm opacity-70">© {year} Shanthan Reddy Singadi. Built with Next.js + Tailwind.</div>
          <div className="flex items-center gap-2">
            <a href="https://github.com/ShanthanReddy571" target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.79-1.34-1.79-1.1-.75.08-.74.08-.74 1.22.08 1.86 1.25 1.86 1.25 1.08 1.84 2.82 1.31 3.51 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.48-1.34-5.48-5.98 0-1.32 .47-2.39 1.24-3.23-.12-.31-.54-1.56 .12-3.25 0 0 1.02-.33 3.34 1.23a11.6 11.6 0 0 1 6.08 0c2.31-1.56 3.33-1.23 3.33-1.23 .66 1.69 .24 2.94 .12 3.25 .77 .84 1.23 1.91 1.23 3.23 0 4.65-2.81 5.66-5.49 5.97 .43 .37 .81 1.1 .81 2.22v3.3c0 .32 .21 .69 .82 .58A12 12 0 0 0 12 .5Z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/shanthan-reddy-b503901b5/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.83v2.18h.05c.53-1 1.84-2.18 3.79-2.18 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.81V24h-4V8z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/shantan_reddy_/" target="_blank" rel="noreferrer" aria-label="Instagram" className="icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
              </svg>
            </a>
            <a href="mailto:shanthanreddy571@gmail.com" aria-label="Email" className="icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01L12 13l9-5.99V7H3zm0 2.236V17h18V9.236l-8.553 5.693a2 2 0 0 1-2.894 0L3 9.236z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
