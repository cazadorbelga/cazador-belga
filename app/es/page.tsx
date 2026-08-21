import Link from "next/link";

export default function SpanishHomePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 pb-24 pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
          Cazador Belga
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Caza en España
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Guías, experiencias de campo y contenidos sobre la caza en España,
          desde la perspectiva de un cazador belga establecido en Valencia.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            🇫🇷 Français
          </Link>

          <span className="rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white">
            🇪🇸 Español
          </span>

          <Link
            href="/en"
            className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            🇬🇧 English
          </Link>
        </div>
      </div>
    </main>
  );
}
