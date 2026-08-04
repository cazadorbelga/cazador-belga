type TableOfContentsProps = {
  items: {
    id: string;
    title: string;
  }[];
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <aside className="my-16 w-fit min-w-[340px] rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">📑 Sommaire</h2>
      <div className="mb-6 h-px bg-gray-200"></div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-center rounded-lg px-4 py-3 transition hover:bg-green-50"
            >
              <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                {index + 1}
              </span>

              <span className="font-medium text-gray-700 group-hover:text-green-700">
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
