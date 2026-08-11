import SectionTitle from "./ui/SectionTitle";
import { guides } from "@/app/data/guides";
import GuideCard from "./GuideCard";

type FeaturedGuidesProps = {
  title?: string;
  description?: string;
  selectedTag?: string;
};

export default function FeaturedGuides({
  title,
  description = "",
  selectedTag,
}: FeaturedGuidesProps) {
  const filteredGuides = selectedTag
    ? guides.filter((guide) => guide.tags.includes(selectedTag))
    : guides;

  return (
    <section className="bg-gray-50 pt-6 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {title && <SectionTitle title={title} description={description} />}

        <div
          className={`grid gap-8 lg:grid-cols-3 ${title ? "mt-16" : "mt-4"}`}
        >
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-lg text-gray-600">
                Aucun guide ne correspond à ce filtre pour le moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
