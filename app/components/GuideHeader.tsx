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
      <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
        {category}
      </p>

      <h1 className="mt-5 max-w-4xl text-6xl font-extrabold leading-tight tracking-tight">
        {title}
      </h1>

      <p className="mt-10 max-w-2xl text-xl leading-9 text-gray-600">
        {description}
      </p>

      <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
        <span>✍️ {author}</span>

        <span>🕒 {readingTime}</span>

        <span>📅 {date}</span>
      </div>
    </header>
  );
}
