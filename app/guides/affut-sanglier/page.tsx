import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb";
import GuideHeader from "@/app/components/GuideHeader";
import GuideHeroImage from "@/app/components/GuideHeroImage";
import TableOfContents from "@/app/components/TableOfContents";
import { guides } from "@/app/data/guides";
export default function GuidePermis() {
  const guide = guides.find((guide) => guide.slug === "affut-sanglier");

  if (!guide) {
    return null;
  }
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Affût au sanglier" },
        ]}
      />
      <GuideHeader
        category="Guide"
        title="Réussir un affût au sanglier en Espagne"
        description="Préparez efficacement vos sorties à l'affût au sanglier grâce à des conseils pratiques issus du terrain."
        author="Simon Leroy"
        readingTime="9 min"
        date="Août 2026"
        tags={guide.tags}
      />
      <GuideHeroImage
        src="/images/articles/affut-sanglier.jpg"
        alt="Affût au sanglier"
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
        L'affût au sanglier est l'une des méthodes de chasse les plus
        passionnantes en Espagne. Bien choisir son poste, comprendre les
        habitudes des animaux et tenir compte du vent sont des éléments
        essentiels pour réussir. Dans ce guide, je partage les bases ainsi que
        les enseignements tirés de mes propres sorties.
      </p>
    </main>
  );
}
