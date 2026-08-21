import { articles } from "./articles";
import { guides } from "./guides";
import { tagFamilies, tagTranslations, type TagId } from "./tags";

export type ActiveTag = {
  id: TagId;
  name: string;
  count: number;
  family: string;
};

export function getAllTags(locale: "fr" | "es" | "en" = "fr"): ActiveTag[] {
  const counts = new Map<TagId, number>();

  for (const guide of guides) {
    for (const tag of guide.tags as TagId[]) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  for (const article of articles) {
    for (const tag of article.tags as TagId[]) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  const result: ActiveTag[] = [];

  for (const [id, count] of counts) {
    const family =
      Object.entries(tagFamilies).find(([, tags]) => tags.includes(id))?.[0] ??
      "autres";

    result.push({
      id,
      name: tagTranslations[id][locale],
      count,
      family,
    });
  }

  return result;
}
