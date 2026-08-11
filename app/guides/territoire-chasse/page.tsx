import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb";
import GuideHeader from "@/app/components/GuideHeader";
import GuideHeroImage from "@/app/components/GuideHeroImage";
import TableOfContents from "@/app/components/TableOfContents";

export default function GuidePermis() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Trouver un territoire de chasse" },
        ]}
      />
      <GuideHeader
        category="Guide"
        title="Comment trouver un territoire de chasse en Espagne"
        description="Découvrez les différents types de territoires de chasse, comment trouver un territoire de chasse en Espagne et les démarches pour y chasser."
        author="Simon Leroy"
        readingTime="7 min"
        date="Août 2026"
        tags={["Espagne", "Gestion des territoires", "Administratif"]}
      />
      <GuideHeroImage
        src="/images/articles/territoire.jpg"
        alt="Territoire de chasse"
      />
      <TableOfContents
        items={[
          {
            id: "introduction",
            title: "Introduction",
          },
          {
            id: "conditions",
            title: "Conditions",
          },
          {
            id: "examen",
            title: "L'examen",
          },
          {
            id: "documents",
            title: "Documents nécessaires",
          },
        ]}
      />
      <hr className="my-12" />

      <h2 id="introduction" className="text-3xl font-bold">
        Introduction
      </h2>

      <p className="mt-6 leading-8 text-gray-700">
        Trouver un territoire de chasse en Espagne est souvent la première
        difficulté rencontrée par les chasseurs francophones. Entre les cotos de
        caza, les réserves et les différents modes de gestion, il est parfois
        difficile de savoir où commencer. Ce guide vous aide à comprendre le
        fonctionnement des territoires de chasse espagnols et à trouver celui
        qui correspond à vos attentes.
      </p>
    </main>
  );
}
