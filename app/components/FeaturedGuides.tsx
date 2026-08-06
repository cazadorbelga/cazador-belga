import SectionTitle from "./ui/SectionTitle";
import { guides } from "@/app/data/guides";
import GuideCard from "./GuideCard";
type FeaturedGuidesProps = {
  title?: string;
  description?: string;
};

export default function FeaturedGuides({
  title,
  description,
}: FeaturedGuidesProps) {
  return (
    <section className="bg-gray-50 pt-6 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {title && <SectionTitle title={title} description={description} />}

        <div
          className={`grid gap-8 lg:grid-cols-3 ${title ? "mt-16" : "mt-4"}`}
        >
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  );
}
