import Link from "next/link";

type Guide = {
  title: string;
  href: string;
};

type GuideRelatedProps = {
  guides: Guide[];
  title?: string;
};

export default function GuideRelated({
  guides,
  title = "Pour aller plus loin",
}: GuideRelatedProps) {
  return (
    <section className="mt-16 border-t border-gray-200 pt-10">
      <h2 className="text-2xl font-bold">{title}</h2>

      <div className="mt-6 space-y-3">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="block font-medium text-green-700 hover:underline"
          >
            → {guide.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
