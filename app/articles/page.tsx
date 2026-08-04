import Header from "../components/Header";

export default function ComingSoonPage() {
  return (
    <>
      <Header />

      <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 pt-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold">🚧 En cours de création</h1>

          <p className="mt-6 text-xl text-gray-600">
            Cette page sera bientôt disponible.
          </p>
        </div>
      </main>
    </>
  );
}
