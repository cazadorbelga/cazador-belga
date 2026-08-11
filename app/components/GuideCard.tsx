import Image from "next/image";
import Link from "next/link";

type Guide = {
  title: string;
  image: string;
  link: string;
  readingTime: string;
  tags: string[];
};

type GuideCardProps = {
  guide: Guide;
};

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <Link href={guide.link} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative h-64">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition duration-500 hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col p-8">
          <span className="text-sm text-gray-500">
            {guide.readingTime} de lecture
          </span>

          <h3 className="mt-3 text-2xl font-semibold leading-tight">
            {guide.title}
          </h3>

          <span className="mt-auto pt-8 font-semibold text-green-700">
            Lire le guide →
          </span>
        </div>
      </article>
    </Link>
  );
}
