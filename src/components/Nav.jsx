"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="app-navbar sticky top-0 z-40">
      <nav className="container mx-auto max-w-6xl flex items-center gap-3 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Go home"><Logo /></Link>
          <div className="hidden sm:block leading-tight">
            <Link href="/" className="font-semibold tracking-tight">Shanthan Reddy Singadi</Link>
            {/* <div className="text-xs text-neutral-500 dark:text-neutral-400">Full-Stack / Next.js Developer</div> */}
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3 mx-auto">
          {links.map(({ href, label }) => {
            const active = pathname?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`link-pill text-sm ${
                  active
                    ? "link-pill--active"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                }`}
              >
                <span className={`link-underline ${active ? 'link-underline--active' : ''}`}>{label}</span>
              </Link>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <button aria-label="Open menu" className="icon-btn sm:hidden" onClick={() => setOpen(true)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="card absolute right-0 top-0 h-full w-72 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Logo />
                <span className="font-semibold">Menu</span>
              </div>
              <button aria-label="Close menu" className="icon-btn" onClick={() => setOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="chip">
                  {label}
                </Link>
              ))}
            </div>
            {/* Social icons removed from mobile menu per request */}
          </div>
        </div>
      )}
    </header>
  );
}
