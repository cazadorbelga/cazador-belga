"use client";

import { useEffect, useState } from "react";

type TableOfContentsProps = {
  items: {
    id: string;
    title: string;
  }[];
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveId(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="mb-12 lg:sticky lg:top-32 lg:w-56 lg:self-start">
      <nav aria-label="Sommaire du guide">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-700">
          Sommaire
        </p>

        <div className="relative">
          {/* Ligne verticale du parcours */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />

          <ol className="relative space-y-1">
            {items.map((item, index) => {
              const isActive = activeId === item.id;
              const activeIndex = items.findIndex(
                (currentItem) => currentItem.id === activeId,
              );
              const isCompleted = index < activeIndex;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`group flex items-center gap-3 rounded-lg py-2 pl-0 pr-2 text-sm transition-all ${
                      isActive
                        ? "font-semibold text-green-700"
                        : isCompleted
                          ? "text-gray-400"
                          : "text-gray-500 hover:text-green-700"
                    }`}
                  >
                    <span
                      className={`relative z-10 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border-2 bg-white text-[8px] transition-all ${
                        isActive
                          ? "border-green-700 bg-green-700 text-white"
                          : isCompleted
                            ? "border-green-300"
                            : "border-gray-300 group-hover:border-green-500"
                      }`}
                    >
                      {isCompleted ? "✓" : ""}
                    </span>

                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </aside>
  );
}
