import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb";
import GuideHeader from "@/app/components/GuideHeader";
import GuideHeroImage from "@/app/components/GuideHeroImage";
import TableOfContents from "@/app/components/TableOfContents";

export default function GuidePermis() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Breadcrumb currentPage="Permis de chasse" />
      <GuideHeader
        category="Guide"
        title="Comment obtenir son permis de chasse en Espagne"
        description="Toutes les étapes expliquées simplement pour obtenir votre permis de chasse espagnol lorsque vous êtes francophone."
        author="Simon Leroy"
        readingTime="5 min"
        date="Août 2026"
      />
      <GuideHeroImage
        src="/images/articles/permis.jpg"
        alt="Permis de chasse espagnol"
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
        Obtenir son permis de chasse en Espagne est souvent perçu comme
        compliqué lorsqu'on est francophone. Pourtant, avec les bonnes
        informations et un peu de préparation, les démarches sont relativement
        simples.
      </p>
    </main>
  );
}
