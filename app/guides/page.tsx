import FeaturedGuides from "../components/FeaturedGuides";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";

type GuidesPageProps = {
  searchParams: Promise<{
    tag?: string;
  }>;
};

export default async function GuidesPage({ searchParams }: GuidesPageProps) {
  const { tag } = await searchParams;

  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-6 pt-36 pb-4">
        <Breadcrumb
          items={[{ label: "Accueil", href: "/" }, { label: "Guides" }]}
        />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
          Tous nos guides de chasse en Espagne
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Préparez votre chasse en Espagne grâce à nos guides pratiques :
          permis, réglementation, territoires de chasse, techniques, matériel et
          conseils issus du terrain.
        </p>

        {tag && (
          <div className="mt-8 flex items-center gap-3">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
              Filtre : {tag}
            </span>

            <Link
              href="/guides"
              className="text-sm font-medium text-green-700 hover:underline"
            >
              Effacer le filtre
            </Link>
          </div>
        )}
      </section>

      <FeaturedGuides selectedTag={tag} />
    </main>
  );
}
