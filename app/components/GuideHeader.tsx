type GuideHeaderProps = {
  category: string;
  title: string;
  description: string;
  author: string;
  readingTime: string;
  date: string;
};

export default function GuideHeader({
  category,
  title,
  description,
  author,
  readingTime,
  date,
}: GuideHeaderProps) {
  return (
    <header className="mb-16">
      <span className="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
        {category}
      </span>

      <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight lg:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-600">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
        <span>👤 {author}</span>
        <span>📅 Mis à jour : {date}</span>
        <span>⏱️ {readingTime} de lecture</span>
      </div>
    </header>
  );
}
