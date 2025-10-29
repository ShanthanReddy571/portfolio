import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl py-20 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-2 opacity-70">Sorry, we couldn’t find what you’re looking for.</p>
      <Link href="/" className="btn btn-ghost mt-6">Go home</Link>
    </div>
  );
}

