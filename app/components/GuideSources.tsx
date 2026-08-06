type GuideSourcesProps = {
  sources: {
    title: string;
    url: string;
  }[];
};

export default function GuideSources({ sources }: GuideSourcesProps) {
  return (
    <section className="mt-16 border-t pt-10">
      <h2 className="text-2xl font-bold">Sources officielles</h2>

      <ul className="mt-6 space-y-3">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline"
            >
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
