import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/theme-provider";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: {
    default: "Shanthan Reddy Singadi · Portfolio",
    template: "%s · Shanthan Reddy Singadi",
  },
  description: "Full-Stack / Next.js Developer portfolio.",
  metadataBase: new URL(baseUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Shanthan Reddy Singadi · Portfolio",
    description: "Clean, fast web apps with Next.js and TypeScript.",
    siteName: "Shanthan Reddy Singadi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanthan Reddy Singadi · Portfolio",
    description: "Clean, fast web apps with Next.js and TypeScript.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-white text-neutral-900 antialiased dark:!bg-neutral-950 dark:!text-neutral-100">
        <ThemeProvider>
          <a href="#main" className="fixed left-3 top-3 z-50 rounded-md border bg-[var(--card)] px-3 py-2 text-sm opacity-0 focus:opacity-100">Skip to content</a>
          <div className="flex min-h-dvh flex-col">
            <Nav />
            <main id="main" className="container mx-auto max-w-6xl flex-1 pt-8 pb-16 sm:pt-12 sm:pb-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
