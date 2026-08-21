import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { articles } from "../data/articles";

type ArticlesPageProps = {
  searchParams: Promise<{
    tag?: string;
  }>;
};

export default async function ArticlesPage({
  searchParams,
}: ArticlesPageProps) {
  const { tag } = await searchParams;

  const filteredArticles = tag
    ? articles.filter((article) => article.tags.includes(tag))
    : articles;

  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-6 pt-36 pb-12">
        <Breadcrumb
          items={[{ label: "Accueil", href: "/" }, { label: "Articles" }]}
        />

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
          Articles
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Retours d'expérience, tests de matériel, analyses et réflexions autour
          de la chasse en Espagne et de son environnement.
        </p>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {tag && (
            <div className="mb-8">
              <p className="text-sm text-gray-500">
                Articles correspondant au tag :
              </p>

              <h2 className="mt-1 text-2xl font-semibold text-gray-900">
                {tag}
              </h2>
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-3">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.link}
                  className="group h-full"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Contenu */}
                    <div className="flex flex-1 flex-col p-8">
                      {/* Tags */}
                      <div className="flex h-8 items-center gap-2 overflow-hidden">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="shrink-0 whitespace-nowrap rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}

                        {article.tags.length > 2 && (
                          <span className="shrink-0 whitespace-nowrap rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500">
                            +{article.tags.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Temps de lecture */}
                      <span className="mt-5 text-sm text-gray-500">
                        {article.readingTime} de lecture
                      </span>

                      {/* Titre */}
                      <h2 className="mt-3 text-2xl font-semibold leading-tight text-gray-900">
                        {article.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-4 line-clamp-3 text-base leading-7 text-gray-600">
                        {article.description}
                      </p>

                      {/* CTA */}
                      <span className="mt-auto pt-8 font-semibold text-green-700">
                        Lire l'article →
                      </span>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <p className="text-lg text-gray-600">
                  Aucun article ne correspond à ce filtre pour le moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
