import TagList from "./TagList";

type GuideHeaderProps = {
  category: string;
  title: string;
  description: string;
  author: string;
  readingTime: string;
  date: string;
  tags: string[];
  locale?: "fr" | "es" | "en";
  updatedLabel?: string;
  readingLabel?: string;
  className?: string;
};

export default function GuideHeader({
  category,
  title,
  description,
  author,
  readingTime,
  date,
  tags,

  locale = "fr",
  updatedLabel = "Dernière mise à jour",
  readingLabel = "de lecture",
  className = "",
}: GuideHeaderProps) {
  return (
    <header className={`mb-16 ${className}`}>
      <h1 className="max-w-4xl text-5xl font-bold tracking-tight lg:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-600">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
        <span>👤 {author}</span>

        <span>
          📅 {updatedLabel} : {date}
        </span>

        <span>
          ⏱️ {readingTime} {readingLabel}
        </span>
      </div>

      <TagList tags={tags} locale={locale} />
    </header>
  );
}
