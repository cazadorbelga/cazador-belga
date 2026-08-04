import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./ui/SectionTitle";
import { guides } from "@/app/data/guides";

export default function FeaturedGuides() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Nos guides incontournables"
          description="Commencez par les guides les plus consultés par les chasseurs souhaitant découvrir la chasse en Espagne."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link href={guide.link} key={guide.title}>
              <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-64">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-8">
                  <span className="text-sm text-gray-500">
                    {guide.readingTime} de lecture
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold">{guide.title}</h3>

                  <span className="mt-8 inline-block font-semibold text-green-700">
                    Lire le guide →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
