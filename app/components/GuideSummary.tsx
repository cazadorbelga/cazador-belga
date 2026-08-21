type GuideSummaryProps = {
  items: string[];
  title?: string;
};

export default function GuideSummary({
  items,
  title = "À retenir",
}: GuideSummaryProps) {
  return (
    <section className="my-12 rounded-2xl border border-green-200 bg-green-50 p-8">
      <h2 className="text-xl font-bold text-green-900">📌 {title}</h2>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-gray-700">
            <span>✅</span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
