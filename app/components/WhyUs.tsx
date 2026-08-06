import {
  ShieldCheck,
  MapPinned,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

export default function WhyUs() {
  const cards = [
    {
      icon: BadgeCheck,
      title: "Une expérience vécue",
      text: "Toutes les démarches présentées sur ce site ont été réalisées personnellement en Espagne.",
    },
    {
      icon: ShieldCheck,
      title: "Informations vérifiées",
      text: "Chaque guide est rédigé à partir de mon expérience et de sources officielles afin de vous fournir des informations fiables et à jour.",
    },
    {
      icon: MapPinned,
      title: "Pensé pour les francophones",
      text: "Les différences avec les systèmes belge, français et espagnol sont expliquées simplement, sans jargon inutile.",
    },
    {
      icon: HeartHandshake,
      title: "Un projet indépendant",
      text: "Cazador Belga est avant tout un projet de passionné, créé pour aider les chasseurs souhaitant découvrir la chasse en Espagne.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Pourquoi faire confiance à Cazador Belga ?"
          description="Des guides pratiques, basés sur une expérience réelle et des informations vérifiées, pour vous accompagner dans toutes vos démarches."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                <card.icon
                  className="text-green-700"
                  size={28}
                  strokeWidth={2.2}
                />
              </div>

              <h3 className="text-xl font-semibold">{card.title}</h3>

              <p className="mt-4 text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
