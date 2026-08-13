import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import GuideCard from "../components/GuideCard";
import { guides } from "../data/guides";
import { articles } from "../data/articles";
import { getAllTags } from "../data/tagUtils";

type TagsPageProps = {
  searchParams: Promise<{
    tag?: string;
  }>;
};

const familyLabels: Record<string, string> = {
  animaux: "Animaux",
  administratif: "Administratif",
  materiel: "Matériel",
  lieux: "Lieux",
  maladies: "Maladies",
  gestion: "Gestion",
  environnement: "Environnement",
  politique: "Politique",
  modalites: "Modalités de chasse",
  typeArticle: "Type de contenu",
  autres: "Autres",
};

export default async function TagsPage({ searchParams }: TagsPageProps) {
  const { tag } = await searchParams;

  const activeTags = getAllTags();

  const filteredGuides = tag
    ? guides.filter((guide) => guide.tags.includes(tag))
    : [];

  const filteredArticles = tag
    ? articles.filter((article) => article.tags.includes(tag))
    : [];

  const hasResults = filteredGuides.length > 0 || filteredArticles.length > 0;

  const tagsByFamily = activeTags.reduce<Record<string, typeof activeTags>>(
    (groups, activeTag) => {
      if (!groups[activeTag.family]) {
        groups[activeTag.family] = [];
      }

      groups[activeTag.family].push(activeTag);

      return groups;
    },
    {},
  );

  return (
    <main className="pb-20">
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-6 pt-36 pb-14">
        <Breadcrumb
          items={[{ label: "Accueil", href: "/" }, { label: "Tags" }]}
        />

        {tag ? (
          <>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              Contenus sur « {tag} »
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Retrouvez tous nos guides et articles consacrés à ce sujet.
            </p>

            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 shadow-sm">
              <span className="rounded-full bg-green-700 px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
                {tag}
              </span>

              <Link
                href="/tags"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition hover:text-red-600"
              >
                <span className="text-lg leading-none">×</span>
                Retirer
              </Link>
            </div>
          </>
        ) : (
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
            Sujets
          </h1>
        )}
      </section>

      {/* LISTE DES TAGS */}
      {!tag ? (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(tagsByFamily).map(([family, familyTags]) => (
                <section
                  key={family}
                  className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Titre de famille */}
                  <div className="mb-6 flex items-center gap-3">
                    <span className="h-7 w-1 rounded-full bg-green-700" />

                    <h2 className="text-xl font-bold tracking-tight text-gray-900">
                      {familyLabels[family] ?? family}
                    </h2>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {familyTags
                      .sort((a, b) => a.name.localeCompare(b.name, "fr"))
                      .map((activeTag) => (
                        <Link
                          key={activeTag.name}
                          href={`/tags?tag=${encodeURIComponent(
                            activeTag.name,
                          )}`}
                          className="group inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-green-200 hover:bg-green-50 hover:text-green-800 hover:shadow-md"
                        >
                          <span>{activeTag.name}</span>

                          <span className="text-xs font-semibold text-gray-400 transition group-hover:text-green-600">
                            {activeTag.count}
                          </span>
                        </Link>
                      ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* RÉSULTATS DU FILTRE */
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            {!hasResults ? (
              <div className="rounded-3xl border border-gray-100 bg-white px-6 py-20 text-center shadow-sm">
                <p className="text-lg text-gray-600">
                  Aucun contenu ne correspond à ce tag pour le moment.
                </p>
              </div>
            ) : (
              <div className="space-y-16">
                {/* GUIDES */}
                {filteredGuides.length > 0 && (
                  <section>
                    <div className="mb-8 flex items-center gap-3">
                      <span className="h-8 w-1 rounded-full bg-green-700" />

                      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Guides
                      </h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                      {filteredGuides.map((guide) => (
                        <GuideCard key={guide.slug} guide={guide} />
                      ))}
                    </div>
                  </section>
                )}

                {/* ARTICLES */}
                {filteredArticles.length > 0 && (
                  <section>
                    <div className="mb-8 flex items-center gap-3">
                      <span className="h-8 w-1 rounded-full bg-green-700" />

                      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Articles
                      </h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                      {filteredArticles.map((article) => (
                        <Link
                          key={article.slug}
                          href={article.link}
                          className="group h-full"
                        >
                          <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="relative h-64 overflow-hidden">
                              <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="object-cover transition duration-500 group-hover:scale-105"
                              />
                            </div>

                            <div className="flex flex-1 flex-col p-8">
                              <div className="flex flex-wrap gap-2">
                                {article.tags.slice(0, 3).map((articleTag) => (
                                  <span
                                    key={articleTag}
                                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
                                  >
                                    {articleTag}
                                  </span>
                                ))}
                              </div>

                              <span className="mt-5 text-sm text-gray-500">
                                {article.readingTime} de lecture
                              </span>

                              <h3 className="mt-3 text-2xl font-semibold leading-tight text-gray-900">
                                {article.title}
                              </h3>

                              <p className="mt-4 line-clamp-3 text-base leading-7 text-gray-600">
                                {article.description}
                              </p>

                              <span className="mt-auto pt-8 font-semibold text-green-700">
                                Lire l'article →
                              </span>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
