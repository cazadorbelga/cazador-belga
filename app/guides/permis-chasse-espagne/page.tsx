import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb";
import GuideHeader from "@/app/components/GuideHeader";
import GuideHeroImage from "@/app/components/GuideHeroImage";
import TableOfContents from "@/app/components/TableOfContents";
import GuideNotice from "@/app/components/GuideNotice";
import GuideSources from "@/app/components/GuideSources";
import GuideRelated from "@/app/components/GuideRelated";
import GuideSection from "@/app/components/GuideSection";

export default function GuidePermis() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-36 pb-20">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Permis de chasse" },
        ]}
      />
      <GuideHeader
        category="Guide"
        title="Comment obtenir son permis de chasse en Espagne"
        description="Toutes les étapes expliquées simplement pour obtenir votre permis de chasse espagnol."
        author="Simon Leroy"
        readingTime="5 min"
        date="Août 2026"
      />
      <GuideHeroImage
        src="/images/articles/permis.jpg"
        alt="Permis de chasse espagnol"
      />

      <GuideNotice>
        Ce guide est basé sur mon expérience personnelle lors de l'obtention de
        mon permis de chasse en Communauté valencienne en 2023. J'y partage les
        démarches que j'ai suivies, les difficultés que j'ai rencontrées et les
        conseils que j'aurais aimé connaître avant de commencer. Les
        informations sont complétées par les sources officielles lorsque cela
        est nécessaire.
      </GuideNotice>
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

      <GuideSection id="introduction" title="Introduction">
        <p className="mt-6 leading-8 text-gray-700">
          Obtenir son permis de chasse en Espagne est souvent perçu comme
          compliqué lorsqu'on est francophone. Pourtant, avec les bonnes
          informations et un peu de préparation, les démarches sont relativement
          simples.
        </p>
      </GuideSection>
      <GuideRelated
        guides={[
          {
            title: "Obtenir une licence d'armes en Espagne",
            href: "/guides/licence-armes",
          },
          {
            title: "Trouver un territoire de chasse",
            href: "/guides/territoire-chasse",
          },
        ]}
      />
      <GuideSources
        sources={[
          {
            title: "Federación de Caza de la Comunidad Valenciana",
            url: "https://www.fccv.es/",
          },
        ]}
      />
    </main>
  );
}
