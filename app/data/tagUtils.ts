import { articles } from "./articles";
import { guides } from "./guides";
import { tagFamilies } from "./tags";

export type ActiveTag = {
  name: string;
  count: number;
  family: string;
};

export function getAllTags(): ActiveTag[] {
  const counts = new Map<string, number>();

  for (const guide of guides) {
    for (const tag of guide.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  for (const article of articles) {
    for (const tag of article.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  const result: ActiveTag[] = [];

  for (const [name, count] of counts) {
    const family =
      Object.entries(tagFamilies).find(([, tags]) =>
        tags.includes(name),
      )?.[0] ?? "autres";

    result.push({
      name,
      count,
      family,
    });
  }

  return result;
}
