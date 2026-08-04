import { FileText, MapPinned, Compass, Video } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
export default function WhyUs() {
  const cards = [
    {
      icon: FileText,
      title: "Administratif simplifié",
      text: "Permis, licences, assurances et démarches expliqués étape par étape.",
    },
    {
      icon: MapPinned,
      title: "Territoires de chasse",
      text: "Découvrez où chasser le sanglier, le cerf, le chevreuil ou la perdrix.",
    },
    {
      icon: Compass,
      title: "Expérience terrain",
      text: "Des conseils issus de mes propres sorties de chasse en Espagne.",
    },
    {
      icon: Video,
      title: "Vidéos & matériel",
      text: "Tests de matériel, vidéos et retours d'expérience sans langue de bois.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Pourquoi Cazador Belga ?"
          description="Toutes les informations essentielles pour préparer votre chasse en Espagne, réunies dans un seul endroit."
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
