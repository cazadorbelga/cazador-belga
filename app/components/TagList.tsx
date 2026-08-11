"use client";

import Link from "next/link";
import { useState } from "react";

type TagListProps = {
  tags?: string[];
};

export default function TagList({ tags = [] }: TagListProps) {
  const [showAllTags, setShowAllTags] = useState(false);

  if (tags.length === 0) {
    return null;
  }

  const visibleTags = showAllTags ? tags : tags.slice(0, 3);

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      {visibleTags.map((tag) => (
        <Link
          key={tag}
          href={`/guides?tag=${encodeURIComponent(tag)}`}
          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 transition hover:border-green-200 hover:bg-green-50 hover:text-green-700"
        >
          {tag}
        </Link>
      ))}

      {tags.length > 3 && (
        <button
          type="button"
          onClick={() => setShowAllTags(!showAllTags)}
          className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-50"
        >
          {showAllTags ? "−" : `+${tags.length - 3}`}
        </button>
      )}
    </div>
  );
}
