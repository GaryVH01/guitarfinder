import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl">Error 404</h1>
      <p>Page not found</p>
      <p>
        Go back to <Link href="/">Homepage</Link>
      </p>
    </main>
  );
}
